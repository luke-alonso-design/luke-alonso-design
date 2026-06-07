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
  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream)" }}>
      {/* Info bar */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-20 border-b-2 border-blue/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {[
            { label: "Company", value: project.client },
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

      {/* Overview — 2-col with hero image when available */}
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10 py-16"
      >
        {project.overviewHero ? (
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="flex-1 min-w-0">
              <h2
                className="font-heading text-dark mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                PROJECT OVERVIEW
              </h2>
              <p className="font-body text-dark/80 text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.overviewHero} alt={`${project.title} Hero`} className="w-full h-auto block" />
            </div>
          </div>
        ) : (
          <>
            <h2
              className="font-heading text-dark mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              PROJECT OVERVIEW
            </h2>
            <p
              className="font-body text-dark/80 text-lg leading-relaxed"
              style={{ maxWidth: 680 }}
            >
              {project.overview}
            </p>
          </>
        )}
      </motion.section>

      {/* Numbered grid layout — for projects with headerImage (e.g. Presidential Ranking Survey) */}
      {project.headerImage && project.images && project.images.length > 0 && (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-10 pb-24"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="font-heading text-dark mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              ASSETS CREATED
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((img, i) => {
                const totalRows = Math.ceil(project.images!.length / 3);
                const currentRow = Math.floor(i / 3);
                const isLastRow = currentRow === totalRows - 1;
                return (
                  <div
                    key={img.src}
                    className="relative overflow-hidden flex items-center justify-center"
                    style={{
                      aspectRatio: "16/9",
                      background: "var(--color-cream)",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {isLastRow && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(to bottom, transparent 20%, var(--color-cream) 100%)",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      {/* Standard gallery — only if project has images and no headerImage */}
      {!project.headerImage && project.images && project.images.length > 0 && (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-10 pb-16"
        >
          <div className="max-w-7xl mx-auto">

            {/* ASSETS CREATED — all images from index 1, up to (not including) supplementary/landing */}
            {(() => {
              // Core 3 assets always go in the grid (square, vertical, horizontal)
              // Any extras beyond [1..3] (e.g. floated hero) render below at natural size
              const gridImages = project.images!.slice(1, 4);
              const extraImages = !project.supplementaryLabel
                ? project.images!.slice(4, project.images![5] ? project.images!.length - 1 : project.images!.length)
                : [];
              if (gridImages.length === 0) return null;
              return (
                <>
                  <h2 className="font-heading text-dark mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                    ASSETS CREATED
                  </h2>
                  <div className="grid grid-cols-3 gap-3 items-start" style={{ marginBottom: extraImages.length ? "1.5rem" : "3rem" }}>
                    {gridImages.map((img, idx) => {
                      const aspectMap: Record<number, string> = { 0: "1/1", 1: "9/16", 2: "16/9" };
                      const aspect = aspectMap[idx] ?? "1/1";
                      return (
                        <div key={img.src} className="relative overflow-hidden" style={{ aspectRatio: aspect }}>
                          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
                        </div>
                      );
                    })}
                  </div>
                  {/* Extra assets (e.g. floated hero) — full natural width, no cropping */}
                  {extraImages.map((img) => (
                    <div key={img.src} className="w-full mb-12">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} className="w-full h-auto block" />
                    </div>
                  ))}
                </>
              );
            })()}

            {/* SUPPLEMENTARY — if images[4] and images[5] both exist, show side-by-side */}
            {project.supplementaryLabel && project.images[4] && (
              <>
                <h2
                  className="font-heading text-dark mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {project.supplementaryLabel}
                </h2>
                {project.images[5] ? (
                  /* Side-by-side, equal height */
                  <div className="flex gap-4 items-stretch mb-12">
                    <div className="flex-1 relative overflow-hidden" style={{ minHeight: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.images[4].src} alt={project.images[4].alt} className="w-full h-full object-contain block" style={{ maxHeight: 700 }} />
                    </div>
                    <div className="flex-1 relative overflow-hidden" style={{ minHeight: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.images[5].src} alt={project.images[5].alt} className="w-full h-full object-contain block" style={{ maxHeight: 700 }} />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full overflow-hidden mb-12" style={{ aspectRatio: "16/9" }}>
                    <Image src={project.images[4].src} alt={project.images[4].alt} fill className="object-cover" sizes="100vw" />
                  </div>
                )}
              </>
            )}

            {/* LANDING PAGE — standalone only if no supplementaryLabel (no images[5] pairing) */}
            {!project.supplementaryLabel && project.images[5] && (
              <>
                <h2
                  className="font-heading text-dark mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  LANDING PAGE
                </h2>
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${project.images[5].width} / ${project.images[5].height}` }}
                >
                  <Image src={project.images[5].src} alt={project.images[5].alt} fill className="object-cover" sizes="100vw" />
                </div>
              </>
            )}

          </div>
        </motion.section>
      )}

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
