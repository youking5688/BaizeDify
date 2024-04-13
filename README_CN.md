白泽智语AI平台 是一个 LLM 应用开发平台，融合了 Backend as Service 和 LLMOps 的理念，涵盖了构建生成式 AI 原生应用所需的核心技术栈，包括一个内置 RAG 引擎。使用 白泽AI，你可以基于任何模型自部署类似 Assistants API 和 GPTs 的能力。

## 为什么选择 白泽AI

白泽AI 具有模型中立性，相较 LangChain 等硬编码开发库 白泽AI 是一个完整的、工程化的技术栈，而相较于 OpenAI 的 Assistants API 你可以完全将服务部署在本地。

| 功能 | 白泽AI | Assistants API | LangChain |
| --- | --- | --- | --- |
| 编程方式 | 面向 API | 面向 API | 面向 Python 代码 |
| RAG 引擎 | 支持 | 支持 | 不支持 |
| Prompt IDE | 包含 | 包含 | 没有 |
| 支持的 LLMs | 丰富 | 仅 GPT | 丰富 |
| 本地部署 | 支持 | 不支持 | 不适用 |


## 特点

![](./images/models.png)

**1. LLM支持**：与 OpenAI 的 GPT 系列模型集成,或者与开源的 Llama2 系列模型集成。事实上，Dify支持主流的商业模型和开源模型(本地部署或基于 MaaS)。

**2. Prompt IDE**：和团队一起在 Dify 协作，通过可视化的 Prompt 和应用编排工具开发 AI 应用。 支持无缝切换多种大型语言模型。

**3. RAG引擎**：包括各种基于全文索引或向量数据库嵌入的 RAG 能力，允许直接上传 PDF、TXT 等各种文本格式。

**4. AI Agent**：基于 Function Calling 和 ReAct 的 Agent 推理框架，允许用户自定义工具，所见即所得。Dify 提供了十多种内置工具调用能力，如谷歌搜索、DELL·E、Stable Diffusion、WolframAlpha 等。

**5. 持续运营**：监控和分析应用日志和性能，使用生产数据持续改进 Prompt、数据集或模型。