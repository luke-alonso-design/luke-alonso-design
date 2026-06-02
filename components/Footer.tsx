export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-10 border-t"
      style={{ borderColor: "rgba(46,76,140,0.15)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-blue text-xl tracking-widest">
          ALEX NOVA
        </span>
        <p className="font-body text-xs text-dark/50">
          © {new Date().getFullYear()} Alex Nova. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Dribbble", "Behance", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-body text-xs text-dark/50 hover:text-red transition-colors uppercase tracking-widest"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
