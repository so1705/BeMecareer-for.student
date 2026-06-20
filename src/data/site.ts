import { links } from "./links";

export const site = {
  name: "BeMeキャリア",
  jpName: "BeMeキャリア",
  title: "BeMeキャリア | 学生だけで、学生の未来に本気で向き合う。",
  description:
    "BeMeキャリアは、SNS・イベント・長期インターンを通じて、学生だからこそできる信頼ある価値提供を行う学生主体のキャリア支援団体です。",
  hero: {
    eyebrow: "学生主体のキャリア支援",
    headline: "学生だけで、学生の未来に本気で向き合う。",
    lead:
      "BeMeキャリアは、SNS・イベント・長期インターンを通じて、学生が前向きにキャリアや就職活動へ向き合える機会を届ける団体です。",
    shortAbout:
      "学生だからこそ、一番近くで信頼できる価値を届ける。"
  },
  stats: [
    { value: "2万人+", label: "SNS総フォロワー" },
    { value: "50名+", label: "長期インターン生" },
    { value: "年3回", label: "主催イベント" }
  ],
  nav: [
    { label: "理念", href: "#about" },
    { label: "大学別SNS", href: "#campus" },
    { label: "事業", href: "#activities" },
    { label: "メンバー", href: "#members" }
  ],
  footerLinks: [
    { label: "Instagram", href: links.instagram },
    { label: "公式LINE", href: links.officialLine },
    { label: "イベント", href: links.events },
    { label: "お問い合わせ", href: links.contact }
  ]
};