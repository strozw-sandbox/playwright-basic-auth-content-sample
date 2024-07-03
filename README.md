# Playwright で Basic 認証のコンテンツをテストするための検証環境

## npm-script

|               | 内容                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pnpm start`  | Basic 認証(username: `watashi` , password: `anata` )で `public` 以下のコンテンツを `http://127.0.0.1:3000` で配信する |
| `pnpm codgen` | `playwright codegen` を実行                                                                                           |

## 解決したい事

- [x] `pnpm codgen http://127.0.0.1:3000` で対象のコンテンツのテストコードを生成する
  - `pnpm codegen http://watashi:anata@127.0.0.1:3000` とする必要あり
