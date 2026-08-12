# AI Foundation Design System

面向企业级 AI 基座产品的设计与实现规范，覆盖模型、Prompt、知识库、Agent、工作流、评测、运行观测、权限、安全和成本治理。

## 快速访问

- [在 GitHub 阅读完整 DESIGN.md](https://github.com/leenlbma/ai-foundation-design-system/blob/main/DESIGN.md)
- [获取 DESIGN.md Raw 直链](https://raw.githubusercontent.com/leenlbma/ai-foundation-design-system/main/DESIGN.md)
- 将 DESIGN.md 放入产品或前端项目根目录，让设计师、工程师和 AI Coding Agent 共享同一套设计契约。

AI 工具可以直接使用以下提示词：

> 阅读 https://raw.githubusercontent.com/leenlbma/ai-foundation-design-system/main/DESIGN.md，并严格遵循其中的 Token、组件规则与 AI 基座产品契约进行设计和实现。

## 规范基础

本项目同时遵循：

- [Ant Design design.md](https://ant.design/design.md)
- [Google Labs DESIGN.md Format](https://github.com/google-labs-code/design.md)
- WCAG 2.1 AA

## 校验

运行官方校验器：

~~~bash
npx @google/design.md lint DESIGN.md
~~~

当前版本校验结果：

- Errors: 0
- Warnings: 0
- Colors: 25
- Typography scales: 10
- Rounded levels: 7
- Spacing tokens: 10
- Components: 26

## 使用方式

1. 团队成员直接阅读 DESIGN.md。
2. 在需求、设计或编码任务中要求 Agent 先读取 DESIGN.md。
3. 修改 Token 或规则后运行官方校验器。
4. 重大修改使用 diff 检查设计系统回归。

~~~bash
npx @google/design.md diff DESIGN.previous.md DESIGN.md
~~~

## 维护原则

- YAML Front Matter 中的 Token 是机器执行的规范值。
- Markdown 正文解释设计理由、使用边界与验收标准。
- 新增页面优先复用现有 Component、Pattern 和 Token。
- 例外必须记录原因、Owner、风险、缓解措施和过期时间。
