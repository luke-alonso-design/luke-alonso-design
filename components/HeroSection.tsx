"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 overflow-hidden"
      style={{ background: "var(--color-blue)" }}
    >
      {/* Diagonal stripe texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 16px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-32">
        <div className="overflow-hidden mb-2">
          <motion.h1
            custom={0}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-cream leading-none"
            style={{
              fontSize: "clamp(4rem, 12vw, 11rem)",
              letterSpacing: "0.02em",
            }}
          >
            LUKE ALONSO
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.h2
            custom={1}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-red leading-none"
            style={{
              fontSize: "clamp(1.5rem, 4.5vw, 4.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            VISUAL DESIGNER &amp; CREATIVE DIRECTOR
          </motion.h2>
        </div>

        <motion.p
          custom={2}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="font-subtitle text-cream/80 text-lg md:text-2xl italic mb-10 max-w-xl"
        >
          Crafting bold identities, digital experiences, and motion design.
        </motion.p>

        <motion.div
          custom={3}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/work"
            className="inline-block font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors duration-200"
            style={{
              background: "var(--color-red)",
              color: "var(--color-cream)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--color-cream)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-red)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--color-red)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--color-cream)";
            }}
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      {/* Social links bottom-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-6 md:left-10 flex gap-6 z-10"
      >
        {["Dribbble", "Behance", "LinkedIn"].map((s) => (
          <a
            key={s}
            href="#"
            className="font-body text-xs text-cream/60 hover:text-cream uppercase tracking-widest transition-colors"
          >
            {s}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
