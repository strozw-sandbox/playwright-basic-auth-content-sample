# Playwright で Basic 認証のコンテンツをテストするための検証環境

## npm-script

|               | 内容                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pnpm start`  | Basic 認証(username: `watashi` , password: `anata` )で `public` 以下のコンテンツを `http://127.0.0.1:3000` で配信する |
| `pnpm codgen` | `playwright codegen` 相当の事を、`pnpm start` で配信しているコンテンツに対して行う                                    |

## 検証したこと

### Basic 認証をされた対象のコンテンツのテストコードを生成する

#### A: `playwright codegen` のテスト対象に Basic 認証対応のURLを渡す

以下の様に、テスト対象の URL で Basic 認証の username と password を渡す

```sh
playwright codegen http://watashi:anata@127.0.0.1:3000
```

`playwright codgen` は `playwright.config.ts` を参照しないため、コマンドのオプションで可能な範囲の設定を行う。

#### B: カスタムセットアップスクリプトを作成し、実行する。

より高度な事をしたい場合は、以下のドキュメントにあるとおり、カスタムスクリプトを作成し、`await page.pause()` を実行する必要がある。

この方法には、以下の課題がある。

- 生成コードに余計なコード（context と page の作成と後始末）が入る
- VSCode Extension と連携できない

本リポジトリの `tests/codgen.ts` と `package.json` の `scripts` の `codegen` を参照。
