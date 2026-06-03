export default function Marquee() {
  const text = "DESIGN · BRANDING · PRINT · MOTION · ";
  const repeated = text.repeat(8);

  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: "var(--color-red)" }}
    >
      <div className="marquee-track">
        <span
          className="font-heading text-cream text-2xl tracking-widest whitespace-nowrap pr-0"
          style={{ letterSpacing: "0.15em" }}
        >
          {repeated}
        </span>
        <span
          className="font-heading text-cream text-2xl tracking-widest whitespace-nowrap"
          style={{ letterSpacing: "0.15em" }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
