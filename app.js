(function () {
  const STORAGE_KEY = "agentGrowthWorkbench.v1";
  const SKILL_MAP = {
    L0: ["agent"],
    L1: ["prompt"],
    L2: ["rag", "tool"],
    L3: ["tool", "agent"],
    L4: ["multi"],
    L5: ["eng"],
    L6: ["eng", "tool"],
    L7: ["job"]
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function defaultState() {
    return {
      topics: {},
      stagePassed: {},
      steps: {},
      done: {},
      trendIndex: 0,
      lastTrendUpdate: null
    };
  }

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultState(), parsed);
    } catch (err) {
      console.warn("读取进度失败，使用全新进度。", err);
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function topicKey(stageId, index) {
    return `${stageId}:${index}`;
  }

  function getStageProgress(stage) {
    const total = stage.topics.length;
    const done = stage.topics.reduce((count, _, index) => {
      return state.topics[topicKey(stage.id, index)] ? count + 1 : count;
    }, 0);
    return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
  }

  function isStageComplete(stage) {
    return getStageProgress(stage).percent === 100;
  }

  function currentLevel() {
    for (const stage of CURRICULUM) {
      if (!isStageComplete(stage)) return stage.id;
    }
    return "L7 完成";
  }

  function renderHero() {
    const totalTopics = CURRICULUM.reduce((sum, stage) => sum + stage.topics.length, 0);
    const completedTopics = Object.values(state.topics).filter(Boolean).length;
    const projectCount = Object.values(state.done).filter(Boolean).length;
    const loopCount = Object.keys(state.done).filter((key) => state.done[key]).length;

    $("#completedCount").textContent = completedTopics;
    $("#projectCount").textContent = projectCount;
    $("#workLoopCount").textContent = loopCount;
    $("#levelBadge").textContent = currentLevel() === "L7 完成" ? "L7 完成" : `${currentLevel()} 起步`;

    const percent = totalTopics ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const badge = $("#levelBadge");
    badge.dataset.total = totalTopics;
    badge.title = `总学习进度 ${percent}%`;
  }

  function renderCurriculum() {
    const list = $("#curriculumList");
    list.innerHTML = "";

    CURRICULUM.forEach((stage, stageIndex) => {
      const progress = getStageProgress(stage);
      const card = document.createElement("article");
      card.className = "stage-card";
      card.dataset.stage = stage.id;

      const topicsHtml = stage.topics.map((topic, topicIndex) => {
        const key = topicKey(stage.id, topicIndex);
        const checked = state.stagePassed[stage.id] ? "checked" : "";
        return `
          <div class="topic">
            <input type="checkbox" id="${key}" data-stage="${stage.id}" data-index="${topicIndex}" ${checked} disabled />
            <label for="${key}">
              ${topic.name}
              <small>${topic.tip}</small>
            </label>
          </div>
        `;
      }).join("");

      const stageLesson = STAGE_LESSONS[stage.id] || { lessons: [], practice: "" };
      const lessonsHtml = `
        <div class="lesson-block">
          <div class="lesson-block__head">重点讲解</div>
          ${stageLesson.lessons.map((lesson) => `
            <div class="lesson-item">
              <strong>${lesson.title}</strong>
              <p>${lesson.body}</p>
            </div>
          `).join("")}
          <div class="practice">
            <strong>小练习</strong>
            <p>${stageLesson.practice}</p>
          </div>
        </div>
      `;

      card.innerHTML = `
        <div class="stage-card__head">
          <div class="stage-id">${stage.id}</div>
          <div class="stage-title">
            <h3>${stage.title}</h3>
            <p>${stage.desc}</p>
          </div>
          <div class="stage-progress">
            <strong>${progress.percent}%</strong>
            <span>${progress.done}/${progress.total}</span>
          </div>
        </div>
        <div class="stage-bar"><div class="stage-bar__fill" style="width:${progress.percent}%"></div></div>
        <div class="stage-body">
          ${lessonsHtml}
          ${topicsHtml}
          <button class="primary-btn learn-btn" data-stage="${stage.id}">${state.stagePassed[stage.id] ? "重新测验" : "开始学习并测验"}</button>
          <div class="stage-work">
            <p>对应大厂工单：${stage.workOrder.title}</p>
            <span>${stage.workOrder.deliverable}</span>
          </div>
        </div>
      `;

      card.querySelector(".stage-card__head").addEventListener("click", (event) => {
        if (event.target.closest("input")) return;
        card.classList.toggle("is-open");
      });

      list.appendChild(card);
    });

    $$(".topic input").forEach((input) => {
      input.disabled = true;
    });

    $$(".learn-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        openStageLearning(button.dataset.stage);
      });
    });
  }

  function openStageLearning(stageId) {
    const stage = CURRICULUM.find((item) => item.id === stageId);
    if (!stage) return;
    const lessons = (STAGE_LESSONS[stageId] || {}).lessons || [];
    const practice = (STAGE_LESSONS[stageId] || {}).practice || "";
    const quiz = (STAGE_QUIZZES[stageId] || []).concat(STAGE_QUIZZES_ADVANCED[stageId] || []);
    const showCode = ["L0", "L1"].includes(stageId);

    const overlay = document.createElement("div");
    overlay.className = "modal";
    overlay.id = "stageModal";
    overlay.innerHTML = `
      <div class="modal-card">
        <div class="modal-head">
          <div>
            <p class="eyebrow">${stage.id} · 学习与测验</p>
            <h2>${stage.title}</h2>
          </div>
          <button class="modal-close" data-close-modal>×</button>
        </div>
        <div class="modal-body">
          <div class="modal-lesson-list">
            ${lessons.map((lesson) => `
              <div class="lesson-item">
                <strong>${lesson.title}</strong>
                <p>${lesson.body}</p>
              </div>
            `).join("")}
          </div>
          ${showCode ? `
            <div class="code-practice">
              <div class="code-practice__head">Python 小练习</div>
              <p>${practice}</p>
              <textarea id="practiceCode" spellcheck="false">print('hello')</textarea>
              <button class="primary-btn" id="runCodeBtn">运行代码</button>
              <pre class="code-output" id="codeOutput">运行结果会显示在这里</pre>
            </div>
          ` : `<div class="practice"><strong>小练习</strong><p>${practice}</p></div>`}
          <div class="quiz-block">
            <div class="quiz-block__head">阶段测验（通过后自动打勾）</div>
            ${quiz.map((item, qi) => `
              <div class="quiz-item" data-q="${qi}">
                <p class="quiz-q">${qi + 1}. ${item.q}</p>
                ${item.options.map((opt, oi) => `
                  <label class="quiz-opt">
                    <input type="radio" name="quiz-${stageId}" value="${oi}" />
                    <span>${String.fromCharCode(65 + oi)}. ${opt}</span>
                  </label>
                `).join("")}
                <div class="quiz-explain" data-explain="${qi}"></div>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="modal-foot">
          <button class="ghost-btn" data-close-modal>关闭</button>
          <button class="primary-btn" id="submitQuizBtn">提交测验</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", closeStageModal);
    });

    if (showCode) {
      $("#runCodeBtn").addEventListener("click", () => {
        const code = $("#practiceCode").value || "";
        const output = runMiniPython(code);
        $("#codeOutput").textContent = output || "(没有输出)";
      });
    }

    $("#submitQuizBtn").addEventListener("click", () => submitStageQuiz(stageId));
  }

  function closeStageModal() {
    const modal = $("#stageModal");
    if (modal) modal.remove();
  }

  function submitStageQuiz(stageId) {
    const quiz = (STAGE_QUIZZES[stageId] || []).concat(STAGE_QUIZZES_ADVANCED[stageId] || []);
    let correct = 0;
    quiz.forEach((item, qi) => {
      const selected = document.querySelector(`input[name="quiz-${stageId}"]:checked`)?document.querySelectorAll(`input[name="quiz-${stageId}"]`)[0]:null;
      const chosen = document.querySelector(`input[name="quiz-${stageId}"][value="${item.answer}"]`);
      const inputs = document.querySelectorAll(`input[name="quiz-${stageId}"]`);
      let userChoice = null;
      inputs.forEach((input) => {
        if (input.checked) userChoice = Number(input.value);
      });
      const isRight = userChoice === item.answer;
      if (isRight) correct++;
      const explainEl = document.querySelector(`[data-explain="${qi}"]`);
      if (explainEl) {
        explainEl.textContent = isRight ? `✅ ${item.explain}` : `❌ 正确答案 ${String.fromCharCode(65 + item.answer)}。${item.explain}`;
      }
      if (chosen) chosen.closest(".quiz-opt").classList.add("is-correct");
    });

    const rate = Math.round((correct / quiz.length) * 100);
    const passed = rate >= 80;
    const stage = CURRICULUM.find((item) => item.id === stageId);
    if (passed && stage) {
      state.stagePassed[stageId] = true;
      stage.topics.forEach((_, index) => {
        state.topics[topicKey(stageId, index)] = true;
      });
      saveState();
      closeStageModal();
      renderHero();
      renderCurriculum();
      renderWorkbench();
      renderRadar();
      showToast(`${stageId} 测验通过，知识点已自动打勾！`);
    } else {
      showToast(`正确率 ${rate}%，还差一点，再看讲解后重试。`);
    }
  }

  function runMiniPython(code) {
    const out = [];
    const vars = {};
    const lines = code.split(/\r?\n/);

    function evaluate(expr) {
      let s = String(expr).trim();
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
        return s.slice(1, -1);
      }
      if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
      if (s === "True") return true;
      if (s === "False") return false;
      if (Object.prototype.hasOwnProperty.call(vars, s)) return vars[s];
      const translated = s.replace(/\b[A-Za-z_]\w*\b/g, (m) => {
        if (Object.prototype.hasOwnProperty.call(vars, m)) return JSON.stringify(vars[m]);
        return m;
      });
      try {
        return Function(`"use strict"; return (${translated});`)();
      } catch (err) {
        return s;
      }
    }

    function execBlock(block, indent) {
      let i = 0;
      while (i < block.length) {
        const line = block[i];
        const currentIndent = (line.match(/^[ ]*/) || [""])[0].length;
        if (currentIndent < indent) break;
        const stmt = line.trim();
        if (!stmt || stmt.startsWith("#")) {
          i++;
          continue;
        }
        if (stmt.startsWith("print(") && stmt.endsWith(")")) {
          const inner = stmt.slice(6, -1);
          const parts = inner.split(",").map((p) => evaluate(p.trim()));
          out.push(parts.join(" "));
          i++;
          continue;
        }
        if (/^for\s+[A-Za-z_]\w*\s+in\s+range\((\d+)\)\s*:/.test(stmt)) {
          const m = stmt.match(/^for\s+([A-Za-z_]\w*)\s+in\s+range\((\d+)\)\s*:/);
          const varName = m[1];
          const n = Number(m[2]);
          let j = i + 1;
          const child = [];
          while (j < block.length && ((block[j].match(/^[ ]*/) || [""])[0].length > indent)) {
            child.push(block[j]);
            j++;
          }
          for (let k = 0; k < n; k++) {
            vars[varName] = k;
            execBlock(child, indent + 2);
          }
          i = j;
          continue;
        }
        if (stmt.startsWith("if ") && stmt.endsWith(":")) {
          const cond = evaluate(stmt.slice(3, -1));
          let j = i + 1;
          const child = [];
          while (j < block.length && ((block[j].match(/^[ ]*/) || [""])[0].length > indent)) {
            child.push(block[j]);
            j++;
          }
          if (cond) execBlock(child, indent + 2);
          i = j;
          continue;
        }
        const assign = stmt.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
        if (assign) {
          vars[assign[1]] = evaluate(assign[2]);
        }
        i++;
      }
    }

    execBlock(lines, 0);
    return out.join("\n");
  }

  function renderWorkbench() {
    const container = $("#workbench");
    container.innerHTML = "";

    CURRICULUM.forEach((stage, index) => {
      const progress = getStageProgress(stage);
      const unlocked = progress.percent === 100;
      const step = state.steps[stage.id] || 0;
      const finished = Boolean(state.done[stage.id]);

      const card = document.createElement("article");
      card.className = "order-card" + (unlocked ? "" : " is-locked");
      card.innerHTML = `
        <div class="order-head">
          <div>
            <h3>${stage.workOrder.title}</h3>
            <p>${stage.workOrder.deliverable}</p>
          </div>
          <span class="status-pill ${unlocked && !finished ? "is-active" : ""}">${finished ? "已闭环" : unlocked ? "进行中" : "未解锁"}</span>
        </div>
        <div class="order-flow">
          ${WORK_FLOW.map((flow, flowIndex) => {
            let cls = "flow-step";
            if (finished) cls += " is-done";
            else if (unlocked && flowIndex < step) cls += " is-done";
            else if (unlocked && flowIndex === step) cls += " is-current";
            return `<span class="${cls}">${flow}</span>`;
          }).join("")}
        </div>
        <button class="primary-btn" data-stage="${stage.id}" ${unlocked && !finished ? "" : "disabled"}>
          ${finished ? "已完成，可重新复盘" : unlocked ? "推进到下一步" : `学完 ${stage.id} 解锁`}
        </button>
      `;
      container.appendChild(card);
    });

    $$(".order-card button").forEach((button) => {
      button.addEventListener("click", () => {
        const stageId = button.dataset.stage;
        const stage = CURRICULUM.find((item) => item.id === stageId);
        if (!stage) return;
        if (!isStageComplete(stage)) {
          showToast(`先把 ${stageId} 的 ${stage.topics.length} 个知识点全部勾选完成，再开工单。`);
          return;
        }
        advanceOrder(stageId);
      });
    });
  }

  function advanceOrder(stageId) {
    const current = state.steps[stageId] || 0;
    if (current >= WORK_FLOW.length - 1) {
      state.done[stageId] = true;
      state.steps[stageId] = 0;
      saveState();
      showToast(`恭喜！${stageId} 工单已完成一轮闭环，可作为简历项目。`);
    } else {
      state.steps[stageId] = current + 1;
      saveState();
      showToast(`已推进：${WORK_FLOW[current + 1]}`);
    }
    renderHero();
    renderWorkbench();
  }

  function renderAgentRoles() {
    const container = $("#agentRoles");
    container.innerHTML = "";
    AGENT_ROLES.forEach((role) => {
      const button = document.createElement("button");
      button.className = "role-btn";
      button.innerHTML = `<strong>${role.name}</strong><span>${role.desc}</span>`;
      button.addEventListener("click", () => {
        addChatMessage(role.name, role.message, true);
      });
      container.appendChild(button);
    });
  }

  function addChatMessage(name, text, isAI) {
    const log = $("#chatLog");
    const msg = document.createElement("div");
    msg.className = "chat-msg" + (isAI ? " chat-msg--ai" : "");
    msg.innerHTML = `<span class="chat-msg__name">${name}</span>${text}`;
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }

  function getAgentReply(text) {
    const lower = text.toLowerCase();
    if (lower.includes("rag")) {
      return "RAG 不是把文档全塞进提示词，而是：先切块，再向量化，检索最相关的几段，最后让模型“照着资料回答”。记住一句话：先找到，再生成。";
    }
    if (lower.includes("react") || lower.includes("规划")) {
      return "ReAct 就是「想 → 做 → 看」循环。模型先思考下一步该干嘛，再调用工具，然后观察结果，继续决定下一步。关键要设置退出条件和最大步数，否则会死循环。";
    }
    if (lower.includes("记忆") || lower.includes("memory")) {
      return "短期记忆靠上下文窗口，长期记忆靠向量库或结构化存储。别把什么都塞进上下文，那是又贵又容易乱。";
    }
    if (lower.includes("多智能体") || lower.includes("multi")) {
      return "多智能体先想清楚为什么要拆：是角色职责不同，还是需要互相挑错。Manager-Worker、专家分工、辩论反思，选最简单能解决问题的那一种。";
    }
    if (lower.includes("面试") || lower.includes("简历")) {
      return "面试不要背名词，要讲一个你亲手做过的项目：背景、你负责什么、遇到什么问题、怎么量化结果。一个真实项目比十个概念都有用。";
    }
    return "先确认一下：你问的是 Agent 的原理、工具调用、RAG、记忆、多智能体，还是求职表达？给我一个具体点，我给你一个能落地的答案。";
  }

  function handleChatSend() {
    const input = $("#chatInput");
    const text = input.value.trim();
    if (!text) return;
    addChatMessage("我", text, false);
    const reply = getAgentReply(text);
    setTimeout(() => addChatMessage("Mentor", reply, true), 240);
    input.value = "";
  }

  function computeSkills() {
    const scores = {};
    RADAR_SKILLS.forEach((skill) => {
      scores[skill.key] = 0;
    });

    CURRICULUM.forEach((stage) => {
      const progress = getStageProgress(stage);
      if (progress.done === 0) return;
      const stageScore = Math.round((progress.done / progress.total) * 100);
      const targets = SKILL_MAP[stage.id] || [];
      targets.forEach((target) => {
        scores[target] = Math.max(scores[target], Math.min(100, scores[target] + stageScore * 0.28));
      });
    });

    Object.keys(scores).forEach((key) => {
      scores[key] = Math.min(100, Math.round(scores[key]));
    });
    return scores;
  }

  function renderRadar() {
    const canvas = $("#radarCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = 360;
    const height = 360;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 118;
    const count = RADAR_SKILLS.length;
    const scores = computeSkills();

    function angle(index) {
      return -Math.PI / 2 + (Math.PI * 2 * index) / count;
    }

    function point(index, r) {
      return [centerX + Math.cos(angle(index)) * r, centerY + Math.sin(angle(index)) * r];
    }

    ctx.strokeStyle = "rgba(123, 169, 255, 0.18)";
    ctx.fillStyle = "rgba(123, 169, 255, 0.05)";
    for (let ring = 1; ring <= 4; ring++) {
      const r = (radius / 4) * ring;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const [x, y] = point(i, r);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    for (let i = 0; i < count; i++) {
      const [x, y] = point(i, radius);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    const valuePoints = RADAR_SKILLS.map((skill, i) => {
      const value = scores[skill.key] || 0;
      const r = (value / 100) * radius;
      return point(i, r);
    });

    ctx.beginPath();
    valuePoints.forEach(([x, y], i) => {
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(123, 169, 255, 0.28)";
    ctx.strokeStyle = "#7ba9ff";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    RADAR_SKILLS.forEach((skill, i) => {
      const [x, y] = point(i, radius + 28);
      ctx.fillStyle = "#33415c";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(skill.label, x, y);
      const [vx, vy] = point(i, (scores[skill.key] / 100) * radius);
      ctx.beginPath();
      ctx.arc(vx, vy, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ff9ecf";
      ctx.fill();
    });

    const legend = $("#radarLegend");
    legend.innerHTML = RADAR_SKILLS.map((skill) => `
      <div class="legend-item"><i></i><span>${skill.label}：${scores[skill.key]}</span></div>
    `).join("");

    renderGapCard(scores);
  }

  function renderGapCard(scores) {
    const sorted = [...RADAR_SKILLS].sort((a, b) => scores[a.key] - scores[b.key]);
    const weak = sorted.slice(0, 3);
    const strong = sorted.slice(-2).reverse();
    const gap = $("#gapCard");
    gap.innerHTML = `
      <h3>技能缺口清单</h3>
      <p>当前最需要补：${weak.map((skill) => `${skill.label}（${scores[skill.key]}）`).join("、")}。</p>
      <p>相对较强：${strong.map((skill) => `${skill.label}（${scores[skill.key]}）`).join("、")}。</p>
      <p>建议：先完成一个能讲清楚“输入、过程、输出、结果指标”的项目，再补短板。</p>
    `;
  }

  function renderTrends() {
    const list = $("#trendList");
    list.innerHTML = "";
    const index = state.trendIndex || 0;
    const trends = TREND_SNAPSHOTS[index] || TREND_SNAPSHOTS[0] || TRENDS;
    trends.forEach((trend) => {
      const card = document.createElement("article");
      card.className = "trend-card";
      card.innerHTML = `
        <span class="trend-card__tag">${trend.tag}</span>
        <h3>${trend.title}</h3>
        <p>${trend.text}</p>
      `;
      list.appendChild(card);
    });
    if (state.lastTrendUpdate) {
      const time = new Date(state.lastTrendUpdate).toLocaleString("zh-CN", { hour12: false });
      $("#refreshTrend").textContent = `更新于 ${time}`;
    }
  }

  function renderStudyPlan() {
    const container = $("#studyPlan");
    if (!container) return;
    container.innerHTML = STUDY_PLAN.map((week) => `
      <article class="plan-card">
        <div class="plan-card__head">
          <span class="plan-week">${week.week}</span>
          <div>
            <h3>${week.title}</h3>
            <p>${week.goal}</p>
          </div>
        </div>
        <div class="plan-tags">
          ${week.focus.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <p class="plan-strategy">${week.strategy}</p>
        <div class="plan-tasks">
          ${week.tasks.map((task, index) => `<div><b>${index + 1}</b><span>${task}</span></div>`).join("")}
        </div>
      </article>
    `).join("");
  }

  function refreshTrends() {
    const index = state.trendIndex || 0;
    state.trendIndex = (index + 1) % TREND_SNAPSHOTS.length;
    state.lastTrendUpdate = Date.now();
    saveState();
    renderTrends();
    showToast("趋势情报已刷新到下一组信号。");
  }

  function resetProgress() {
    const ok = confirm("确定重置所有学习进度吗？这一步不能撤销。");
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    renderAll();
    showToast("进度已重置，重新开始。");
  }

  function setupTabs() {
    $("#tabs").addEventListener("click", (event) => {
      const tab = event.target.closest(".tab");
      if (!tab) return;
      $$(".tab").forEach((item) => item.classList.remove("is-active"));
      $$(".view").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      $("#view-" + tab.dataset.tab).classList.add("is-active");
    });
  }

  function showToast(text) {
    const toast = $("#toast");
    toast.textContent = text;
    toast.classList.add("is-show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-show"), 2600);
  }

  function renderAll() {
    renderHero();
    renderCurriculum();
    renderStudyPlan();
    renderWorkbench();
    renderAgentRoles();
    renderRadar();
    renderTrends();
    if ($("#chatLog").children.length === 0) {
      addChatMessage("Leader", "欢迎来到成长工作台。先打开「学习路线」，把 L0 的基础项过一遍；学完一个阶段，就来「大厂工单」领任务。", true);
      addChatMessage("Mentor", "别急着一次全学完。每完成一个知识模块，就做一个能跑起来的小项目。", true);
    }
  }

  function bindEvents() {
    $("#resetProgress").addEventListener("click", resetProgress);
    $("#sendChat").addEventListener("click", handleChatSend);
    $("#chatInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") handleChatSend();
    });
    $("#refreshTrend").addEventListener("click", refreshTrends);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    bindEvents();
    renderAll();
  });
})();
