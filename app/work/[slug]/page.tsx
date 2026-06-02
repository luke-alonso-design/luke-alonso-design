import { notFound } from "next/navigation";
import { getProjectBySlug, getNextProject, projects } from "@/lib/projects";
import CaseStudyClient from "@/components/CaseStudyClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = getNextProject(params.slug);

  return <CaseStudyClient project={project} next={next} />;
}
