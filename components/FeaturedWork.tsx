"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturedWork() {
  const campaigns = projects.filter(p => p.category === "Campaign Branding");

  return (
    <section
      className="py-20 px-6 md:px-10"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <h2
            className="font-heading text-blue leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            CAMPAIGN WORK
          </h2>
          <p className="font-subtitle italic text-dark/50 text-xl">
            A curated selection of recent projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campaigns.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 2) * 0.1 }}
            >
              <ProjectCard project={{ ...project, aspect: "landscape" }} className="w-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/work"
            className="inline-block font-body text-sm uppercase tracking-widest px-8 py-4 border-2 border-blue text-blue hover:bg-blue hover:text-cream transition-colors duration-200"
          >
            View All Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
