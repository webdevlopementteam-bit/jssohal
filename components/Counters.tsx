"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, start: number, inView: boolean, duration = 1400) {
  const [value, setValue] = useState(start);
  const ran = useRef(false);

  useEffect(() => {
    if (!inView || ran.current) return;
    ran.current = true;
    const t0 = performance.now();
    let raf: number;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, start, target, duration]);

  return value;
}

function CounterItem({
  target,
  start = 0,
  suffix = "",
  label,
  inView,
  border = true,
}: {
  target: number;
  start?: number;
  suffix?: string;
  label: string;
  inView: boolean;
  border?: boolean;
}) {
  const value = useCountUp(target, start, inView);
  return (
    <div className={`p-8 text-center ${border ? "border-r border-black/10 last:border-r-0" : ""}`}>
      <div className="font-display font-extrabold text-[26px] sm:text-3xl text-ink">
        {value}
        {suffix && <span className="text-ember">{suffix}</span>}
      </div>
      <div className="text-[12.5px] text-steel mt-1.5 font-semibold leading-snug">{label}</div>
    </div>
  );
}

export default function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className="max-w-content mx-auto px-6 relative z-[5] mt-10 sm:mt-12">
      <div
        ref={ref}
        className="bg-white rounded-2xl shadow-[0_26px_60px_rgba(21,19,15,0.16)] border border-black/10 grid grid-cols-2 sm:grid-cols-5"
      >
        <CounterItem target={1948} start={1900} label="Established" inView={inView} />
        <CounterItem target={75} suffix="+" label="Years of Engineering Legacy" inView={inView} />
        <CounterItem target={65} label="Breads / Minute" inView={inView} />
        <CounterItem target={30} suffix="+" label="Years Supplying Leading Bakery Brands" inView={inView} />
        <div className="p-8 text-center border-t sm:border-t-0 border-black/10 col-span-2 sm:col-span-1">
          <div className="font-display font-extrabold text-xl text-ink">Multiple</div>
          <div className="text-[12.5px] text-steel mt-1.5 font-semibold leading-snug">Countries Served</div>
        </div>
      </div>
    </div>
  );
}
