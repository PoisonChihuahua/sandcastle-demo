# Context

このリポジトリは TypeScript + Vitest の小さな電卓モジュールです。

直近のコミット:

!`git log --oneline -5`

現在のソース:

!`cat src/calculator.ts`

# Task

`src/calculator.ts` の TODO になっている `subtract` と `multiply` を TDD で実装してください。

1. まず `src/calculator.test.ts` に subtract / multiply のテストを追加する（負数・ゼロのケースを含める）
2. `src/calculator.ts` に実装を追加する
3. `npm install` 済みでなければ実行し、`npx vitest run` で全テストが通ることを確認する
4. `npx tsc --noEmit` で型エラーがないことを確認する
5. 変更を conventional commit 形式（例: `feat: implement subtract and multiply`）でコミットする

# Done

すべてのテストが通り、コミットが完了したら `<promise>COMPLETE</promise>` と出力して終了してください。
