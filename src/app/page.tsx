"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CircleDot, GraduationCap, Instagram, Menu, MessageCircle, UsersRound, X } from "lucide-react";
import { members } from "@/data/members";

const ease = [0.22, 1, 0.36, 1] as const;

const navItems = [
  { label: "理念", href: "#philosophy" },
  { label: "事業", href: "#services" },
  { label: "歩み", href: "#story" },
  { label: "運営", href: "#team" }
];

const serviceCards = [
  {
    number: "01",
    label: "大学別SNS",
    title: "その大学の学生に、近い言葉で届く情報を。",
    body: "各大学の先輩・OB・現役学生が発信に関わり、就活情報を一括で流すのではなく、大学ごとの生活圏に近い言葉で届けます。",
    image: "/images/campus-media-cinematic.jpg",
    points: ["大学ごとの文脈", "先輩のリアル", "次の行動へ接続"]
  },
  {
    number: "02",
    label: "イベント",
    title: "合同説明会ではなく、学生のための場をつくる。",
    body: "企業説明を聞くだけで終わらせず、学生が自分の未来に前向きになれる対話と導線を設計します。",
    image: "/images/event-workshop-cinematic.jpg",
    points: ["参加しやすい導線", "近い距離の対話", "熱量を次へつなぐ"]
  },
  {
    number: "03",
    label: "長期インターン",
    title: "学生企業の一員として、本気の実績をつくる。",
    body: "学歴や経験に不安がある学生でも、事業の当事者として関われる環境をつくり、挑戦を次の自信へ変えていきます。",
    image: "/images/internship-studio-cinematic.jpg",
    points: ["学生だけで運営", "実践経験", "成長できる環境"]
  }
];

const storyCards = [
  "情報戦になりがちな就活に、学生目線の信頼を置く。",
  "SNSで知り、イベントで出会い、インターンで挑戦する。",
  "大人の都合ではなく、学生のためになるかで判断する。",
  "関わる人すべてが前向きになれる学生企業をつくる。"
];

const stats = [
  { value: "2万人+", label: "SNS総フォロワー" },
  { value: "50名+", label: "長期インターン生" },
  { value: "年3回", label: "主催イベント" }
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.86, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="v2-shell">
      <header className={"v2-header " + (scrolled ? "is-scrolled" : "") + " " + (menuOpen ? "is-open" : "")}>
        <a href="#top" className="v2-brand" onClick={() => setMenuOpen(false)}>
          <strong>BeMeキャリア</strong>
          <span>学生キャリア支援</span>
        </a>

        <nav className="v2-side-nav" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button className="v2-menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>

        {menuOpen ? (
          <motion.div className="v2-menu" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34, ease }}>
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </header>

      <section id="top" className="v2-hero">
        <div className="v2-hero-scroll">Scroll</div>
        <motion.div className="v2-hero-copy v2-writing" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }}>
          <span>学生の近くで、</span><span>未来へ繋ぐ。</span>
        </motion.div>

        <motion.div className="v2-hero-image" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease, delay: 0.18 }}>
          <Image src="/images/student-discussion.jpg" alt="学生が対話している様子" fill priority unoptimized sizes="(min-width: 900px) 42vw, 82vw" className="object-cover" />
        </motion.div>

        <motion.div className="v2-hero-statement" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.34 }}>
          <p>BeMeキャリアは、学生だけで運営するキャリア支援団体です。</p>
          <p>大学別SNS、学生目線のイベント、自社の長期インターンを通じて、信頼できて無駄のない価値を学生に届けます。</p>
        </motion.div>

        <div className="v2-hero-logo">
          <strong>BeMe</strong>
          <span>学生キャリア支援</span>
        </div>
      </section>

      <section id="philosophy" className="v2-philosophy">
        <Image src="/images/hero-community-light.jpg" alt="" fill unoptimized sizes="100vw" className="object-cover" />
        <div className="v2-philosophy-shade" />
        <div className="v2-philosophy-inner">
          <Reveal className="v2-philosophy-left">
            <p>情報が多すぎて迷う時代だからこそ、学生に一番近い場所から、信頼できる情報と機会を届ける。</p>
            <p>同じ学生として悩みや不安に寄り添い、前向きな選択ができる時間をつくります。</p>
          </Reveal>
          <Reveal className="v2-philosophy-center v2-writing" delay={0.08}>学生の意思を、未来へ繋ぐ。</Reveal>
          <Reveal className="v2-philosophy-right" delay={0.12}>
            <p>大人が用意した正解を渡すのではなく、学生が自分の意思を見つけるための体験を設計する。</p>
            <p>それが、BeMeキャリアの価値提供です。</p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="v2-services">
        <Reveal className="v2-section-head">
          <span>事業内容</span>
          <h2>情報、出会い、挑戦を、ひとつの流れに。</h2>
          <p>学生が前向きに動き出せるように、SNS・イベント・長期インターンを一体の体験として設計しています。</p>
        </Reveal>

        <div className="v2-service-list">
          {serviceCards.map((service, index) => (
            <Reveal key={service.label} className="v2-service-card" delay={index * 0.08}>
              <div className="v2-service-image">
                <Image src={service.image} alt="" fill unoptimized sizes="(min-width: 900px) 32vw, 92vw" className="object-cover" />
              </div>
              <div className="v2-service-copy">
                <small>{service.number} / {service.label}</small>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}><CircleDot size={12} aria-hidden />{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="story" className="v2-story">
        <Reveal className="v2-story-head">
          <span>活動背景</span>
          <h2>学生だけで、学生のためになる仕組みをつくる。</h2>
        </Reveal>
        <div className="v2-story-rail">
          {[...storyCards, ...storyCards].map((story, index) => (
            <article key={story + index} className="v2-story-card">
              <small>Vol. {String((index % storyCards.length) + 1).padStart(2, "0")}</small>
              <p>{story}</p>
              <span>視点</span>
            </article>
          ))}
        </div>
        <div className="v2-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="v2-team">
        <Reveal className="v2-section-head">
          <span>運営メンバー</span>
          <h2>学生の未来に、本気で向き合う運営メンバー。</h2>
          <p>統括、学生側担当、マーケティング、企画まで。学生だけで動かすからこそ、学生の違和感に近くいられます。</p>
        </Reveal>
        <div className="v2-member-grid">
          {members.map((member, index) => (
            <Reveal key={member.name} className="v2-member" delay={index * 0.08}>
              <div className="v2-member-photo">
                <Image src={member.image} alt={`${member.name}の写真`} fill unoptimized sizes="(min-width: 900px) 28vw, 92vw" className="object-cover" />
              </div>
              <small>{member.role}</small>
              <h3>{member.name}</h3>
              <p>{member.affiliation}</p>
              <strong>{member.catchcopy}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="v2-footer">
        <div>
          <strong>BeMeキャリア</strong>
          <p>学生だけで、学生の未来に本気で向き合う。</p>
        </div>
        <div className="v2-footer-icons">
          <Instagram size={18} aria-hidden />
          <MessageCircle size={18} aria-hidden />
          <UsersRound size={18} aria-hidden />
          <GraduationCap size={18} aria-hidden />
          <CalendarCheck size={18} aria-hidden />
        </div>
      </footer>
    </main>
  );
}