import { ArrowRight, MapPin, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const h2 = "font-display font-extrabold leading-[1.15] tracking-tight text-[24px] sm:text-[28px] lg:text-[30px] mb-4";

export default function BakeryIntro() {
  return (
    <section id="bakery-machine-manufacturer" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal className="relative bg-white border border-black/10 rounded-2xl p-8 sm:p-10 overflow-hidden">
            <span className="absolute top-0 left-0 h-[3px] w-full bg-ember" />
            <div className="w-[52px] h-[52px] rounded-xl bg-ember/10 flex items-center justify-center mb-6">
              <MapPin size={24} className="text-ember" />
            </div>
            <h2 className={h2}>Right Here in Delhi</h2>
            <div className="space-y-4 text-[15.5px] text-[#4a453e] leading-relaxed">
              <p>
                As a bakery machine manufacturer in Delhi, we&apos;re never far from the bakers we work
                with, and that matters more than it sounds. If you&apos;re in Delhi NCR, getting in touch
                and sorting out your requirements with our team is easy. Questions about spare parts,
                servicing or follow-up support are also simpler when your manufacturer is in the same
                city.
              </p>
              <p>
                If you&apos;re outside Delhi, that&apos;s fine too. We supply bakeries and food businesses
                across India, and we export our machines to customers abroad.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative bg-ink text-white rounded-2xl p-8 sm:p-10 overflow-hidden"
          >
            <div className="grid-bg absolute inset-0 opacity-25" />
            <div
              className="absolute -right-[20%] -top-[30%] w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(200,72,31,.3), transparent 65%)" }}
            />
            <div className="relative">
              <div className="w-[52px] h-[52px] rounded-xl bg-ember flex items-center justify-center mb-6">
                <Rocket size={24} className="text-white" />
              </div>
              <h2 className={h2}>Starting a Bakery or Expanding One?</h2>
              <p className="text-[15.5px] text-[#c9c4bb] leading-relaxed">
                Picking machines for a new bakery can get confusing fast. There are so many options, and
                a wrong choice is expensive. Our project consultancy team helps you work through it step
                by step. We help you choose the right machines, plan your layout and set up bread, cake
                or toast production lines. Instead of chasing several suppliers, you get one experienced
                partner from start to finish.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6 bg-paper-2 border border-black/10 rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <h2 className={h2}>Let&apos;s Talk About Your Bakery</h2>
            <div className="space-y-3 text-[15.5px] text-[#4a453e] leading-relaxed">
              <p>
                Tell us what you bake, how much you make in a day and how much space you have. We&apos;ll
                suggest a machine that fits, and give you a clear quotation without the pressure or the
                confusing jargon.
              </p>
              <p>
                Use the Get a Quote button on this page, or find us at C-57, Wazirpur Industrial Area,
                Delhi 110052.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-center flex-none inline-flex items-center gap-2.5 bg-ember hover:bg-ember-dark text-white font-semibold px-7 py-4 rounded-md transition-colors group"
          >
            Get a Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
