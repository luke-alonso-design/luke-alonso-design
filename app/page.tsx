import Image from "next/image";
import Marquee from "@/components/Marquee";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }} data-cursor-cream>
        <Image
          src="/hero.jpg"
          alt="Luke Alonso"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <Marquee />
      <FeaturedWork />
    </>
  );
}
