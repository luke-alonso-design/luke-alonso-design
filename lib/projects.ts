export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tools: string;
  description: string;
  overview: string;
  featured: boolean;
  color: string;
  aspect: "landscape" | "portrait";
  images?: { src: string; alt: string; width: number; height: number }[];
}

export const projects: Project[] = [
  {
    slug: "fatherhood-101",
    title: "Fatherhood 101",
    category: "Campaign Branding",
    year: "2024",
    client: "PragerU",
    role: "Creative Director",
    tools: "Photoshop, Illustrator, After Effects",
    description: "Campaign branding for a Father's Day educational series.",
    overview:
      "Fatherhood 101 is a campaign celebrating fathers and the irreplaceable role they play in family and society. The visual identity needed to feel warm, authoritative, and shareable — built for digital-first distribution across social, email, and web.",
    featured: true,
    color: "#990100",
    aspect: "landscape",
    images: [
      { src: "/campaigns/fatherhood-101/spotlight.png", alt: "Fatherhood 101 Spotlight", width: 1920, height: 1080 },
      { src: "/campaigns/fatherhood-101/wisepop.jpg", alt: "Fatherhood 101 Wisepop", width: 1080, height: 1080 },
      { src: "/campaigns/fatherhood-101/quiz-thumbnail.jpg", alt: "Great American Fathers Quiz Thumbnail", width: 1920, height: 1080 },
    ],
  },
  {
    slug: "arcform-identity",
    title: "Arcform Identity",
    category: "Branding",
    year: "2024",
    client: "Arcform Studio",
    role: "Brand Designer",
    tools: "Figma, Illustrator",
    description: "A modular identity system for a brutalist architecture firm.",
    overview:
      "Arcform needed a visual language that matched their ethos — raw, structural, intentional. The identity centers on a geometric letterform that doubles as a spatial diagram, deployed across signage, print collateral, and digital touchpoints.",
    featured: true,
    color: "#990100",
    aspect: "landscape",
  },
  {
    slug: "volta-app",
    title: "Volta App",
    category: "UI/UX",
    year: "2024",
    client: "Volta Energy",
    role: "Lead Product Designer",
    tools: "Figma, Protopie, After Effects",
    description: "EV charging dashboard redesign focused on real-time clarity.",
    overview:
      "Drivers needed instant answers — charge status, cost, time remaining — without cognitive overhead. We rebuilt the information architecture from the ground up, introducing a glanceable dashboard with adaptive typography and contextual micro-animations.",
    featured: true,
    color: "#1A0A00",
    aspect: "landscape",
  },
  {
    slug: "meridian-motion",
    title: "Meridian Motion",
    category: "Motion",
    year: "2023",
    client: "Meridian Records",
    role: "Motion Director",
    tools: "After Effects, Cinema 4D",
    description: "Title sequence and motion identity for an independent label.",
    overview:
      "Meridian Records wanted a visual signature that felt like sound — kinetic, layered, alive. We developed a generative motion system built from waveform geometries that scales across social, broadcast, and streaming contexts.",
    featured: true,
    color: "#990100",
    aspect: "portrait",
  },
  {
    slug: "hearth-editorial",
    title: "Hearth Editorial",
    category: "Print",
    year: "2023",
    client: "Hearth Magazine",
    role: "Art Director",
    tools: "InDesign, Photoshop",
    description: "Art direction and layout design for a quarterly lifestyle print.",
    overview:
      "Hearth is a magazine about slow living. Every spread was designed to breathe — generous white space, oversized pull quotes, and a careful interplay between image and type that rewards reading at pace.",
    featured: false,
    color: "#990100",
    aspect: "portrait",
  },
  {
    slug: "noma-rebrand",
    title: "Noma Rebrand",
    category: "Branding",
    year: "2023",
    client: "Noma Collective",
    role: "Creative Director",
    tools: "Figma, Illustrator, After Effects",
    description: "Full rebrand for a Scandinavian design collective.",
    overview:
      "The rebrand stripped away years of accumulated visual noise to reveal a core that was always there: restraint as strength. A monochrome palette, a custom wordmark, and a flexible grid system that works from business cards to billboards.",
    featured: false,
    color: "#1A0A00",
    aspect: "landscape",
  },
  {
    slug: "pixel-ritual",
    title: "Pixel Ritual",
    category: "UI/UX",
    year: "2022",
    client: "Pixel Ritual",
    role: "UI Designer",
    tools: "Figma, Webflow",
    description: "Interactive portfolio site for a multidisciplinary studio.",
    overview:
      "A studio site that functions as a sandbox — each project page uses a distinct layout language while remaining connected by a consistent interaction model. Built in Webflow with custom JS for cursor choreography and scroll-driven reveals.",
    featured: false,
    color: "#990100",
    aspect: "landscape",
  },
  {
    slug: "open-ground",
    title: "Open Ground",
    category: "Motion",
    year: "2022",
    client: "Open Ground Foundation",
    role: "Motion Designer",
    tools: "After Effects, Illustrator",
    description: "Animated brand film for a sustainability non-profit.",
    overview:
      "A 90-second brand film that translates a complex environmental mission into something felt, not just understood. Layered hand-drawn elements animate over field recordings, grounded in a muted but purposeful palette.",
    featured: false,
    color: "#990100",
    aspect: "portrait",
  },
  {
    slug: "tower-type",
    title: "Tower Type",
    category: "Print",
    year: "2022",
    client: "Personal",
    role: "Typographer",
    tools: "Glyphs, Illustrator",
    description: "Experimental display typeface designed for large-format print.",
    overview:
      "Tower is a display typeface built for scale — it only makes sense at 96pt and above. The letterforms are constructed from a strict grid of thick verticals and razor-thin horizontals, creating extreme optical contrast that rewards the eye.",
    featured: false,
    color: "#1A0A00",
    aspect: "landscape",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
