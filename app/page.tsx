import Image from "next/image";
import Marquee from "@/components/Marquee";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/header.png"
          alt="Luke Alonso"
          width={6758}
          height={3804}
          className="w-full h-auto block"
          priority
        />
      </div>
      <Marquee />
      <FeaturedWork />
    </>
  );
}
