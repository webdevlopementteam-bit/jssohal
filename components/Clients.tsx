import Image from "next/image";
import Reveal from "./Reveal";

const logos = [
  "americana",
  "apple",
  "babaji",
  "bigmishra",
  "bikaji",
  "britannia",
  "chakote",
  "client-1",
  "client-2",
  "client-3",
  "client-4",
  "client-5",
  "client-6",
  "client-7",
  "client-8",
  "dailybread",
  "dietola",
  "english-oven",
  "golden-2",
  "golden",
  "haldiram",
  "harvest-gold",
  "hovis",
  "kakaji",
  "kitty",
  "marino",
  "mario",
  "mordern",
  "nasta",
  "nirula",
  "perfect",
  "qoot",
  "rafan",
  "trupti",
  "vani",
].map((name) => `/logo/${name}.webp`);

export default function Clients() {
  return (
    <section id="clients" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            CLIENTS
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Trusted by leading bakery businesses
          </h2>
        </Reveal>

        <Reveal className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((src, i) => (
              <div
                key={i}
                aria-hidden={i >= logos.length}
                className="mr-[18px] bg-white border border-black/10 rounded-lg h-[100px] w-[180px] shrink-0 flex items-center justify-center p-4 hover:border-ember transition-all"
              >
                <Image
                  src={src}
                  alt={src.split("/").pop()!.replace(".webp", "").replace(/-2$/, "").replace(/-/g, " ")}
                  width={160}
                  height={80}
                  className="max-h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
        <p className="text-center text-steel text-[13.5px] mt-6.5">
          Serving bakery and food-processing businesses across India and international markets.
        </p>
      </div>
    </section>
  );
}
