import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Image
        src="/desktopbanner.jpeg"
        alt="J. S. Engineering Company"
        width={2007}
        height={784}
        priority
        className="hidden md:block w-full h-auto object-cover"
      />
      <Image
        src="/mobilebanner.webp"
        alt="J. S. Engineering Company"
        width={1122}
        height={1402}
        priority
        className="block md:hidden w-full h-auto object-cover"
      />
    </section>
  );
}
