import { run, claudeCode } from "@ai-hero/sandcastle";
import { docker } from "@ai-hero/sandcastle/sandboxes/docker";

// simple-loop: GitHub Issues（Sandcastle ラベル）を1件ずつ処理して閉じる
// 実行: npx tsx .sandcastle/main.ts
const result = await run({
  name: "worker",
  agent: claudeCode("claude-sonnet-4-6"),
  // env: エージェントのコミットを人間のコミットと作者レベルで区別する
  sandbox: docker({
    env: {
      GIT_AUTHOR_NAME: "RALPH (Sandcastle Agent)",
      GIT_AUTHOR_EMAIL: "ralph-agent@users.noreply.github.com",
      GIT_COMMITTER_NAME: "RALPH (Sandcastle Agent)",
      GIT_COMMITTER_EMAIL: "ralph-agent@users.noreply.github.com",
    },
  }),
  promptFile: ".sandcastle/prompt.md",

  // 1イテレーション = 1 issue。issue 3件なので 4 に設定（最後の1回で COMPLETE を確認）
  maxIterations: 4,

  // 一時ブランチで作業し、完了後に HEAD（main）へマージバック
  branchStrategy: { type: "merge-to-head" },

  // ホストの node_modules をコピーして毎回のフルインストールを回避
  copyToWorktree: ["node_modules"],

  hooks: {
    sandbox: {
      onSandboxReady: [{ command: "npm install" }],
    },
  },

  logging: { type: "stdout" },
});

console.log("=== 結果 ===");
console.log("iterations:", result.iterations.length);
console.log("completionSignal:", result.completionSignal);
console.log("branch:", result.branch);
console.log("commits:", result.commits);
