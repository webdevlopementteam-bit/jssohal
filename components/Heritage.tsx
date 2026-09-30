import Image from "next/image";
import Reveal from "./Reveal";

export default function Heritage() {
  return (
    <section id="range" className="py-24 bg-paper-2">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[820px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            OUR HERITAGE
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Three Generations, One Workshop Tradition
          </h2>
          <div className="space-y-4 text-[15.5px] text-[#5b564d] leading-relaxed">
            <p>
              It all started in 1948, when S. Jaswant Singh Sohal began building bakery machinery in
              Delhi. In the 1970s, the second generation brought bread slicing innovation into the
              business and made it a core part of what we do. Today, the third generation runs the
              company, and the standards haven&apos;t slipped.
            </p>
            <p>
              Nearly eight decades is a long time to keep learning from bakers. Ovens have changed,
              tastes have changed and daily volumes have grown. Our machines have had to keep up, and
              that experience shows in the small details, like how a blade is set or how a frame holds
              up through a full shift.
            </p>
          </div>
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
