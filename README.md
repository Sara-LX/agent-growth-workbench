# AI Agent 成长工作台

一个本地优先、移动端优先的「学习线 + 大厂工作台线」双主线应用。目标：从零基础走到能独立完成 3+ 个 Agent 项目，并在模拟工作流里走完一轮「需求 → 上线 → 答辩」。

## 已实现

- L0–L7 全链路学习路线，每阶段绑定一个大厂工单。
- 学习进度本地保存（浏览器 localStorage）。
- 大厂工单闭环：PRD → 技术方案 → 排期 → 开发 → Code Review → 测试评测 → 上线 → 周报复盘 → 答辩。
- 多 Agent 角色模拟：Leader、Mentor、考官、产品、算法、工程、设计、运营、情报。
- 能力雷达图与技能缺口清单。
- 趋势情报面板与一键打开最新招聘/趋势搜索。
- 韩系蓝 / 粉 / 薄荷色 + 波点视觉，移动端响应式。

## 本地运行

方式一：直接双击 `index.html`。

方式二：用 Python 启动一个手机可访问的本地服务器：

```bash
cd agent-growth-workbench
python server.py
```

然后手机和电脑连同一个 Wi-Fi，用终端里打印的 `http://电脑IP:8000/` 打开。

## 部署成公开链接

推荐用 GitHub Pages，流程如下：

1. 在 GitHub 新建一个仓库，例如 `agent-growth-workbench`。
2. 把本项目文件推上去：

```bash
git init
git add .
git commit -m "AI Agent growth workbench MVP"
git branch -M main
git remote add origin https://github.com/你的用户名/agent-growth-workbench.git
git push -u origin main
```

3. 仓库 `Settings → Pages`，Source 选 `main` 分支、根目录，保存。
4. 几分钟后得到 `https://你的用户名.github.io/agent-growth-workbench/`。

## 绑定你的腾讯云域名

你已有 `lxsara.top`。两种方式：

### 推荐：子域名 `agent.lxsara.top`

1. 在腾讯云 DNS 解析里新增 CNAME 记录：
   - 主机记录：`agent`
   - 记录类型：`CNAME`
   - 记录值：`你的用户名.github.io`
2. 在项目根目录创建或修改 `CNAME` 文件，内容为：

```text
agent.lxsara.top
```

3. 回到 GitHub Pages 设置，Custom domain 填 `agent.lxsara.top`，保存并勾选 HTTPS。

### 如果要用根域名 `lxsara.top`

需要把 `lxsara.top` 解析到 GitHub Pages 的 A 记录 IP；具体以 GitHub Pages 当前文档为准。更简单的方式是先用子域名。

## 下一步扩展

- 后端：FastAPI + SQLite/Redis，替换 localStorage。
- 情报 Agent：接 MCP/搜索 API，自动抓取大厂 JD 并动态调整技能权重。
- 真多 Agent：LangGraph 编排 Leader/Mentor/考官/情报等角色。
- 项目档案：把工单交付物、代码仓库、量化结果沉淀成简历页面。

## 文件结构

```text
agent-growth-workbench/
├── index.html
├── styles.css
├── data.js
├── app.js
├── server.py
└── README.md
```
