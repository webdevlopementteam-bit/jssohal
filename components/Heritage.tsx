import Image from "next/image";
import Reveal from "./Reveal";

export default function Heritage() {
  return (
    <section id="range" className="py-24 bg-paper-2">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            OUR HERITAGE
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Heritage journey of J. S. Sohal
          </h2>
          <p className="text-[15.5px] text-[#5b564d] leading-relaxed">
            Three generations of engineering discipline, from a single Delhi workshop in 1948 to
            bakery machinery trusted across India and export markets abroad.
          </p>
        </Reveal>

        <Reveal>
          <Image
            src="/heritage.webp"
            alt="Heritage journey of J. S. Sohal, J. S. Engineering Company"
            width={1536}
            height={1024}
            className="w-full h-auto rounded-2xl border border-black/10"
          />
        </Reveal>
      </div>
    </section>
  );
}
