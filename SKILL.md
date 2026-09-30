---
name: iskill-viral-teardown
summary: 爆款短视频拆解——甩一条爆款视频链接（含微信视频号），自动下载转写后拆出钩子、结构、爆款原因和可复刻打法。
description: 当用户想拆解/分析一条爆款短视频、问「这条为什么火」「帮我拆这条视频」「分析爆款视频」时使用。触发词：爆款拆解、拆视频、视频号拆解、拆文案、teardown。输入视频 URL 或本地文件，复用 iskill-media-transcribe 完成下载+转写（本地完成，音频不出机器），产出结构化拆解报告（钩子/结构/归因/打法/套用模板），供下游 iskill-viral-copywriter 参考。
---

# iskill-viral-teardown

「五步爆款工作流」第 2 步：**爆款短视频拆解**。

```
[1]热点选题(iskill-hot-topic-scout) → [2]爆款拆解(本skill) → [3]文案生成(iskill-viral-copywriter)
→ [4]去AI味+真人点评(iskill-copy-deslop) → [5]发布预检(iskill-content-precheck)
```

**核心原则：转写交给现成 skill，本 skill 只做「拆」。** 不重复造下载/转写轮子。

## 快速开始（执行流程）

### Step 1 取料（复用 iskill-media-transcribe）

1. 输入是 URL 或本地音视频文件 → **调用 `iskill-media-transcribe` skill**（或直接跑其脚本）：

   ```bash
   cd /Users/lv/.workbuddy/skills/iskill-media-transcribe
   WEIXIN_COOKIE_FILE=/Users/lv/WorkBuddy/ISkills/.workbuddy/weixin_cookies.txt \
     node scripts/video-transcribe.mjs one "<URL或文件>" --weixin --out ./out
   ```

   - 微信视频号链接（`weixin.qq.com/sph/…`）**必须带 `--weixin` 和元宝 cookie**。
     cookie 文件缺失或 403 时，配方：Chrome 登录 https://yuanbao.tencent.com 后执行
     `yt-dlp --cookies-from-browser chrome --cookies <工作区路径>/weixin_cookies.txt https://example.com`
     （cookie 放工作区，别放 /tmp——沙箱会拦 /tmp 读取）。
2. 得到逐字稿（`*.json` 的 `text` 字段；有 srt 则更佳，可拿分段时间点）。
3. 已有产物（out 目录已存在同 id 文件）就**直接复用，不要重跑**；确要重跑加 `--force`。

### Step 2 五维拆解（LLM 分析，逐维输出）

| 维度 | 要拆出的东西 |
|---|---|
| 开头钩子 | 前 3-5 秒第一句原话 + 钩子类型（悬念/反常识/利益点/身份点名/冲突提问…）+ 为什么能留人 |
| 内容结构 | 分段大纲（有 srt 就标时间点）：每段功能（钩子→痛点→论点→证据→转折→CTA…）+ 每段时长占比 |
| 爆款归因 | 这条为什么火：踩中什么情绪/热点/人群焦虑？表达上有什么记忆点（金句、口头禅、视觉锤）？ |
| 可复刻打法 | 提炼成「换皮可用」的条目：结构模板、句式、节奏（语速/停顿/转折位）、CTA 写法 |
| 套用模板 | 把结构抽象成一张填空模板，给下游文案生成直接套 |

### Step 3 输出

1. 报告写入 `{工作区}/拆解/YYYY-MM-DD-<视频id或标题短名>-拆解.md`。
2. 消息里给精简版：钩子一句 + 结构一图（列表）+ 三条最值得抄的打法。
3. 转写产物路径（mp4/mp3/srt/json）列在报告头部，方便回看原片。

## 与上下游衔接

- **上游**：iskill-hot-topic-scout 出的选题卡若指向某条同类爆款 → 拿来本 skill 拆。
- **下游**：拆解报告里的「套用模板」是 iskill-viral-copywriter 的可选输入；用户生成文案时
  提示一句「可以把拆解报告一起给它」。

## 注意事项

- 拆解必须**基于逐字稿原文**引用证据（引用原句），禁止脑补视频里没有的内容。
- 竖屏口播类若拿不到画面信息，明确标注「仅基于音频逐字稿拆解，画面/剪辑维度缺失」。
- 视频号链接转写失败时先按 iskill-media-transcribe 的 cookie 配方排查，再报告用户。
- 一次只拆一条；批量拆解建议逐条出报告（转写是本地重活，别并发轰炸）。
