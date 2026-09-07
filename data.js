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

const STAGE_LESSONS = {
  L0: {
    lessons: [
      {
        title: "Python 不是背语法，是学“让电脑做事”",
        body: "变量、循环、函数都只是工具箱。先跑通一个脚本，再逐行理解它。你以后不是后端工程师，而是用 Python 把 Agent 的各个零件串起来。"
      },
      {
        title: "模型为什么能回答问题",
        body: "大模型不是搜索引擎，而是根据前面的 token 预测下一个 token。所以它回答很流畅，也可能很自信地编造。"
      },
      {
        title: "token、上下文窗口、温度",
        body: "token 是模型看文字的最小碎片；上下文窗口是它一次能“记住”多少内容；温度控制它回答的随机程度。"
      },
      {
        title: "幻觉不是故障，是模型天性",
        body: "模型不知道答案时，也会生成看起来像答案的文字。做 Agent 时要用“查资料、给来源、说不知道”来压住它。"
      },
      {
        title: "Agent = LLM + 规划 + 工具 + 记忆",
        body: "普通问答只生成文字；Agent 会思考下一步、调用工具、观察结果、继续行动。这是后面所有内容的主干。"
      },
      {
        title: "Workflow 和 Agentic 的区别",
        body: "Workflow 是固定流水线，稳定可控；Agentic 是模型自己决定下一步，更灵活但也更容易跑飞。先稳定，再灵活。"
      }
    ],
    practice: "写一个 Python 脚本：读取用户输入，打印“你好，{名字}”。然后改成用 requests 调用一个公开 API，把返回结果打印出来。"
  },
  L1: {
    lessons: [
      {
        title: "系统提示词不是随便写一句话",
        body: "它要讲清楚：我是谁、要做什么、背景是什么、有什么要求、最好给例子。五件套越清楚，模型越稳定。"
      },
      {
        title: "结构化输出是为了让程序能接住结果",
        body: "如果模型返回一段自由文字，程序很难解析。让它返回 JSON，后面代码才好继续处理。"
      },
      {
        title: "Few-shot：给例子比讲道理更有效",
        body: "模型模仿能力很强。给它 2 到 3 个标准输入输出，往往比写一大段规则更管用。"
      },
      {
        title: "CoT 是让模型先想，再答",
        body: "复杂问题不要让它直接给答案，而是让它先拆解、分步推理。这样能明显降低错误率。"
      },
      {
        title: "ReAct：Reason → Act → Observe",
        body: "这是 Agent 最核心的循环。先想下一步该干嘛，再调用工具，观察结果，然后继续决定。"
      },
      {
        title: "代码管逻辑，模型管推理",
        body: "不要把判断顺序、数据清洗、异常处理全塞进提示词。逻辑写进代码，模型只负责理解和生成。"
      }
    ],
    practice: "写一个“天气查询”Agent 的系统提示词，要求模型最终只返回 JSON：{\"city\":\"\",\"weather\":\"\",\"suggestion\":\"\"}。"
  },
  L2: {
    lessons: [
      {
        title: "Function Calling 是给模型一双“手”",
        body: "你先定义工具能做什么、需要什么参数，模型决定什么时候调用它。你的代码真正执行工具，再把结果给模型。"
      },
      {
        title: "参数 Schema 和异常处理",
        body: "工具参数要有类型和说明；工具报错要能被捕获。熔断、重试、权限白名单是生产环境的基本功。"
      },
      {
        title: "记忆系统不是把聊天记录全塞进去",
        body: "短期记忆靠上下文窗口，长期记忆靠向量库或数据库。要设计哪些该记住、哪些该忘记、哪些只保留摘要。"
      },
      {
        title: "RAG 的核心是先找到，再生成",
        body: "把文档切成块，转成向量，检索最相关的几段，最后让模型照着资料回答。这样能显著减少幻觉。"
      },
      {
        title: "检索不是向量召回就完了",
        body: "关键词检索和向量检索混合使用，再做重排，能提升准确率。还要看召回率和准确率。"
      },
      {
        title: "规划要设置退出条件",
        body: "ReAct、Plan-and-Execute、ToT 都是规划方式。最重要的是最大步数、循环检测、超时和降级策略，防止死循环。"
      }
    ],
    practice: "做一个最小 RAG：准备 3 段资料，用向量检索找到最相关的一段，再让模型依据这一段回答。"
  },
  L3: {
    lessons: [
      {
        title: "先手写 ReAct，再用框架",
        body: "手写一遍“想→做→看”循环，你才真正理解 Agent。框架只是帮你把状态、中断和恢复做得更工程化。"
      },
      {
        title: "LangGraph 的核心是状态图",
        body: "State 保存当前状态；Checkpointer 负责存档和恢复；Edge 控制下一步去哪；Human-in-the-loop 在关键节点让人确认。"
      },
      {
        title: "中断恢复是生产级能力",
        body: "任务跑一半失败，要能从断点继续，而不是重头再来。这个能力面试很加分。"
      },
      {
        title: "不同框架不要贪多",
        body: "LangGraph 偏可控状态图，AgentScope 偏多智能体，Pydantic AI 重类型和测试。先精通一个，能讲清为什么选它。"
      },
      {
        title: "低代码适合快速验证，不适合只停在低代码",
        body: "Coze / Dify 能快速做出原型，但大厂更想看到你懂底层逻辑，并且能用代码重构。"
      }
    ],
    practice: "把你之前手写的 ReAct Agent 改造成 LangGraph 状态图：加入状态、最大步数和一次人工确认节点。"
  },
  L4: {
    lessons: [
      {
        title: "多智能体不是越多越好",
        body: "先问自己：为什么要拆？是角色职责不同，还是需要互相挑错。能用一个 Agent 解决就不要强行拆。"
      },
      {
        title: "Manager-Worker 是最常见结构",
        body: "Manager 负责拆任务和派活，Worker 负责执行。结果最后要聚合，否则会变成一堆零散输出。"
      },
      {
        title: "辩论和反思能降低幻觉",
        body: "让两个 Agent 互相检查，一个提出方案，一个找漏洞，最后再收敛。适合高准确率场景。"
      },
      {
        title: "MCP / A2A / Skills 是“通信协议”",
        body: "MCP 让 Agent 统一调用工具，A2A 让 Agent 之间互相协作，Skills 是把能力打包复用。"
      },
      {
        title: "结果聚合和消息队列",
        body: "多 Agent 异步执行时，要有统一收口，处理顺序、失败重试和重复结果。"
      }
    ],
    practice: "设计一个“产品 + 算法 + 工程”三人协作 Agent：每人负责一部分，最后自动汇总成一份方案。"
  },
  L5: {
    lessons: [
      {
        title: "FastAPI 是 Agent 的对外窗口",
        body: "用户通过 HTTP 接口调用你的 Agent。接口要清晰、有限流、有超时、有错误返回。"
      },
      {
        title: "数据库和缓存",
        body: "SQLite 适合本地，PostgreSQL 适合正式项目，Redis 适合缓存和会话。别把用户数据只放在内存里。"
      },
      {
        title: "部署不是最后才想",
        body: "Docker 打包、云服务托管、API 网关、域名 HTTPS、监控告警，从第一天就考虑。"
      },
      {
        title: "成本控制很重要",
        body: "token 消耗、请求次数、模型选择都会影响成本。大厂很看重你有没有成本意识。"
      },
      {
        title: "没有评测，就没有“好不好”",
        body: "任务完成率、准确率、幻觉率、延迟都要量化。Ragas、Langfuse、Phoenix 都是常用工具。"
      },
      {
        title: "AgentOps / Harness 是生产级标配",
        body: "关注上下文管理、工具执行、任务状态、调试、评测、CI/CD 和 A-B，让 Agent 可持续迭代。"
      }
    ],
    practice: "把你之前的 RAG Agent 用 FastAPI 包成一个接口，并写清错误返回、超时和一条监控日志。"
  },
  L6: {
    lessons: [
      {
        title: "Context Engineering 是设计出来的",
        body: "不是把所有东西都塞进上下文，而是筛选、压缩、排序，让模型在合适的信息下工作。"
      },
      {
        title: "MCP 深度使用",
        body: "把工具统一成标准接口，模型可以跨应用调用。理解它和普通 Function Calling 的关系。"
      },
      {
        title: "Computer Use 让 Agent 操作界面",
        body: "它能点击、输入、看屏幕。适合自动化场景，但风险高，要配合权限和沙箱。"
      },
      {
        title: "Coding Agent 与 SWE-bench",
        body: "AI 写代码的能力通过真实 issue 修复来评估。你至少要知道这个指标在讲什么。"
      },
      {
        title: "Agentic RAG",
        body: "不是一次检索就完，而是模型动态决定搜什么、搜几次、怎么利用结果。"
      },
      {
        title: "Agent 安全是底线",
        body: "Prompt 注入、沙箱隔离、审计日志、权限护栏，这些是上线前必须想清楚的问题。"
      }
    ],
    practice: "给已有 Agent 写一份安全清单：哪些工具可以自动执行、哪些必须人工确认、什么输入需要拦截。"
  },
  L7: {
    lessons: [
      {
        title: "简历不要写“我学过”，要写“我做过”",
        body: "每个项目写清楚：技术栈、解决什么问题、你负责哪部分、最后用什么数字证明。"
      },
      {
        title: "面试高频题都有固定结构",
        body: "ReAct、RAG、记忆设计、多智能体架构、死循环处理。每题都要能配一个你真实做过的项目例子。"
      },
      {
        title: "工程细节拉开差距",
        body: "别人都在讲概念时，你能讲清楚工具异常、超时、权限、成本，就会非常突出。"
      },
      {
        title: "模拟面试比背答案有效",
        body: "录音、复盘、限时回答。用 STAR 讲清背景、任务、行动、结果。"
      },
      {
        title: "实习答辩就是一次项目汇报",
        body: "先说目标，再说方案，然后讲结果，最后说复盘和下一步。要让面试官听得懂你的项目价值。"
      }
    ],
    practice: "用 STAR 结构，把自己最有代表性的一个 Agent 项目写成 1 分钟口头介绍。"
  }
};

const STAGE_QUIZZES = {
  L0: [
    {q:"下面哪个写法能让 Python 输出文字 hello？",options:["print('hello')","echo hello","console.log('hello')","print(hello)"],answer:0,explain:"字符串要加引号，print() 是输出函数。"},
    {q:"range(3) 会依次产生哪几个数字？",options:["1,2,3","0,1,2","0,1,2,3","3,2,1"],answer:1,explain:"range 默认从 0 开始，不包含 3。"},
    {q:"Agent 最核心的四个部分是什么？",options:["UI、数据库、缓存、域名","LLM、规划、工具、记忆","HTML、CSS、JS、JSON","产品、设计、运营、测试"],answer:1,explain:"Agent = LLM + 规划 + 工具 + 记忆。"},
    {q:"模型产生幻觉的根本原因是什么？",options:["它一定联网搜索","它在预测下一个 token，不知道答案也会生成像答案的内容","它故意骗人","它只记得错误数据"],answer:1,explain:"模型不是搜索引擎，而是根据概率生成文本。"},
    {q:"Workflow 和 Agentic 的主要区别是什么？",options:["前者固定流程，后者让模型决定下一步","前者更难","后者一定更稳定","两者没有区别"],answer:0,explain:"Workflow 是固定流水线，Agentic 更灵活。"}
  ],
  L1: [
    {q:"ReAct 的三个动作是什么？",options:["Read、Act、Test","Reason、Act、Observe","Run、Ask、Talk","React、Answer、Output"],answer:1,explain:"ReAct = Reason → Act → Observe。"},
    {q:"为什么希望模型返回 JSON？",options:["因为好看","程序更容易解析和继续处理","JSON 一定不会错","模型只能输出 JSON"],answer:1,explain:"结构化输出让代码能接住结果。"},
    {q:"Few-shot 是什么意思？",options:["少用模型","给少量示例帮助模型理解任务","把模型训练一次","只允许模型说几句话"],answer:1,explain:"给例子比只讲规则更有效。"},
    {q:"下面哪项应该主要由代码而不是提示词负责？",options:["生成诗歌","判断业务顺序和异常处理","解释概念","总结文章"],answer:1,explain:"逻辑写进代码，模型管推理和生成。"}
  ],
  L2: [
    {q:"RAG 的核心思想是什么？",options:["把所有文档塞进提示词","先检索相关资料，再让模型基于资料回答","把模型换成数据库","只使用关键词搜索"],answer:1,explain:"RAG 是先找到，再生成。"},
    {q:"Function Calling 里，模型负责什么？",options:["真正执行工具","决定是否调用工具以及传什么参数","直接改数据库","不需要工具"],answer:1,explain:"模型决策，代码真正执行工具。"},
    {q:"长期记忆通常用什么实现？",options:["只靠上下文窗口","向量库或结构化存储","临时变量","CSS"],answer:1,explain:"长期记忆常用向量库和数据库。"},
    {q:"防止 Agent 死循环最重要的措施是什么？",options:["不调用工具","设置最大步数、超时和循环检测","让模型一直跑","只允许回答一次"],answer:1,explain:"必须设置退出条件。"},
    {q:"重排的主要目的是什么？",options:["增加文档数量","把最相关的检索结果放到前面","删除向量","改变模型温度"],answer:1,explain:"重排提升检索精度。"}
  ],
  L3: [
    {q:"LangGraph 的 State 用来做什么？",options:["保存当前工作状态","装饰界面","存储 CSS","管理域名"],answer:0,explain:"State 保存状态图当前状态。"},
    {q:"Checkpointer 的作用是什么？",options:["检查语法","存档和恢复状态","打印日志","限制模型输出"],answer:1,explain:"Checkpointer 支持中断恢复。"},
    {q:"Human-in-the-loop 是什么？",options:["让模型全自动","关键节点让人确认","禁止人类干预","只用于测试"],answer:1,explain:"重要节点人工确认。"},
    {q:"学习框架的正确顺序是什么？",options:["先背框架再理解原理","先手写 ReAct，再用框架重构","永远不用框架","只学低代码"],answer:1,explain:"理解本质后再用框架。"}
  ],
  L4: [
    {q:"多智能体协作最常见结构是什么？",options:["Manager-Worker","只有单个模型","没有通信","数据库集群"],answer:0,explain:"Manager 拆任务，Worker 执行。"},
    {q:"MCP 主要解决什么问题？",options:["手机充电","统一工具接入标准","图片压缩","域名解析"],answer:1,explain:"MCP 让 Agent 统一调用工具。"},
    {q:"辩论/反思式多智能体适合什么场景？",options:["需要降低幻觉、提高准确率","只需要快速聊天","不需要结果","不关心错误"],answer:0,explain:"多模型互相挑错可降低错误。"},
    {q:"多 Agent 异步任务最关键的是？",options:["不收集结果","统一收口和结果聚合","让它们一直跑","关闭日志"],answer:1,explain:"要处理顺序、失败重试和聚合。"}
  ],
  L5: [
    {q:"FastAPI 在 Agent 项目里主要做什么？",options:["写 CSS","提供对外 HTTP 接口","训练大模型","管理手机相册"],answer:1,explain:"FastAPI 是 Agent 的对外窗口。"},
    {q:"为什么生产接口要限流和重试？",options:["为了更难用","防止过载，提高稳定性","让接口更慢","只是形式"],answer:1,explain:"限流重试保障生产稳定。"},
    {q:"评测 Agent 时最重要的指标包括？",options:["准确率、幻觉率、延迟、成本","只有颜色和字体","只有下载量","只有按钮数量"],answer:0,explain:"没有评测，就无法判断好坏。"},
    {q:"AgentOps / Harness 关注什么？",options:["装修","上下文、工具执行、任务状态、调试评测","只关注前端","只关注营销"],answer:1,explain:"AgentOps 关注全生命周期可观测。"}
  ],
  L6: [
    {q:"Context Engineering 的核心是什么？",options:["把上下文塞满","筛选、压缩、排序，让模型在合适信息下工作","删除所有上下文","不看上下文"],answer:1,explain:"上下文是设计出来的。"},
    {q:"Prompt 注入是什么？",options:["给模型送花","通过输入诱导模型执行意外指令","正常提示词","数据库索引"],answer:1,explain:"要加输入过滤、权限和沙箱。"},
    {q:"Computer Use 为什么风险高？",options:["因为它是彩色的","能操作系统界面，可能误操作","它不会思考","它只读文字"],answer:1,explain:"需要权限、沙箱和审计。"},
    {q:"Agentic RAG 和普通 RAG 的主要区别？",options:["Agentic RAG 让模型动态规划检索过程","普通 RAG 更复杂","没有区别","Agentic RAG 不用向量"],answer:0,explain:"Agentic RAG 动态决定搜什么、搜几次。"}
  ],
  L7: [
    {q:"简历项目描述最应该突出什么？",options:["只写学过什么","技术栈、解决什么问题、量化结果","只写兴趣爱好","只写课程名"],answer:1,explain:"大厂看你能证明自己会干活。"},
    {q:"面试回答 ReAct 时，最好怎么讲？",options:["只背概念","结合自己项目里的真实循环和退出条件","拒绝回答","只讲英文缩写"],answer:1,explain:"配真实项目例子最有力。"},
    {q:"STAR 是什么？",options:["一种编程语言","背景、任务、行动、结果","四个星球","四种模型"],answer:1,explain:"STAR 用于结构化表达项目经历。"},
    {q:"实习答辩最核心的是什么？",options:["讲清目标、方案、结果、复盘和下一步","念 PPT","只展示界面","不提数据"],answer:0,explain:"答辩就是一次项目汇报。"}
  ]
};

const STAGE_QUIZZES_ADVANCED = {
  L0: [
    {q:"一个 LLM API 返回流式输出时，程序端为什么要用增量解析而不是等完整响应？",options:["为了节省硬盘空间","为了降低首字延迟并及时渲染内容","因为模型不允许非流式","因为 JSON 更小"],answer:1,explain:"流式输出边生成边返回，客户端要增量处理，提升体验并降低等待感。"},
    {q:"如果 Agent 连续 5 次调用同一个工具，可能是什么问题？",options:["模型想休息","缺少退出条件或工具结果没有推进状态","内存不足","网络太好"],answer:1,explain:"需要最大步数、循环检测和状态变化判断，避免死循环。"},
    {q:"Python 中处理 JSON 配置时，为什么要做异常捕获？",options:["让代码变长","配置文件可能缺失、损坏或字段类型不对","JSON 不需要处理","异常会自动消失"],answer:1,explain:"生产环境输入不可控，必须容错并给出明确错误。"}
  ],
  L1: [
    {q:"结构化输出时，模型仍可能返回格式错误，工程上应该怎么做？",options:["直接崩溃","用 Schema 校验、重试、失败降级","忽略错误继续","让用户自己改"],answer:1,explain:"模型输出不可完全信任，代码要做校验和重试。"},
    {q:"为什么大厂面试会追问 Prompt Caching 的命中条件？",options:["因为服务器便宜","因为它直接影响成本和延迟","因为只是名词","因为它不需要稳定"],answer:1,explain:"缓存前缀越稳定，token 成本越低，是生产优化重点。"},
    {q:"ReAct 中 Observation 的价值是什么？",options:["让界面更好看","给模型下一步决策提供真实反馈","减少工具调用","提高温度"],answer:1,explain:"观察结果是循环推进的关键，不是装饰。"}
  ],
  L2: [
    {q:"RAG 系统中，Embedding 模型和生成模型分别负责什么？",options:["都负责生成答案","Embedding 负责检索，生成模型负责基于资料回答","都负责向量化","都不重要"],answer:1,explain:"检索和生成分离，便于评测和优化。"},
    {q:"为什么生产 RAG 常做混合检索而不是只做向量检索？",options:["向量检索太便宜","关键词能补足精确匹配，向量能补足语义匹配","混合检索更慢","向量库不支持关键词"],answer:1,explain:"BM25 + 向量召回通常比单一方式更稳。"},
    {q:"Function Calling 参数 Schema 里，枚举、类型和描述为什么重要？",options:["为了好看","减少模型传参错误，便于代码校验","为了增加 token","没有作用"],answer:1,explain:"Schema 是模型与代码之间的契约。"}
  ],
  L3: [
    {q:"LangGraph 中断恢复的核心依赖是什么？",options:["CSS","Checkpointer 保存状态","前端刷新","域名"],answer:1,explain:"Checkpointer 让任务从中断点继续，而不是重头跑。"},
    {q:"Human-in-the-loop 应放在哪些节点？",options:["所有节点","高风险、不可逆、需要审批的节点","只有开始节点","只有结束节点"],answer:1,explain:"人工确认要放在关键决策点，平衡效率与安全。"},
    {q:"为什么不建议所有项目一上来就上框架？",options:["框架没有用","手写能帮你看懂底层状态和循环，框架适合工程化","框架太贵","框架只能本地运行"],answer:1,explain:"先理解本质，再用框架提效。"}
  ],
  L4: [
    {q:"多智能体通信中，A2A 主要解决什么？",options:["设备充电","Agent 之间的互操作与协作协议","前端样式","模型训练"],answer:1,explain:"A2A 是 Agent 之间的通信协议。"},
    {q:"Manager-Worker 中 Manager 崩了怎么办？",options:["整个系统继续","需要任务状态持久化、重试和降级","等它自己恢复","删除所有 Worker"],answer:1,explain:"多智能体要有容错和任务状态管理。"},
    {q:"为什么辩论式多智能体不是万能方案？",options:["因为成本低","延迟和 token 成本高，只适合高价值场景","它不能说话","它没有用"],answer:1,explain:"多 Agent 会增加延迟和成本，要按需使用。"}
  ],
  L5: [
    {q:"API 网关在 Agent 服务里主要做什么？",options:["画图","统一鉴权、限流、路由和监控","存储模型","训练数据"],answer:1,explain:"网关是生产入口的治理层。"},
    {q:"如果 Agent 服务的 P99 延迟突然升高，你会先看什么？",options:["按钮颜色","日志、模型调用耗时、依赖服务、缓存命中率","只重启","删除数据"],answer:1,explain:"按链路定位，先看可观测数据。"},
    {q:"为什么成本控制要纳入 Agent 设计？",options:["因为老板喜欢","模型调用、token 和工具使用都会产生真实成本","成本不影响产品","只有大公司关心"],answer:1,explain:"成本和稳定性一样重要。"}
  ],
  L6: [
    {q:"Prompt 注入攻击的本质是什么？",options:["数据库崩溃","把用户输入伪装成系统指令，改变模型行为","网络太慢","模型没电"],answer:1,explain:"要隔离指令与不可信输入，并做审计。"},
    {q:"为什么 Computer Use 必须沙箱？",options:["为了好看","模型可能误操作真实系统，沙箱限制破坏范围","为了省电","没有原因"],answer:1,explain:"高风险操作必须隔离。"},
    {q:"Agentic RAG 的检索策略为什么需要动态？",options:["用户喜欢动画","不同问题可能需要不同检索次数和知识来源","模型不会静态检索","向量库会消失"],answer:1,explain:"动态规划检索是 Agentic RAG 的核心。"}
  ],
  L7: [
    {q:"简历项目经历里，量化指标最该围绕什么？",options:["颜色数量","效率、准确率、成本、延迟等业务指标","代码行数","会议次数"],answer:1,explain:"量化结果证明项目价值。"},
    {q:"面试官追问 RAG 项目时，最怕候选人怎样？",options:["只背概念，没有真实数据和 trade-off","讲太长","有项目","会画图"],answer:0,explain:"大厂要看到工程判断和真实踩坑。"},
    {q:"投递和准备为什么可以同时进行？",options:["因为时间多","市场反馈会反过来帮你调整简历和面试重点","因为无聊","因为没人看"],answer:1,explain:"边投边准备，形成反馈循环。"}
  ]
};

const TOPIC_DEEP = {
  "L0:0": {
    title: "Python 语法：变量 / 循环 / 函数 / 类",
    summary: "先建立“数据怎么存、流程怎么走、逻辑怎么封装”的底层直觉，而不是死记语法。",
    points: [
      "变量不是盒子，而是名字和对象之间的绑定。字符串要加引号，不加引号会被当作变量名。",
      "for 循环用于遍历序列；range(n) 从 0 开始，不包含 n。缩进不是风格，而是语法。",
      "函数把重复逻辑封装起来，接受输入、返回输出。类则把数据和操作组织成对象，但做 Agent 时不要为了写类而写类。",
      "读代码时先找入口，再看数据怎么流动，最后看边界和异常处理。"
    ],
    code: "def greet(name):\n    return f'Hello, {name}'\n\nfor i in range(3):\n    print(greet(f'student{i}'))",
    mistakes: ["把缩进混用空格和 Tab", "以为 range(3) 包含 3", "给变量名加引号，导致它变成字符串"],
    interview: "面试官可能让你解释：为什么 Python 里缩进会影响逻辑？函数参数默认值为什么不要用可变对象？",
    questions: [
      {q:"下面代码会输出几次？for i in range(2): print(i)",options:["2 次","3 次","1 次","4 次"],answer:0,explain:"range(2) 产生 0、1，共两次。"},
      {q:"为什么函数内部修改一个外部整数变量，通常需要 global 或返回值？",options:["Python 故意难用","函数作用域内赋值会创建局部变量","整数太大","内存不够"],answer:1,explain:"Python 的作用域规则决定：函数内赋值默认创建局部变量。"},
      {q:"类和函数相比，什么时候才值得用类？",options:["任何代码都必须用类","需要维护状态和一组相关操作时","类一定更快","类更短"],answer:1,explain:"有状态且操作内聚时用类，否则函数更简单。"}
    ]
  },
  "L0:1": {
    title: "文件与 JSON 读写",
    summary: "Agent 的配置、记忆、工具结果很多都以 JSON 形式存储。会读写文件是工程基础。",
    points: [
      "JSON 是文本格式，不是 Python 对象。要用 json.load / json.dump 做转换。",
      "读文件要指定 encoding='utf-8'，否则中文可能乱码。",
      "写入前要想清楚：覆盖、追加还是合并。重要数据先备份。",
      "解析外部 JSON 必须容错，文件可能缺失、损坏或字段类型不对。"
    ],
    code: "import json\n\nwith open('config.json', encoding='utf-8') as f:\n    data = json.load(f)\nprint(data.get('model', 'default'))",
    mistakes: ["忘记 with open，导致文件句柄泄漏", "把 json.load 和 json.loads 混用", "读取中文文件不写 encoding"],
    interview: "面试官会追问：如果配置文件很大，为什么不能一次性读进内存？流式读取和增量解析是什么？",
    questions: [
      {q:"json.load 和 json.loads 的区别是什么？",options:["没区别","前者读文件对象，后者解析字符串","前者更快","后者更安全"],answer:1,explain:"load 处理文件，loads 处理字符串。"},
      {q:"读取中文 JSON 时，最常需要指定什么？",options:["encoding='utf-8'","mode='wb'","speed='fast'","format='json'"],answer:0,explain:"明确 UTF-8 避免乱码。"},
      {q:"生产环境读外部 JSON 为什么必须 try/except？",options:["为了代码更长","输入可能缺失、损坏或字段错误","JSON 不允许异常","为了运行更慢"],answer:1,explain:"外部输入不可控，必须容错。"}
    ]
  },
  "L0:2": {
    title: "requests 调 API",
    summary: "调模型接口前，先学会普通 HTTP API 的请求、响应、状态码和错误处理。",
    points: [
      "GET 用于取数据，POST 用于提交数据。多数模型 API 使用 POST。",
      "requests.post(url, headers=..., json=...) 是最常见形态。",
      "必须检查 status_code，200 只代表请求成功，不代表业务一定成功。",
      "设置 timeout，避免请求永久卡住；生产代码要加重试和退避。"
    ],
    code: "import requests\n\nresp = requests.post('https://api.example.com/chat', json={'q':'hi'}, timeout=10)\nresp.raise_for_status()\nprint(resp.json())",
    mistakes: ["不设置 timeout", "不检查响应内容结构就取字段", "把 API Key 硬编码在代码里"],
    interview: "面试官会问：如果 API 偶发超时，你会怎么设计重试？为什么要指数退避而不是固定间隔？",
    questions: [
      {q:"为什么 requests 调用必须设置 timeout？",options:["为了好看","防止请求无限等待，影响系统稳定性","为了更快","为了降低费用"],answer:1,explain:"超时控制是生产稳定性基础。"},
      {q:"HTTP 状态码 200 代表什么？",options:["业务一定成功","请求被服务器接受并返回响应","参数一定正确","模型一定不幻觉"],answer:1,explain:"200 是 HTTP 层成功，业务结果仍需检查。"},
      {q:"API Key 正确的管理方式是什么？",options:["写死在代码里","放环境变量或密钥管理服务","发到群里","写进 README"],answer:1,explain:"密钥不能进代码仓库。"}
    ]
  },
  "L0:3": {
    title: "asyncio 异步并发",
    summary: "当 Agent 同时调多个工具或模型时，异步并发可以显著降低总等待时间。",
    points: [
      "同步代码是等一个完成再开始下一个；异步代码可以在等待 IO 时切换执行其他任务。",
      "asyncio 适合 IO 密集型任务，例如 HTTP 请求、文件读写；不适合纯 CPU 计算。",
      "asyncio.gather 可以同时跑多个协程并收集结果。",
      "要控制并发数，避免一次打爆外部 API。"
    ],
    code: "import asyncio\n\nasync def fetch(i):\n    await asyncio.sleep(1)\n    return i * 2\n\nasync def main():\n    results = await asyncio.gather(*[fetch(i) for i in range(3)])\n    print(results)\n\nasyncio.run(main())",
    mistakes: ["把 asyncio 用在 CPU 密集任务上", "忘记 await 导致协程没有执行", "同时发起过多请求导致限流"],
    interview: "面试官可能问：asyncio、多线程、多进程分别适合什么场景？为什么 Agent 并发主要用 asyncio？",
    questions: [
      {q:"asyncio 最适合什么任务？",options:["大量 CPU 计算","大量 IO 等待","GPU 训练","内存拷贝"],answer:1,explain:"异步主要优化 IO 等待。"},
      {q:"为什么并发调用外部 API 时还要限制数量？",options:["因为电脑慢","避免触发限流和打爆服务","为了好看","没有原因"],answer:1,explain:"并发过大容易被限流，也影响对方稳定。"},
      {q:"忘记 await 一个协程会发生什么？",options:["程序崩溃","协程可能不会执行，并给出警告","一定更快","自动重试"],answer:1,explain:"协程对象需要被 await 才会执行。"}
    ]
  },
  "L0:4": {
    title: "虚拟环境与 Git",
    summary: "项目隔离和版本管理是大厂协作的基本功，不是可选加分项。",
    points: [
      "虚拟环境让不同项目使用不同依赖版本，避免互相污染。",
      "requirements.txt 记录依赖，方便别人复现你的项目。",
      "Git 记录变更；.gitignore 排除密钥、虚拟环境、缓存和大文件。",
      "提交信息要写清楚“做了什么”，而不是“update”。"
    ],
    code: "python -m venv .venv\n.venv\\Scripts\\activate\npip install -r requirements.txt\ngit add .\ngit commit -m 'add RAG agent'",
    mistakes: ["把 .venv 提交进仓库", "把 API Key 提交到 Git", "一次提交混入多个无关改动"],
    interview: "面试官会问：为什么不能把虚拟环境目录提交到 Git？requirements.txt 和 lock 文件有什么区别？",
    questions: [
      {q:"虚拟环境的主要作用是什么？",options:["让电脑更快","隔离不同项目的依赖版本","节省硬盘","替代 Git"],answer:1,explain:"依赖隔离是核心。"},
      {q:".gitignore 应该包含什么？",options:["虚拟环境、密钥、缓存","index.html","README","app.js"],answer:0,explain:"敏感和可再生成内容不应提交。"},
      {q:"为什么提交信息要清晰？",options:["因为好看","方便回溯变更、协作和 code review","为了增加字数","没有作用"],answer:1,explain:"清晰历史是协作基础。"}
    ]
  },
  "L0:5": {
    title: "LLM 原理：token / 上下文 / 温度 / 幻觉 / 流式",
    summary: "这些概念决定了 Agent 的能力边界、成本和工程方案。",
    points: [
      "token 是模型处理文本的最小单位，不是单词也不是字符。中文通常一个字或词切成多个 token。",
      "上下文窗口是模型一次能看到的 token 总量。输入加输出都要算进去。",
      "温度控制随机性：温度低更稳定，温度高更多样。Agent 工具调用通常用低温。",
      "幻觉是模型预测下一个 token 的自然结果，不是故障；要通过检索、来源引用和校验来压制。",
      "流式输出是边生成边返回，能降低首字延迟，但要增量解析。"
    ],
    code: "",
    mistakes: ["以为 token 等于单词", "忽略输出 token 也占用上下文", "把温度和“聪明程度”混为一谈"],
    interview: "面试官会追问：上下文窗口快满时，你会做截断、摘要还是检索？为什么？",
    questions: [
      {q:"上下文窗口包含哪些内容？",options:["只包含输入","输入和输出都占用","只包含输出","只包含系统提示"],answer:1,explain:"输入、输出、系统提示都计入上下文。"},
      {q:"为什么 Agent 工具调用通常用较低温度？",options:["为了省钱","需要更稳定的格式和决策","因为模型会变快","为了产生创意"],answer:1,explain:"工具调用要求稳定可靠。"},
      {q:"流式输出的主要价值是什么？",options:["减少 token","降低首字延迟并改善体验","让模型更聪明","避免幻觉"],answer:1,explain:"边生成边返回，体验更好。"}
    ]
  },
  "L0:6": {
    title: "Agent = LLM + 规划 + 工具 + 记忆",
    summary: "Agent 不只是聊天模型，而是一个会思考、能做事、有记忆的系统。",
    points: [
      "LLM 是大脑，负责理解和推理。",
      "规划让模型决定下一步做什么，而不是一次输出全部。",
      "工具让 Agent 能查询、搜索、调 API、操作环境。模型决策，代码执行。",
      "记忆分为短期和长期：短期靠上下文，长期靠向量库或数据库。",
      "没有退出条件、没有工具异常处理、没有记忆管理的 Agent 只是 Demo。"
    ],
    code: "",
    mistakes: ["把所有逻辑都交给模型", "没有给 Agent 设置退出条件", "把聊天记录无限塞进上下文当作记忆"],
    interview: "面试官会问：Agent 和普通 LLM 问答的本质区别是什么？请用 ReAct 循环说明。",
    questions: [
      {q:"Agent 四要素中，哪一项由代码真正执行而不是模型生成？",options:["规划","工具","推理","记忆"],answer:1,explain:"模型决策调用工具，但工具执行由代码完成。"},
      {q:"为什么 Agent 需要退出条件？",options:["为了节约内存","防止无限循环和成本失控","为了更好看","为了增加 token"],answer:1,explain:"退出条件是生产安全必备。"},
      {q:"长期记忆通常用什么实现？",options:["只靠上下文","向量库或结构化存储","临时变量","CSS"],answer:1,explain:"长期记忆需要外部存储。"}
    ]
  },
  "L0:7": {
    title: "Workflow 与 Agentic 的区别",
    summary: "稳定优先用 Workflow，灵活优先用 Agentic。工程判断比追名词更重要。",
    points: [
      "Workflow 是固定流程，步骤和分支由代码预先定义，可控、可预测。",
      "Agentic 是模型根据中间结果动态决定下一步，更灵活但也更难控制。",
      "大多数生产系统是混合模式：稳定步骤用 Workflow，关键推理点用 Agentic。",
      "不要为了“Agentic”而 Agentic，成本和稳定性都要算账。"
    ],
    code: "",
    mistakes: ["认为 Agentic 一定更高级", "把所有流程都交给模型自由发挥", "低估固定流程的可观测性"],
    interview: "面试官会追问：什么情况下你会把 Agentic 降级为 Workflow？请给出判断标准。",
    questions: [
      {q:"Workflow 的主要优势是什么？",options:["更灵活","稳定、可控、易观测","不需要代码","模型更强"],answer:1,explain:"固定流程更可控。"},
      {q:"Agentic 更适合什么场景？",options:["路径不确定、需要动态决策","重复固定流程","简单计算","静态表单"],answer:0,explain:"动态决策是 Agentic 的价值。"},
      {q:"生产系统通常怎么做？",options:["只选一种","混合使用 Workflow 和 Agentic","不用任何流程","让模型自由发挥"],answer:1,explain:"混合模式更实用。"}
    ]
  },
  "L1:0": {
    title: "系统提示词与角色设定",
    summary: "系统提示词是给模型的“岗位说明书”，不是随便写一句话。",
    points: [
      "身份、任务、背景、要求、示例五件套，越清楚模型越稳定。",
      "身份设定不是让模型演戏，而是帮助它理解视角、边界和输出风格。",
      "系统提示词要和用户输入隔离，不可信输入不能覆盖系统规则。",
      "生产环境要把提示词当代码管理：版本化、评测、回归测试。"
    ],
    code: "",
    mistakes: ["把系统提示词写成一堆口号", "让用户输入直接拼接进系统提示词", "改提示词不做回归测试"],
    interview: "面试官会问：为什么不能把用户输入直接拼进系统提示词？Prompt 注入攻击是怎么发生的？",
    questions: [
      {q:"系统提示词五件套通常包括什么？",options:["身份、任务、背景、要求、示例","颜色、字体、按钮、间距","数据库、缓存、网关、域名","HTML、CSS、JS、JSON"],answer:0,explain:"五件套让任务定义清晰。"},
      {q:"为什么系统提示词要做版本管理？",options:["为了占空间","提示词变更会影响模型行为，需要评测和回滚","为了好看","没有原因"],answer:1,explain:"提示词也是工程资产。"},
      {q:"Prompt 注入的本质是什么？",options:["模型没电","把不可信输入伪装成指令改变模型行为","网络延迟","数据库故障"],answer:1,explain:"隔离不可信输入是关键。"}
    ]
  },
  "L1:1": {
    title: "结构化输出",
    summary: "让模型返回 JSON，程序才能稳定接住结果。",
    points: [
      "结构化输出不是“看起来像 JSON”，而是能被 Schema 校验。",
      "字段名、类型、枚举、必填项都要写清楚。",
      "模型仍可能输出错误，代码要做校验、重试和降级。",
      "大厂常用 JSON Schema 或 Pydantic 约束输出。"
    ],
    code: "{ \"intent\": \"query_weather\", \"city\": \"Beijing\", \"confidence\": 0.9 }",
    mistakes: ["只写“请输出 JSON”，不定义字段", "信任模型输出不做校验", "解析失败直接崩溃"],
    interview: "面试官会追问：模型输出 JSON 格式错误时，你会重试、修复还是降级？依据是什么？",
    questions: [
      {q:"结构化输出最重要的原因是什么？",options:["好看","程序能稳定解析并继续处理","模型更聪明","减少 token"],answer:1,explain:"结构化让代码可接住结果。"},
      {q:"模型返回 JSON 格式错误，工程上应该？",options:["直接崩溃","校验、重试、失败降级","忽略错误","让用户自己看"],answer:1,explain:"模型输出不可完全信任。"},
      {q:"JSON Schema 的作用是什么？",options:["压缩图片","定义字段、类型和约束","加速网络","管理域名"],answer:1,explain:"Schema 是输出契约。"}
    ]
  },
  "L1:2": {
    title: "Few-shot 与 CoT",
    summary: "给例子能让模型模仿；让模型先想再答能降低复杂任务错误。",
    points: [
      "Few-shot 是给少量标准输入输出，比写一堆规则更有效。",
      "例子要和真实任务分布一致，不要只给极端样例。",
      "CoT 让模型分步推理，适合数学、逻辑和多步任务。",
      "不是所有任务都需要 CoT，简单任务直接回答更省钱。"
    ],
    code: "",
    mistakes: ["Few-shot 例子和实际任务不一致", "复杂任务不让模型分步思考", "把 CoT 当万能药"],
    interview: "面试官会问：什么任务适合 CoT？什么任务不适合？如何评估 CoT 是否真的提升了准确率？",
    questions: [
      {q:"Few-shot 的核心价值是什么？",options:["给模型少量示例帮助理解任务","减少模型参数","增加 token 成本","让模型更慢"],answer:0,explain:"例子比规则更直观。"},
      {q:"CoT 最适合什么任务？",options:["简单寒暄","多步推理和复杂逻辑","随机生成","颜色识别"],answer:1,explain:"分步推理适合复杂任务。"},
      {q:"为什么不是所有任务都用 CoT？",options:["因为太便宜","会增加延迟和成本，简单任务不划算","因为模型不喜欢","没有原因"],answer:1,explain:"按收益使用。"}
    ]
  },
  "L1:3": {
    title: "ReAct：Reason → Act → Observe",
    summary: "ReAct 是 Agent 的核心循环，必须会手写和解释。",
    points: [
      "Reason 是模型思考下一步该做什么。",
      "Act 是调用工具或输出最终答案。",
      "Observe 是把工具结果反馈给模型，形成闭环。",
      "要设置最大步数、超时、循环检测和失败降级。"
    ],
    code: "Step 1 Reason: 需要查询天气\nStep 2 Act: call weather(city)\nStep 3 Observe: result = 22℃\nStep 4 Reason: 已获得答案，输出",
    mistakes: ["把 ReAct 当成一次调用", "没有观察结果就继续推理", "不设置退出条件导致死循环"],
    interview: "面试官会问：请手写一个 ReAct 循环，并说明如果工具连续失败三次，你会怎么处理。",
    questions: [
      {q:"ReAct 的 Observe 阶段主要作用是什么？",options:["让界面好看","把工具结果反馈给模型，推进决策","减少工具调用","提高温度"],answer:1,explain:"观察结果是闭环关键。"},
      {q:"Agent 工具连续失败时，正确做法是？",options:["无限重试","达到阈值后降级、换策略或返回明确错误","忽略错误","删除工具"],answer:1,explain:"要设置失败阈值和降级。"},
      {q:"为什么必须限制最大步数？",options:["为了省钱","防止无限循环和成本失控","为了好看","没有原因"],answer:1,explain:"退出条件是生产必备。"}
    ]
  },
  "L1:4": {
    title: "自我反思与纠错",
    summary: "让模型检查自己的答案，再改一轮，能明显降低低级错误。",
    points: [
      "首轮生成后，让模型找事实错误、逻辑漏洞和格式问题。",
      "反思要有明确检查清单，不能只说“再想想”。",
      "可以结合外部工具验证，而不是只靠模型自己觉得对。",
      "反思会增加延迟和成本，只在高价值任务使用。"
    ],
    code: "",
    mistakes: ["只问“你确定吗”不给检查标准", "反思不结合真实数据", "所有任务都做多轮反思"],
    interview: "面试官会问：自我反思为什么不能完全解决幻觉？什么时候必须引入外部验证？",
    questions: [
      {q:"自我反思为什么不能完全解决幻觉？",options:["因为模型可能继续自信地错","因为反思太慢","因为模型不会说话","因为 API 限制"],answer:0,explain:"模型仍可能自我强化错误。"},
      {q:"什么时候应该引入外部验证？",options:["所有情况","事实性强、高风险、需要可追溯的场景","永远不需要","只有测试时"],answer:1,explain:"事实性任务要靠外部来源。"},
      {q:"好的反思提示词应该包含什么？",options:["具体检查清单","只写“再想想”","只写“你错了”","随机问题"],answer:0,explain:"检查标准要明确。"}
    ]
  },
  "L1:5": {
    title: "长上下文与 Prompt Caching",
    summary: "上下文是有限资源，缓存能显著降低成本。",
    points: [
      "输入和输出都占上下文，不是越长越好。",
      "Prompt Caching 对稳定前缀复用 token，命中越多越省钱。",
      "把静态系统提示词和文档放前面，动态内容放后面，有利于缓存命中。",
      "上下文接近上限时，要截断、摘要或检索，而不是硬塞。"
    ],
    code: "",
    mistakes: ["频繁改变系统提示词前缀", "把所有资料都塞进上下文", "忽略输出 token 也占窗口"],
    interview: "面试官会问：如何组织提示词才能提高缓存命中率？缓存失效的常见原因是什么？",
    questions: [
      {q:"Prompt Caching 主要优化什么？",options:["模型质量","成本和延迟","界面颜色","数据库容量"],answer:1,explain:"复用稳定前缀降低成本。"},
      {q:"哪些内容适合放在提示词前面？",options:["动态用户输入","稳定系统提示词和共享文档","随机内容","每次变化的 token"],answer:1,explain:"稳定内容放前面有利于缓存。"},
      {q:"上下文接近上限时，工程上通常怎么做？",options:["继续硬塞","截断、摘要或检索","关闭模型","删除输出"],answer:1,explain:"上下文管理是设计问题。"}
    ]
  },
  "L1:6": {
    title: "代码管逻辑，模型管推理",
    summary: "不要让模型做代码该做的事，也不要让代码替模型理解语义。",
    points: [
      "业务流程、条件判断、异常处理、数据清洗应写在代码里。",
      "模型负责理解自然语言、生成内容、做模糊推理。",
      "模型输出只作为系统的一部分，代码要校验和兜底。",
      "这样系统更稳定、可测试、可维护。"
    ],
    code: "if resp.status_code != 200:\n    return {'error': 'api_failed'}\n# 业务规则由代码处理",
    mistakes: ["把业务分支全交给模型", "让模型直接操作敏感系统", "代码完全不信模型，或完全信模型"],
    interview: "面试官会问：哪些逻辑绝对不能交给模型？为什么？请举例。",
    questions: [
      {q:"下面哪项应该由代码而不是模型负责？",options:["写诗","业务判断和异常处理","解释概念","总结文章"],answer:1,explain:"逻辑放代码，模型管推理。"},
      {q:"为什么不能让模型直接操作敏感系统？",options:["因为模型太便宜","输出不可控，可能误操作或注入","因为模型不会写代码","没有原因"],answer:1,explain:"敏感操作需要权限和代码兜底。"},
      {q:"模型输出的正确使用方式是什么？",options:["完全信任","作为系统一部分，代码校验后使用","直接写数据库","忽略代码"],answer:1,explain:"模型输出要经过代码层。"}
    ]
  },
  "L2:0": {
    title: "工具调用 Function Calling",
    summary: "模型负责决定调用什么工具、传什么参数，代码负责真正执行。",
    points: [
      "工具定义包含 name、description、parameters，参数要写类型和说明。",
      "模型输出的是调用意图，不是执行结果。",
      "代码要校验参数、执行工具、把结果转成模型能理解的结构。",
      "工具过多会降低模型选择准确率，按需暴露最小工具集。"
    ],
    code: "def get_weather(city: str):\n    return {'city': city, 'temp': 22}",
    mistakes: ["让模型直接执行工具", "参数 Schema 不完整", "一次暴露几十个工具"],
    interview: "面试官会问：工具调用失败后，你如何让模型知道失败并尝试修复参数？",
    questions: [
      {q:"Function Calling 中，谁真正执行工具？",options:["模型","代码","浏览器","用户"],answer:1,explain:"模型决策，代码执行。"},
      {q:"工具定义中 parameters 的作用是什么？",options:["美化界面","约束模型传参类型和字段","增加 token","管理数据库"],answer:1,explain:"Schema 是调用契约。"},
      {q:"为什么不宜一次暴露太多工具？",options:["因为太便宜","模型选择可能变差，延迟和成本上升","因为界面放不下","没有原因"],answer:1,explain:"工具集要按场景裁剪。"}
    ]
  },
  "L2:1": {
    title: "工具异常、熔断与权限",
    summary: "生产 Agent 必须有工具异常处理和权限边界，不能模型说调就调。",
    points: [
      "工具超时、返回异常、参数错误都要被捕获，并把错误反馈给模型。",
      "连续失败要熔断，避免无限重试和雪崩。",
      "权限白名单限制模型能调用哪些工具，敏感操作要人工确认。",
      "所有工具调用要留审计日志，方便排查和复盘。"
    ],
    code: "try:\n    result = call_tool(...)\nexcept ToolTimeout:\n    return {'error': 'timeout'}",
    mistakes: ["工具失败不反馈给模型", "没有熔断和重试上限", "敏感工具无权限控制"],
    interview: "面试官会追问：如果模型请求了一个它没有权限的工具，你会返回错误、拒绝还是降级？",
    questions: [
      {q:"工具调用连续失败时，应该怎么办？",options:["一直重试","熔断、降级或返回明确错误","忽略","删除工具"],answer:1,explain:"连续失败要熔断。"},
      {q:"权限白名单的作用是什么？",options:["让模型更快","限制可调用工具，降低风险","增加 token","美化日志"],answer:1,explain:"权限控制是安全边界。"},
      {q:"为什么工具调用需要审计日志？",options:["为了好看","便于排查、复盘和合规","为了增加成本","没有原因"],answer:1,explain:"审计是生产可观测的一部分。"}
    ]
  },
  "L2:2": {
    title: "记忆系统：短期 / 长期 / 向量库 / 遗忘",
    summary: "记忆不是把聊天记录无限塞进上下文，而是有策略地存、取、忘。",
    points: [
      "短期记忆靠上下文窗口，容量有限，适合当前任务状态。",
      "长期记忆靠向量库或结构化存储，适合用户画像、知识沉淀。",
      "要设计记忆提取、检索和更新，不能只存不更新。",
      "隐私敏感内容要可删除、可审计，避免长期保留。"
    ],
    code: "",
    mistakes: ["把聊天记录全部塞进上下文", "长期记忆只存不更新", "不设计遗忘和隐私删除"],
    interview: "面试官会问：长期记忆怎么设计？什么内容应该进短期记忆，什么进长期记忆？",
    questions: [
      {q:"短期记忆通常由什么承载？",options:["上下文窗口","数据库","硬盘","CDN"],answer:0,explain:"短期记忆靠上下文窗口。"},
      {q:"长期记忆更适合存什么？",options:["当前临时变量","用户画像和长期知识","CSS","按钮状态"],answer:1,explain:"长期记忆存稳定信息。"},
      {q:"为什么记忆系统要考虑遗忘？",options:["为了省钱","信息会过时，且隐私需要删除","为了更快","没有原因"],answer:1,explain:"记忆要更新和删除。"}
    ]
  },
  "L2:3": {
    title: "RAG：Embedding / 分块 / 向量库 / 检索",
    summary: "RAG 是先找到相关资料，再让模型基于资料回答。",
    points: [
      "文档要先切块，块太小丢上下文，块太大噪声多。",
      "Embedding 把文本转成向量，语义相近的文本距离更近。",
      "向量库负责近似最近邻检索，常用 FAISS、Chroma、Milvus。",
      "检索出的内容要放进提示词，并让模型引用来源。"
    ],
    code: "chunks = split_text(doc, chunk_size=500, overlap=50)\nvectors = embed(chunks)\nindex.add(vectors)",
    mistakes: ["不设置 overlap，导致语义被切断", "分块过大或过小", "检索结果不做来源引用"],
    interview: "面试官会追问：chunk_size 和 overlap 怎么选？为什么不能只用一个固定值？",
    questions: [
      {q:"RAG 的核心流程是什么？",options:["先生成答案再找资料","先检索再基于资料生成","只做向量化","只做关键词搜索"],answer:1,explain:"先找到，再生成。"},
      {q:"Embedding 的作用是什么？",options:["压缩图片","把文本映射成语义向量","管理数据库","加速网络"],answer:1,explain:"Embedding 表示语义。"},
      {q:"为什么分块要设置 overlap？",options:["为了增加 token","避免关键语义被切块边界切断","为了好看","没有原因"],answer:1,explain:"overlap 保留上下文连续性。"}
    ]
  },
  "L2:4": {
    title: "重排、混合检索与 RAG 评估",
    summary: "召回之后还要排序，评估之后才知道 RAG 到底行不行。",
    points: [
      "关键词检索和向量检索互补，混合使用通常更稳。",
      "重排模型对候选片段再做精细排序，提高 top-k 质量。",
      "评估要看召回率、准确率、答案忠实度、幻觉率。",
      "用 Ragas 等工具自动评估，建立 bad case 回归集。"
    ],
    code: "",
    mistakes: ["只做向量检索不做关键词", "不重排直接取 top-k", "不做评估就上线"],
    interview: "面试官会问：如果检索准确率低，你会从分块、Embedding、召回还是重排排查？",
    questions: [
      {q:"混合检索通常混合哪两种方式？",options:["关键词和向量","图片和视频","数据库和缓存","前端和后端"],answer:0,explain:"BM25 + 向量更稳。"},
      {q:"重排的主要目的是？",options:["增加候选数量","把最相关结果排到前面","删除向量","降低延迟"],answer:1,explain:"重排提升 top-k 精度。"},
      {q:"RAG 评估不包含下面哪项？",options:["召回率","幻觉率","答案忠实度","按钮颜色"],answer:3,explain:"业务与检索指标才是重点。"}
    ]
  },
  "L2:5": {
    title: "规划：ReAct / Plan-and-Execute / ToT",
    summary: "复杂任务要拆解、规划，并选择适合的规划策略。",
    points: [
      "ReAct 适合边想边做，工具结果会影响下一步。",
      "Plan-and-Execute 先出计划再逐步执行，适合多步任务。",
      "ToT 适合搜索空间大的推理任务，但成本高。",
      "规划必须和工具、记忆、退出条件配合。"
    ],
    code: "",
    mistakes: ["任务不拆解直接让模型硬答", "所有任务都用 ToT", "计划不更新，执行中不根据反馈调整"],
    interview: "面试官会问：Plan-and-Execute 和 ReAct 分别适合什么场景？",
    questions: [
      {q:"Plan-and-Execute 适合什么任务？",options:["需要先拆解再逐步执行的多步任务","简单寒暄","随机输出","单次查询"],answer:0,explain:"先计划后执行。"},
      {q:"ToT 的主要缺点是什么？",options:["太便宜","计算和 token 成本高","不能推理","没有用"],answer:1,explain:"搜索树成本高。"},
      {q:"执行计划时发现结果偏离，应该怎么做？",options:["继续硬跑","根据反馈调整计划或降级","删除计划","忽略结果"],answer:1,explain:"计划要动态调整。"}
    ]
  },
  "L2:6": {
    title: "退出条件与防死循环",
    summary: "没有退出条件的 Agent 一定会失控。",
    points: [
      "设置最大步数、超时时间、重复动作检测。",
      "观察状态是否在推进，如果连续重复要终止或降级。",
      "工具失败达到阈值后，返回明确错误而不是无限重试。",
      "把退出条件写进状态机，而不是靠模型自觉。"
    ],
    code: "max_steps = 10\nwhile step < max_steps and not done:\n    ...",
    mistakes: ["只靠模型自己停止", "没有最大步数和超时", "连续重复仍继续"],
    interview: "面试官会追问：如何检测 Agent 陷入循环？检测到后你会终止、降级还是换模型？",
    questions: [
      {q:"防死循环最基础的措施是什么？",options:["最大步数、超时、重复检测","提高温度","删除工具","只让模型回答一次"],answer:0,explain:"退出条件是工程兜底。"},
      {q:"如何判断 Agent 是否在空转？",options:["看界面颜色","状态是否推进、动作是否重复","看模型大小","看网络速度"],answer:1,explain:"状态推进是判断依据。"},
      {q:"检测到死循环后，应该？",options:["继续运行","终止或降级，并返回可解释结果","忽略","重启电脑"],answer:1,explain:"要有降级策略。"}
    ]
  },
  "L3:0": {
    title: "手写 ReAct 循环",
    summary: "先不用框架，把“想→做→看”跑通，你才真正理解 Agent。",
    points: [
      "循环结构通常是：模型输出 thought 和 action，代码执行 action，再把 observation 交回模型。",
      "要定义最大步数、超时、停止条件和错误降级。",
      "工具结果要结构化，不能把大段原始文本直接塞回模型。",
      "手写 ReAct 能帮你理解框架底层在做什么。"
    ],
    code: "while steps < max_steps and not done:\n    thought, action = llm(...)\n    observation = execute(action)\n    messages.append(observation)",
    mistakes: ["没有停止条件", "不处理工具错误", "把 ReAct 写成一次 prompt 调用"],
    interview: "面试官会问：请手写一个 ReAct 循环，并说明 Observation 如何影响下一轮 Reasoning。",
    questions: [
      {q:"ReAct 循环中最关键的三个步骤是什么？",options:["Read、Write、Run","Reason、Act、Observe","React、Ask、Talk","Build、Test、Deploy"],answer:1,explain:"ReAct = Reason → Act → Observe。"},
      {q:"为什么 Observation 必须是结构化结果？",options:["为了好看","模型更容易理解并继续决策","为了增加 token","没有原因"],answer:1,explain:"结构化反馈更可靠。"},
      {q:"手写 ReAct 的最大价值是什么？",options:["代码更长","理解框架底层循环和边界","更慢","不需要测试"],answer:1,explain:"先理解本质再上框架。"}
    ]
  },
  "L3:1": {
    title: "LangGraph：State / Checkpointer / 中断恢复",
    summary: "LangGraph 用状态图管理 Agent 流程，让复杂逻辑可控、可恢复。",
    points: [
      "State 是图中共享的数据结构，节点更新它，边决定下一步。",
      "Checkpointer 保存状态快照，支持断点续跑和时间旅行。",
      "中断恢复不是重头再来，而是从上次状态继续。",
      "Edge 可以条件分支，让流程根据结果走不同路径。"
    ],
    code: "graph.add_node('agent', agent_node)\ngraph.add_edge(START, 'agent')",
    mistakes: ["把 State 当全局变量随便改", "不使用 Checkpointer 却期待中断恢复", "所有逻辑都写在一个节点"],
    interview: "面试官会问：Checkpointer 和普通缓存有什么区别？为什么它能让 Agent 中断恢复？",
    questions: [
      {q:"LangGraph 中的 State 是什么？",options:["CSS 样式","图内共享的工作状态","数据库表","模型参数"],answer:1,explain:"State 是图中流转的状态。"},
      {q:"Checkpointer 的核心作用是什么？",options:["检查语法","保存状态，支持中断恢复","压缩图片","限制输出"],answer:1,explain:"Checkpointer 提供持久化和恢复。"},
      {q:"中断恢复和重头再来的区别是什么？",options:["没区别","从上次状态继续，而不是重新开始","恢复更慢","恢复会删除状态"],answer:1,explain:"中断恢复是续跑。"}
    ]
  },
  "L3:2": {
    title: "Human-in-the-loop 与 Edge",
    summary: "关键节点让人确认，避免模型自动跑飞。",
    points: [
      "HITL 放在高风险、不可逆或需要审批的节点。",
      "Edge 控制流程分支，不是所有节点都要人工确认。",
      "人工确认要有超时和默认策略，不能无限等待。",
      "记录人工操作，方便审计和复盘。"
    ],
    code: "if risk_level == 'high':\n    await human_approve(proposal)",
    mistakes: ["所有节点都人工确认", "高风险操作全自动", "没有默认超时策略"],
    interview: "面试官会问：哪些节点适合 HITL？如果人一直不点确认，系统应该怎么办？",
    questions: [
      {q:"HITL 最适合放在什么节点？",options:["所有节点","高风险、不可逆、需审批的节点","开始节点","结束节点"],answer:1,explain:"只在高价值关键节点人工确认。"},
      {q:"人工确认长时间无响应，系统应该？",options:["一直等","超时后按默认策略处理或提醒","直接崩溃","删除任务"],answer:1,explain:"要有超时和默认策略。"},
      {q:"Edge 在 LangGraph 中的作用是什么？",options:["画图","控制节点之间的条件分支","存储状态","训练模型"],answer:1,explain:"Edge 决定流程走向。"}
    ]
  },
  "L3:3": {
    title: "AgentScope / Pydantic AI / DSPy",
    summary: "不同框架解决不同问题，先精通一个，能讲清为什么选它。",
    points: [
      "AgentScope 偏多智能体和分布式协作。",
      "Pydantic AI 强在类型安全、结构化输出和测试。",
      "DSPy 重点在自动优化 prompt 和模型管线。",
      "选框架看团队、生态、可控性和项目阶段，不要贪多。"
    ],
    code: "class WeatherResult(BaseModel):\n    city: str\n    temp: int",
    mistakes: ["同时学太多框架", "说不清为什么选某个框架", "用框架掩盖原理不懂"],
    interview: "面试官会问：Pydantic AI 和 LangGraph 分别适合什么场景？你会怎么选型？",
    questions: [
      {q:"Pydantic AI 的主要优势是什么？",options:["类型安全和结构化输出","画画","分布式训练","视频处理"],answer:0,explain:"类型安全是核心。"},
      {q:"DSPy 主要优化什么？",options:["界面","prompt 和模型管线","数据库","网络"],answer:1,explain:"DSPy 自动优化提示和流程。"},
      {q:"选框架时最重要的依据是什么？",options:["哪个名字好听","项目需求、生态、可控性和团队能力","哪个更新","哪个代码少"],answer:1,explain:"选型要看实际约束。"}
    ]
  },
  "L3:4": {
    title: "LlamaIndex 与低代码 Dify / Coze",
    summary: "低代码能快速验证，代码框架能深度定制。",
    points: [
      "LlamaIndex 擅长 RAG 数据索引和检索编排。",
      "Dify / Coze 适合快速原型、流程编排和团队协作。",
      "低代码不是终点，要能讲清底层逻辑并用代码重构。",
      "面试时不要只说“我用 Coze 搭过”，要说清流程、边界和限制。"
    ],
    code: "",
    mistakes: ["只停在低代码拖拽", "把 LlamaIndex 当成万能框架", "说不清低代码平台内部流程"],
    interview: "面试官会问：你用 Coze 搭 Agent 时，如果需求超出平台能力怎么办？",
    questions: [
      {q:"LlamaIndex 最适合什么？",options:["RAG 数据索引和检索编排","前端动画","数据库运维","视频剪辑"],answer:0,explain:"LlamaIndex 是 RAG 框架。"},
      {q:"低代码平台的主要价值是什么？",options:["快速验证原型","替代所有代码","训练大模型","管理服务器"],answer:0,explain:"低代码适合快速验证。"},
      {q:"面试时只说自己用 Coze 搭过 Agent，够吗？",options:["够","不够，还要讲清流程、边界和底层逻辑","非常够","看情况"],answer:1,explain:"大厂看底层理解。"}
    ]
  }
};

const TOPIC_INTERVIEW = {
  "L0:0": {interviewer:"请解释 Python 里可变对象作为函数默认参数会有什么问题？", answer:"默认参数在函数定义时只创建一次。如果默认值是列表或字典，多次调用会共享并累积修改。正确做法是把默认值设为 None，在函数体内再创建新对象。"},
  "L0:1": {interviewer:"如果 JSON 文件很大，你会怎么读取？", answer:"不要一次读入内存。可以用流式解析，例如 ijson 逐条处理，或按行读取再解析，避免内存暴涨。"},
  "L0:2": {interviewer:"API 偶发超时，你会怎么设计重试？", answer:"设置 timeout，采用指数退避重试，并设置最大重试次数。对幂等请求才可安全重试；非幂等请求要谨慎。"},
  "L0:3": {interviewer:"asyncio、多线程、多进程分别适合什么场景？", answer:"asyncio 适合大量 IO 等待；多线程适合 IO 和需要共享内存的任务；多进程适合 CPU 密集任务。Agent 并发主要用 asyncio。"},
  "L0:4": {interviewer:"为什么 requirements.txt 和 lock 文件都需要？", answer:"requirements.txt 描述直接依赖范围，lock 文件锁定完整依赖树和版本，保证不同环境可复现。"},
  "L0:5": {interviewer:"上下文窗口快满时，你会怎么做？", answer:"优先保留系统提示词和当前任务关键信息，对历史做摘要或截断；需要长期知识时走 RAG，而不是硬塞。"},
  "L0:6": {interviewer:"Agent 和普通 LLM 问答的本质区别是什么？", answer:"普通 LLM 一次生成答案；Agent 会规划、调用工具、观察结果并继续决策，形成闭环。"},
  "L0:7": {interviewer:"什么情况下你会把 Agentic 降级为 Workflow？", answer:"当任务步骤稳定、可预测、高风险或需要强可观测性时，用 Workflow 更安全；只有路径不确定时才保留 Agentic。"},
  "L1:0": {interviewer:"为什么不能把用户输入直接拼进系统提示词？", answer:"因为用户可能注入指令，覆盖系统规则。必须隔离不可信输入，做输入过滤、权限限制和输出审计。"},
  "L1:1": {interviewer:"模型返回 JSON 格式错误，你会怎么处理？", answer:"先做 Schema 校验；失败可重试一次，再失败则降级为默认结果或返回明确错误，不能直接崩溃。"},
  "L1:2": {interviewer:"什么任务适合 CoT，什么任务不适合？", answer:"多步推理、数学和逻辑任务适合 CoT；简单事实查询、翻译或快速分类不适合，因为会增加延迟和成本。"},
  "L1:3": {interviewer:"请手写 ReAct 循环，并说明工具连续失败怎么办。", answer:"Reason→Act→Observe 循环。连续失败达到阈值后，应停止调用、降级策略或返回明确错误，不能无限重试。"},
  "L1:4": {interviewer:"自我反思为什么不能完全解决幻觉？", answer:"模型可能在反思中继续强化错误。事实性任务必须引入外部检索、来源引用或工具验证。"},
  "L1:5": {interviewer:"如何组织提示词才能提高缓存命中率？", answer:"把稳定的系统提示词和共享文档放前面，动态用户输入放后面；避免每次改变前缀，缓存命中率会更高。"},
  "L1:6": {interviewer:"哪些逻辑绝对不能交给模型？", answer:"权限判断、支付、数据删除、业务流程分支和异常处理等必须由代码控制，模型只做理解、推理和生成。"},
  "L2:0": {interviewer:"工具调用失败后，如何让模型知道并修复参数？", answer:"把结构化错误信息作为 Observation 返回给模型，让它根据错误重试；代码同时校验参数并设置失败上限。"},
  "L2:1": {interviewer:"如果模型请求没有权限的工具，你会怎么处理？", answer:"返回无权限错误，并给出允许的工具列表或降级方案，同时记录审计日志。"},
  "L2:2": {interviewer:"长期记忆怎么设计？", answer:"短期用上下文窗口，长期用向量库和结构化存储；要设计提取、检索、更新、隐私删除和过期策略。"},
  "L2:3": {interviewer:"chunk_size 和 overlap 怎么选？", answer:"根据文档结构和检索需求测试。典型 chunk 300-800 token，overlap 约为 chunk 的 10%-20%，避免切断关键语义。"},
  "L2:4": {interviewer:"检索准确率低，你会从哪一层排查？", answer:"先看 bad case，再依次检查分块质量、Embedding 是否匹配、召回策略是否混合、重排是否有效，最后看提示词和生成模型。"},
  "L2:5": {interviewer:"Plan-and-Execute 和 ReAct 分别适合什么场景？", answer:"Plan-and-Execute 适合步骤相对明确的多步任务；ReAct 适合需要根据工具结果动态调整的交互式任务。"},
  "L2:6": {interviewer:"如何检测 Agent 陷入循环？", answer:"记录每一步的状态和动作，检测重复动作、状态不推进或步数超限，触发后终止或降级。"}
  ,
  "L3:0": {interviewer:"请手写一个 ReAct 循环，并说明 Observation 如何影响下一轮 Reasoning。", answer:"循环读模型输出，若包含 action 就执行工具，把结构化 observation 追加到消息，再让模型基于新信息决定下一步，直到满足停止条件。"},
  "L3:1": {interviewer:"Checkpointer 和普通缓存有什么区别？", answer:"Checkpointer 保存的是状态图执行快照，支持从某个节点恢复和回放；普通缓存通常只存结果，不一定能恢复完整执行状态。"},
  "L3:2": {interviewer:"哪些节点适合 HITL？如果人一直不点确认怎么办？", answer:"高风险、不可逆、需要审批的节点适合 HITL。人工超时后要有默认策略，例如暂停、拒绝或走低风险降级路径，并记录审计。"},
  "L3:3": {interviewer:"Pydantic AI 和 LangGraph 分别适合什么场景？", answer:"Pydantic AI 适合强类型、结构化输出和测试；LangGraph 适合复杂状态图、多节点流程和中断恢复。两者可以组合。"},
  "L3:4": {interviewer:"你用 Coze 搭 Agent 时，如果需求超出平台能力怎么办？", answer:"先判断是流程、工具、权限还是模型能力受限，再把关键部分用代码实现，例如 FastAPI 服务或自定义 MCP 工具，最后保留低代码做编排。"}
};

const TREND_SNAPSHOTS = [
  [
    {tag:"JD 高频词",title:"RAG 从加分项变成基础项",text:"大厂 AI/Agent 实习岗普遍要求能搭知识库问答，能讲清分块、检索、重排和幻觉处理。",query:"AI Agent 实习生 RAG 2026"},
    {tag:"面试重点",title:"工具调用和异常处理",text:"面试会问工具报错、权限控制、死循环退出和成本控制，不再是只问概念。",query:"AI Agent 面试 工具调用 死循环 2026"},
    {tag:"框架趋势",title:"LangGraph + MCP 成为主流组合",text:"工程岗更看重可中断、可恢复、可观测，而不是只有一个聊天 Demo。",query:"LangGraph MCP Agent 2026"}
  ],
  [
    {tag:"岗位变化",title:"Agent Harness / AgentOps 独立设岗",text:"上下文管理、任务状态、调试评测、CI/CD 成为新的工程重点。",query:"AgentOps Harness 实习 2026"},
    {tag:"能力缺口",title:"评测可观测被严重低估",text:"能讲清楚准确率、幻觉率、延迟和成本，会让候选人非常突出。",query:"Agent 评测 Langfuse Ragas 2026"},
    {tag:"AI 工具",title:"大厂点名重度使用 AI 编程工具",text:"Cursor、Claude Code、Codex 等成为零基础转方向者的弯道超车点。",query:"Cursor Codex AI Agent 实习 2026"}
  ],
  [
    {tag:"赛道方向",title:"AI 应用开发比算法更友好",text:"本科转方向优先切入 AI 应用 / Agent 开发，算法岗仍偏向硕士和论文。",query:"AI 应用开发 本科 实习 2026"},
    {tag:"多智能体",title:"MCP / A2A / Skills 是分水岭",text:"能不能讲清多 Agent 编排，是拉开差距的关键问题。",query:"多智能体 MCP A2A 实习 2026"},
    {tag:"项目要求",title:"完整项目闭环更重要",text:"从需求、方案、开发、评测到上线复盘，比背一堆名词更有说服力。",query:"Agent 项目 实习 答辩 2026"}
  ]
];

const STUDY_PLAN = [
  {
    week: "第一周",
    title: "打牢基础与框架",
    goal: "建立 Agent 开发知识体系，不追求第一周就精通细节。",
    focus: ["Python / LangChain / Copilot 等核心技能", "Deep Agent、Claude Code 等模型原理", "模型微调、部署、前端与服务端开发基础"],
    strategy: "以入门为主，先建立整体地图。重点搞懂每个工具解决什么问题，为后面项目实战做铺垫。",
    tasks: [
      "完成 L0、L1 全部测验",
      "跑通一个模型 API 调用脚本",
      "用 FastAPI 起一个最小接口",
      "阅读 LangGraph 官方入门示例并复现"
    ]
  },
  {
    week: "第二周",
    title: "实战项目体系：第一批",
    goal: "做出成体系的项目，而不是零散培训作品。",
    focus: ["AI Infra 架构与 Harness 底座", "AI SDD 效能提升", "商品交易 Harness + Agent Loop + 自进化体系"],
    strategy: "每个项目都要有：需求、技术方案、代码仓库、演示、量化结果。",
    tasks: [
      "完成 L2、L3 测验",
      "搭一个带工具调用和记忆的 RAG Agent",
      "用 LangGraph 加 Checkpointer 和 Human-in-the-loop",
      "把项目 README 和运行截图补齐"
    ]
  },
  {
    week: "第三周",
    title: "实战项目体系：第二批",
    goal: "继续扩项目，形成 9 个项目的完整体系。",
    focus: ["数据中台与多模态素材管理中心", "销售考核 Agent", "自媒体 Agent", "模型微调"],
    strategy: "每个项目不要只做界面，要能讲清架构、边界、异常处理和评测指标。",
    tasks: [
      "完成 L4、L5、L6 测验",
      "做多智能体协作项目",
      "接 FastAPI + Docker 部署一个公开链接",
      "给至少 3 个项目写评测指标与 bad case"
    ]
  },
  {
    week: "第四周",
    title: "简历制作与投递",
    goal: "把项目变成大厂听得懂的简历和面试表达。",
    focus: ["惊艳的自我介绍", "成体系的项目经历", "点、面、体的知识架构"],
    strategy: "边投边准备，根据市场反馈持续优化简历和面试答案。",
    tasks: [
      "完成 L7 测验",
      "用 STAR 重写 3 个核心项目",
      "准备 1 分钟自我介绍和 3 分钟项目讲解",
      "投递 AI 应用 / Agent 实习岗，并记录反馈"
    ]
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
