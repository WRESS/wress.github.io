## WRESS公式サイト
### 推奨バージョン
基本的には[Codespaces](https://github.co.jp/features/codespaces)の使用を推奨。
```
$ node -v
v20.11.1

$ npm -v
10.4.0
```
### ビルド他
開発サーバー
```
npm run dev
```

Storybookサーバー
```
npm run storybook
```

ビルド
```
npm run build
```

### コントリビューション
`feature/[開発項目名]`というブランチを切って開発、`develop/1.1.0`にPRを出す。
リリース時に`develop/1.1.0`を`master`にマージ。
