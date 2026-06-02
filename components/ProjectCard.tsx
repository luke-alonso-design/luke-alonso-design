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

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden project-card ${className}`}
      style={{ aspectRatio: project.aspect === "portrait" ? "3/4" : "16/9" }}
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full">
        {/* Image or color placeholder */}
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
            <span
              className="font-heading text-cream/20 text-5xl leading-none"
              style={{ letterSpacing: "0.05em" }}
            >
              {project.title.toUpperCase()}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="card-overlay">
          <p
            className="font-subtitle text-cream/70 italic text-sm mb-2"
            style={{ fontStyle: "italic" }}
          >
            {project.category} · {project.year}
          </p>
          <h3 className="font-heading text-cream text-3xl leading-none">
            {project.title.toUpperCase()}
          </h3>
          <p className="font-body text-cream/80 text-sm mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
