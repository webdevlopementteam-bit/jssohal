"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone, ArrowRight, Settings } from "lucide-react";
import { navLinks, megaMenuLinks, COMPANY } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-[60] bg-white border-b transition-shadow ${
          scrolled ? "shadow-[0_6px_24px_rgba(21,19,15,0.08)] border-black/10" : "border-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-6 h-[78px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-[11px]">
            <span className="w-[42px] h-[42px] rounded-lg bg-ink flex items-center justify-center flex-none">
              <Settings size={22} className="stroke-ember" />
            </span>
            <span className="leading-tight">
              <b className="block font-display font-extrabold text-[16.5px] text-ink">J. S. ENGINEERING</b>
              <span className="hidden xs:block text-[11px] tracking-wide text-steel font-semibold">
                Sohal JS Engineering Co.
              </span>
            </span>
          </a>

          <nav className="hidden [@media(min-width:1080px)]:flex items-center gap-0.5">
            <a className="px-[15px] py-2.5 text-[14.5px] font-semibold text-ink-3 rounded-md hover:text-ember transition-colors" href="#home">
              Home
            </a>
            <a className="px-[15px] py-2.5 text-[14.5px] font-semibold text-ink-3 rounded-md hover:text-ember transition-colors" href="#about">
              About Us
            </a>

            <div className="relative group">
              <a className="px-[15px] py-2.5 text-[14.5px] font-semibold text-ink-3 rounded-md hover:text-ember transition-colors flex items-center gap-1.5" href="#products">
                Products <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 min-w-[720px] bg-white border-t border-black/10 shadow-[0_24px_48px_rgba(21,19,15,0.12)] opacity-0 invisible -translate-y-1.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 rounded-b-xl overflow-hidden">
                <div className="grid grid-cols-2 gap-1 p-6">
                  {megaMenuLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg text-sm font-medium text-ink-3 hover:bg-paper hover:text-ember transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ember flex-none" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                className="px-[15px] py-2.5 text-[14.5px] font-semibold text-ink-3 rounded-md hover:text-ember transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              aria-label="Call us"
              className="hidden sm:flex w-[42px] h-[42px] rounded-md border border-black/10 items-center justify-center hover:border-ember hover:text-ember transition-colors flex-none"
            >
              <Phone size={18} />
            </a>
            <a
              href="#contact"
              className="hidden [@media(min-width:1080px)]:inline-flex items-center gap-2.5 bg-ember hover:bg-ember-dark text-white font-semibold text-[15px] px-6 py-3.5 rounded-md transition-colors group"
            >
              GET A QUOTE
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="[@media(min-width:1080px)]:hidden flex w-[42px] h-[42px] rounded-md border border-black/10 items-center justify-center"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-ink text-white flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <span>
            <b className="block font-display font-extrabold text-white">J. S. ENGINEERING</b>
            <span className="text-[#a49d92] text-xs">Since 1948</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-[42px] h-[42px] rounded-md border border-white/15 flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 pt-3 pb-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-[19px] font-bold font-display border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="p-5 border-t border-white/10 flex flex-col gap-2.5">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex justify-center items-center gap-2 bg-ember text-white font-semibold py-3.5 rounded-md"
          >
            GET A QUOTE <ArrowRight size={16} />
          </a>
          <a
            href={COMPANY.phoneHref}
            className="flex justify-center items-center gap-2 border border-white/25 text-white font-semibold py-3.5 rounded-md"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </>
  );
}
