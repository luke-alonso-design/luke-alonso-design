export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

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
  images?: ProjectImage[];
  collageImages?: ProjectImage[];
  thumbnail?: string;
  supplementaryLabel?: string;
  headerImage?: string;
  overviewHero?: string;
  emailImage?: string;
  landingPageLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "fatherhood-101",
    title: "Fatherhood 101",
    category: "Campaign Branding",
    year: "2026",
    client: "PragerU",
    role: "Lead Graphic Designer",
    tools: "Photoshop, Illustrator",
    description: "Campaign branding for a Father's Day educational series.",
    overview:
      "Fatherhood 101 is a course featuring 8 of PragerU's most powerful videos on fatherhood, masculinity, marriage, parenting, and family life. The visual identity needed to feel warm and family-oriented — built for distribution across social, email, and web.",
    featured: true,
    color: "#990100",
    aspect: "landscape",
    images: [
      { src: "/campaigns/fatherhood-101/spotlight.png", alt: "Fatherhood 101 Spotlight", width: 1920, height: 1080 },
      { src: "/campaigns/fatherhood-101/square.jpg",    alt: "Fatherhood 101 Square",    width: 1080, height: 1080 },
      { src: "/campaigns/fatherhood-101/vertical.jpg",  alt: "Fatherhood 101 Vertical",  width: 1080, height: 1920 },
      { src: "/campaigns/fatherhood-101/horizontal.jpg",alt: "Fatherhood 101 Horizontal",width: 1920, height: 1080 },
      { src: "/campaigns/fatherhood-101/quiz.jpg",      alt: "Supplementary Quiz",        width: 1920, height: 1080 },
      { src: "/campaigns/fatherhood-101/page.png",      alt: "Fatherhood 101 Landing Page", width: 1380, height: 1444 },
    ],
    thumbnail: "/campaigns/fatherhood-101/horizontal.jpg",
    overviewHero: "/campaigns/fatherhood-101/hero.png",
    collageImages: [
      { src: "/campaigns/fatherhood-101/spotlight.png", alt: "Spotlight",   width: 1920, height: 1080 },
      { src: "/campaigns/fatherhood-101/square.jpg",    alt: "Square",      width: 1080, height: 1080 },
      { src: "/campaigns/fatherhood-101/vertical.jpg",  alt: "Vertical",    width: 1080, height: 1920 },
      { src: "/campaigns/fatherhood-101/horizontal.jpg",alt: "Horizontal",  width: 1920, height: 1080 },
      { src: "/campaigns/fatherhood-101/page.png",      alt: "Page",        width: 1380, height: 1444 },
      { src: "/campaigns/fatherhood-101/quiz.jpg",      alt: "Quiz",        width: 1920, height: 1080 },
    ],
  },
  {
    slug: "ten-commandments-101",
    title: "Ten Commandments 101",
    category: "Campaign Branding",
    year: "2026",
    client: "PragerU",
    role: "Lead Graphic Designer",
    tools: "Photoshop, Illustrator",
    description: "Campaign branding for Dennis Prager's video series on the Ten Commandments.",
    overview:
      "PragerU's Ten Commandments 101 campaign invites audiences to sign up for free access to Dennis Prager's video series exploring the meaning, moral value, and lasting relevance of the Ten Commandments—along with a special-edition e-book. The campaign highlights how these ancient principles continue to offer timeless guidance for building a better world and preserving their role in public life.",
    featured: true,
    color: "#1A0A00",
    aspect: "landscape",
    thumbnail: "/campaigns/ten-commandments-101/cover.jpg",
    overviewHero: "/campaigns/ten-commandments-101/hero.jpg",
    supplementaryLabel: "E-BOOK, LANDING PAGE & EMAIL DESIGNS",
    emailImage: "/campaigns/ten-commandments-101/email.jpg",
    images: [
      { src: "/campaigns/ten-commandments-101/cover.jpg",     alt: "Ten Commandments 101 Cover",      width: 1920, height: 1080 },
      { src: "/campaigns/ten-commandments-101/square.jpg",    alt: "Ten Commandments 101 Square",     width: 1080, height: 1080 },
      { src: "/campaigns/ten-commandments-101/vertical.jpg",  alt: "Ten Commandments 101 Vertical",   width: 1080, height: 1920 },
      { src: "/campaigns/ten-commandments-101/horizontal.jpg",alt: "Ten Commandments 101 Horizontal", width: 1920, height: 1080 },
      { src: "/campaigns/ten-commandments-101/ebook.jpg",     alt: "Ten Commandments E-Book",         width: 1920, height: 1080 },
      { src: "/campaigns/ten-commandments-101/page.png",      alt: "Ten Commandments Landing Page",   width: 1380, height: 1444 },
    ],
    collageImages: [
      { src: "/campaigns/ten-commandments-101/cover.jpg",     alt: "Cover",      width: 1920, height: 1080 },
      { src: "/campaigns/ten-commandments-101/square.jpg",    alt: "Square",     width: 1080, height: 1080 },
      { src: "/campaigns/ten-commandments-101/vertical.jpg",  alt: "Vertical",   width: 1080, height: 1920 },
      { src: "/campaigns/ten-commandments-101/horizontal.jpg",alt: "Horizontal", width: 1920, height: 1080 },
      { src: "/campaigns/ten-commandments-101/page.png",      alt: "Page",       width: 1380, height: 1444 },
      { src: "/campaigns/ten-commandments-101/ebook.jpg",     alt: "E-Book",     width: 1920, height: 1080 },
    ],
  },
  {
    slug: "supreme-court-101",
    title: "Supreme Court 101",
    category: "Campaign Branding",
    year: "2026",
    client: "PragerU",
    role: "Lead Graphic Designer",
    tools: "Photoshop, Illustrator",
    overviewHero: "/campaigns/supreme-court-101/hero.jpg",
    emailImage: "/campaigns/supreme-court-101/email.jpg",
    landingPageLabel: "LANDING PAGE & EMAIL DESIGNS",
    description: "Campaign branding for PragerU's series on America's highest court and landmark decisions.",
    overview:
      "Supreme Court 101 features PragerU's top videos explaining America's highest court and the landmark decisions that shaped the nation. Leading legal scholars break down the Supreme Court, its role, and the 10 cases every American should know.",
    featured: true,
    color: "#990100",
    aspect: "landscape",
    thumbnail: "/campaigns/supreme-court-101/cover.jpg",
    images: [
      { src: "/campaigns/supreme-court-101/cover.jpg",       alt: "Supreme Court 101 Cover",       width: 1920, height: 1080 },
      { src: "/campaigns/supreme-court-101/square.jpg",      alt: "Supreme Court 101 Square",      width: 1080, height: 1080 },
      { src: "/campaigns/supreme-court-101/vertical.jpg",    alt: "Supreme Court 101 Vertical",    width: 1080, height: 1920 },
      { src: "/campaigns/supreme-court-101/horizontal.jpg",  alt: "Supreme Court 101 Horizontal",  width: 1920, height: 1080 },
      { src: "/campaigns/supreme-court-101/floated-hero.png",alt: "Supreme Court 101 Floated Hero",width: 1920, height: 1080 },
    ],
    collageImages: [
      { src: "/campaigns/supreme-court-101/cover.jpg",       alt: "Cover",        width: 1920, height: 1080 },
      { src: "/campaigns/supreme-court-101/square.jpg",      alt: "Square",       width: 1080, height: 1080 },
      { src: "/campaigns/supreme-court-101/vertical.jpg",    alt: "Vertical",     width: 1080, height: 1920 },
      { src: "/campaigns/supreme-court-101/horizontal.jpg",  alt: "Horizontal",   width: 1920, height: 1080 },
      { src: "/campaigns/supreme-court-101/floated-hero.png",alt: "Floated Hero", width: 1920, height: 1080 },
    ],
  },
  {
    slug: "presidential-ranking-survey",
    title: "Presidential Ranking Survey",
    category: "Campaign Branding",
    year: "2026",
    client: "PragerU",
    role: "Lead Graphic Designer",
    tools: "Photoshop, Illustrator",
    description: "Visual assets for PragerU's expert-driven presidential ranking survey.",
    overview:
      "PragerU's Presidential Ranking Survey reached out to scholars and experts from fields such as history, law, government, media, and politics; 155 took part in the survey. Instead of using rigid formulas or preset category weights, participants rated each president on a 0-10 scale, judging them within the unique circumstances of their time. Respondents were asked to keep in mind key principles: adherence to the Constitution, national prosperity, sound foreign policy, and the difficulty of the challenges faced. The final rankings come from the average of all those individual scores.",
    featured: true,
    color: "#1A0A00",
    aspect: "landscape",
    thumbnail: "/campaigns/presidential-ranking-survey/cover.jpg",
    headerImage: "/campaigns/presidential-ranking-survey/header.jpg",
    overviewHero: "/campaigns/presidential-ranking-survey/hero.jpg",
    images: [
      { src: "/campaigns/presidential-ranking-survey/1.avif", alt: "Presidential Ranking #1",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/2.avif", alt: "Presidential Ranking #2",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/3.avif", alt: "Presidential Ranking #3",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/4.avif", alt: "Presidential Ranking #4",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/5.avif", alt: "Presidential Ranking #5",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/6.avif", alt: "Presidential Ranking #6",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/7.avif", alt: "Presidential Ranking #7",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/8.avif", alt: "Presidential Ranking #8",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/9.avif", alt: "Presidential Ranking #9",  width: 1080, height: 1080 },
    ],
    collageImages: [
      { src: "/campaigns/presidential-ranking-survey/1.avif", alt: "#1",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/2.avif", alt: "#2",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/3.avif", alt: "#3",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/4.avif", alt: "#4",  width: 1080, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/cover.jpg", alt: "Cover", width: 1920, height: 1080 },
      { src: "/campaigns/presidential-ranking-survey/5.avif", alt: "#5",  width: 1080, height: 1080 },
    ],
  },
  {
    slug: "campaign-5",
    title: "Campaign 5",
    category: "Campaign Branding",
    year: "",
    client: "",
    role: "",
    tools: "",
    description: "Coming soon.",
    overview: "",
    featured: true,
    color: "#990100",
    aspect: "landscape",
  },
  {
    slug: "campaign-6",
    title: "Campaign 6",
    category: "Campaign Branding",
    year: "",
    client: "",
    role: "",
    tools: "",
    description: "Coming soon.",
    overview: "",
    featured: true,
    color: "#1A0A00",
    aspect: "landscape",
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
