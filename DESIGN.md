---
version: alpha
name: AI Foundation Design System
description: Enterprise AI foundation design system built on Ant Design conventions, optimized for model, knowledge, agent, workflow, evaluation, observability, and governance products.
colors:
  primary: '#0958D9'
  primary-hover: '#1677FF'
  primary-active: '#003EB3'
  success: '#389E0D'
  warning: '#D46B08'
  error: '#CF1322'
  info: '#0958D9'
  surface: '#FFFFFF'
  surface-container: '#FAFAFA'
  surface-layout: '#F5F5F5'
  surface-elevated: '#FFFFFF'
  on-surface: 'rgba(0, 0, 0, 0.88)'
  on-surface-variant: 'rgba(0, 0, 0, 0.65)'
  on-surface-tertiary: 'rgba(0, 0, 0, 0.45)'
  on-surface-disabled: 'rgba(0, 0, 0, 0.25)'
  outline: '#D9D9D9'
  outline-variant: '#F0F0F0'
  ai-accent: '#531DAB'
  ai-accent-container: '#F9F0FF'
  knowledge-accent: '#006D75'
  knowledge-container: '#E6FFFB'
  tool-accent: '#AD4E00'
  tool-container: '#FFF7E6'
  risk-container: '#FFF1F0'
  on-primary: '#FFFFFF'
typography:
  display-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 46px
  headline-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 20px
  code:
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  none: 0px
  sm: 2px
  md: 4px
  DEFAULT: 6px
  lg: 8px
  xl: 16px
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 40px
  control-height: 32px
  control-height-lg: 40px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    height: 32px
    padding: 0 16px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-primary-active:
    backgroundColor: '{colors.primary-active}'
  button-default:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    height: 32px
    padding: 0 16px
  input-field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    height: 32px
    padding: 4px 12px
  select-field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    height: 32px
    padding: 0 12px
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 24px
  modal:
    backgroundColor: '{colors.surface-elevated}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 20px 24px
  table-header:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.title-md}'
    padding: 12px 16px
  tag:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface-variant}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.md}'
    padding: 0 8px
  prompt-editor:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.code}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px
  ai-output:
    backgroundColor: '{colors.ai-accent-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    padding: 16px
  knowledge-source:
    backgroundColor: '{colors.knowledge-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.md}'
    padding: 8px 12px
  tool-call:
    backgroundColor: '{colors.tool-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.code}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px
  execution-step:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 16px
  approval-gate:
    backgroundColor: '{colors.risk-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    padding: 16px
  app-shell:
    backgroundColor: '{colors.surface-layout}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
  metadata:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface-tertiary}'
    typography: '{typography.body-sm}'
  input-disabled:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface-disabled}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    height: 32px
    padding: 4px 12px
  alert-success:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    padding: 8px 12px
  alert-warning:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    padding: 8px 12px
  alert-info:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.info}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    padding: 8px 12px
  knowledge-tag:
    backgroundColor: '{colors.knowledge-container}'
    textColor: '{colors.knowledge-accent}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.md}'
    padding: 0 8px
  tool-tag:
    backgroundColor: '{colors.tool-container}'
    textColor: '{colors.tool-accent}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.md}'
    padding: 0 8px
  badge-status-success:
    backgroundColor: '{colors.success}'
    rounded: '{rounded.full}'
    width: 6px
    height: 6px
  badge-status-warning:
    backgroundColor: '{colors.warning}'
    rounded: '{rounded.full}'
    width: 6px
    height: 6px
---

# AI 基座设计规范

## Overview

本文件是 AI 基座产品的设计与实现契约，同时服务于设计师、产品经理、工程师和 AI Coding Agent。机器可读 Token 是视觉实现的规范值，Markdown 正文解释为什么使用这些值、何时使用以及如何验收。

设计基线参考 Ant Design 的企业级产品方法，但不照搬品牌外观。AI 基座在其基础上增加透明、可控、可追溯和安全默认四项约束。

决策优先级如下：

1. Certain：状态、环境、版本和下一步明确。
2. Controllable：用户可以审阅、停止、重试、批准或回滚关键 AI 行为。
3. Traceable：输入、配置、模型、数据、工具、输出和操作者可追溯。
4. Natural：遵循成熟企业软件认知，不创造无必要的新交互。
5. Meaningful：视觉强调只服务于任务、风险和决策。
6. Growing：同一体系可扩展到模型、知识库、Agent、工作流、评测与治理模块。

## Colors

颜色按角色使用，不按页面临时选择。业务代码只引用语义 Token，不直接写 Hex、RGB 或品牌色。

- primary 用于单个区域内唯一的主要操作、链接、焦点和选中状态。
- success、warning、error、info 只表达对应语义，不作为装饰色。
- surface-layout、surface、surface-container、surface-elevated 构成页面、内容、次级容器和浮层的表面层级。
- on-surface 系列承载主文字、辅助信息、说明和禁用状态。
- ai-accent、knowledge-accent、tool-accent 只用于对象类型的轻量辅助识别，不代替状态色。
- risk-container 只用于高风险说明、审批门和不可逆操作确认。

同一屏原则上只允许一个主要强调色。预设彩色只用于图表和分类标签。状态必须同时具有文本，不得仅依赖颜色。

主按钮使用深一级蓝色以满足小字号白字的 WCAG AA 对比度目标。若品牌主题调整主色，必须重新验证主要按钮、链接、焦点和选中状态的对比度。

## Typography

企业控制台默认正文为 14px / 22px。16px 用于重要正文或低密度阅读，12px 只用于标签和元信息，13px 等宽字体用于 Prompt、JSON、日志和代码。

产品 UI 仅使用两档字重：

- 400：正文、表单控件、菜单、标签和普通数据。
- 600：标题、表头和需要稳定强调的短文本。

禁止使用 700 以上字重制造层级，禁止通过大量加粗弥补布局问题。选中状态优先通过颜色、边框或下划线表达。

中英文均优先使用操作系统 UI 字体；代码与机器数据使用统一等宽字体。数字列必须支持快速扫描，必要时采用等宽数字特性。

## Layout

所有间距对齐 4px 网格。推荐尺度为 4 / 8 / 12 / 16 / 24 / 32 / 40px。禁止在业务页面中使用无 Token 的魔法数字。

表面采用四层模型：

1. surface-layout：应用背景与全局框架。
2. surface：主要内容、表格、表单和工作区。
3. surface-container：次级分组、表头、局部悬停和弱强调。
4. surface-elevated：Modal、Dropdown、Popover 等浮层。

标准页面结构：

App Shell
→ Workspace / Project / Environment
→ Page Header
→ Version / Status Bar
→ Toolbar / Filters
→ Main Content
→ Pagination / Footer

复杂构建页采用 Resource Panel、Editor or Canvas、Configuration Panel、Test or Run Panel。面板可折叠或调整宽度，编辑主任务必须占据最大面积。

普通业务页最大宽度 1440px；表格、Trace、日志和编排画布允许全宽；说明文档最大宽度 960px；文字主导区域控制在 680–760px。

## Elevation & Depth

界面默认扁平。层级优先通过表面色、边框和间距表达，阴影只用于真正浮起的内容。

- Level 0：页面、表格、普通 Card，无阴影。
- Level 1：可拖拽面板、局部浮动工具条，使用轻阴影。
- Level 2：Dropdown、Popover、DatePicker、Tooltip，使用标准浮层阴影。
- Level 3：Modal、Drawer 和重要全局浮层，使用更强阴影与遮罩。

动效只解释状态变化：

- 100ms：Hover、Focus、Pressed。
- 200ms：Collapse、Fade、局部面板切换。
- 300ms：Modal、Drawer、表面级进出场。

不得自行创建缓动曲线。优先使用组件库的 motionDurationFast、motionDurationMid、motionDurationSlow 与命名 easing。必须支持 reduced motion。

## Shapes

默认圆角为 6px。

- Button、Input、Select、Dropdown Trigger：6px。
- Card、Modal、Drawer、Notification：8px。
- Tag、Tooltip、Popover：4px。
- Badge Dot、Avatar：full。
- Table 和组合控件内部拼接边：0px。

全胶囊圆角只用于圆形头像、状态点和少量语义明确的 Chip，不用于普通 Button 或 Tag。相邻组件的圆角层级必须协调，禁止出现大圆角容器嵌套大圆角容器。

## Components

所有基础组件优先使用 Ant Design 或团队封装层，不重复实现同类基础能力。视觉定制按以下顺序进行：

1. ConfigProvider 的 Seed Token。
2. 官方 Theme Algorithm。
3. Component Token Override。
4. 团队语义组件封装。
5. 最后才允许新增样式能力。

禁止通过页面级 CSS 覆盖组件内部结构。禁止复制组件源码形成不可升级分支。

基础组件约束：

- Primary Button：单一决策区域只保留一个；默认高 32px，大型关键操作可用 40px。
- Default Button：用于次要操作；危险操作使用 Danger 语义且按钮名称必须描述动作。
- Input / Select：高 32px，Label 永远可见，Placeholder 不替代 Label。
- Card：只承载独立信息对象；避免 Card inside Card。
- Modal：只处理短任务、确认和聚焦决策；复杂配置使用独立 Page 或 Drawer。
- Table：默认行高 48px，文字左对齐，数字右对齐，操作右对齐。
- Tag：表达类别或弱状态；关键错误和风险使用 Alert、Badge 加文本或 Result。
- Tooltip：补充短说明，不承载关键操作和长篇帮助。
- Tabs：同一层级内容切换，不作为跨模块导航。

AI 语义组件约束：

- Prompt Editor：使用等宽字体，支持变量、Token 估算、校验、版本差异和测试输入。
- AI Output：必须区分事实、解释与建议，并提供来源、复制、编辑、重试和反馈入口。
- Knowledge Source：显示文档、片段位置、相关性、权限范围和原文入口。
- Tool Call：显示工具名称、输入摘要、执行状态、输出摘要、耗时和错误。
- Execution Step：显示阶段、状态、耗时、Token、成本与重试信息。
- Approval Gate：明确操作对象、影响范围、数据范围、环境、风险和是否可撤销。
- Run Trace：支持从 Run 下钻到 Model、Retrieval、Tool、Approval 和 Output，不暴露模型私有思维链。
- Model Selector：同时显示能力、上下文、区域、可用性、质量、延迟、成本和合规限制。
- Version Bar：持续展示 Draft or Published、当前版本、目标环境和未保存变更。

## Do's and Don'ts

### Do

- 使用语义 Token 和组件 Token，不直接使用颜色值。
- 每个操作区域只保留一个 Primary Action。
- 明确展示 Workspace、Project、Environment、Version 和 Status。
- 完整设计 Default、Hover、Focus、Active、Disabled、Loading、Empty、Error、Permission Denied 与 Partial Success。
- 长任务展示阶段、耗时、取消和失败恢复入口。
- AI 输出展示来源、证据、运行记录和可执行反馈。
- 高风险操作引入人工审批或显式策略授权。
- 用 Border、Surface 和 Spacing 建立层级，只有浮层使用 Shadow。
- 让设计 Agent 先检索现有 Component、Pattern 和 Token，再生成界面。
- 在主题调整后验证对比度、Dark Mode、Compact Mode 与 200% Zoom。

### Don't

- 不要硬编码白色、灰色、主色、间距、圆角和阴影。
- 不要在同一决策区域堆叠多个 Primary Button。
- 不要用彩色 Tag 代替错误、风险或审批提示。
- 不要使用 Card inside Card inside Card。
- 不要让 Modal 承载复杂页面、导航或大表单。
- 不要让用户猜测 AI 正在做什么或为什么失败。
- 不要展示模型私有思维链；展示可验证的执行摘要、工具调用和依据。
- 不要让 AI 默认执行删除、发送、支付、授权或生产变更。
- 不要只显示长时间 Spinner。
- 不要创造页面专属组件变体或一次性强调色。
- 不要绕过 ConfigProvider、Theme Algorithm 和 Component Token。
- 不要把测试数据、生产数据与不同环境的资源混在同一上下文中。

## Conformance & Validation

本文件遵循 google-labs-code/design.md 的 alpha 格式。YAML Front Matter 与 Markdown 正文共同构成完整规范，其中 Token 是机器执行时的规范值，正文负责解释设计理由和使用边界。

规范优先级：

1. YAML Front Matter 中的 Token 与组件引用。
2. Overview 至 Do's and Don'ts 的标准设计语言章节。
3. AI Foundation Product Contract 的领域规则。
4. 具体产品需求与页面说明。

当低优先级要求与高优先级规则冲突时，不得静默覆盖 Token 或创造一次性样式。应优先调整实现；确需例外时，记录 Design Exception、Owner、Risk、Mitigation 与 Expiration Date。

文件结构要求：

- Front Matter 必须位于文件第一行，并使用独占一行的三个连字符作为起止边界。
- 机器可读字段仅使用 version、name、description、omitted、colors、typography、rounded、spacing 与 components。
- Token 引用使用 {path.to.token} 语法，禁止引用不存在的路径。
- 标准章节使用二级标题，并保持 Overview、Colors、Typography、Layout、Elevation & Depth、Shapes、Components、Do's and Don'ts 的顺序。
- AI 基座扩展章节可以保留，但不得与标准章节重名。
- 组件 Token 优先使用 backgroundColor、textColor、typography、rounded、padding、size、height 与 width。

每次修改后必须执行：

~~~bash
npx @google/design.md lint DESIGN.md
~~~

交付门禁：

- Errors = 0
- Warnings = 0
- 所有 Token 引用可解析
- 普通文本对比度达到 WCAG AA 4.5:1
- 标准章节无缺失、重复或顺序错误
- 新增颜色均被组件或明确模式引用

设计系统版本升级或大规模 Token 调整时，必须对比修改前后版本：

~~~bash
npx @google/design.md diff DESIGN.previous.md DESIGN.md
~~~

如果规范格式版本不再是 alpha，Owner 必须先评估 Schema、Lint Rule 与导出格式变化，再升级本文件。禁止只修改 version 字段而不完成迁移。

## AI Foundation Product Contract

### 0. Purpose

本文件定义团队建设和交付 AI 基座产品时统一遵循的设计规范。

AI 基座是支撑模型接入、知识处理、Agent 构建、工作流编排、评测、运行观测与安全治理的企业级平台。本规范不是单纯的视觉规范，而是产品设计、技术实现与 AI 行为之间的 Design Contract。

所有以下角色均应遵循：

- Product Manager
- Product Designer
- AI Engineer
- Product Engineer
- Frontend Engineer
- AI Coding Agent
- External Delivery Team

所有新增页面、组件、功能以及 AI 自动生成 UI，默认必须符合本规范。

当业务需求与本规范冲突时：

1. 优先复用现有设计模式
2. 无法满足时扩展现有模式
3. 最后才允许创造新的模式
4. 新模式必须沉淀回 Design System

原则：

> 不只设计页面，还要设计可理解、可控制、可追溯的 AI 系统。

---

### 1. Product Scope

AI 基座默认覆盖以下能力域：

- 模型管理与接入
- Prompt 管理与调试
- 知识库与检索增强
- Agent 创建与运行
- Workflow 编排
- Tool 与 API 管理
- 数据集与评测
- 运行记录与可观测性
- 成本、配额与限流
- 权限、安全与审计
- 发布、版本与环境管理

不同模块必须使用统一的信息架构、交互模式、状态语言和设计 Token。

---

### 2. Design Philosophy

#### 2.1 Enterprise First

这是企业级 AI 基础设施，不是消费级聊天应用。

优先级：

1. 清晰
2. 可控
3. 可追溯
4. 效率
5. 一致性
6. 信息密度
7. 美观

不得为了视觉效果牺牲操作效率、系统解释性或风险提示。

#### 2.2 AI Is a System, Not a Magic Box

界面必须帮助用户理解：

- 当前使用什么模型
- 使用了哪些输入与上下文
- 调用了哪些工具与数据
- 系统处于什么阶段
- 结果依据是什么
- 失败发生在哪里
- 用户可以如何干预

不得用长时间 Spinner 隐藏复杂执行过程。

#### 2.3 Quiet Interface

界面应该安静。用户的注意力应集中在：

- 配置
- 数据
- 运行状态
- 调试信息
- AI 结果
- 风险与决策

避免：

- 大面积渐变
- 无意义阴影
- 装饰性动画
- 过度圆角
- 大量彩色卡片
- 不必要的拟人化元素
- 视觉噪音

#### 2.4 Dense but Breathable

AI 基座允许高信息密度，但必须保持强视觉层级和可扫描性。

不要用大量留白制造“高级感”，也不要把所有技术信息同时暴露给用户。

#### 2.5 Progressive Disclosure

默认展示完成任务所需的核心信息。

按需展示：

- 高级模型参数
- 原始请求与响应
- Token 明细
- 检索分片
- Tool 参数
- Trace 与日志
- 安全策略详情

#### 2.6 Human Control

重要 AI 行为必须允许用户：

- Review
- Edit
- Approve
- Reject
- Retry
- Stop
- Rollback

高风险操作禁止默认自动执行。

---

### 3. Core Design Principles

#### P1 — Clear

用户应该在 3 秒内理解：

- 这是哪个模块
- 当前对象与环境是什么
- 当前状态是什么
- 可以执行什么操作
- 下一步是什么

#### P2 — Explainable

模型选择、数据来源、工具调用、运行过程和结果依据必须可查看。

#### P3 — Controllable

AI 自动化程度越高，用户控制能力必须越强。

#### P4 — Traceable

每次运行应能追溯到版本、配置、输入、数据、工具、输出和操作者。

#### P5 — Safe by Default

权限、敏感数据、外部调用和不可逆操作默认采用最小授权与显式确认。

#### P6 — Consistent

模型、Agent、Workflow、评测任务和运行记录应共享一致的创建、配置、发布与排障模式。

#### P7 — Action Oriented

每个页面必须围绕明确任务设计，而不是堆叠平台能力或展示技术概念。

---

### 4. Information Architecture

推荐一级导航：

1. Overview
2. Build
3. Knowledge
4. Models
5. Evaluate
6. Observe
7. Governance
8. Settings

推荐对象归属：

| 模块 | 核心对象 |
|---|---|
| Build | Agent、Workflow、Prompt、Tool |
| Knowledge | Knowledge Base、Document、Chunk、Retrieval Test |
| Models | Provider、Model、Endpoint、Deployment |
| Evaluate | Dataset、Evaluator、Experiment、Report |
| Observe | Run、Trace、Log、Metric、Alert |
| Governance | Permission、Policy、Audit、Budget、Quota |

导航层级原则上不超过 3 层。

---

### 5. Global Context

AI 基座必须持续展示关键上下文，避免用户在错误环境或错误版本中操作。

推荐全局上下文：

- Organization / Workspace
- Project
- Environment
- Region

推荐对象上下文：

- Current Version
- Draft / Published
- Model
- Owner
- Last Updated

生产环境必须使用明确的文字标签，不得只用颜色区分。

示例：

`Production` + 红色或橙色语义标识

---

### 9. Core Object Model

AI 基座中的核心对象应共享统一的生命周期：

Draft
→ Testing
→ Review
→ Published
→ Deprecated
→ Archived

每个可发布对象必须具备：

- Stable ID
- Name
- Description
- Owner
- Version
- Environment
- Status
- Created / Updated Time
- Dependency
- Change Log
- Audit Log

对象详情页推荐统一结构：

Overview
Configuration
Test
Runs
Versions
Dependencies
Permissions

---

### 10. Model Management

模型列表至少展示：

- Provider
- Model Name
- Capability
- Context Window
- Region
- Availability
- Latency
- Cost
- Status

模型配置必须区分：

##### Basic

- Model
- Temperature
- Max Output
- Response Format

##### Advanced

- Top P
- Seed
- Stop Sequence
- Frequency / Presence Penalty
- Timeout
- Retry Policy

##### Safety

- Content Policy
- Data Retention
- PII Handling
- Region Restriction

选择模型时应展示能力、质量、延迟、成本和合规限制，不得只展示模型名称。

---

### 11. Prompt Design

Prompt 编辑器必须支持：

- System / User / Assistant Role
- Variable
- Template Validation
- Token Estimation
- Model Selection
- Test Input
- Output Preview
- Version Comparison
- Save as Draft
- Publish

Prompt 与模型参数必须分区，避免混在同一表单中。

变量使用统一语法并高亮显示，例如：

`{{customer_name}}`

编辑器必须明确提示：

- 未定义变量
- 未使用变量
- 敏感变量
- 超出上下文限制
- 可能的 Prompt Injection 风险

---

### 12. Knowledge Base & Retrieval

知识库详情必须区分：

- Data Source
- Sync Status
- Processing Status
- Index Status
- Retrieval Configuration
- Permission Scope

文档状态推荐：

Queued
→ Parsing
→ Chunking
→ Embedding
→ Indexing
→ Ready

失败时必须显示具体阶段、原因和重试入口。

检索测试必须展示：

- Query
- Retrieved Chunks
- Relevance Score
- Source Document
- Chunk Position
- Filter
- Latency
- Token Usage

AI 输出引用知识库内容时，必须允许用户查看来源与原文片段。

---

### 13. Agent Builder

Agent 创建流程推荐：

Identity
→ Instructions
→ Model
→ Knowledge
→ Tools
→ Memory
→ Guardrails
→ Test
→ Publish

Agent Builder 必须持续展示：

- Draft / Published 状态
- 当前版本
- 使用模型
- 已连接知识库
- 已授权工具
- 风险级别
- 未保存变更

测试区必须支持：

- 多轮对话
- 查看 Thinking State 的安全摘要
- 查看 Tool Call
- 查看 Source
- 查看 Token / Latency / Cost
- 重置会话
- 保存为 Test Case
- 提交反馈

不得暴露模型私有思维链。应提供可验证的执行摘要、工具调用和依据。

---

### 14. Workflow Builder

Workflow 节点至少分为：

- Trigger
- Input
- Model
- Agent
- Knowledge
- Tool
- Logic
- Human Approval
- Output

画布设计要求：

- 节点类型清晰
- 输入输出端口明确
- 连线方向一致
- 错误节点可定位
- 当前执行节点可识别
- 支持缩放与 Mini Map
- 支持 Keyboard Navigation
- 支持只读模式

配置错误必须尽量在运行前发现。

发布前至少校验：

- 孤立节点
- 缺失变量
- 类型不匹配
- 循环依赖
- 无权限 Tool
- 未配置 Model
- 未处理失败分支
- 缺少高风险人工确认

---

### 15. Tools & Integrations

Tool 详情必须展示：

- Name
- Description
- Owner
- Authentication
- Input Schema
- Output Schema
- Permission Scope
- Timeout
- Retry
- Rate Limit
- Risk Level

Tool Call 展示格式：

Tool Name
→ Input Summary
→ Execution Status
→ Output Summary
→ Duration
→ Error / Retry

涉及写入、发送、删除、支付、授权或生产变更的 Tool，默认要求显式审批或策略授权。

密钥、Token、密码等 Secret 不得以明文展示、复制或写入日志。

---

### 16. Run, Trace & Observability

运行详情必须回答：

1. 谁在什么环境发起运行？
2. 使用了哪个版本和模型？
3. 经历了哪些步骤？
4. 调用了哪些数据和工具？
5. 在哪里消耗了时间与 Token？
6. 为什么成功、失败或降级？

推荐 Trace 结构：

Run
├── Input
├── Model Call
├── Retrieval
├── Tool Call
├── Human Approval
└── Output

每个步骤展示：

- Start / End Time
- Duration
- Status
- Input / Output Summary
- Token
- Cost
- Error
- Retry

默认显示摘要；原始 Payload、Header 和日志放入高级信息，并执行脱敏。

---

### 17. Evaluation

评测对象包括：

- Prompt
- Model
- Agent
- Workflow
- Retrieval

评测流程推荐：

Select Target
→ Select Dataset
→ Configure Evaluator
→ Run
→ Compare
→ Review Bad Cases
→ Decide

结果必须区分：

- Objective Metric
- Model-based Evaluation
- Human Review
- Business Metric

对比视图至少展示：

- Baseline
- Candidate
- Score Difference
- Latency Difference
- Cost Difference
- Regression
- Sample Size

不得仅用一个总分表达复杂质量结论。

---

### 18. AI State Language

统一运行状态：

Queued
Running
Waiting for Approval
Completed
Partially Completed
Failed
Cancelled
Timed Out

统一构建状态：

Draft
Testing
In Review
Published
Deprecated
Archived

统一资源状态：

Available
Degraded
Unavailable
Disabled

不要使用 Done、Finished、Success、Completed 表达同一种状态。

长任务必须展示当前阶段和进度信息，例如：

Understanding request
→ Retrieving knowledge
→ Calling tools
→ Generating result
→ Validating output

---

### 19. Forms, Tables & Filters

#### 19.1 Forms

推荐结构：

Label
→ Input
→ Help / Error

Label 必须始终可见，不能只用 Placeholder 代替。

超过 8 个字段时，使用 Section、Step 或 Progressive Disclosure。

#### 19.2 Tables

- 文字左对齐
- 数字右对齐
- 状态左对齐或居中
- 操作右对齐
- 默认行高 48px

按场景支持：

- Sort
- Filter
- Search
- Column Settings
- Pagination
- Selection
- Bulk Action
- Sticky Header

#### 19.3 Filters

标准结构：

Search | Status | Owner | Environment | Date | More Filters | Reset

已生效筛选条件必须可见并可单独移除。

---

### 20. Feedback & System States

#### 20.1 Empty State

必须说明：

1. 为什么这里是空的？
2. 用户下一步可以做什么？

#### 20.2 Loading

短加载使用 Skeleton 或局部 Spinner。

长任务展示阶段、耗时和取消入口。

#### 20.3 Error

错误信息必须包含：

What happened
+
Why
+
What can I do

应保留 Error ID 或 Run ID，便于排障。

#### 20.4 Partial Success

批处理或多步骤任务必须明确区分：

- 成功数量
- 失败数量
- 跳过数量
- 失败原因
- 重试范围

#### 20.5 Toast

Toast 只表达短暂反馈，例如 Saved、Copied、Created、Updated。

重要错误、审批请求和安全风险不能只使用 Toast。

---

### 21. Version, Publish & Environment

Draft 与 Published 必须明确区分。

发布前必须展示：

- Target Environment
- Version
- Change Summary
- Dependency Change
- Evaluation Result
- Risk
- Approver

生产发布属于高风险操作时，必须二次确认。

推荐发布流程：

Save Draft
→ Test
→ Evaluate
→ Review Changes
→ Approve
→ Publish
→ Monitor

必须支持版本历史、差异对比和回滚。

---

### 22. Permissions & Governance

默认采用 RBAC，并在需要时结合资源级权限。

推荐角色：

- Organization Admin
- Workspace Admin
- AI Platform Engineer
- Builder
- Reviewer
- Operator
- Viewer

用户无权限时，根据场景选择：

- Hide：完全不可见或涉及敏感信息
- Disabled + Explanation：帮助用户理解能力与申请方式
- Request Access：允许发起权限申请

关键操作必须进入 Audit Log：

- 创建或删除资源
- 修改权限
- 修改模型与安全策略
- 发布与回滚
- 查看或导出敏感数据
- 执行高风险 Tool
- 修改预算和配额

---

### 23. Security & Safety

AI 基座默认考虑：

- Prompt Injection
- Data Leakage
- PII / Secret Exposure
- Unauthorized Tool Use
- Unsafe Content
- Model Hallucination
- Excessive Agency
- Supply Chain Risk
- Region / Retention Compliance

高风险操作必须展示：

- 操作对象
- 影响范围
- 数据范围
- 执行环境
- 是否可撤销
- 审批人

AI 内容必须区分：

##### Source Data

原始数据与可验证事实。

##### AI Interpretation

模型对数据的分析与解释。

##### Recommendation

模型提出的建议，不代表已执行操作。

---

### 24. Cost, Quota & Rate Limit

成本信息应在决策发生的位置出现，而不是只放在账单页面。

重要场景展示：

- Estimated Token
- Actual Token
- Estimated Cost
- Actual Cost
- Budget Usage
- Rate Limit
- Remaining Quota

接近限制时使用 Warning；达到限制时说明影响、恢复条件和解决方式。

批量评测、大规模索引和高成本模型运行前，应展示预估成本。

---

### 25. Accessibility

最低标准：WCAG 2.1 AA。

必须支持：

- Keyboard Navigation
- Visible Focus
- Screen Reader Label
- Contrast
- Zoom 200%
- Reduced Motion

画布、Trace、图表和状态不得只依赖颜色表达信息。

---

### 26. Responsive Design

优先级：

Desktop
→ Tablet
→ Mobile

AI 基座的复杂构建与调试能力不强制在移动端保持完整功能。

移动端优先支持：

- 查看状态
- 查看告警
- 审批
- 停止运行
- 查看摘要

不得在小屏中压缩复杂 Workflow Canvas 或多面板调试界面。

---

### 27. Copywriting

文案原则：

- Clear
- Short
- Human
- Specific
- Actionable

错误：

`Operation succeeded.`

推荐：

`Agent published to Production.`

错误：

`System exception.`

推荐：

`The workflow stopped because the model request timed out. Retry the failed step or select another model.`

模型、Agent、Assistant、Bot、Workflow 等名称必须与产品对象定义一致，不得混用。

---

### 29. Standard Templates

#### 29.1 Resource List

<Page>
  <PageHeader />
  <EnvironmentBar />
  <Toolbar>
    <Search />
    <Filters />
  </Toolbar>
  <ResourceTable />
</Page>

#### 29.2 Resource Detail

<PageHeader />
<StatusAndVersion />
<Summary />
<Tabs>
  Overview
  Configuration
  Test
  Runs
  Versions
  Permissions
</Tabs>
<Content />

#### 29.3 AI Builder

<Builder>
  <ResourcePanel />
  <EditorOrCanvas />
  <ConfigurationPanel />
  <TestAndRunPanel />
</Builder>

#### 29.4 Run Detail

<RunHeader />
<MetricSummary />
<TraceTimeline />
<StepDetail />
<InputOutput />
<Logs />

---

### 30. AI-Specific Anti-Patterns

#### Visual

❌ Gradient Everywhere

❌ Huge Rounded Card

❌ Card inside Card inside Card

❌ Excessive Shadow

❌ Rainbow Status

❌ 用机器人插画代替真实信息

#### Interaction

❌ 隐藏当前环境与版本

❌ Unexplained Disabled Button

❌ Modal inside Modal

❌ 无限长配置表单

❌ 重要错误只使用 Toast

❌ 发布后无法查看变更或回滚

#### AI

❌ AI 黑盒执行

❌ 长时间只显示 Spinner

❌ 不展示 Tool Execution

❌ 结果没有来源与运行记录

❌ AI 自动执行高风险操作

❌ 暴露模型私有思维链

❌ 用单一总分掩盖评测差异

❌ 生产数据与测试数据混用

---

### 31. Design Review Checklist

##### Product

- [ ] 页面核心任务是否明确？
- [ ] Primary Action 是否唯一？
- [ ] 对象、版本与环境是否明确？
- [ ] Information Architecture 是否合理？

##### Design

- [ ] 是否使用现有 Design System？
- [ ] Spacing、Typography、Color 是否遵循 Token？
- [ ] 信息密度是否适合目标用户？
- [ ] 状态与反馈是否完整？

##### AI

- [ ] 模型与配置是否明确？
- [ ] AI 运行状态是否可见？
- [ ] Source 是否可追溯？
- [ ] Tool Call 是否可查看？
- [ ] AI 结果是否可 Review、Edit、Retry？
- [ ] 是否避免暴露私有思维链？

##### Engineering

- [ ] Version 是否明确？
- [ ] Dependency 是否可查看？
- [ ] Error 是否可定位？
- [ ] Trace、Log、Metric 是否完整？
- [ ] Token、Latency、Cost 是否可观测？

##### Enterprise

- [ ] 权限是否符合最小授权？
- [ ] Audit 是否完整？
- [ ] 高风险操作是否确认或审批？
- [ ] 数据影响范围是否明确？
- [ ] 敏感数据是否脱敏？

##### Accessibility

- [ ] Keyboard
- [ ] Focus
- [ ] Contrast
- [ ] Screen Reader
- [ ] Zoom
- [ ] Reduced Motion

---

### 32. AI Coding Rules

所有 Coding Agent / Vibe Coding 在生成 AI 基座 UI 前必须读取 DESIGN.md。

生成前必须：

1. 搜索现有 Component
2. 搜索现有 Pattern
3. 搜索 Design Token
4. 确认对象、状态、版本与环境模型
5. 补全 Loading、Empty、Error、Permission 与 Partial Success
6. 再生成代码

禁止 AI：

- 自己创造 Color、Radius、Shadow、Spacing
- 自己创造新的 Button Style
- 混用 AI 对象命名
- 省略版本与环境信息
- 省略失败和权限状态
- 用无法追溯的假数据伪装真实运行结果

除非需求明确要求扩展 Design System。

---

### 33. New Pattern Protocol

如果必须增加新组件或新交互模式，需要回答：

##### Problem

现有组件或模式为什么无法解决？

##### Usage

新模式解决什么任务？适用于哪些 AI 对象？

##### States

Default
Hover
Focus
Active
Disabled
Loading
Empty
Error
Permission Denied
Partial Success

##### AI Behavior

运行状态、来源、工具调用、人工控制与失败恢复如何设计？

##### Safety

是否涉及敏感数据、权限、外部写入或不可逆操作？

##### Accessibility

Keyboard
ARIA
Focus
Contrast

完成后必须加入：

Design System
+
Storybook
+
DESIGN.md

---

### 34. Governance

Design System Owner：

Product Design + AI Platform Engineering

版本采用 Major.Minor，例如：

1.0
1.1
1.2
2.0

任何违反 DESIGN.md 的实现，原则上不进入 Production。

如果业务需要例外，必须记录 Design Exception：

- Reason
- Owner
- Risk
- Mitigation
- Expiration Date

避免临时方案永久存在。

---

### 35. Definition of Done

一个 AI 基座功能只有同时满足：

Product Complete
+
Design Complete
+
AI Behavior Complete
+
Engineering Complete
+
Evaluation Complete
+
Safety Complete
+
Accessibility Complete
+
Observability Complete

才算 Done。

最终目标：

> 用户能够理解 AI 正在做什么、为什么得到这个结果，并在关键时刻拥有控制权。

同时：

> 整个 AI 基座应像由一个团队、遵循一套规则构建而成。

