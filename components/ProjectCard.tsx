"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface Props {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: Props) {
  const collage = project.collageImages;
  const thumbSrc = project.thumbnail ?? project.images?.[0]?.src;
  const thumbAlt = project.images?.[0]?.alt ?? project.title;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden project-card group ${className}`}
      style={{ aspectRatio: project.aspect === "portrait" ? "3/4" : "16/9" }}
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full">

        {/* Base thumbnail */}
        {thumbSrc ? (
          <Image
            src={thumbSrc}
            alt={thumbAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-end p-6" style={{ background: project.color }}>
            <span className="font-heading text-cream/20 text-5xl leading-none" style={{ letterSpacing: "0.05em" }}>
              {project.title.toUpperCase()}
            </span>
          </div>
        )}

        {/* Collage hover overlay — no cropping, uneven sizing */}
        {collage ? (
          <div
            className="collage-overlay absolute inset-0 p-3"
            style={{ background: "var(--color-cream)" }}
          >
            <div
              className="w-full h-full grid gap-2"
              style={{
                gridTemplateColumns: "2fr 1.3fr 1fr",
                gridTemplateRows: "1.1fr 1fr",
              }}
            >
              {collage.slice(0, 6).map((img) => (
                <div
                  key={img.src}
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ background: "var(--color-cream)" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Standard red slide-up overlay */
          <div className="card-overlay">
            <p className="font-subtitle text-cream/70 italic text-sm mb-2">
              {project.category} · {project.year}
            </p>
            <h3 className="font-heading text-cream text-3xl leading-none">
              {project.title.toUpperCase()}
            </h3>
            <p className="font-body text-cream/80 text-sm mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
