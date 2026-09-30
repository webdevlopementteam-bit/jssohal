import { Target, ShieldCheck, Sparkles, Wrench, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Target,
    title: "Even slices",
    desc: "our blades are set to exact tolerances, so the first slice and the thousandth look the same.",
  },
  {
    icon: ShieldCheck,
    title: "A strong build",
    desc: "we use quality steel, because a machine that runs all day needs to handle it.",
  },
  {
    icon: Sparkles,
    title: "Easy upkeep",
    desc: "blades are simple to replace, and the machines run quietly, so you spend less time waiting on repairs.",
  },
  {
    icon: Wrench,
    title: "Made for your product",
    desc: "your loaf size, your product and your daily volume decide the setup.",
  },
  {
    icon: MessageCircle,
    title: "Straight answers",
    desc: "you talk to the people who build the machine, not a middleman who's reading from a brochure.",
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
            Why Bakers Stick With Us
          </h2>
          <p className="text-[15.5px] text-[#5b564d] leading-relaxed">
            Every manufacturer says their machines are good. Here&apos;s what we actually focus on.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white p-7 ${i === items.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
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
