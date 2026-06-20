# BeMeキャリア 学生向け団体紹介ホームページ

BeMeキャリアのイベント参加学生や公式LINE追加後の学生に向けて、団体の雰囲気・メンバーの想い・活動内容を伝える1ページ構成の公式ホームページです。

強い応募導線や面談予約導線ではなく、「どんな団体が運営しているのか」「学生のために本気で向き合っているのか」が自然に伝わることを重視しています。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- 静的サイトとして運用しやすい構成

## ファイル構成

```txt
beme-career-student-site/
├─ public/
│  └─ images/
│     └─ hero-community.png
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  └─ data/
│     ├─ activities.ts
│     ├─ links.ts
│     ├─ members.ts
│     └─ site.ts
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
└─ tsconfig.json
```

## セットアップ

```bash
npm install
npm run dev
```

起動後、ブラウザで以下を開いてください。

```txt
http://localhost:3000
```

## ビルド確認

```bash
npm run build
npm run start
```

## GitHubに上げる手順

```bash
git init
git add .
git commit -m "Initial BeMe Career student site"
git branch -M main
git remote add origin <GitHubリポジトリURL>
git push -u origin main
```

既存リポジトリに追加する場合は、`git init` と `git remote add` は不要です。

## Vercelでデプロイする手順

1. GitHubにこのプロジェクトを push します。
2. Vercelで `Add New Project` を選びます。
3. 対象のGitHubリポジトリを選択します。
4. Framework Preset が `Next.js` になっていることを確認します。
5. Build Command は `next build`、Install Command は `npm install` のままで問題ありません。
6. `Deploy` を押します。

## 後から差し替える箇所

- `src/data/site.ts`: サイト名、Heroコピー、説明文、実績数値、ナビゲーション
- `src/data/members.ts`: メンバー名、役職、紹介文、学生向けメッセージ、写真差し替え用情報
- `src/data/activities.ts`: 事業内容カード、説明文、タグ
- `src/data/links.ts`: Instagram、Official LINE、イベント情報、Contact のURL
- `public/images/hero-community.png`: Hero背景画像
- `src/app/layout.tsx`: SEOメタデータ、OGP設定

## デザイン意図

- 学生向けに、企業LPより柔らかく、でも信頼感が残るトーンにしています。
- Heroは生成画像を背景に使い、透明感・余白・やわらかい光で「安心して参加できそう」な印象をつくっています。
- CTAは控えめにし、応募・登録・面談予約などの強い導線は置いていません。
- 大学別Instagram運営は、大学名の大量列挙ではなく「その大学の学生が、その大学の学生へ届ける」という表現にしています。
- メンバー写真が未準備でも崩れないよう、イニシャル入りのプレースホルダーを用意しています。

## 実装上の注意点

- `src/app/page.tsx` は Framer Motion を使うため Client Component にしています。
- 顔写真を入れる場合は、`public/images/members/` などを作成し、`members.ts` に画像パスを追加してカード側を差し替えてください。
- OGP画像は現在 Hero画像を参照しています。正式なOGP専用画像を作る場合は `public/images/ogp.png` を追加し、`layout.tsx` の `openGraph.images` と `twitter.images` を更新してください。
- フッターリンクは仮の `#` 系リンクです。公開前に実URLへ差し替えてください。
