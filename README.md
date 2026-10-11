# AI Foundation Design System

面向企业级 AI 基座产品的设计与实现规范，覆盖模型、Prompt、知识库、Agent、工作流、评测、运行观测、权限、安全和成本治理。

[![Lint DESIGN.md](https://github.com/leenlbma/ai-foundation-design-system/actions/workflows/lint.yml/badge.svg)](https://github.com/leenlbma/ai-foundation-design-system/actions/workflows/lint.yml)

**English summary.** AI Foundation Design System is a design and implementation specification for enterprise AI foundation products, covering models, prompts, knowledge bases, agents, workflows, evaluation, observability, permissions, security and cost governance. It is built on Ant Design conventions and the Google Labs DESIGN.md format, and targets WCAG 2.1 AA. The specification is written mostly in Chinese with English section names. It is licensed under CC BY 4.0.

## 快速访问

- [在 GitHub 阅读完整 DESIGN.md](https://github.com/leenlbma/ai-foundation-design-system/blob/main/DESIGN.md)
- [获取 DESIGN.md Raw 直链](https://raw.githubusercontent.com/leenlbma/ai-foundation-design-system/main/DESIGN.md)
- 将 DESIGN.md 放入产品或前端项目根目录，让设计师、工程师和 AI Coding Agent 共享同一套设计契约。

AI 工具可以直接使用以下提示词：

> 阅读 https://raw.githubusercontent.com/leenlbma/ai-foundation-design-system/main/DESIGN.md
> 并严格遵循其中的 Token、组件规则与 AI 基座产品契约进行设计和实现。

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

每次推送和 Pull Request 都由 GitHub Actions 自动运行该校验。当前版本（官方校验器输出）：

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

## 导出与使用

`tokens/` 目录由 `DESIGN.md` 生成，请勿手工修改：

```bash
node tokens/build-dark.mjs            # 写入 tokens/tokens.css 与 tokens/tokens.json
node tokens/build-dark.mjs --report   # 同时打印深色色表与全部对比度
```

脚本调用官方 CLI 导出浅色 Token，原样保留，再把 `dark-*` 颜色导出为深色变量并校验对比度。

- `tokens/tokens.css`：Tailwind v4 `@theme` 浅色变量；深色变量位于 `.dark` 与 `@media (prefers-color-scheme: dark)`（`:root:not(.light)`）。
- `tokens/tokens.json`：W3C DTCG 格式；深色值在顶层 `color-dark` 组。

修改 `DESIGN.md` 后必须重新导出；CI 会重新生成并比对，同时检查深色对比度，不一致或不达标则失败。

## 维护原则

- YAML Front Matter 中的 Token 是机器执行的规范值。
- Markdown 正文解释设计理由、使用边界与验收标准。
- 新增页面优先复用现有 Component、Pattern 和 Token。
- 例外必须记录原因、Owner、风险、缓解措施和过期时间。

## 许可

本项目采用 [CC BY 4.0](LICENSE) 许可：可自由使用、转载和改编，包括商业用途，但需要署名并注明修改。

署名示例：

> AI Foundation Design System by Leen Ma (LeenMa), https://github.com/leenlbma/ai-foundation-design-system , licensed under CC BY 4.0.

作者：Leen Ma（署名 LeenMa）。小红书：motor，GitHub：leenlbma，均为同一人。邮箱：leenlbma@gmail.com
