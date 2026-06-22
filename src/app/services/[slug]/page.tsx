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

      <section className="service-detail-flow">
        {service.flow.map((item, index) => (
          <article key={item.title}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
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