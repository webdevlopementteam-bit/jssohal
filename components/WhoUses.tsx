import { Factory, Building2, Package, Store, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const users = [
  { icon: Factory, label: "Industrial bakeries" },
  { icon: Building2, label: "Regional bakery chains" },
  { icon: Package, label: "Food-processing units" },
  { icon: Store, label: "Local bakeries" },
];

const needs = ["Clean cuts", "Steady output", "Machines that don't slow the day down"];

export default function WhoUses() {
  return (
    <section id="who-uses" className="relative py-24 bg-ink text-white overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div
        className="absolute -left-[10%] -bottom-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,72,31,.24), transparent 65%)" }}
      />
      <div className="max-w-content mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            OUR CUSTOMERS
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Who Uses Our Machines
          </h2>
          <p className="text-[15.5px] text-[#c9c4bb] leading-relaxed">
            You&apos;ll find our machines in industrial bakeries, regional bakery chains,
            food-processing units and local bakeries. The size of the business varies, but the needs
            are usually the same: clean cuts, steady output and machines that don&apos;t slow the day
            down.
          </p>
          <ul className="flex flex-wrap gap-2.5 mt-7">
            {needs.map((need) => (
              <li
                key={need}
                className="inline-flex items-center gap-2 border border-white/15 bg-white/[.04] rounded-full px-4 py-2 text-[13.5px] font-semibold"
              >
                <CheckCircle2 size={16} className="text-ember flex-none" />
                {need}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {users.map((user, i) => (
            <Reveal
              key={user.label}
              delay={i * 0.08}
              className="group border border-white/10 bg-white/[.04] hover:bg-white/[.07] hover:border-ember/50 rounded-2xl p-6 sm:p-7 transition-colors"
            >
              <div className="w-[50px] h-[50px] rounded-xl bg-ember/15 flex items-center justify-center mb-5 group-hover:bg-ember transition-colors">
                <user.icon size={24} className="text-ember group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-[15px] sm:text-[17px] leading-snug">{user.label}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
