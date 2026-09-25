import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.06L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.28-3.5-.73-2.96-1.22-4.86-4.18-5-4.38-.15-.2-1.2-1.6-1.2-3.05s.76-2.17 1.03-2.47c.27-.3.58-.37.78-.37h.55c.18 0 .43-.07.66.5.24.6.82 2.06.9 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.48-.15.17-.3.38-.44.5-.15.15-.3.3-.13.6.17.3.75 1.24 1.62 2 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.27.1 1.7.8 1.99 1 .3.15.5.23.57.35.07.13.07.75-.17 1.42z" />
    </svg>
  );
}

export default function Floaters() {
  return (
    <>
      <div className="fixed left-[22px] bottom-[22px] z-[80] max-[720px]:hidden">
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-[54px] h-[54px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.28)] hover:scale-[1.08] transition-transform"
        >
          <WhatsAppIcon />
        </a>
      </div>

      <div className="fixed right-[22px] bottom-[22px] z-[80] max-[720px]:hidden">
        <a
          href={COMPANY.phoneHref}
          aria-label="Call now"
          className="w-[54px] h-[54px] rounded-full bg-ember text-white flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.28)] hover:scale-[1.08] transition-transform animate-pulseRing"
        >
          <Phone size={24} />
        </a>
      </div>

      <div
        className="hidden max-[720px]:grid grid-cols-2 fixed left-0 right-0 bottom-0 z-[79] border-t border-white/10"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 py-3.5 font-bold text-[15px] text-white bg-[#25D366]"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={COMPANY.phoneHref}
          className="flex items-center justify-center gap-2.5 py-3.5 font-bold text-[15px] text-white bg-ember"
        >
          <Phone size={20} />
          Call Now
        </a>
      </div>
    </>
  );
}
