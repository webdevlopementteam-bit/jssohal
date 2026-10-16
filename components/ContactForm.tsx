"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY, topProducts } from "@/lib/data";
import { submitToWeb3Forms } from "@/lib/web3forms";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full bg-white border border-black/15 rounded-md px-4 py-3 text-[14.5px] text-ink placeholder:text-[#9a948a] focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/15 transition";
const labelClass = "block text-[13px] font-semibold text-ink-3 mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get("botcheck")) return;

    setStatus("sending");
    setError("");

    const result = await submitToWeb3Forms({
      subject: `New enquiry from ${data.get("name")} — Website`,
      from_name: "J. S. Engineering Website",
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      product: String(data.get("product") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (result.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setError(result.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            CONTACT US
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Request a quote
          </h2>
          <p className="text-[15.5px] text-[#5b564d] leading-relaxed mb-8">
            Share your requirement and our team will get back to you with the right machine and a
            clear quotation.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-paper-2 rounded-xl p-5">
              <div className="w-[44px] h-[44px] rounded-lg bg-ember/10 flex items-center justify-center flex-none">
                <MapPin size={20} className="text-ember" />
              </div>
              <div>
                <b className="block font-display font-bold text-[15px] mb-0.5">Visit us</b>
                <span className="text-[14px] text-[#5b564d]">{COMPANY.address}</span>
              </div>
            </div>
            <a
              href={COMPANY.phoneHref}
              className="flex gap-4 items-start bg-paper-2 rounded-xl p-5 hover:bg-[#e2ded4] transition-colors"
            >
              <div className="w-[44px] h-[44px] rounded-lg bg-ember/10 flex items-center justify-center flex-none">
                <Phone size={20} className="text-ember" />
              </div>
              <div>
                <b className="block font-display font-bold text-[15px] mb-0.5">Call us</b>
                <span className="text-[14px] text-[#5b564d]">{COMPANY.phone}</span>
              </div>
            </a>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-start bg-paper-2 rounded-xl p-5 hover:bg-[#e2ded4] transition-colors"
            >
              <div className="w-[44px] h-[44px] rounded-lg bg-[#25D366]/15 flex items-center justify-center flex-none">
                <MessageCircle size={20} className="text-[#1ebc59]" />
              </div>
              <div>
                <b className="block font-display font-bold text-[15px] mb-0.5">WhatsApp</b>
                <span className="text-[14px] text-[#5b564d]">Chat with our team</span>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-white border border-black/10 rounded-2xl p-6 sm:p-9 shadow-[0_20px_50px_rgba(21,19,15,0.06)]">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 size={52} className="text-ember mb-4" />
              <h3 className="font-display font-extrabold text-[24px] mb-2">Thank you!</h3>
              <p className="text-[15px] text-[#5b564d] leading-relaxed max-w-[380px] mb-6">
                Your enquiry has been sent. Our team will contact you shortly. For a faster response,
                call {COMPANY.phone}.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-[14px] font-semibold text-ember hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="cf-name" className={labelClass}>Full name *</label>
                <input id="cf-name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-phone" className={labelClass}>Phone *</label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+\-\s()]{7,20}"
                  title="Please enter a valid phone number"
                  placeholder="+91 98xxx xxxxx"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelClass}>Email *</label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-company" className={labelClass}>Company / Bakery</label>
                <input id="cf-company" name="company" autoComplete="organization" placeholder="Business name" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-product" className={labelClass}>Interested in</label>
                <select id="cf-product" name="product" defaultValue="" className={inputClass}>
                  <option value="">Select a product (optional)</option>
                  {topProducts.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Other Bakery Equipment">Other Bakery Equipment</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className={labelClass}>Your requirement *</label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you bake, your daily volume and any specific requirement."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-[14px] text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3">
                  {error} You can also call us at {COMPANY.phone}.
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ember hover:bg-ember-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={17} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
