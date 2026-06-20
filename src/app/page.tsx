"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  CalendarCheck,
  ChevronRight,
  Clapperboard,
  CircleDot,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Layers3,
  MessageCircle,
  MoveRight,
  PenLine,
  Play,
  Route,
  Sparkles,
  TimerReset,
  UsersRound
} from "lucide-react";
import { activities } from "@/data/activities";
import { members } from "@/data/members";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const narrativeFrames = [
  {
    icon: MessageCircle,
    label: "視点 01",
    title: "学生だけで、学生に一番近く届ける。",
    body: "大人が用意した正解を渡すのではなく、同じ学生として悩みや不安に近い場所から、信頼できる情報と機会を届けます。"
  },
  {
    icon: Route,
    label: "視点 02",
    title: "SNS、イベント、インターンを一本の体験にする。",
    body: "大学ごとの発信で知り、イベントで出会い、長期インターンで挑戦する。学生が前向きに動ける順番を設計します。"
  },
  {
    icon: BookOpenCheck,
    label: "視点 03",
    title: "学生企業の一員として、本気で成長できる。",
    body: "学歴や経験に不安がある学生でも、事業の当事者として関われる環境をつくり、次の挑戦につながる実績を育てます。"
  }
];

const campusSignals = [
  ["Signal 01", "大学ごとに届け方を変える", "同じ就活情報でも、大学・学部・先輩の文脈によって受け取り方は変わる。だから一括発信ではなく、大学ごとの目線で設計します。"],
  ["Signal 02", "OB・先輩のリアルを入れる", "その大学を知っている人が関わるから、表面的な情報ではなく、学生が自分ごととして受け取りやすい発信になります。"],
  ["Signal 03", "情報から行動までつなげる", "SNSで知って終わりではなく、イベントやインターンなど、実際に動ける機会まで自然につなげます。"]
];

const activityVisuals = [
  { src: "/images/campus-media-cinematic.jpg", label: "大学別SNS" },
  { src: "/images/event-workshop-cinematic.jpg", label: "キャリアイベント" },
  { src: "/images/internship-studio-cinematic.jpg", label: "長期インターン" }
];

const proofSignals = [
  { value: "2万人+", label: "SNS総フォロワー", note: "各大学の学生に近い発信で接点を広げる" },
  { value: "50名+", label: "長期インターン生", note: "学生だけで事業を動かす実践環境" },
  { value: "年3回", label: "主催イベント", note: "合同説明会ではない学生目線の企画" }
];

function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "center";
}) {
  const offset = {
    up: { y: 34, x: 0, scale: 1 },
    left: { x: -48, y: 0, scale: 1 },
    right: { x: 48, y: 0, scale: 1 },
    center: { x: 0, y: 18, scale: 0.96 }
  }[from];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-14% 0px -12% 0px" }}
      transition={{ duration: 0.72, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-coral">
      <Sparkles size={14} aria-hidden />
      {children}
    </p>
  );
}

function SectionLead({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-4xl text-center md:mb-20" from="center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance mt-5 text-4xl font-semibold leading-[1.05] text-ink md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
        {body}
      </p>
    </Reveal>
  );
}

function HeroWord({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      className="block"
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, ease, delay }}
    >
      {children}
    </motion.span>
  );
}

function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 2850);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) {
    return null;
  }

  return (
    <motion.div className="beme-intro" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
      <div className="beme-intro-atmosphere" aria-hidden />
      <div className="beme-intro-softgrain" aria-hidden />
      <motion.div
        className="beme-intro-word"
        initial={{ opacity: 0, scale: 0.46, y: 18, filter: "blur(14px)" }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [0.46, 0.92, 1.34, 7.2, 24],
          y: [18, 0, 0, -6, -24],
          filter: ["blur(14px)", "blur(0px)", "blur(0px)", "blur(3px)", "blur(26px)"]
        }}
        transition={{ duration: 2.48, ease, times: [0, 0.22, 0.52, 0.8, 1] }}
      >
        <span>Be</span>
        <span>Me</span>
      </motion.div>
      <motion.div
        className="beme-intro-burst"
        initial={{ opacity: 0, scale: 0.18 }}
        animate={{ opacity: [0, 0, 0.9, 0], scale: [0.18, 0.18, 1.25, 3.6] }}
        transition={{ duration: 2.64, ease, times: [0, 0.7, 0.84, 1] }}
        aria-hidden
      />
      <motion.div
        className="beme-intro-subcopy"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: [0, 1, 1, 0], y: [14, 0, 0, -16] }}
        transition={{ duration: 2.12, ease, times: [0, 0.26, 0.7, 1], delay: 0.14 }}
      >
        学生の未来に、本気で向き合う。
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [activeActivity, setActiveActivity] = useState(0);
  const [navCondensed, setNavCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = activities[activeActivity];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const onScroll = () => {
      setNavCondensed(window.scrollY > 150);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell overflow-hidden bg-paper text-ink">
      <LoadingScreen />
      <div className="site-linework-bg" aria-hidden />
      <div className="scroll-thread" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <header className={"beme-header " + (navCondensed ? "is-condensed" : "") + " " + (menuOpen ? "is-menu-open" : "")} aria-label="サイトヘッダー">
        <nav className="beme-nav" aria-label="主要ナビゲーション">
          <a
            href="#top"
            className="beme-nav-brand beme-nav-wordmark"
            aria-label="BeMeキャリア トップへ"
            onClick={() => setMenuOpen(false)}
          >
            <span className="beme-brand-kicker">学生キャリア支援</span>
            <span className="beme-nav-copy">
              <strong>BeMeキャリア</strong>
              <small>学生の未来に、本気で向き合う。</small>
            </span>
          </a>

          <div className="beme-nav-menu" aria-label="ページ内メニュー">
            {site.nav.map((item, index) => (
              <a key={item.href} href={item.href} className="beme-nav-link">
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="beme-nav-toggle"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {menuOpen ? (
          <motion.div
            className="beme-menu-panel"
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.34, ease }}
          >
            <div className="beme-menu-panel-head">
              <span>ページ移動</span>
              <strong>BeMeキャリア</strong>
            </div>
            {site.nav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <small>0{index + 1}</small>
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>
        ) : null}
      </header>

      <section id="top" className="hero-stage relative min-h-[100svh] px-5 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="hero-cinematic-backdrop absolute inset-0" aria-hidden>
          <div className="hero-bg-photo hero-bg-photo-a">
            <Image src="/images/hero-community-light.jpg" alt="" fill priority unoptimized sizes="100vw" className="object-cover" />
          </div>
          <div className="hero-bg-photo hero-bg-photo-b">
            <Image src="/images/student-discussion.jpg" alt="" fill priority unoptimized sizes="100vw" className="object-cover" />
          </div>
          <div className="hero-bg-photo hero-bg-photo-c">
            <Image src="/images/campus-media-cinematic.jpg" alt="" fill priority unoptimized sizes="100vw" className="object-cover" />
          </div>
        </div>
        <div className="hero-motion-strip absolute inset-x-0 top-[18%]" aria-hidden>
          <span>BeMeキャリア</span>
          <span>学生主体</span>
          <span>キャリア支援</span>
          <span>大学別SNS</span>
        </div>
        <div className="hero-light-rails absolute inset-0" aria-hidden />
        <div className="ambient-film absolute inset-0" />
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-linework absolute inset-0" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-4xl">
            <motion.div
              className="mb-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-semibold">
                学生だけでつくるキャリア支援
              </span>
              <span className="rounded-full border border-coral/20 bg-coral/10 px-4 py-2 text-sm font-semibold text-coral">
                SNS・イベント・長期インターン
              </span>
            </motion.div>

            <h1 className="hero-title text-balance">
              <HeroWord>学生の</HeroWord>
              <HeroWord delay={0.09}>近くで、</HeroWord>
              <HeroWord delay={0.18}>未来に本気で</HeroWord>
              <HeroWord delay={0.27}>向き合う。</HeroWord>
            </h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-ink/70 md:text-lg"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease, delay: 0.36 }}
            >
              BeMeキャリアは、学生だけで運営するキャリア支援団体です。大学別SNS、学生目線のイベント、自社の長期インターンを通じて、信頼できて無駄のない価値を学生に届けます。
            </motion.p>

            <motion.div
              className="hero-trust-signals"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, ease, delay: 0.48 }}
            >
              {[
                ["01", "学生だけで運営", "企画から現場まで学生が動かす"],
                ["02", "大人の介入なし", "学生のためになるかで判断する"],
                ["03", "実践機会まで提供", "情報だけで終わらない環境をつくる"]
              ].map(([number, title, body], index) => (
                <motion.span
                  key={title}
                  className="hero-trust-card"
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.64, ease, delay: 0.58 + index * 0.08 }}
                >
                  <small>{number}</small>
                  <strong>{title}</strong>
                  <em>{body}</em>
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-canvas relative min-h-[560px] lg:min-h-[680px]"
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
          >
            <div className="orb orb-coral" />
            <div className="orb orb-sage" />
            <div className="hero-photo-frame">
              <Image
                src="/images/student-discussion.jpg"
                alt=""
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/42 via-transparent to-paper/10" />
            </div>

            <div className="floating-ticket ticket-one">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-coral">01 / Be</span>
              <strong>ありたい姿</strong>
            </div>
            <div className="floating-ticket ticket-two">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-sage">02 / Me</span>
              <strong>自分の意思</strong>
            </div>
            <div className="hero-stat-strip">
              {proofSignals.map((stat) => (
                <span key={stat.label}>
                  <strong>{stat.value}</strong>
                  <small>{stat.label}</small>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="motion-brief-section relative px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="brief-heading" from="center">
            <span className="brief-kicker">
              <Clapperboard size={16} aria-hidden />
              体験設計
            </span>
            <h2>信頼できる情報と、動き出せる機会を、学生の近くに置く。</h2>
          </Reveal>

          <div className="motion-reel" aria-label="BeMeの体験設計">
            {narrativeFrames.map((frame, index) => {
              const Icon = frame.icon;
              return (
                <Reveal key={frame.title} className="reel-frame" from="center" delay={index * 0.07}>
                  <div className="frame-chrome">
                    <span>{frame.label}</span>
                    <span>00:{String((index + 1) * 8).padStart(2, "0")}</span>
                  </div>
                  <div className="frame-body">
                    <Icon size={25} aria-hidden />
                    <h3>{frame.title}</h3>
                    <p>{frame.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end" from="center">
            <div>
              <Eyebrow>BeMeについて</Eyebrow>
              <h2 className="section-title mt-5 text-balance">
                学生だからこそ、一番信頼できる価値を届ける。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
              BeMeキャリアは、学生にとって本当に役立つ情報と機会を、学生自身の手でつくる団体です。近い目線で届けるからこそ、無駄なく、信頼できるキャリア支援を実現できます。
            </p>
          </Reveal>

          <div className="be-me-grid">
            <Reveal className="be-panel" from="left">
              <span className="giant-letter">Be</span>
              <h3>学生に近いから、迷いに届く。</h3>
              <p>
                就活やキャリアは情報戦になりやすい。だからこそ、同じ学生として不安や違和感に近い場所から、前向きに考えられるきっかけを届けます。
              </p>
            </Reveal>
            <Reveal className="me-panel" from="right" delay={0.08}>
              <span className="giant-letter">Me</span>
              <h3>学生企業として、本気で機会をつくる。</h3>
              <p>
                SNS、イベント、長期インターンまでを学生だけで動かすことで、支援される側で終わらない、本気で成長できる環境をつくっています。
              </p>
            </Reveal>
          </div>

          <div className="proof-rail">
            {proofSignals.map((signal, index) => (
              <Reveal key={signal.label} className="proof-signal" from="center" delay={index * 0.05}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <p>{signal.note}</p>
              </Reveal>
            ))}
          </div>

          <div className="principle-deck">
            {[
              {
                icon: UsersRound,
                title: "全て大学ごとの発信",
                body: "企画、発信、イベント、インターン運営まで、学生自身が意思決定して動かしています。学生に近いからこそ、本当に必要な形に変えられます。"
              },
              {
                icon: HeartHandshake,
                title: "大人が介入しない",
                body: "大人の都合ではなく、学生のためになるかを軸に判断します。だからこそ、押し付けではない信頼できる体験をつくれます。"
              },
              {
                icon: GraduationCap,
                title: "成長できる環境",
                body: "関わる人が挑戦し、成長し、誰かのためになれる環境を大切にしています。支援する側もされる側も前向きになれる場所です。"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="principle-row" delay={index * 0.06} from="center">
                  <Icon size={24} aria-hidden />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ink-section relative px-5 py-24 text-paper md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-28" from="left">
              <Eyebrow>活動理由</Eyebrow>
              <h2 className="section-title mt-5 text-balance text-paper">
                学生の領域を超える挑戦を、学生だけで。
              </h2>
              <p className="mt-6 text-base leading-8 text-paper/68 md:text-lg">
                SNS総フォロワー2万人、インターン生50人、年3回ほどの主催イベント。大手企業を含む外部との取引も行いながら、学生だけで学生のためになる事業を動かしています。
              </p>
              <div className="decision-caption">
                <span>情報</span>
                <MoveRight size={16} aria-hidden />
                <span>対話</span>
                <MoveRight size={16} aria-hidden />
                <span>選択</span>
              </div>
              <div className="frame-meter" aria-hidden>
                <span />
                <span />
                <span />
                <span />
              </div>
            </Reveal>

            <div className="shift-list">
              {[
                ["情報が多すぎて迷う", "信頼できる学生目線の情報へ"],
                ["合同説明会っぽくて遠い", "学生のために設計されたイベントへ"],
                ["長期インターンが怖い", "学生企業の一員として挑戦へ"],
                ["経験や学歴に自信がない", "本気で実績をつくれる環境へ"]
              ].map(([before, after], index) => (
                <Reveal key={before} className="shift-item" from={index % 2 ? "right" : "left"} delay={index * 0.04}>
                  <span className="shift-before">{before}</span>
                  <MoveRight size={22} aria-hidden />
                  <strong className="shift-after">{after}</strong>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

            <section id="campus" className="campus-section campus-cinema relative px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="campus-cinema-grid">
            <Reveal className="campus-cinema-copy" from="left">
              <Eyebrow>大学別メディア設計</Eyebrow>
              <h2 className="section-title mt-5 text-balance">
                その大学の学生に、本当に役立つ情報を届ける。
              </h2>
              <p>
                各大学のOBや先輩、現役学生が発信に関わることで、その大学の学生にとって本当に使いやすい情報設計を行っています。就活情報をただ流すのではなく、大学ごとの生活圏に近い言葉で届けます。
              </p>
              <div className="campus-mini-proof">
                <span>総フォロワー2万人+</span>
                <span>大学ごとの発信</span>
                <span>先輩・OBの視点</span>
              </div>
            </Reveal>

            <Reveal className="device-theater" from="right">
              <motion.div
                className="campus-photo-backdrop"
                initial={{ opacity: 0, scale: 1.08, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 1.15, ease }}
              >
                <Image
                  src="/images/campus-media-cinematic.jpg"
                  alt=""
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="iphone-orbit"
                initial={{ opacity: 0, x: 120, rotateY: -58, rotateZ: 8, scale: 0.78 }}
                whileInView={{ opacity: 1, x: 0, rotateY: -12, rotateZ: -3, scale: 1 }}
                viewport={{ once: true, margin: "-22% 0px" }}
                transition={{ duration: 1.35, ease }}
              >
                <div className="iphone-screen">
                  <div className="phone-status"><span>BeMe</span><Instagram size={16} aria-hidden /></div>
                  {[
                    ["インターン情報", "その大学の先輩が届けるリアルな情報"],
                    ["イベント導線", "合同説明会ではない学生目線の企画"],
                    ["先輩の声", "長期インターンへ挑戦するきっかけ"]
                  ].map(([tag, copy], index) => (
                    <motion.div
                      key={tag}
                      className="phone-feed-row"
                      initial={{ opacity: 0, x: 36 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.62, ease, delay: 0.24 + index * 0.12 }}
                    >
                      <small>{tag}</small>
                      <strong>{copy}</strong>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="orbit-note note-a" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.35 }} viewport={{ once: true }}>
                <span>キャンパスの文脈</span>
                <strong>生活圏に近い</strong>
              </motion.div>
              <motion.div className="orbit-note note-b" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.48 }} viewport={{ once: true }}>
                <span>次の行動</span>
                <strong>イベントへつながる</strong>
              </motion.div>
            </Reveal>
          </div>

          <div className="campus-signal-grid">
            {campusSignals.map(([label, title, body], index) => (
              <Reveal key={title} className="campus-signal" from="center" delay={index * 0.08}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


            <section id="activities" className="activity-cinema-section relative px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="activity-cinema-head" from="center">
            <Eyebrow>事業設計</Eyebrow>
            <h2>SNS、イベント、長期インターンを、学生の成長機会に変える。</h2>
            <p>
              情報を知るだけで終わらせず、イベントで出会い、長期インターンで挑戦する。BeMeキャリアは、学生が前向きに動き出せる機会を一つの流れとして設計しています。
            </p>
          </Reveal>

          <div className="activity-cinema-grid">
            <Reveal className="activity-selector" from="left">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                const isActive = activeActivity === index;
                return (
                  <button
                    key={activity.title}
                    type="button"
                    className={isActive ? "activity-frame-tab active" : "activity-frame-tab"}
                    onClick={() => setActiveActivity(index)}
                  >
                    <span>0{index + 1}</span>
                    <Icon size={22} aria-hidden />
                    <strong>{activity.label}</strong>
                    <small>{activity.title}</small>
                  </button>
                );
              })}
            </Reveal>

            <Reveal className="activity-feature" from="right">
              <motion.div
                key={active.title}
                className="activity-feature-inner"
                initial={{ opacity: 0, y: 44, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.72, ease }}
              >
                <div className="activity-photo-stage">
                  <Image
                    src={activityVisuals[activeActivity].src}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                  <div className="activity-photo-overlay" />
                  <div className="activity-frame-label">
                    <span>{activityVisuals[activeActivity].label}</span>
                    <span>構成 0{activeActivity + 1}</span>
                  </div>
                </div>
                <div className="activity-feature-copy">
                  <div className="activity-stage-top">
                    <div className="chapter-icon">
                      <ActiveIcon size={28} aria-hidden />
                    </div>
                    <span>{active.label}</span>
                    <small className="frame-counter">設計 0{activeActivity + 1}</small>
                  </div>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                  <ul>
                    {active.points.map((point) => (
                      <li key={point}>
                        <CircleDot size={14} aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>


            <section id="events" className="events-section event-cinema-section relative px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="event-head" from="center">
            <Eyebrow>イベント体験</Eyebrow>
            <h2>合同説明会ではなく、学生のためのイベントをつくる。</h2>
            <p>
              企業の説明を聞くだけの場ではなく、学生が自分のキャリアに前向きになれる場を目指しています。企画、導線、当日の空気まで、学生目線で設計します。
            </p>
          </Reveal>

          <div className="event-cinema-layout">
            <Reveal className="event-image-stage" from="left">
              <Image
                src="/images/event-workshop-cinematic.jpg"
                alt=""
                fill
                unoptimized
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="event-image-vignette" />
              <div className="event-live-chip"><span /> 対話型イベント設計</div>
            </Reveal>

            <div className="event-road event-road-v2">
              {[
                {
                  icon: MessageCircle,
                  title: "参加前",
                  body: "学生が入りやすい案内と、当日の雰囲気が想像できる導線を用意する。"
                },
                {
                  icon: UsersRound,
                  title: "当日",
                  body: "企業や同世代と近い距離で話し、自分の可能性を前向きに広げられる場にする。"
                },
                {
                  icon: CalendarCheck,
                  title: "参加後",
                  body: "イベント後の熱量を、SNSや長期インターンなど次の機会へつなげる。"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} className="event-node" from="center" delay={index * 0.08}>
                    <span className="event-index">0{index + 1}</span>
                    <Icon size={26} aria-hidden />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="event-scanline" aria-hidden />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      <section id="members" className="relative px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionLead
            eyebrow="運営メンバー"
            title="学生のために、本気で動く運営メンバー。"
            body="BeMeキャリアは、学生だけで動かす団体です。統括、学生側担当、マーケティング、企画まで、それぞれが学生の未来に向き合っています。"
          />

          <div className="member-editorial member-photo-editorial">
            {members.map((member, index) => (
              <Reveal key={member.name} className="member-strip member-photo-strip" from={index % 2 ? "right" : "left"}>
                <div className="member-photo">
                  <Image
                    src={member.image}
                    alt={`${member.name}の写真`}
                    fill
                    unoptimized
                    sizes="(min-width: 900px) 280px, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="member-copy">
                  <small>{member.role}</small>
                  <h3>{member.name}</h3>
                  <p className="member-affiliation">{member.affiliation}</p>
                  <strong>{member.catchcopy}</strong>
                  <p>{member.intro}</p>
                </div>
                <blockquote>{member.message}</blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="philosophy-section relative px-5 py-24 md:px-8 md:py-36">
        <div className="philosophy-film absolute inset-0" />
        <div className="mx-auto max-w-7xl">
          <Reveal className="philosophy-card" from="center">
            <div className="philosophy-icons">
              <PenLine size={28} aria-hidden />
              <Play size={18} aria-hidden />
              <Layers3 size={26} aria-hidden />
              <TimerReset size={24} aria-hidden />
            </div>
            <h2>学生だけで、学生のためになる価値をつくり続ける。</h2>
            <p>
              BeMeキャリアは、信頼できる発信、学生のためのイベント、本気で挑戦できる長期インターンを通じて、関わる人すべてが前向きになれる環境をつくっていきます。
            </p>
          </Reveal>
        </div>
      </section>

      

      <footer id="footer" className="px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-ink/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-2xl font-semibold">{site.name}</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
              学生だけで、学生の未来に本気で向き合う。SNS・イベント・長期インターンを通じて、信頼できる価値提供を続けます。
            </p>
          </div>
          <div className="footer-proof-list" aria-label="BeMeキャリアの実績">
            {proofSignals.map((item) => (
              <span key={item.label}>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </span>
            ))}
          </div>
          <p className="text-sm text-muted md:col-span-2">Copyright © {new Date().getFullYear()} BeMeキャリア</p>
        </div>
      </footer>
    </main>
  );
}








