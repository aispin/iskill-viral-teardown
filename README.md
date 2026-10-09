# iskill-viral-teardown

当用户想拆解/分析一条爆款短视频、问「这条为什么火」「帮我拆这条视频」「分析爆款视频」时使用；也适用于用户只给主题没给链接——「我想做XX主题的视频，找几条对标爆款」触发词：爆款拆解、拆视频、视频号拆解、拆文案、找对标、找参考视频、teardown。输入主题（先 Step 0 对标搜寻，2-3 条候选请用户选）或视频 URL / **分享文案（含口令短链，自动抽 URL）** / **录屏** / 本地音视频文件，复用 iskill-media-transcribe 完成下载+转写（本地完成，音频不出机器）；取料有 5 级降级契约（含录屏降级），产出结构化拆解报告（钩子/结构/归因/打法/套用模板），供下游 iskill-viral-copywriter 参考；维护跨天累积的拆解库（Step 0.5 查、Step 3 写），同一条视频已拆过直接复用不重跑转写。

完整用法见 [SKILL.md](SKILL.md)。

> 依赖同步：本仓库含 iskill 共享真源的 vendored 副本（清单见 `package.json` 的 `iskillDeps`），**不要手改**。使用前请同时安装 iskill-dep-sync：对 agent 说「请帮我安装 Skill：aispin/iskill-dep-sync」；用法见 SKILL.md「依赖同步」节。
