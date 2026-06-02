"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    };

    const addHover = () => dot.classList.add("hovering");
    const removeHover = () => dot.classList.remove("hovering");

    document.addEventListener("mousemove", move);

    const targets = () =>
      document.querySelectorAll("a, button, .project-card, [data-cursor]");

    const attachHover = () => {
      targets().forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}
