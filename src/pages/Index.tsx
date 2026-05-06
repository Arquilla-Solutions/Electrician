import { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Plug,
  PlugZap,
  BatteryCharging,
  Power,
  Building2,
  ClipboardList,
  Wrench,
  Star,
  Phone,
  ShieldCheck,
  Award,
  Clock,
  DollarSign,
  BadgeCheck,
  Heart,
  Zap,
  ChevronDown,
  MapPin,
  Mail,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

const RED = "#dc2626";
const RED_DARK = "#991b1b";
const BLACK = "#0a0a0a";
const BLUSH = "#fef2f2";

const residentialServices = [
  {
    icon: Power,
    title: "Panel Upgrades & Replacements",
    desc: "Modernize your home's electrical panel for safer, more reliable power.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    desc: "Recessed lighting, fixtures, and full lighting design for any room.",
  },
  {
    icon: Plug,
    title: "Outlets, Switches & Wiring",
    desc: "Repairs, replacements, and new outlets where you actually need them.",
  },
];

const commercialServices = [
  {
    icon: BatteryCharging,
    title: "EV Charger Installation",
    desc: "Level 2 home and commercial EV charger installs, done to code.",
  },
  {
    icon: PlugZap,
    title: "Generator Installation",
    desc: "Standby and portable generator setup with automatic transfer switches.",
  },
  {
    icon: Building2,
    title: "Commercial Wiring",
    desc: "Office, retail, and light industrial electrical work, on time and on budget.",
  },
];

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Get a Quote",
    desc: "Send us a quick form, call, or message us in chat. Same-day response.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "We Show Up",
    desc: "On time, in uniform, ready to work. No surprise fees, ever.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Job Done Right",
    desc: "Code-compliant work, cleaned up after, and tested before we leave.",
  },
];

const whyUs = [
  {
    icon: Award,
    title: "Master Electrician Owned",
    desc: "Owned and run by a master electrician — every job is supervised by a licensed pro.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed, bonded, and insured so your home and our team are always protected.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    desc: "Power issue today? Call us. We'll do everything we can to be on-site fast.",
  },
  {
    icon: DollarSign,
    title: "Upfront, Honest Pricing",
    desc: "Clear quotes before we start. No hidden fees, no surprise add-ons.",
  },
  {
    icon: BadgeCheck,
    title: "Code-Compliant Work",
    desc: "Every install is permitted, inspected, and built to the latest NEC standards.",
  },
  {
    icon: Heart,
    title: "Locally Owned",
    desc: "Locally owned and proud of it — accountable to the neighbors we serve.",
  },
];

const areas = [
  "Downtown",
  "Northside",
  "Southside",
  "Eastside",
  "Westside",
  "Riverside",
  "Lakeview",
  "Oakwood",
  "Maplewood",
  "Hillcrest",
];

const faqs = [
  {
    q: "How fast can you come out for an electrical emergency?",
    a: "We offer same-day response for true electrical emergencies — no power, burning smell, sparking outlets, or tripped mains we can't reset. Call (555) 123-4567 and we'll dispatch the next available licensed electrician. For non-urgent work we can usually be on-site within 24–48 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Voltline Electric Co. is a fully licensed electrical contractor, bonded, and carries general liability and workers' comp insurance. Every job is performed or directly supervised by a master electrician, and we'll happily provide proof of license and insurance on request.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Free, no-obligation estimates on most residential and small-commercial projects. For larger commercial jobs that require an on-site walkthrough or load calculations, we'll let you know upfront if a paid assessment is needed — and that fee is credited toward the work if you hire us.",
  },
  {
    q: "Can you handle inspections and permits?",
    a: "Absolutely. We pull permits, schedule inspections, and meet the inspector on-site for any work that requires it — panel upgrades, service changes, EV chargers, generators, additions, and more. You don't deal with the paperwork; we handle it end to end.",
  },
  {
    q: "Do you install EV chargers and home generators?",
    a: "Yes — both are core services. We install Level 2 EV chargers (Tesla, ChargePoint, Wallbox, and more) and standby or portable home generators with automatic transfer switches. We'll size the equipment, verify panel capacity, and complete all permitting and inspection.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, ACH bank transfer, check, and cash. Larger projects can be split into milestone payments, and we offer financing options on qualifying installs like panel upgrades, EV chargers, and whole-home generators.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToQuote = () =>
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="font-sans antialiased text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center pt-[136px] pb-12"
        style={{ background: `linear-gradient(135deg, ${BLACK} 0%, #111827 100%)` }}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* Soft brand glow */}
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none animate-float"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.22) 0%, transparent 65%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative">
          <div className="grid md:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="md:col-span-3">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wide animate-fade-in-up shadow-lg"
                style={{ background: RED, color: "white", animationDelay: "0ms" }}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Licensed Electrical Contractor · Serving Your Area
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold text-white leading-[1.04] mb-6 tracking-tight animate-fade-in-up"
                style={{ animationDelay: "120ms" }}
              >
                Powering Homes &amp; Businesses.
                <br />
                <span style={{ color: RED }}>Done Right.</span>
              </h1>

              <p
                className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed max-w-xl animate-fade-in-up"
                style={{ animationDelay: "240ms" }}
              >
                Master-electrician-owned, fully licensed and insured. From panel
                upgrades and EV chargers to full commercial wiring, our crew
                shows up on time, works to code, and leaves your power safer
                than we found it.
              </p>

              <div
                className="flex flex-wrap gap-x-6 gap-y-2.5 text-white/65 text-sm mb-9 animate-fade-in-up"
                style={{ animationDelay: "360ms" }}
              >
                {[
                  "Same-Day Response",
                  "Upfront Pricing",
                  "Licensed & Insured",
                  "Code-Compliant Work",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: RED }} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col sm:flex-row items-start gap-3.5 animate-fade-in-up"
                style={{ animationDelay: "480ms" }}
              >
                <button
                  onClick={scrollToQuote}
                  style={{ background: RED, color: "white" }}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-lg font-extrabold text-base hover:brightness-110 transition-all shadow-2xl hover:-translate-y-0.5"
                >
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:5551234567"
                  className="inline-flex items-center gap-2.5 text-white border border-white/25 hover:border-white/60 hover:bg-white/5 px-7 py-4 rounded-lg font-semibold text-base transition-all"
                >
                  <Phone className="h-5 w-5" style={{ color: RED }} />
                  (555) 123-4567
                </a>
              </div>
            </div>

            <div
              className="md:col-span-2 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
              id="quote"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ─────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-5 overflow-hidden">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-12 w-max animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, dup) =>
              [
                { icon: Award, label: "Master Electrician Owned" },
                { icon: ShieldCheck, label: "Licensed & Insured" },
                { icon: Clock, label: "Same-Day Response" },
                { icon: DollarSign, label: "Upfront, Honest Pricing" },
                { icon: BadgeCheck, label: "Code-Compliant Work" },
                { icon: Heart, label: "Locally Owned" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="flex items-center gap-2.5 text-gray-700 text-sm font-semibold flex-shrink-0"
                >
                  <Icon className="h-5 w-5" style={{ color: RED }} />
                  {label}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MEET JOHN ─────────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wide"
                style={{ background: BLUSH, color: RED_DARK }}
              >
                <Heart className="h-3.5 w-3.5" />
                Meet Voltline Electric
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Master-electrician work,
                <br />
                done <span style={{ color: RED }}>the right way.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Voltline Electric Co. is{" "}
                <strong className="text-gray-900">master-electrician owned</strong>{" "}
                and operated, with two decades behind the panel. We started
                Voltline because we were tired of seeing rushed, half-done
                electrical work in homes and businesses that deserved better.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-7">
                Whether it's a 200-amp service upgrade, a Level 2 EV charger, or
                a full commercial buildout, every job is permitted, inspected,
                and personally signed off by a licensed master electrician —
                and that's a promise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {[
                  "Master electrician owned",
                  "Locally owned & operated",
                  "Residential & commercial",
                  "Free, on-site quotes",
                  "Permits & inspections handled",
                  "Licensed, bonded & insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: RED }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={scrollToQuote}
                style={{ background: BLACK }}
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-lg font-bold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div
                  className="rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    height: 480,
                    background: `linear-gradient(135deg, ${BLACK} 0%, #1f2937 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${RED} 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative text-center px-8">
                    <div className="bg-white rounded-2xl px-6 py-5 mx-auto mb-6 shadow-2xl animate-float inline-block">
                      <img
                        src="/logo.webp"
                        alt="Voltline Electric Co."
                        className="h-32 w-auto object-contain"
                      />
                    </div>
                    <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-5">
                      Licensed Electrical Contractor
                    </p>
                    <div className="h-px w-24 mx-auto mb-5" style={{ background: RED }} />
                    <p className="text-white/80 text-sm italic">
                      "If it's not safe, it's not finished."
                    </p>
                    <p className="text-white/50 text-xs mt-2">
                      — Master Electrician, Owner
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-5 py-3.5 flex items-center gap-3 border border-gray-100 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center"
                    style={{ background: BLUSH }}
                  >
                    <ShieldCheck className="h-5 w-5" style={{ color: RED_DARK }} />
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900 text-sm leading-tight">
                      Licensed & Insured
                    </p>
                    <p className="text-gray-400 text-xs">Master electrician</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-5 py-4 border border-gray-100 text-center">
                  <p className="font-extrabold text-2xl leading-none" style={{ color: RED }}>
                    20+
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Years Wired</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" className="py-20 sm:py-24" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wide"
                style={{ background: BLUSH, color: RED_DARK }}
              >
                Our Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Residential, Commercial &amp; Specialty
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                One licensed crew, one standard. If it carries current, we'll
                make sure it does it safely.
              </p>
            </div>
          </Reveal>

          {/* Residential */}
          <Reveal delay={80}>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center"
                style={{ background: RED }}
              >
                <Lightbulb className="h-5 w-5" style={{ color: "white" }} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-xl">Residential Electrical</h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {residentialServices.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={120 + i * 80}>
                <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div
                    className="h-28 flex items-center justify-center relative"
                    style={{ background: `linear-gradient(135deg, ${BLACK} 0%, #1f2937 100%)` }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${RED} 1px, transparent 0)`,
                        backgroundSize: "16px 16px",
                      }}
                    />
                    <Icon
                      className="h-10 w-10 group-hover:scale-110 transition-transform duration-300 relative"
                      style={{ color: RED }}
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2 text-base">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Commercial & Specialty */}
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center"
                style={{ background: RED }}
              >
                <Building2 className="h-5 w-5" style={{ color: "white" }} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-xl">Commercial &amp; Specialty</h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {commercialServices.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={120 + i * 80}>
                <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div
                    className="h-28 flex items-center justify-center relative"
                    style={{ background: `linear-gradient(135deg, ${RED_DARK} 0%, ${RED} 100%)` }}
                  >
                    <Icon className="h-10 w-10 text-white/95 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2 text-base">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-6">
              <button
                onClick={scrollToQuote}
                style={{ background: RED, color: "white" }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-extrabold hover:brightness-110 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section id="how" className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wide"
                style={{ background: BLUSH, color: RED_DARK }}
              >
                How It Works
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                Three simple steps
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 150}>
                <div className="relative text-center px-6">
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-10 left-[calc(50%+3.5rem)] right-[-50%] h-px"
                      style={{ background: `linear-gradient(to right, ${RED}, transparent)` }}
                    />
                  )}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl transition-transform hover:scale-110 duration-300"
                    style={{ background: BLACK }}
                  >
                    <Icon className="h-8 w-8" style={{ color: RED }} />
                  </div>
                  <span
                    className="text-xs font-extrabold tracking-widest uppercase block mb-1"
                    style={{ color: RED_DARK }}
                  >
                    Step {num}
                  </span>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────── */}
      <section id="why" className="py-20 sm:py-24" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wide"
                style={{ background: BLUSH, color: RED_DARK }}
              >
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                Why people pick <span style={{ color: RED }}>Voltline Electric</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex items-start gap-4 bg-white hover:bg-red-50/50 rounded-xl p-6 border border-gray-100 hover:border-red-200 transition-all duration-200 h-full hover:-translate-y-1 hover:shadow-md">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: BLACK }}
                  >
                    <Icon className="h-5 w-5" style={{ color: RED }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL PLACEHOLDER ──────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 shadow-sm p-10 sm:p-14 text-center">
              <Quote className="h-10 w-10 mx-auto mb-5" style={{ color: RED }} />
              <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-medium italic mb-7">
                Showed up on time, fixed the panel cleanly, and walked me
                through every step. Fair price, top-notch work — exactly what
                I wanted.
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5" fill="currentColor" style={{ color: RED }} />
                ))}
              </div>
              <p className="text-gray-500 text-sm font-semibold">
                Sample Customer · Local Area
              </p>
              <p className="text-gray-400 text-xs mt-1 italic">
                Sample testimonial — replace with real reviews
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────────────── */}
      <section
        id="areas"
        style={{ background: BLACK }}
        className="py-20 sm:py-24 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${RED} 1px, transparent 0)`,
            backgroundSize: "26px 26px",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wide"
              style={{ background: "rgba(220,38,38,0.18)", color: "#fca5a5" }}
            >
              <MapPin className="h-3.5 w-3.5" />
              Service Area
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Serving Your Area &amp; Surrounding Towns
            </h2>
            <p className="text-white/55 text-base mb-10 max-w-xl mx-auto">
              Local, licensed and ready to roll — covering downtown,
              the suburbs and beyond. Don't see your town? Call us anyway.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {areas.map((name, i) => (
              <Reveal key={name} delay={i * 30}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-white/65 hover:border-red-400 hover:text-red-300 transition-colors cursor-default">
                  <MapPin className="h-3 w-3" />
                  {name}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <button
              onClick={scrollToQuote}
              style={{ background: RED, color: "white" }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-extrabold text-base hover:brightness-110 transition-all shadow-2xl hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wide"
                style={{ background: BLUSH, color: RED_DARK }}
              >
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                Frequently asked questions
              </h2>
            </div>
          </Reveal>

          <div className="space-y-2.5">
            {faqs.map(({ q, a }, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-300 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-red-50/30 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base pr-4">{q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                      style={{ color: RED }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: openFaq === idx ? 320 : 0 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {a}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: BLACK }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div
              className="rounded-2xl p-8 sm:p-12 text-center border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,38,38,0.12) 0%, rgba(220,38,38,0.03) 100%)",
                borderColor: "rgba(220,38,38,0.30)",
              }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to power up<br />
                <span style={{ color: RED }}>the right way?</span>
              </h2>
              <p className="text-white/65 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                Get a free, no-obligation quote today. Honest pricing, fast
                response, and code-compliant work — guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={scrollToQuote}
                  style={{ background: RED, color: "white" }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-extrabold hover:brightness-110 transition-all shadow-2xl hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:5551234567"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/25 hover:border-white/60 hover:bg-white/5 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  <Phone className="h-5 w-5" style={{ color: RED }} />
                  (555) 123-4567
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-white/45 text-xs">
                <a
                  href="mailto:hello@voltlineelectric.com"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" /> hello@voltlineelectric.com
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Serving Your City &amp; Surrounding Areas
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
