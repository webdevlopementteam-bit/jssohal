import Image from "next/image";
import Reveal from "./Reveal";
import { topProducts, COMPANY } from "@/lib/data";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.06L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.28-3.5-.73-2.96-1.22-4.86-4.18-5-4.38-.15-.2-1.2-1.6-1.2-3.05s.76-2.17 1.03-2.47c.27-.3.58-.37.78-.37h.55c.18 0 .43-.07.66.5.24.6.82 2.06.9 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.48-.15.17-.3.38-.44.5-.15.15-.3.3-.13.6.17.3.75 1.24 1.62 2 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.27.1 1.7.8 1.99 1 .3.15.5.23.57.35.07.13.07.75-.17 1.42z" />
    </svg>
  );
}

export default function TopProducts() {
  return (
    <section id="products" className="py-24 bg-paper-2">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            TOP PRODUCTS
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Engineered machines. Proven performance.
          </h2>
          <p className="text-[15.5px] text-[#5b564d] leading-relaxed">
            Explore our most demanded bakery machinery, designed for high productivity and
            consistent results.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="blade-corner bg-white border border-black/10 rounded-2xl overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_26px_50px_rgba(21,19,15,0.14)] transition-all duration-300">
                <div className="h-[300px] relative overflow-hidden ">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`transition-transform duration-500 group-hover:scale-110 ${
                      p.imageFit === "contain" ? "object-contain p-3" : "object-cover"
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold mb-2 min-h-[56px]">{p.name}</h3>
                  <p className="text-[13.8px] text-[#5b564d] leading-relaxed mb-4 min-h-[42px]">{p.description}</p>
                  <div className="flex items-center justify-between gap-2.5 border-t border-black/10 pt-4">
                    <a
                      href="#contact"
                      className="text-center text-[12.5px] font-bold text-ember border border-ember/35 hover:bg-ember hover:text-white px-3 py-2 rounded-md transition-colors"
                    >
                      Enquire Now
                    </a>
                    <a
                      href={COMPANY.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                      className="flex items-center justify-center gap-1.5 text-[12.5px] font-bold text-white bg-[#25D366] hover:bg-[#1ebc59] px-3 py-2 rounded-md transition-colors"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
