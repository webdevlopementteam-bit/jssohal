import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/data";

export default function CTA() {
  return (
    <section className="relative py-24 bg-ink text-white overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div
        className="absolute -right-[10%] -top-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,72,31,.28), transparent 65%)" }}
      />
      <div className="max-w-content mx-auto px-6 relative text-center max-w-[760px]">
        <Reveal>
          <h2 className="font-display font-extrabold leading-[1.15] text-[28px] sm:text-[36px] lg:text-[44px] mb-4">
            Looking for the right bakery machinery?
          </h2>
          <p className="text-[#c9c4bb] text-base leading-relaxed mb-8">
            Tell us about your production requirement and our team will help you find the right
            slicing or bakery equipment.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mb-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-ember hover:bg-ember-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors group"
            >
              Request a Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border border-white/35 hover:border-white hover:bg-white/[.06] text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
            >
              Talk to an Expert
            </a>
          </div>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2.5 font-display font-extrabold text-lg">
            <Phone size={18} className="text-ember" /> {COMPANY.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
