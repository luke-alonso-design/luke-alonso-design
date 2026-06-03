"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const bgClass =
    menuOpen
      ? "bg-transparent"
      : scrolled || !isHome
      ? "bg-dark"
      : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/name.png"
              alt="Luke Alonso"
              width={160}
              height={90}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`font-body text-sm text-cream uppercase tracking-wider relative pb-0.5 ${
                    pathname.startsWith(l.href)
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red"
                      : "opacity-70 hover:opacity-100"
                  } transition-opacity`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cream transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "var(--color-dark)" }}
          >
            <div className="mb-8">
              <Image src="/name.png" alt="Luke Alonso" width={240} height={135} className="h-16 w-auto object-contain" />
            </div>
            <ul className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  <Link
                    href={l.href}
                    className="font-heading text-cream text-6xl tracking-widest uppercase"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
