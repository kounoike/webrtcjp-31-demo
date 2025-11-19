# webrtcjp-31-demo

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## GitHub Pagesへのデプロイについて

このプロジェクトはtagprを使用したリリース管理を行っており、リリースPRがマージされたときにのみGitHub Pagesへ自動デプロイされます。

### リリースフロー

1. mainブランチへのコミットをプッシュすると、tagprが自動的にリリースPRを作成/更新します
2. リリースPRをマージすると、tagprがバージョンタグを作成します
3. タグが作成されると、自動的にSSGビルドが実行され、GitHub Pagesにデプロイされます

### 必要な設定

GitHub Pagesを使用するには、リポジトリの設定で以下を有効にしてください：

1. Settings > Pages > Source を "GitHub Actions" に設定
2. ワークフローに必要な権限を付与（自動的に設定されます）

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Scripts

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド（SSG）
pnpm build

# lint
pnpm lint

# フォーマット
pnpm format
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
