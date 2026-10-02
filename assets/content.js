/* ============================================================================
 * iskill-viral-teardown · 落地页内容
 * 只改这个文件就能换掉整页文案（外加 index.html 顶部那几行 meta）。
 * ==========================================================================*/
window.PROMO = {
  name: "ISKILL-VIRAL-TEARDOWN",
  brand: "#f59e0b",
  brand2: "#ef4444",
  repo: "https://github.com/aispin/iskill-viral-teardown",
  repoLabel: "aispin/iskill-viral-teardown",

  /* 本体是纯提示词；取料那一步复用 iskill-media-transcribe（其下载/转写链目前仅 macOS）。
     平台值按作业给的是 all —— 平台限制写进 FAQ。 */
  platform: "all",
  license: "MIT",

  lang: {
    /* ── 中文 ───────────────────────────────────────────────────────── */
    zh: {
      meta: {
        title: "ISKILL-VIRAL-TEARDOWN · 爆款视频拆解",
        description: "甩一条爆款视频链接（含微信视频号），下载转写后拆出开头钩子、内容结构、爆款归因、可复刻打法与套用模板，产出结构化拆解报告。"
      },
      a11y: { skip: "跳到主要内容" },
      ui: { copy: "复制", copied: "已复制", failed: "复制失败" },
      nav: { features: "能力", shots: "截图", how: "上手", faq: "问答" },

      hero: {
        badge: "AI 技能",
        titlePre: "一条爆款，",
        titleAccent: "拆出可复刻的打法",
        titlePost: "",
        sub: "甩一条爆款视频链接（含微信视频号），或只给主题先找对标：下载转写后逐维拆出钩子、结构、爆款原因与可复刻打法，产出结构化报告喂给文案生成。",
        ctaPrimary: "复制安装提示词",
        ctaSecondary: "看源码",
        meta1: "纯提示词",
        meta2: "复用本地转写",
        meta3: "五维拆解"
      },
      terminal: {
        title: "zsh — iskill-viral-teardown",
        lines: [
          [{ t: "$ ", c: "p" }, { t: "帮我拆这条视频 https://weixin.qq.com/sph/xxxx", c: "k" }],
          [{ t: "✓ ", c: "p" }, { t: "取逐字稿 1,842 字 · 时长 47s", c: "s" }],
          [{ t: "【钩子】", c: "s" }, { t: "「别再这样拍农村视频了」— 反常识 ｜ 前 3s", c: "c" }],
          [{ t: "【结构】", c: "s" }, { t: "钩子 0-4s → 痛点 4-15s → 3 个论点 15-38s → CTA 38-47s", c: "c" }],
          [{ t: "✓ ", c: "p" }, { t: "报告：viral-video-team-output/拆解/…-拆解.md", c: "s" }]
        ]
      },

      stats: [
        { value: "5 维", label: "拆解维度", note: "开头钩子 / 内容结构 / 爆款归因 / 可复刻打法 / 套用模板" },
        { value: "0", label: "脚本与依赖", note: "纯提示词；下载与转写复用 iskill-media-transcribe" },
        { value: "3–5s", label: "开头钩子复看窗口", note: "拆前 3-5 秒第一句原话 + 钩子类型" },
        { value: "1 条", label: "一次只拆一条", note: "转写是本地重活，不并发轰炸" }
      ],

      compare: {
        eyebrow: "对比",
        title: "以前 vs 现在",
        sub: "",
        before: {
          title: "看完一条爆款，只记得「挺火」",
          items: [
            "刷到百万赞视频，说不出它到底赢在哪",
            "想抄又怕抄歪，结构记不住、金句抄不全",
            "凭印象总结，容易脑补视频里其实没有的内容"
          ]
        },
        after: {
          title: "逐字稿打底，五维拆解",
          items: [
            "先拿逐字稿，开头钩子引用原句、标出钩子类型",
            "分段大纲标时间点与时长占比，结构一眼看清",
            "归因 / 可复刻打法 / 套用模板三层抽象，直接给下游文案套"
          ]
        }
      },

      features: {
        eyebrow: "能力",
        title: "它替你干的活",
        sub: "",
        items: [
          { icon: "bolt", title: "Step 0 对标搜寻", desc: "只给主题没给链接时，多角度 WebSearch 挖 2-3 条候选（标题 + 链接 + 热度 + 为什么值得参考），<b>停下让你选</b>，不硬凑。" },
          { icon: "camera", title: "下载 + 转写交给成品", desc: "复用 <code>iskill-media-transcribe</code> 一条命令取逐字稿；已有产物直接复用、不重跑 —— 本 skill 只做「拆」，不重造轮子。" },
          { icon: "lang", title: "视频号也支持", desc: "微信视频号 <code>weixin.qq.com/sph/…</code> 走 <code>--weixin</code> + 元宝 cookie；脚本按 <code>$WEIXIN_COOKIE_FILE</code> → <code>~/.iskill-weixin-cookies.txt</code> → <code>./weixin_cookies.txt</code> 的顺序找。" },
          { icon: "grid", title: "五维拆解", desc: "开头钩子（原句 + 类型）/ 内容结构（分段大纲 + 时长占比）/ 爆款归因 / 可复刻打法 / 套用模板，逐维输出。" },
          { icon: "check", title: "基于原文，拒绝脑补", desc: "必须引用逐字稿原句作证据；拿不到画面时明确标注「仅基于音频逐字稿拆解，画面/剪辑维度缺失」。" },
          { icon: "layers", title: "直接喂给下游", desc: "报告里的「套用模板」是 iskill-viral-copywriter 的可选输入；转写产物路径（mp4/mp3/srt/json）列在报告头部，方便回看原片。" }
        ]
      },

      showcase: {
        eyebrow: "实拍",
        title: "看一眼真东西",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "上手",
        title: "三步跑起来",
        sub: "命令由 agent 跑，你只说要什么、看结果。",
        items: [
          { title: "交给 AI 装", desc: "把这句话粘进对话框，agent 会自己拉代码、读文档，再告诉你用法。", codeKey: "install" },
          { title: "给链接或主题", desc: "没有链接也行，给主题它会先找几条对标让你选；转写复用 media-transcribe，全本地。", codeName: "prompt", code: "帮我拆这条爆款视频：它为什么火，结构怎么搭的，我能抄什么。" },
          { title: "看拆解报告", desc: "报告直接回在对话里（也会落盘）；挑一条能用的手法，再让它照着写稿。" }
        ]
      },


      faq: {
        eyebrow: "问答",
        title: "常见问题",
        items: [
          { q: "Windows / Linux 上能跑吗？", a: "拆解本身是纯提示词，任何平台都能用。但<b>取料这一步复用的 <code>iskill-media-transcribe</code> 目前只在 macOS 跑得通</b>（其下载/转写链依赖 macOS 专属命令与写死路径），所以在 Windows / Linux 上你需要自己先拿到逐字稿 / 字幕再交给它拆。macOS 上则是全自动一条龙。" },
          { q: "一定要给链接吗？", a: "不一定。只给主题也行 —— Step 0 会先多角度 WebSearch 挖 2-3 条候选（标题 + 链接 + 热度 + 为什么值得参考），<b>停下来让你选一条</b>再进入下载拆解；搜出来太水时会如实告知，不硬凑。" },
          { q: "视频号链接打不开怎么办？", a: "视频号是封闭生态，需要元宝登录态 cookie：Chrome 登录 <code>https://yuanbao.tencent.com</code> 后导出 <code>~/.iskill-weixin-cookies.txt</code>（<code>wx.qq.com</code> 网页版登录无效）。如果链接本身是过期 / 限流的分享链接，请从视频号 App 里重新转发一条。" },
          { q: "一次能拆几条？", a: "一次只拆一条。转写是本地重活，批量建议逐条出报告，别并发轰炸。" },
          { q: "拆解会不会编造视频里没有的内容？", a: "不会。铁律是<b>只依据逐字稿原文引用证据</b>，禁止脑补；拿不到画面信息时会明确标注「仅基于音频逐字稿拆解，画面/剪辑维度缺失」。" },
          { q: "能不能不用 AI，手动装？", a: "可以。把仓库 clone 进你的 agent 技能目录（如 <code>~/.workbuddy/skills/</code>）就行 —— 技能本身是纯文本。" }
        ]
      },

      cta: {
        title: "别只看热闹，看它为什么火",
        desc: "一条链接进，一份可复刻的打法出。",
        primary: "去 GitHub 看看",
        secondary: "复制安装提示词"
      },
      footer: { license: "MIT 许可", madeWith: "由 iskill-promo-page 生成" }
    },

    /* ── English ────────────────────────────────────────────────────── */
    en: {
      meta: {
        title: "ISKILL-VIRAL-TEARDOWN · Why a viral video worked",
        description: "Drop in a viral video link (WeChat Channels included) and get a structured teardown: opening hook, content structure, why it went viral, replicable tactics and a fill-in template."
      },
      a11y: { skip: "Skip to content" },
      ui: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
      nav: { features: "Features", shots: "Screens", how: "Get started", faq: "FAQ" },

      hero: {
        badge: "AI skill",
        titlePre: "From one viral video to ",
        titleAccent: "tactics you can copy",
        titlePost: "",
        sub: "Drop in a viral video link (WeChat Channels included), or just a topic to find benchmarks first: after downloading and transcribing, it teases out the hook, structure, why it worked and what is replicable, and hands you a structured report for the copywriter.",
        ctaPrimary: "Copy install prompt",
        ctaSecondary: "View source",
        meta1: "Pure prompt",
        meta2: "Reuses local transcription",
        meta3: "Five dimensions"
      },
      terminal: {
        title: "zsh — iskill-viral-teardown",
        lines: [
          [{ t: "$ ", c: "p" }, { t: "tear down this video https://weixin.qq.com/sph/xxxx", c: "k" }],
          [{ t: "✓ ", c: "p" }, { t: "transcript 1,842 chars · 47s", c: "s" }],
          [{ t: "[hook]", c: "s" }, { t: "\"Stop filming countryside videos like this\" — counter-intuitive | first 3s", c: "c" }],
          [{ t: "[structure]", c: "s" }, { t: "hook 0-4s → pain 4-15s → 3 points 15-38s → CTA 38-47s", c: "c" }],
          [{ t: "✓ ", c: "p" }, { t: "report: viral-video-team-output/拆解/…-拆解.md", c: "s" }]
        ]
      },

      stats: [
        { value: "5", label: "teardown dimensions", note: "opening hook / structure / viral cause / replicable tactics / fill-in template" },
        { value: "0", label: "scripts and dependencies", note: "pure prompt; download and transcription reuse iskill-media-transcribe" },
        { value: "3–5s", label: "hook re-watch window", note: "the first line of the first 3–5 seconds, plus its hook type" },
        { value: "1", label: "video at a time", note: "transcription is heavy local work — no parallel floods" }
      ],

      compare: {
        eyebrow: "Comparison",
        title: "Before vs after",
        sub: "",
        before: {
          title: "You watch a hit and only recall \"that was big\"",
          items: [
            "A million-like video, and you cannot say what actually won",
            "You want to copy it but the structure slips away and the key lines are half-remembered",
            "Summarising from memory invites inventing things the video never said"
          ]
        },
        after: {
          title: "Transcript first, five dimensions after",
          items: [
            "With a transcript, the hook is quoted verbatim and typed",
            "A sectioned outline with timestamps and share-of-duration makes the structure visible",
            "Cause, replicable tactics and a template — three layers of abstraction the copywriter can use directly"
          ]
        }
      },

      features: {
        eyebrow: "Features",
        title: "What it takes off your plate",
        sub: "",
        items: [
          { icon: "bolt", title: "Step 0 benchmark search", desc: "With only a topic and no link, it searches multiple angles for 2–3 candidates (title + link + heat + why it is worth studying) and <b>stops for you to pick</b> — no padding it out." },
          { icon: "camera", title: "Download and transcription are reused", desc: "It calls <code>iskill-media-transcribe</code> for a one-command transcript and reuses existing output instead of rerunning — this skill only tears down, it does not rebuild the wheel." },
          { icon: "lang", title: "WeChat Channels included", desc: "Channels links (<code>weixin.qq.com/sph/…</code>) go through <code>--weixin</code> plus Yuanbao cookies; the script looks in the order <code>$WEIXIN_COOKIE_FILE</code> → <code>~/.iskill-weixin-cookies.txt</code> → <code>./weixin_cookies.txt</code>." },
          { icon: "grid", title: "Five-dimension teardown", desc: "Opening hook (verbatim line plus type) / content structure (sectioned outline with duration share) / why it went viral / replicable tactics / fill-in template, delivered dimension by dimension." },
          { icon: "check", title: "Grounded in the transcript", desc: "Evidence must be quoted from the transcript; when visuals are unavailable it states plainly that the teardown is audio-only and the visual/editing dimensions are missing." },
          { icon: "layers", title: "Feeds the next step", desc: "The report's \"fill-in template\" is an optional input for iskill-viral-copywriter; the paths of the downloaded media and transcript (mp4/mp3/srt/json) sit at the top of the report for easy re-watching." }
        ]
      },

      showcase: {
        eyebrow: "Screens",
        title: "See the real thing",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "Get started",
        title: "Up and running in three steps",
        sub: "The agent runs the commands. You say what you want and check the result.",
        items: [
          { title: "Let your agent install it", desc: "Paste the line into the chat — it clones the repo, reads the docs, and tells you how to use it.", codeKey: "install" },
          { title: "Give a link or a topic", desc: "No link? Give it a topic and it finds a few benchmarks for you to pick from. Transcription reuses media-transcribe, all local.", codeName: "prompt", code: "Break down this viral video: why it worked, how it's structured, and what I can reuse." },
          { title: "Read the teardown", desc: "The report comes back in chat and gets written to disk. Pick one technique and have it write a script from it." }
        ]
      },


      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked",
        items: [
          { q: "Does it run on Windows / Linux?", a: "The teardown itself is pure prompt and works anywhere. But <b>the material-gathering step reuses <code>iskill-media-transcribe</code>, which currently only runs on macOS</b> (its download/transcription chain depends on macOS-specific commands and hard-coded paths). So on Windows / Linux you need to obtain a transcript or subtitles yourself first and hand that over; on macOS it is a single automated chain." },
          { q: "Do I have to provide a link?", a: "No. A topic alone works — Step 0 searches multiple angles for 2–3 candidates (title + link + heat + why it is worth studying) and <b>stops for you to choose one</b> before downloading. If results are thin it says so rather than padding them out." },
          { q: "What if a Channels link will not open?", a: "Channels is a closed ecosystem and needs Yuanbao login cookies: sign in at <code>https://yuanbao.tencent.com</code> in Chrome and export <code>~/.iskill-weixin-cookies.txt</code> (the <code>wx.qq.com</code> web login does not work). If the link itself is expired or rate-limited, re-forward a fresh one from the Channels app." },
          { q: "How many videos can it teardown at once?", a: "One at a time. Transcription is heavy local work, so for batches produce one report each rather than flooding it." },
          { q: "Will it invent things the video never said?", a: "No. The rule is to <b>quote evidence only from the transcript</b>, never to fill gaps. When visual information is unavailable it labels the report as audio-only with the visual/editing dimensions missing." },
          { q: "Can I install it without an agent?", a: "Sure. Clone the repo into your agent's skills directory (e.g. <code>~/.workbuddy/skills/</code>) — it is plain text." }
        ]
      },

      cta: {
        title: "Don't just watch it blow up — see why",
        desc: "One link in, a set of replicable tactics out.",
        primary: "Open on GitHub",
        secondary: "Copy install prompt"
      },
      footer: { license: "MIT licensed", madeWith: "Built with iskill-promo-page" }
    }
  }
};
