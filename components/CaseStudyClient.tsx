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

      {/* Fatherhood 101 — custom ASSETS DESIGNED layout */}
      {project.slug === "fatherhood-101" && project.images && (
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-10 pb-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-dark mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              ASSETS DESIGNED
            </h2>

            {/* ADS & SOCIAL (includes email + quiz) */}
            <p className="font-subtitle italic text-dark/50 text-sm uppercase tracking-widest mb-4">Ads &amp; Social</p>

            {/* Grid: Square | Vertical | Horizontal + Email (right, top-aligned) / Quiz (under Horizontal) */}
            <div
              className="mb-10"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 2fr auto",
                gridTemplateRows: "auto auto",
                gap: "0.75rem",
                maxWidth: "80%",
              }}
            >
              {/* Square — spans both rows on left */}
              <div className="relative overflow-hidden" style={{ gridColumn: 1, gridRow: "1 / 3", aspectRatio: "1/1" }}>
                <Image src="/campaigns/fatherhood-101/square.jpg" alt="Square" fill className="object-cover" sizes="20vw" />
              </div>
              {/* Vertical — spans both rows */}
              <div className="relative overflow-hidden" style={{ gridColumn: 2, gridRow: "1 / 3", aspectRatio: "9/16" }}>
                <Image src="/campaigns/fatherhood-101/vertical.jpg" alt="Vertical" fill className="object-cover" sizes="20vw" />
              </div>
              {/* Horizontal — row 1, col 3 */}
              <div className="relative overflow-hidden" style={{ gridColumn: 3, gridRow: 1, aspectRatio: "16/9" }}>
                <Image src="/campaigns/fatherhood-101/horizontal.jpg" alt="Horizontal" fill className="object-cover" sizes="30vw" />
              </div>
              {/* Email — row 1, col 4, small, top-aligned */}
              <div style={{ gridColumn: 4, gridRow: 1, width: 90, alignSelf: "start" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/campaigns/fatherhood-101/email.jpg" alt="Email Design" className="w-full h-auto block" />
              </div>
              {/* Quiz — row 2, col 3 only (same width as Horizontal) */}
              <div className="relative overflow-hidden" style={{ gridColumn: 3, gridRow: 2, aspectRatio: "16/9" }}>
                <Image src="/campaigns/fatherhood-101/quiz.jpg" alt="Quiz" fill className="object-cover" sizes="30vw" />
              </div>
            </div>

            {/* LANDING PAGE */}
            <p className="font-subtitle italic text-dark/50 text-sm uppercase tracking-widest mb-4">Landing Page</p>
            <div style={{ maxWidth: "55%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/campaigns/fatherhood-101/page.png" alt="Landing Page" className="w-full h-auto block" />
            </div>
          </div>
        </motion.section>
      )}

      {/* Standard gallery — only if project has images, no headerImage, and not Fatherhood 101 */}
      {!project.headerImage && project.slug !== "fatherhood-101" && project.images && project.images.length > 0 && (
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

            {/* SUPPLEMENTARY QUIZ — full width, only when no emailImage pairing (i.e. Fatherhood 101 quiz) */}
            {project.supplementaryLabel && project.images[4] && !project.emailImage && (
              <>
                <h2 className="font-heading text-dark mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {project.supplementaryLabel}
                </h2>
                <div className="relative w-full overflow-hidden mb-12" style={{ aspectRatio: "16/9" }}>
                  <Image src={project.images[4].src} alt={project.images[4].alt} fill className="object-cover" sizes="100vw" />
                </div>
              </>
            )}

            {/* SUPPLEMENTARY QUIZ for Fatherhood (has emailImage too — quiz shown alone, landing+email shown together) */}
            {project.supplementaryLabel && project.images[4] && project.emailImage && !project.landingPageLabel && (
              <>
                <h2 className="font-heading text-dark mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {project.supplementaryLabel}
                </h2>
                {/* Ten Commandments: ebook + landing page + email all three side-by-side */}
                <div className="flex gap-4 items-stretch mb-12" style={{ height: 520 }}>
                  {[project.images[4], project.images[5], { src: project.emailImage, alt: "Email Design" }]
                    .filter(Boolean)
                    .map((img) => img && (
                      <div key={img.src} className="flex-1 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.src} alt={img.alt} className="w-full h-full object-contain block" />
                      </div>
                    ))}
                </div>
              </>
            )}

            {/* SUPPLEMENTARY QUIZ standalone for Fatherhood 101 (has landingPageLabel, so quiz shows alone) */}
            {project.supplementaryLabel && project.images[4] && project.landingPageLabel && (
              <>
                <h2 className="font-heading text-dark mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {project.supplementaryLabel}
                </h2>
                <div className="relative w-full overflow-hidden mb-12" style={{ aspectRatio: "16/9" }}>
                  <Image src={project.images[4].src} alt={project.images[4].alt} fill className="object-cover" sizes="100vw" />
                </div>
              </>
            )}

            {/* LANDING PAGE & EMAIL DESIGNS — side-by-side, equal height */}
            {project.landingPageLabel && (
              <>
                <h2 className="font-heading text-dark mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {project.landingPageLabel}
                </h2>
                <div className="flex gap-4 items-stretch mb-12" style={{ height: 520 }}>
                  {[
                    project.images?.[5] ?? null,
                    project.emailImage ? { src: project.emailImage, alt: "Email Design" } : null,
                  ]
                    .filter(Boolean)
                    .map((img) => img && (
                      <div key={img.src} className="flex-1 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.src} alt={img.alt} className="w-full h-full object-contain block" />
                      </div>
                    ))}
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
