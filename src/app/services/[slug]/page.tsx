import { getService, services } from "@/data/services";
import { ServiceDetailClient } from "./ServiceDetailClient";
import { notFound } from "next/navigation";

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

  return <ServiceDetailClient service={service} siblings={services.filter((item) => item.slug !== service.slug)} />;
}