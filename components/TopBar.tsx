import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-ink text-[#cfcac2] text-[13px]">
      <div className="max-w-content mx-auto px-6 h-[38px] flex items-center justify-between">
        <span>{COMPANY.tagline}</span>
        <div className="flex items-center gap-5">
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin size={13} /> {COMPANY.location}
          </a>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} /> {COMPANY.phone}
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={13} /> Send Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
