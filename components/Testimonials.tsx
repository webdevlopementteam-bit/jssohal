import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            CLIENT REVIEWS
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Trusted by bakery &amp; food industry professionals
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="bg-white border border-black/10 rounded-2xl p-7 flex flex-col h-full">
                <div className="flex gap-1 text-ember mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[14.8px] text-ink-3 leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-black/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-display font-extrabold text-sm flex-none">
                    {t.initial}
                  </div>
                  <div>
                    <b className="block text-sm">{t.name}</b>
                    <span className="block text-[12.5px] text-steel">{t.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-[12.5px] text-steel mt-7">
          Representative feedback from bakery and food-processing customers. Specific customer
          statements available on request.
        </p>
      </div>
    </section>
  );
}
