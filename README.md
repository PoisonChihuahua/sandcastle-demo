# sandcastle-demo

電卓モジュールのデモプロジェクトです。基本的な算術演算を提供する TypeScript ライブラリです。

## セットアップ

```bash
npm install
```

## テスト実行

```bash
npm test
```

型チェックのみ実行する場合:

```bash
npm run typecheck
```

## 提供している関数

| 関数 | シグネチャ | 説明 |
|------|-----------|------|
| `add` | `add(a: number, b: number): number` | 2 つの数値の和を返す |
| `divide` | `divide(a: number, b: number): number` | `a ÷ b` を返す。`b === 0` の場合は `Error("Division by zero")` を throw する |
| `power` | `power(base: number, exponent: number): number` | `base` の `exponent` 乗を返す。負の指数・ゼロ指数に対応 |

## 使用例

```typescript
import { add, divide, power } from "./src/calculator";

add(1, 2);        // 3
divide(10, 4);    // 2.5
divide(5, 0);     // Error: Division by zero
power(2, 10);     // 1024
power(2, -1);     // 0.5
power(9, 0);      // 1
```
