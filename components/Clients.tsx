import Reveal from "./Reveal";
import { clients } from "@/lib/data";

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

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4.5">
          {clients.map((c) => (
            <div
              key={c}
              className="bg-white border border-black/10 rounded-lg h-[88px] flex items-center justify-center font-display font-extrabold text-[14.5px] text-steel grayscale hover:grayscale-0 hover:text-ink hover:border-ember transition-all text-center px-2.5"
            >
              {c}
            </div>
          ))}
        </Reveal>
        <p className="text-center text-steel text-[13.5px] mt-6.5">
          Serving bakery and food-processing businesses across India and international markets.
        </p>
      </div>
    </section>
  );
}
