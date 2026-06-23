"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ChevronRight, CircleDot, Sparkles } from "lucide-react";
import type { ServiceDetail } from "@/data/services";

const ease = [0.22, 1, 0.36, 1] as const;
const ambientImages = ["/images/linework-bg.jpg", "/images/student-discussion.jpg", "/images/hero-community-light.jpg"];

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-14% 0px -14% 0px" }}
      transition={{ duration: 0.82, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ServiceDetailClient({ service, siblings }: { service: ServiceDetail; siblings: ServiceDetail[] }) {
  const shellRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: shellRef, offset: ["start start", "end end"] });
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -90]);
  const imageScale = useTransform(scrollYProgress, [0, 0.24], [1.04, 1.16]);
  const inkX = useTransform(scrollYProgress, [0, 0.7], ["-18%", "12%"]);

  return (
    <main ref={shellRef} className="service-v3-shell">
      <motion.div className="service-v3-ambient" aria-hidden style={{ x: inkX }}>
        <span />
        <span />
        <span />
      </motion.div>

      <header className="service-v3-nav">
        <Link href="/" className="service-v3-back"><ArrowLeft size={16} aria-hidden />トップへ戻る</Link>
        <div className="service-v3-nav-title">
          <span>{service.number}</span>
          <strong>{service.label}</strong>
        </div>
      </header>

      <section className="service-v3-hero">
        <motion.div className="service-v3-hero-copy" style={{ y: heroY }}>
          <span>{service.number} / BeMeキャリア</span>
          <h1>{service.detailTitle}</h1>
          <p>{service.lead}</p>
          <div className="service-v3-point-row">
            {service.points.map((point) => <i key={point}>{point}</i>)}
          </div>
        </motion.div>

        <div className="service-v3-hero-stage" aria-label={`${service.label}の雰囲気`}>
          <motion.div className="service-v3-main-image" style={{ scale: imageScale }}>
            <Image src={service.image} alt="" fill priority unoptimized sizes="(min-width: 920px) 48vw, 92vw" className="object-cover" />
          </motion.div>
          <div className="service-v3-filmstrip" aria-hidden>
            {ambientImages.map((src, index) => (
              <div key={src} style={{ animationDelay: `${index * 1.5}s` }}>
                <Image src={src} alt="" fill unoptimized sizes="160px" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="service-v3-hero-note">
            <Sparkles size={15} aria-hidden />
            <span>学生から学生へ。中身が見える支援設計。</span>
          </div>
        </div>
      </section>

      <section className="service-v3-mobile-summary" aria-label="要点">
        {service.proof.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="service-v3-story">
        <FadeIn className="service-v3-story-copy">
          <span>なぜ必要か</span>
          {service.detailBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </FadeIn>
        <FadeIn className="service-v3-proof-board" delay={0.12}>
          {service.metrics.map((metric, index) => (
            <article key={metric.label}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.note}</p>
            </article>
          ))}
        </FadeIn>
      </section>

      <section className="service-v3-transparent">
        <div className="service-v3-section-head">
          <span>透明性</span>
          <h2>何を考えて、どう届けているかを見える形にする。</h2>
        </div>
        <div className="service-v3-transparent-grid">
          {service.transparency.map((item, index) => (
            <FadeIn key={item.title} className="service-v3-transparent-card" delay={index * 0.08}>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="service-v3-motion-panel">
        <div className="service-v3-motion-video" aria-hidden>
          <Image src={service.image} alt="" fill unoptimized sizes="100vw" className="object-cover" />
          <div />
        </div>
        <div className="service-v3-motion-content">
          <span>流れ</span>
          <h2>認知、対話、実践まで。学生が止まらない導線にする。</h2>
          <div className="service-v3-graph">
            {service.graph.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease, delay: index * 0.08 }}
              >
                <span>{item.label}</span>
                <i><b style={{ width: item.value + "%" }} /></i>
                <strong>{item.value}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-v3-flow">
        <div className="service-v3-section-head">
          <span>設計手順</span>
          <h2>一つずつ、学生が動ける状態へ近づける。</h2>
        </div>
        <div className="service-v3-flow-track">
          {service.flow.map((item, index) => (
            <FadeIn key={item.title} className="service-v3-flow-step" delay={index * 0.08}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="service-v3-scenes">
        {service.scenes.map((scene, index) => (
          <FadeIn key={scene.title} className="service-v3-scene" delay={index * 0.1}>
            <span><CircleDot size={13} aria-hidden />{scene.title}</span>
            <p>{scene.body}</p>
          </FadeIn>
        ))}
      </section>

      <section className="service-v3-next">
        <p>他の事業も見る</p>
        <div>
          {siblings.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`}>
              <span>{item.number}</span>
              <strong>{item.label}</strong>
              <ChevronRight size={18} aria-hidden />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}