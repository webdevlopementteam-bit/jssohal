import { Award, Zap, Target, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Award,
    title: "Decades of Engineering Experience",
    desc: "Three generations of manufacturing knowledge, applied to every machine we build.",
  },
  {
    icon: Zap,
    title: "High-Performance Machines",
    desc: "Engineered for efficient, dependable operation at consistent industrial output.",
  },
  {
    icon: Target,
    title: "Precision Cutting",
    desc: "Accurate slicing thickness with blades set to exact tolerances for every product.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Construction",
    desc: "Built from quality materials for long service life under continuous industrial use.",
  },
  {
    icon: Sparkles,
    title: "Low Maintenance",
    desc: "Easily replaceable blades and simple, soundless operation reduce downtime.",
  },
  {
    icon: Wrench,
    title: "Customized Solutions",
    desc: "Machinery configured around each bakery's product, capacity and layout requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            WHY CHOOSE US
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Why bakeries choose J. S. Engineering
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {items.map((item) => (
              <div key={item.title} className="bg-white p-7">
                <div className="w-[46px] h-[46px] rounded-lg bg-paper-2 flex items-center justify-center mb-4.5">
                  <item.icon size={22} className="text-ember" />
                </div>
                <h3 className="text-base font-extrabold mb-2">{item.title}</h3>
                <p className="text-[13.5px] text-[#5b564d] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
