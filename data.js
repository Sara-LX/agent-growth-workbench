const WORK_FLOW = ["PRD", "技术方案", "排期", "开发", "Code Review", "测试评测", "上线", "周报复盘", "答辩"];

const CURRICULUM = [
  {
    id: "L0",
    title: "底层认知与 Python 打底",
    desc: "从零学会 Python，并搞懂模型为什么会“说话”。",
    topics: [
      { name: "Python 语法：变量 / 循环 / 函数 / 类", tip: "先会写，再会读别人的代码。" },
      { name: "文件与 JSON 读写", tip: "Agent 的配置、记忆、输出都离不开 JSON。" },
      { name: "requests 调 API", tip: "调模型接口前，先会调一个普通 HTTP 接口。" },
      { name: "asyncio 异步并发", tip: "多请求同时跑，不卡住主流程。" },
      { name: "虚拟环境与 Git", tip: "项目隔离 + 版本管理，大厂协作基本功。" },
      { name: "LLM 原理：token / 上下文窗口 / 温度 / 幻觉 / 流式输出", tip: "知道模型为什么不是搜索引擎。" },
      { name: "Agent = LLM + 规划 + 工具 + 记忆", tip: "这是后面所有内容的主干。" },
      { name: "Workflow 与 Agentic 的区别", tip: "固定流程 vs 模型自己决定下一步。" }
    ],
    workOrder: {
      title: "搭一个能调大模型 API 的命令行小助手",
      deliverable: "一个 Python 脚本：读入用户问题 → 调用 API → 打印回答。项目可写进简历的起点。"
    }
  },
  {
    id: "L1",
    title: "提示工程",
    desc: "让模型按你的要求想、答、输出格式。",
    topics: [
      { name: "系统提示词与角色设定", tip: "身份、任务、背景、要求、示例。" },
      { name: "结构化输出", tip: "让模型返回 JSON，而不是一段随意的文字。" },
      { name: "Few-shot 与 CoT", tip: "给例子，再让它一步一步想。" },
      { name: "ReAct：Reason → Act → Observe", tip: "Agent 核心循环，L1 就要真正理解。" },
      { name: "自我反思与纠错", tip: "让模型检查自己的答案，再改一轮。" },
      { name: "长上下文与 Prompt Caching", tip: "省 token、提速度，生产环境很关键。" },
      { name: "代码管逻辑，模型管推理", tip: "不要什么都塞进提示词。" }
    ],
    workOrder: {
      title: "把天气查询改成结构化输出的 Agent Prompt",
      deliverable: "一份可复用的系统提示词 + 一个输出 JSON 的演示，能直接放进作品集。"
    }
  },
  {
    id: "L2",
    title: "Agent 四大核心模块",
    desc: "工具、记忆、RAG、规划，是 Agent 的四肢和大脑。",
    topics: [
      { name: "Function Calling：定义、参数 Schema、校验", tip: "让模型学会调用真实工具。" },
      { name: "工具异常熔断、权限白名单", tip: "生产里不能让模型乱调危险接口。" },
      { name: "记忆系统：短期 / 长期 / 向量库 / 遗忘", tip: "没有记忆的 Agent 只是复读机。" },
      { name: "RAG：Embedding、分块、向量库、检索", tip: "先弄懂“查资料再回答”，再做复杂 Agent。" },
      { name: "重排、混合检索、RAG 评估", tip: "不只是召回，还要找到最相关的内容。" },
      { name: "规划：ReAct / Plan-and-Execute / ToT", tip: "复杂任务要会拆解。" },
      { name: "退出条件与防死循环", tip: "Agent 不能一直空转。" }
    ],
    workOrder: {
      title: "给业务搭建一个防幻觉知识库问答 Agent",
      deliverable: "RAG 问答项目：上传手册 → 检索 → 依据资料回答，不知道就不瞎编。"
    }
  },
  {
    id: "L3",
    title: "编排框架",
    desc: "手写完 ReAct，再用工业级框架做工程化编排。",
    topics: [
      { name: "手写 ReAct 循环", tip: "先不看框架，把“想→做→看”跑通。" },
      { name: "LangGraph：State / Checkpointer / 中断恢复", tip: "大厂 Agent 主流编排方案之一。" },
      { name: "Human-in-the-loop 与 Edge", tip: "重要节点让人确认，别让 Agent 全自动跑飞。" },
      { name: "AgentScope / Pydantic AI / DSPy", tip: "知道不同框架适合什么场景。" },
      { name: "LlamaIndex 与低代码 Dify / Coze", tip: "快速原型和可控代码之间做取舍。" }
    ],
    workOrder: {
      title: "用 LangGraph 做一个带中断恢复的 Agent",
      deliverable: "一个可展示的状态图 Agent，代码仓库 + 运行截图 + README。"
    }
  },
  {
    id: "L4",
    title: "多智能体协作",
    desc: "一个 Agent 不够时，让多个 Agent 分工、讨论、聚合。",
    topics: [
      { name: "Manager-Worker 与专家分工", tip: "主管拆需求，专家各自干活。" },
      { name: "辩论 / 反思式多 Agent", tip: "多个模型互相挑错，降低幻觉。" },
      { name: "AutoGen / CrewAI / MetaGPT", tip: "了解不同多智能体框架的边界。" },
      { name: "通信协议：MCP / A2A / Agent Skills", tip: "让不同 Agent 之间能互相调用。" },
      { name: "消息队列与结果聚合", tip: "异步任务多了，要会收口。" }
    ],
    workOrder: {
      title: "做一个“产品 + 算法 + 工程”三人协作 Agent",
      deliverable: "多智能体协作项目：从需求拆解到交付物汇总，能讲清楚每个角色为什么这样分。"
    }
  },
  {
    id: "L5",
    title: "工程化与生产",
    desc: "把玩具变成能上线的服务。",
    topics: [
      { name: "FastAPI / Flask 后端接口", tip: "给 Agent 接一个真实可调的 API。" },
      { name: "SQLite / PostgreSQL / Redis", tip: "存项目、进度、会话和缓存。" },
      { name: "异步并发、限流、重试、日志", tip: "生产稳定性，面试高频。" },
      { name: "Docker、云服务、API 网关、域名 HTTPS", tip: "让项目有一个公开链接。" },
      { name: "监控告警与成本控制", tip: "大厂很在意 token 成本和稳定性。" },
      { name: "评测：准确率 / 幻觉率 / Ragas / Langfuse / Phoenix", tip: "没有评测，就不知道 Agent 到底行不行。" },
      { name: "AgentOps 与 CI/CD / A-B", tip: "持续观察、持续改进。" }
    ],
    workOrder: {
      title: "把 RAG Agent 部署成一个带 HTTPS 的公开服务",
      deliverable: "一个能手机打开的链接 + 接口文档 + 监控截图 + 成本估算。"
    }
  },
  {
    id: "L6",
    title: "前沿与进阶",
    desc: "跟上最新技术，但不追名词，要能落地。",
    topics: [
      { name: "Context Engineering", tip: "上下文不是越长越好，是设计出来的。" },
      { name: "MCP 深度使用", tip: "统一工具接入标准，跨应用协作。" },
      { name: "Computer Use", tip: "让 Agent 操作界面，理解能力边界。" },
      { name: "Coding Agent 与 SWE-bench", tip: "看懂现在 AI 写代码的能力怎么评估。" },
      { name: "Agentic RAG", tip: "RAG 不只是查一次，而是动态规划检索。" },
      { name: "Agent 安全：Prompt 注入、沙箱、审计、护栏", tip: "大厂很看重，容易被忽略但很加分。" }
    ],
    workOrder: {
      title: "给已有 Agent 加一层安全护栏与审计",
      deliverable: "一份安全设计方案 + 演示“注入攻击被拦截”，面试可讲。"
    }
  },
  {
    id: "L7",
    title: "求职能力",
    desc: "把能力翻译成大厂听得懂、看得懂的简历与表达。",
    topics: [
      { name: "简历项目包装：技术栈 + 问题 + 量化指标", tip: "不要写“我做过 Agent”，写“解决了什么、提升了多少”。" },
      { name: "面试高频题：ReAct / RAG / 记忆设计 / 多智能体架构", tip: "每个题都要有项目里的真实例子。" },
      { name: "防死循环、工具异常、成本控制", tip: "工程细节最能拉开差距。" },
      { name: "模拟面试", tip: "把考官当成真正的面试官，录音复盘。" },
      { name: "实习答辩演练", tip: "用 STAR 讲清背景、任务、行动、结果。" }
    ],
    workOrder: {
      title: "完成一轮“需求 → 上线 → 答辩”实习闭环",
      deliverable: "最终答辩材料：项目文档、架构图、量化结果、复盘和下一轮计划。"
    }
  }
];

const AGENT_ROLES = [
  { id: "leader", name: "Leader", desc: "拆需求、派任务、验收", color: "blue", message: "这个工单我先帮你拆成 3 个可交付结果：核心流程跑通、异常兜底、上线文档。先做最小闭环，别一上来追求完美。" },
  { id: "mentor", name: "Mentor", desc: "带教、答疑、纠偏", color: "pink", message: "遇到卡点很正常。你先把“输入是什么、输出是什么、卡在哪一步”写清楚，问题就解决一半了。" },
  { id: "examiner", name: "考官", desc: "考核、模拟面试", color: "mint", message: "请用一分钟讲清楚你的 RAG 项目：数据从哪来？为什么分块？检索后做了什么？幻觉率怎么算？" },
  { id: "product", name: "产品", desc: "需求与验收标准", color: "blue", message: "用户要的不是“能回答”，而是“回答有依据、说不知道、别乱编”。把验收标准写成 3 条可测试的规则。" },
  { id: "algo", name: "算法", desc: "模型与检索策略", color: "pink", message: "先别堆复杂重排。用向量检索 + 关键词混合，先把召回率和准确率跑出来，再看哪里需要优化。" },
  { id: "eng", name: "工程", desc: "接口、稳定性、部署", color: "mint", message: "你的接口要做限流、重试、超时和日志。没有这些，模型再强上线也会被打回。" },
  { id: "design", name: "设计", desc: "体验与可用性", color: "blue", message: "别让用户面对一段 JSON。把回答拆成“结论 + 依据 + 来源”，移动端也要好看。" },
  { id: "ops", name: "运营", desc: "效果与复盘", color: "pink", message: "上线后记三件事：日活、问题解决率、bad case。周报里只报能推动下一步的数字。" },
  { id: "intel", name: "情报 Agent", desc: "JD 与趋势", color: "mint", message: "今天帮你更新了信号：大厂 JD 里 RAG、工具调用、LangGraph、评测可观测出现频率持续走高。" }
];

const TRENDS = [
  {
    tag: "JD 高频词",
    title: "RAG 不是加分项，已经是基础项",
    text: "大厂 AI/Agent 实习岗普遍要求：能搭知识库问答、能讲清分块/检索/重排、能处理幻觉。",
    query: "AI Agent 实习生 招聘 RAG 2026"
  },
  {
    tag: "面试重点",
    title: "工具调用与异常处理",
    text: "面试不再只问“你会不会调 API”，更会问：工具报错怎么办、权限怎么控制、死循环怎么退出。",
    query: "AI Agent 面试 工具调用 死循环 2026"
  },
  {
    tag: "框架趋势",
    title: "LangGraph + MCP 成主流组合",
    text: "工程岗位更看重可中断、可恢复、可观测，而不是只有一个聊天 Demo。",
    query: "LangGraph MCP Agent 2026 招聘"
  },
  {
    tag: "能力缺口",
    title: "评测与可观测经常被忽略",
    text: "候选人很少能讲清楚准确率、幻觉率、延迟、成本。补上这块会非常出彩。",
    query: "Agent 评测 Ragas Langfuse 实习 2026"
  },
  {
    tag: "岗位地图",
    title: "产品、算法、工程三线都可切入",
    text: "你不需要立刻写生产级后端，但至少要有一个能讲明白、能运行、能复盘的完整项目。",
    query: "字节 腾讯 阿里 AI Agent 实习 2026"
  }
];

const RADAR_SKILLS = [
  { key: "agent", label: "Agent 认知" },
  { key: "prompt", label: "Prompt 工程" },
  { key: "rag", label: "RAG" },
  { key: "tool", label: "工具调用" },
  { key: "multi", label: "多智能体" },
  { key: "eng", label: "工程化" },
  { key: "job", label: "求职面试" }
];
