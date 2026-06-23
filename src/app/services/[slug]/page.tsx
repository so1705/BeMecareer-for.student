import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CircleDot } from "lucide-react";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.label} | BeMeキャリア`,
    description: service.lead
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="service-detail-shell">
      <header className="service-detail-nav">
        <Link href="/" className="service-back"><ArrowLeft size={16} aria-hidden />トップへ戻る</Link>
        <strong>BeMeキャリア</strong>
      </header>

      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <span>{service.number} / {service.label}</span>
          <h1>{service.detailTitle}</h1>
          <p>{service.lead}</p>
        </div>
        <div className="service-detail-image">
          <Image src={service.image} alt="" fill priority unoptimized sizes="(min-width: 900px) 46vw, 92vw" className="object-cover" />
        </div>
      </section>

      <section className="service-detail-body">
        <div className="service-detail-lead">
          {service.detailBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="service-detail-points">
          {service.points.map((point) => (
            <span key={point}><CircleDot size={12} aria-hidden />{point}</span>
          ))}
        </div>
      </section>

      <section className="service-detail-metrics" aria-label="事業の指標">
        {service.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.note}</p>
          </article>
        ))}
      </section>

      <section className="service-detail-visual">
        <div className="service-detail-visual-copy">
          <span>設計の流れ</span>
          <h2>学生が迷わず次へ進めるように、接点を細かく分けて設計する。</h2>
          <p>認知、参加、実践までの間にある小さな迷いを減らすため、発信と体験を分けて見ています。</p>
        </div>
        <div className="service-detail-graph" aria-label="導線グラフ">
          {service.graph.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <i><b style={{ width: item.value + "%" }} /></i>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="service-detail-flow">
        {service.flow.map((item, index) => (
          <article key={item.title}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="service-detail-scenes">
        {service.scenes.map((scene) => (
          <article key={scene.title}>
            <span>{scene.title}</span>
            <p>{scene.body}</p>
          </article>
        ))}
      </section>

      <section className="service-detail-next">
        <p>他の事業も見る</p>
        <div>
          {services.filter((item) => item.slug !== service.slug).map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`}>{item.label}</Link>
          ))}
        </div>
      </section>
    </main>
  );
}