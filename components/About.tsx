import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-24">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <Reveal className="relative hidden md:block">
          <Image
            src="/aboutimage.webp"
            alt="J. S. Engineering Company"
            width={520}
            height={480}
            className="w-full h-auto rounded-2xl border border-black/10 object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            ABOUT J. S. ENGINEERING
          </span>
          <h1 className="font-display font-extrabold leading-[1.15] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Bakery Machine Manufacturer in Delhi | J. S. Engineering
          </h1>
          <Image
            src="/aboutimage.webp"
            alt="J. S. Engineering Company"
            width={520}
            height={480}
            className="md:hidden w-full h-auto rounded-2xl border border-black/10 object-cover mb-6"
          />
          <div className="space-y-4 text-[15.5px] text-[#4a453e] leading-relaxed">
            <p>
              Every baker has a story about a machine that gave up at the worst possible moment. The
              slicer jams during the morning rush. The slices come out thick on one side and thin on
              the other. A normal shift suddenly turns into a very long one. We&apos;ve heard versions
              of this story for decades, and it&apos;s the reason we build machines the way we do.
            </p>
            <p>
              J. S. Engineering is a bakery machine manufacturer in Delhi. Since 1948, we&apos;ve been
              making bread slicing machines, toast slicers, cake slicing machines and other bakery
              equipment from our workshop in Wazirpur Industrial Area. Some of our customers run a
              single neighbourhood bakery. Others run large industrial plants. Both get machines built
              around how they actually work, not around what&apos;s easiest for us to make.
            </p>
          </div>
          <div className="border-l-[3px] border-ember bg-paper-2 rounded-r-lg px-5 py-4 my-6 text-[15px] font-medium text-ink-3">
            &ldquo;From traditional bakery equipment to high-speed automated slicing solutions, we
            engineer machines around real production needs.&rdquo;
          </div>
          <a
            href="#expertise"
            className="inline-flex items-center gap-2.5 border border-black/10 hover:border-ink text-ink font-semibold px-6 py-3.5 rounded-md transition-colors group"
          >
            Discover Our Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 mt-8 border-t border-black/10 pt-6">
            {[
              { year: "1948", label: "Foundation, by S. Jaswant Singh Sohal" },
              { year: "1970s", label: "Bread slicing innovation, 2nd generation" },
              { year: "Today", label: "Advanced bakery machinery, 3rd generation" },
            ].map((t) => (
              <div key={t.year} className="flex-1 relative pr-5 before:content-[''] before:absolute before:-top-[25px] before:left-0 before:w-[38px] before:h-[2px] before:bg-ember before:hidden sm:before:block">
                <b className="block font-display font-extrabold text-[17px]">{t.year}</b>
                <span className="text-[13px] text-steel">{t.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
