export type ServiceDetail = {
  slug: string;
  number: string;
  label: string;
  title: string;
  body: string;
  image: string;
  points: string[];
  lead: string;
  detailTitle: string;
  detailBody: string[];
  flow: { title: string; body: string }[];
  metrics: { value: string; label: string; note: string }[];
  graph: { label: string; value: number }[];
  scenes: { title: string; body: string }[];
  transparency: { label: string; title: string; body: string }[];
  proof: { label: string; value: string; body: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "sns",
    number: "01",
    label: "大学別SNS",
    title: "大学ごとの空気に合う言葉で、必要な情報を届ける。",
    body: "各大学の先輩や現役学生が発信に関わります。就活情報を一括で流すのではなく、その大学の学生が読みやすい形に整えます。",
    image: "/images/campus-media-cinematic.jpg",
    points: ["大学ごとの文脈", "先輩の実感", "次の行動へ接続"],
    lead: "同じ就活情報でも、大学が違えば受け取り方は変わります。だから入口から大学ごとに設計します。",
    detailTitle: "その大学を知る人が、その大学の学生に届く言葉で伝える。",
    detailBody: [
      "BeMeキャリアのSNSは、全国へ同じ情報を流すメディアではありません。大学ごとの先輩、OB、現役学生が発信に関わり、その大学の学生が読みやすい順番と言葉に整えます。",
      "情報が多いほど、学生は迷います。必要なのは量ではなく、自分に関係があると感じられる情報です。SNSで知り、イベントで話し、インターンで試す。そこまでを一つの流れとして設計します。"
    ],
    flow: [
      { title: "大学ごとの温度を読む", body: "学部、キャンパス、先輩の進路感まで見て、発信の切り口を決めます。" },
      { title: "学生の言葉に直す", body: "企業目線の説明を、その大学の学生が違和感なく読める表現に置き換えます。" },
      { title: "次の行動を置く", body: "保存で終わらせず、イベント参加やインターン応募につながる導線を用意します。" }
    ],
    metrics: [
      { value: "2万人+", label: "SNS総フォロワー", note: "大学別アカウントを含む接点" },
      { value: "大学別", label: "発信設計", note: "一括配信ではなく大学ごとに編集" },
      { value: "先輩視点", label: "情報の距離", note: "学生が読みやすい言葉に整える" }
    ],
    graph: [
      { label: "認知", value: 88 },
      { label: "保存", value: 64 },
      { label: "相談", value: 48 },
      { label: "参加", value: 36 }
    ],
    scenes: [
      { title: "投稿前", body: "大学ごとの学生が何に迷っているかを見て、切り口を決める。" },
      { title: "投稿後", body: "反応を見て、イベントやインターンにつながる導線を調整する。" }
    ],
    transparency: [
      { label: "編集", title: "誰に向けた投稿かを先に決める", body: "学年、大学、よくある不安を分けてから投稿をつくります。広く刺さる言葉より、目の前の学生が読める言葉を優先します。" },
      { label: "検証", title: "反応を見て次の導線を直す", body: "保存、相談、参加の反応を見ながら、投稿だけで終わらない流れへ調整します。" },
      { label: "接続", title: "イベントや実践機会へつなぐ", body: "知って終わりではなく、話せる場、試せる場まで進めるように導線を置きます。" }
    ],
    proof: [
      { label: "運営", value: "学生編集", body: "大人の言葉をそのまま出さず、学生が読める表現へ整える。" },
      { label: "距離", value: "大学単位", body: "大学ごとの生活圏と進路感に合わせる。" },
      { label: "目的", value: "行動接続", body: "投稿を次の相談、参加、挑戦へつなげる。" }
    ]
  },
  {
    slug: "events",
    number: "02",
    label: "イベント",
    title: "説明を聞くだけで終わらない、学生のための場をつくる。",
    body: "企業の話を並べるだけではなく、学生が自分の未来を考えやすい場にします。参加前、当日、参加後までを一つの体験として設計します。",
    image: "/images/event-workshop-cinematic.jpg",
    points: ["参加しやすい入口", "近い距離の対話", "次につながる余韻"],
    lead: "イベントで大切なのは、説明の量ではありません。学生が帰るときに、次の一歩を考えられることです。",
    detailTitle: "企業の説明を、学生が動き出せる時間に変える。",
    detailBody: [
      "BeMeキャリアのイベントは、よくある合同説明会とは別の体験を目指しています。企業の情報を並べるだけでは、学生は自分の選択に結びつけにくいからです。",
      "参加前の入りやすさ、当日の距離感、参加後の動き方まで設計します。SNSで知った情報を、対話を通して自分の判断材料に変える。その流れをつくります。"
    ],
    flow: [
      { title: "入口を軽くする", body: "告知、申込、当日の雰囲気を見せ、初参加でも入りやすくします。" },
      { title: "話せる距離をつくる", body: "企業や同世代と近く話せるように、説明と対話の比率を調整します。" },
      { title: "参加後につなげる", body: "当日の熱量を、SNS、相談、インターンの次の行動に接続します。" }
    ],
    metrics: [
      { value: "年3回", label: "主催イベント", note: "学生目線で企画から運営まで担当" },
      { value: "対話型", label: "イベント設計", note: "説明だけで終わらない構成" },
      { value: "企業連携", label: "外部接点", note: "学生の機会につながる協力先" }
    ],
    graph: [
      { label: "告知", value: 76 },
      { label: "申込", value: 58 },
      { label: "対話", value: 72 },
      { label: "次回行動", value: 46 }
    ],
    scenes: [
      { title: "参加前", body: "学生が不安を感じにくい案内と、当日の雰囲気が見える導線を用意する。" },
      { title: "参加後", body: "話して終わりにせず、次の相談や挑戦に進める余白を残す。" }
    ],
    transparency: [
      { label: "企画", title: "学生が入りやすい理由をつくる", body: "テーマ、告知、申込の言葉まで、初めての学生が参加しやすい形に整えます。" },
      { label: "当日", title: "説明と対話の比率を調整する", body: "聞くだけの時間を減らし、学生が質問しやすい距離と余白を設計します。" },
      { label: "余韻", title: "帰った後の動きまで残す", body: "イベント後に相談、発信、インターンへ進めるよう、次の行動を見える形で渡します。" }
    ],
    proof: [
      { label: "頻度", value: "年3回", body: "企画から運営まで学生主体で開催。" },
      { label: "形式", value: "対話型", body: "説明会ではなく、学生が話せる場にする。" },
      { label: "接点", value: "企業連携", body: "学生の挑戦につながる外部機会を増やす。" }
    ]
  },
  {
    slug: "internship",
    number: "03",
    label: "長期インターン",
    title: "学生企業の一員として、本気で使える経験をつくる。",
    body: "経験や学歴に不安がある学生でも、事業の当事者として関われる場所を用意します。挑戦を、次の自信につながる実績に変えます。",
    image: "/images/internship-studio-cinematic.jpg",
    points: ["学生だけで運営", "実務に近い経験", "成長が残る環境"],
    lead: "長期インターンへの不安を下げ、学生が事業の当事者として動ける場所をつくります。",
    detailTitle: "経験がない学生にも、事業を動かす側に立てる機会を。",
    detailBody: [
      "長期インターンが怖い。経験がない。学歴に自信がない。そうした不安は、自分たちも通ってきました。だからBeMeキャリアでは、挑戦しやすい入口と、責任を持って動ける環境の両方を用意します。",
      "任された作業をこなすだけでは、学生の自信は残りにくい。SNS、イベント、企画、マーケティングに事業の当事者として関わり、行動が結果に返ってくる経験をつくります。"
    ],
    flow: [
      { title: "不安を前提に始める", body: "経験がないことを責めず、最初の役割を小さく切って挑戦しやすくします。" },
      { title: "事業の一部を持つ", body: "発信、企画、運営、改善まで、自分の判断が反映される仕事を任せます。" },
      { title: "経験を言葉にする", body: "取り組んだことを、就活や次の挑戦で話せる実績として整理します。" }
    ],
    metrics: [
      { value: "50名+", label: "インターン生", note: "学生だけで動かす実践環境" },
      { value: "実務型", label: "役割設計", note: "発信、企画、運営まで担当" },
      { value: "学生企業", label: "運営体制", note: "大人に頼りきらない意思決定" }
    ],
    graph: [
      { label: "入口", value: 68 },
      { label: "実務", value: 82 },
      { label: "改善", value: 62 },
      { label: "実績化", value: 74 }
    ],
    scenes: [
      { title: "初月", body: "小さな役割から始め、事業の流れと判断基準を覚える。" },
      { title: "三か月後", body: "自分で改善を提案し、結果まで見にいく経験を増やす。" }
    ],
    transparency: [
      { label: "入口", title: "不安を隠さず始められる", body: "経験がない前提で、最初の役割を小さく切ります。いきなり成果を求めるのではなく、動ける状態をつくります。" },
      { label: "実務", title: "学生だけで事業を動かす", body: "SNS、企画、運営、改善まで、学生の判断が反映される仕事を任せます。" },
      { label: "実績", title: "取り組みを言葉に残す", body: "やったことを経験で終わらせず、就活や次の挑戦で話せる形に整理します。" }
    ],
    proof: [
      { label: "人数", value: "50名+", body: "同じ不安を持つ学生が、実務へ入っている。" },
      { label: "体制", value: "学生運営", body: "意思決定も改善も、学生が中心になって進める。" },
      { label: "経験", value: "実務型", body: "作業ではなく、事業の一部を担う。" }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}