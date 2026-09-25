"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-paper-2">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            FAQ
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal className="max-w-[840px] mx-auto">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left bg-transparent py-[22px] px-1.5 flex justify-between items-center gap-5 font-display font-bold text-base"
                  aria-expanded={open}
                >
                  {item.q}
                  <Plus
                    size={19}
                    className={`flex-none text-ember transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300"
                  style={{ maxHeight: open ? "240px" : "0px" }}
                >
                  <p className="mx-1.5 mb-[22px] text-[14.5px] text-[#5b564d] leading-relaxed max-w-[700px]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
