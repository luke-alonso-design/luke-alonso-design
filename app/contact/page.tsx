"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 py-32"
      style={{ background: "var(--color-blue)" }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-cream leading-none mb-4"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          LET&apos;S MAKE SOMETHING.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-subtitle italic text-cream/70 text-xl mb-14"
        >
          Open to freelance, full-time, and collaborations.
        </motion.p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-heading text-cream text-4xl"
          >
            MESSAGE SENT. I&apos;LL BE IN TOUCH.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <div>
              <input
                type="text"
                required
                placeholder="Name"
                className="input-underline font-body"
              />
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="Email"
                className="input-underline font-body"
              />
            </div>
            <div>
              <textarea
                required
                placeholder="Message"
                rows={4}
                className="input-underline font-body resize-none"
              />
            </div>

            <button
              type="submit"
              className="font-heading text-cream text-2xl tracking-widest px-10 py-5 transition-opacity hover:opacity-80"
              style={{ background: "var(--color-red)" }}
            >
              SEND IT
            </button>
          </motion.form>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-cream/20 flex flex-col md:flex-row gap-8 md:items-center"
        >
          <a
            href="mailto:hello@alexnova.com"
            className="font-body text-cream/70 hover:text-cream transition-colors text-sm"
          >
            hello@alexnova.com
          </a>
          <div className="flex gap-8">
            {["Dribbble", "Behance", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-xs text-cream/50 hover:text-cream uppercase tracking-widest transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
