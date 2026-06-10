import { run, claudeCode } from "@ai-hero/sandcastle";
import { docker } from "@ai-hero/sandcastle/sandboxes/docker";

// 実行: npx tsx .sandcastle/main.ts
const result = await run({
  agent: claudeCode("claude-sonnet-4-6"),
  sandbox: docker(),
  branchStrategy: { type: "branch", branch: "agent/implement-calculator" },
  promptFile: ".sandcastle/prompt.md",
  maxIterations: 3,
  name: "implement-calculator",
  logging: { type: "stdout" },
  hooks: {
    sandbox: {
      onSandboxReady: [{ command: "npm install" }],
    },
  },
});

console.log("=== 結果 ===");
console.log("iterations:", result.iterations.length);
console.log("completionSignal:", result.completionSignal);
console.log("branch:", result.branch);
console.log("commits:", result.commits);
