import { Scissors, LayoutGrid, CircleDot, Boxes, FileCog } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    num: "01",
    icon: Scissors,
    title: "High-Speed Bread Slicing",
    desc: "Precision-set blades and high-throughput frames built for accurate, consistent slicing at industrial volumes.",
  },
  {
    num: "02",
    icon: LayoutGrid,
    title: "Toast & Round Roll Slicing",
    desc: "Dedicated slicing configurations for toast bread and round rolls, tuned for uniform thickness and clean cuts.",
  },
  {
    num: "03",
    icon: CircleDot,
    title: "Cake Cutting & Slicing",
    desc: "Machines built to handle cake bars and slabs with gentle, precise cutting that preserves product quality.",
  },
  {
    num: "04",
    icon: Boxes,
    title: "Bakery Equipment",
    desc: "Spiral and planetary mixers, rotary ovens, dough dividers and moulders engineered for daily production reliability.",
  },
  {
    num: "05",
    icon: FileCog,
    title: "Turnkey Bakery Projects",
    desc: "End-to-end project consultancy — from machinery selection to layout — for bread, cake and toast production lines.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 bg-ink text-white overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="max-w-content mx-auto px-6 relative">
        <Reveal className="max-w-[640px] mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-[#e8a184]">
            OUR EXPERTISE
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4 text-white">
            Precision engineering for every stage of bakery production
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[.14] border border-white/[.14] rounded-2xl overflow-hidden">
            {items.map((item) => (
              <div key={item.num} className="bg-ink hover:bg-ink-3 transition-colors p-8 min-h-[230px] flex flex-col">
                <span className="font-display font-extrabold text-sm text-[#8b8378] tracking-wide">{item.num}</span>
                <div className="w-11 h-11 rounded-lg bg-ember/[.14] border border-ember/30 flex items-center justify-center my-4">
                  <item.icon size={22} className="text-ember" />
                </div>
                <h3 className="text-[16.5px] font-bold mb-2">{item.title}</h3>
                <p className="text-[13.3px] text-[#b7b1a6] leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
