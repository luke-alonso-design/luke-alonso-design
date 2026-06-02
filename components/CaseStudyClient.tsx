"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Project } from "@/lib/projects";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CaseStudyClient({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const steps = [
    { num: "01", title: "Research & Discovery", body: "Immersive stakeholder interviews, competitor audits, and cultural mapping to surface the tensions and opportunities that would shape the brief." },
    { num: "02", title: "Concept & Strategy", body: "Translating insights into a creative direction — moodboards, structural concepts, and a narrative framework that would guide every visual decision." },
    { num: "03", title: "Design & Refinement", body: "Iterative rounds of high-fidelity design, prototyping, and stress-testing across formats, sizes, and contexts until the system felt inevitable." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream)" }}>
      {/* Hero */}
      <div
        className="relative flex items-end px-6 md:px-10 pb-16 pt-32 min-h-[60vh]"
        style={{ background: project.color }}
      >
        {project.images?.[0] && (
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 16px)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-subtitle italic text-cream/60 text-lg mb-4"
          >
            {project.category} · {project.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-cream leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            {project.title.toUpperCase()}
          </motion.h1>
        </div>
      </div>

      {/* Info bar */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-b-2 border-blue/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {[
            { label: "Client", value: project.client },
            { label: "Role", value: project.role },
            { label: "Year", value: project.year },
            { label: "Tools", value: project.tools },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-subtitle italic text-dark/50 text-sm mb-1">{label}</p>
              <p className="font-body font-bold text-dark">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10 py-16"
      >
        <h2
          className="font-heading text-dark mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          OVERVIEW
        </h2>
        <p
          className="font-body text-dark/80 text-lg leading-relaxed"
          style={{ maxWidth: 680 }}
        >
          {project.overview}
        </p>
      </motion.section>

      {/* Real images gallery — only if project has images */}
      {project.images && project.images.length > 0 && (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-10 pb-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="font-heading text-dark mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              FATHERHOOD 101
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {/* First image full width */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              {/* Square + Vertical side by side */}
              {project.images[1] && (
                <div className="grid grid-cols-2 gap-4 items-start">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: `${project.images[1].width} / ${project.images[1].height}` }}
                  >
                    <Image
                      src={project.images[1].src}
                      alt={project.images[1].alt}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  {project.images[2] && (
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: `${project.images[2].width} / ${project.images[2].height}` }}
                    >
                      <Image
                        src={project.images[2].src}
                        alt={project.images[2].alt}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                    </div>
                  )}
                </div>
              )}
              {/* Fourth image with label */}
              {project.images[3] && (
                <div>
                  <h3
                    className="font-heading text-dark mb-4 mt-4"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                  >
                    SUPPLEMENTARY QUIZ
                  </h3>
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: `${project.images[3].width} / ${project.images[3].height}` }}
                  >
                    <Image
                      src={project.images[3].src}
                      alt={project.images[3].alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Process */}
      <section className="py-16 px-6 md:px-10 border-t border-blue/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-dark mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            PROCESS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span
                  className="font-heading text-red block mb-3"
                  style={{ fontSize: "3rem" }}
                >
                  {step.num}
                </span>
                <h3 className="font-heading text-dark text-2xl mb-3">
                  {step.title.toUpperCase()}
                </h3>
                <p className="font-body text-dark/70 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        className="block w-full py-16 px-6 md:px-10 group transition-colors duration-200"
        style={{ background: "var(--color-red)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-body text-cream/60 text-sm uppercase tracking-widest mb-2">
              Next Project
            </p>
            <h3
              className="font-heading text-cream group-hover:opacity-80 transition-opacity"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              {next.title.toUpperCase()}
            </h3>
          </div>
          <span className="font-heading text-cream text-5xl">→</span>
        </div>
      </Link>
    </div>
  );
}
