#!/usr/bin/env node
// extract-share-url.mjs —— 从「分享文案/口令/短链」里抽出可用的视频 URL。
//
// 为什么需要它：抖音/小红书/视频号的「复制链接」给到的往往是一整段带表情、
// 带口令(hardcode)的转发文本，例如：
//   7.86 jkh:/ 复制打开抖音，看看【xxx】https://v.douyin.com/AbCdEf/ 09/21
// 直接把整段喂给 yt-dlp 会失败。本脚本把里面的 URL（或裸的 sph 短码）抠出来。
//
// 用法：
//   node scripts/extract-share-url.mjs "<分享文案>"        # 从参数读
//   echo "<分享文案>" | node scripts/extract-share-url.mjs  # 从 stdin 读
//   node scripts/extract-share-url.mjs --json "<分享文案>"  # JSON 输出
//
// 输出（默认，纯文本，每行一个，去重；先所有 http(s) URL、再所有裸 sph 短码，各自按出现顺序）：
//   https://v.douyin.com/AbCdEf/
//   https://weixin.qq.com/sph/XXXX
// 退出码：0 = 至少抽到 1 条；1 = 没抽到（调用方据此请用户重发链接）。
//
// 零依赖，纯 Node（>= 18）。设计为可被 agent/脚本直接 execSync 调用。

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const rest = args.filter((a) => a !== "--json");

/** 从 stdin 读取全部文本（无 TTY 且无参数时）。 */
function readStdin() {
  return new Promise((resolve) => {
    if (process.stdin.isTTY) return resolve("");
    let buf = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (d) => (buf += d));
    process.stdin.on("end", () => resolve(buf));
  });
}

const URL_RE = /https?:\/\/[^\s，。、；：""''「」【】（）()<>《》]+/gi;
// 视频号短链常以裸码形式被转发（无 schema），形如 sph/AbCdEf 或 微信 sph 码。
const SPH_RE = /(?:^|[^a-z0-9/])sph\/([A-Za-z0-9_-]{6,})/g;

function extract(text) {
  const out = [];
  const seen = new Set();
  const push = (u) => {
    // 去掉 URL 尾部可能被中文标点/表情粘连的残渣
    const clean = u.replace(/[.,;:!?、，。；：！？]+$/, "");
    if (!clean || seen.has(clean)) return;
    seen.add(clean);
    out.push(clean);
  };

  for (const m of text.matchAll(URL_RE)) push(m[0]);
  for (const m of text.matchAll(SPH_RE)) push(`https://weixin.qq.com/sph/${m[1]}`);

  return out;
}

const main = async () => {
  const text = rest.length ? rest.join(" ") : await readStdin();
  const urls = extract(text || "");

  if (asJson) {
    process.stdout.write(JSON.stringify({ count: urls.length, urls }, null, 2) + "\n");
  } else {
    for (const u of urls) process.stdout.write(u + "\n");
  }
  process.exit(urls.length ? 0 : 1);
};

main();
