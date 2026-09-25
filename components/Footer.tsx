"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Facebook, Youtube, Linkedin } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <footer id="contact" className="bg-[#0f0d0a] text-[#a49d92] pt-[70px]">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-[50px] border-b border-white/10">
          <div>
            <span>
              <b className="block font-display font-extrabold text-white">J. S. ENGINEERING</b>
              <span className="text-[#8a8377] text-xs">Since 1948</span>
            </span>
            <p className="text-sm leading-relaxed text-[#8a8377] max-w-[320px] my-4">
              Manufacturer, exporter and supplier of high-speed bread, toast and cake slicing
              machines and bakery equipment, based in Delhi, India.
            </p>
            <div className="flex gap-2.5 text-sm mb-3.5">
              <MapPin size={17} className="text-ember flex-none mt-0.5" />
              <span>{COMPANY.address}</span>
            </div>
            <div className="flex gap-2.5 text-sm mb-3.5">
              <Phone size={17} className="text-ember flex-none mt-0.5" />
              <span>{COMPANY.phone}</span>
            </div>
            <div className="flex gap-2.5 text-sm mb-3.5">
              <Mail size={17} className="text-ember flex-none mt-0.5" />
              <span>[add your business email]</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display text-sm tracking-wide mb-5">COMPANY</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#expertise" className="text-sm hover:text-white transition-colors">Our Expertise</a></li>
              <li><a href="#why" className="text-sm hover:text-white transition-colors">Projects</a></li>
              <li><a href="#clients" className="text-sm hover:text-white transition-colors">Clients</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-sm tracking-wide mb-5">PRODUCTS</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#products" className="text-sm hover:text-white transition-colors">Bread Slicing Machines</a></li>
              <li><a href="#products" className="text-sm hover:text-white transition-colors">Toast Slicing Machines</a></li>
              <li><a href="#range" className="text-sm hover:text-white transition-colors">Gravity Slicers</a></li>
              <li><a href="#products" className="text-sm hover:text-white transition-colors">Cake Slicing Machines</a></li>
              <li><a href="#range" className="text-sm hover:text-white transition-colors">Bakery Equipment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-sm tracking-wide mb-5">SERVICES</h4>
            <ul className="flex flex-col gap-3 mb-5">
              <li><a href="#expertise" className="text-sm hover:text-white transition-colors">Turnkey Bakery Projects</a></li>
              <li><a href="#expertise" className="text-sm hover:text-white transition-colors">Project Consultancy</a></li>
              <li><a href="#why" className="text-sm hover:text-white transition-colors">Customized Machinery</a></li>
              <li><a href="#faq" className="text-sm hover:text-white transition-colors">Technical Support</a></li>
            </ul>
            {sent ? (
              <p className="text-white text-sm">
                Thanks — we&apos;ll be in touch shortly. For faster response, call {COMPANY.phone}.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/[.06] border border-white/[.14] rounded-md px-3 py-2.5 text-white text-[13px] placeholder:text-[#7d766b]"
                />
                <button
                  type="submit"
                  className="bg-ember hover:bg-ember-dark text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3.5 py-6.5 text-[13px] text-[#7d766b]">
          <span>&copy; 2026 J. S. Engineering Company. All Rights Reserved.</span>
          <div className="flex gap-2.5">
            <a href="#" aria-label="Facebook" className="w-[38px] h-[38px] rounded-md border border-white/[.14] flex items-center justify-center hover:border-ember hover:text-ember transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="w-[38px] h-[38px] rounded-md border border-white/[.14] flex items-center justify-center hover:border-ember hover:text-ember transition-colors">
              <Youtube size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-md border border-white/[.14] flex items-center justify-center hover:border-ember hover:text-ember transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
