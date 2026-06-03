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

        {/* Collage overlay — 3×2 grid, no rotation, no overlap */}
        {collage ? (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2"
            style={{ background: "var(--color-cream)" }}
          >
            <div
              className="w-full h-full grid gap-1.5"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)" }}
            >
              {collage.slice(0, 6).map((img, i) => (
                <motion.div
                  key={img.src}
                  className="relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </motion.div>
              ))}
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
