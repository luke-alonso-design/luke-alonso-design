"use client";

import { motion, type Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skills = [
  "Brand Identity",
  "Typography",
  "Motion Design",
  "UI/UX Design",
  "Art Direction",
  "Print Design",
  "Creative Direction",
  "Illustration",
  "Design Systems",
  "Visual Strategy",
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--color-cream)" }} className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-16 py-16">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-[45%] flex-shrink-0"
          >
            <div
              className="w-full aspect-[3/4] flex items-end p-8"
              style={{ background: "var(--color-blue)" }}
            >
              <span
                className="font-heading text-cream/20 text-4xl leading-none"
                style={{ letterSpacing: "0.05em" }}
              >
                ALEX NOVA
              </span>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-blue leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
            >
              ALEX NOVA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-dark/80 leading-relaxed mb-4 text-lg"
            >
              I&apos;m a visual designer and creative director with over a decade of
              experience shaping brands, products, and experiences that people
              actually remember. My practice spans identity systems, digital
              interfaces, motion, and editorial — always in service of a clear
              idea.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-dark/80 leading-relaxed mb-10 text-lg"
            >
              Before going independent, I led design at studios in Berlin,
              London, and New York. I work with founders, labels, agencies, and
              institutions that want design with conviction — not just polish.
            </motion.p>

            {/* Skills */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-heading text-dark text-2xl mb-6 tracking-widest">
                EXPERTISE
              </h2>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-subtitle italic text-dark/80 text-lg flex items-center gap-3"
                  >
                    <span
                      className="block w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-red)" }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="inline-block font-body text-sm uppercase tracking-widest px-8 py-4 border-2 border-blue text-blue hover:bg-blue hover:text-cream transition-colors duration-200"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
