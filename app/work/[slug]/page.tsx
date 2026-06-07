import { notFound } from "next/navigation";
import { getProjectBySlug, getNextProject, projects } from "@/lib/projects";
import CaseStudyClient from "@/components/CaseStudyClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return <CaseStudyClient project={project} next={next} />;
}
