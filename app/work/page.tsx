"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Campaign Branding", "Branding", "UI/UX", "Motion", "Print"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div style={{ background: "var(--color-cream)" }} className="min-h-screen pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-dark mb-8"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", letterSpacing: "0.02em" }}
        >
          ALL WORK
        </motion.h1>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-body text-xs uppercase tracking-widest px-5 py-2.5 transition-colors duration-200"
              style={{
                background: active === cat ? "var(--color-blue)" : "transparent",
                color: active === cat ? "var(--color-cream)" : "var(--color-dark)",
                border: "1px solid var(--color-blue)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid — masonry-like via auto-rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <ProjectCard project={project} className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
