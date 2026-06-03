"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface Props {
  project: Project;
  className?: string;
}

// Staggered collage positions: [top%, left%, width%, rotate, zIndex]
const COLLAGE_LAYOUT = [
  { top: "5%",  left: "2%",  width: "52%", rotate: "-3deg",  z: 3 },
  { top: "8%",  left: "54%", width: "28%", rotate: "4deg",   z: 4 },
  { top: "30%", left: "68%", width: "22%", rotate: "-2deg",  z: 2 },
  { top: "38%", left: "5%",  width: "46%", rotate: "2.5deg", z: 5 },
  { top: "55%", left: "42%", width: "34%", rotate: "-4deg",  z: 3 },
  { top: "62%", left: "10%", width: "30%", rotate: "1.5deg", z: 4 },
];

export default function ProjectCard({ project, className = "" }: Props) {
  const heroImage = project.images?.[0];
  const collage = project.collageImages;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden project-card group ${className}`}
      style={{ aspectRatio: project.aspect === "portrait" ? "3/4" : "16/9" }}
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full">
        {/* Base image or color */}
        {heroImage ? (
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-end p-6"
            style={{ background: project.color }}
          >
            <span className="font-heading text-cream/20 text-5xl leading-none" style={{ letterSpacing: "0.05em" }}>
              {project.title.toUpperCase()}
            </span>
          </div>
        )}

        {/* Collage overlay — only for projects with collageImages */}
        {collage ? (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style={{ background: "var(--color-cream)" }}>
            {collage.map((img, i) => {
              const pos = COLLAGE_LAYOUT[i] ?? COLLAGE_LAYOUT[0];
              return (
                <motion.div
                  key={img.src}
                  className="absolute overflow-hidden shadow-lg"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    width: pos.width,
                    rotate: pos.rotate,
                    zIndex: pos.z,
                    aspectRatio: `${img.width} / ${img.height}`,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </motion.div>
              );
            })}
            {/* Title at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <p className="font-subtitle italic text-dark/50 text-xs mb-1">{project.category} · {project.year}</p>
              <h3 className="font-heading text-dark text-2xl leading-none">{project.title.toUpperCase()}</h3>
            </div>
          </div>
        ) : (
          /* Standard red overlay */
          <div className="card-overlay">
            <p className="font-subtitle text-cream/70 italic text-sm mb-2" style={{ fontStyle: "italic" }}>
              {project.category} · {project.year}
            </p>
            <h3 className="font-heading text-cream text-3xl leading-none">{project.title.toUpperCase()}</h3>
            <p className="font-body text-cream/80 text-sm mt-2 line-clamp-2">{project.description}</p>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
