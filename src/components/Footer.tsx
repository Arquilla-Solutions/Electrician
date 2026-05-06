import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

const NAVY = "#0f172a";
const BLUE = "#1d4ed8";
const YELLOW = "#facc15";

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: NAVY }} className="text-white pt-14 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo-mark.svg"
                alt="Your business logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-extrabold text-base leading-tight">[Your Business Name]</p>
                <p className="text-white/50 text-[11px] uppercase tracking-wider">
                  Licensed Electrical Contractor
                </p>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Master-electrician owned and locally operated. We do honest,
              code-compliant electrical work and stand behind every install —
              from a single outlet to a full commercial fit-out.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <ShieldCheck className="h-3.5 w-3.5" style={{ color: YELLOW }} />
              <span className="text-white/80 text-xs font-semibold">
                Licensed · Bonded · Insured
              </span>
            </div>
          </div>

          <div>
            <p className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:5551234567"
                className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: YELLOW }} />
                (555) 123-4567
              </a>
              <a
                href="mailto:hello@yourcompany.com"
                className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: YELLOW }} />
                hello@yourcompany.com
              </a>
              <div className="flex items-start gap-2.5 text-white/65">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: YELLOW }} />
                <span>
                  Your City, USA
                  <br />
                  Serving the Local Area
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Services
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {[
                "Panel Upgrades & Replacements",
                "Lighting Installation & Design",
                "Outlets, Switches & Wiring",
                "EV Charger Installation",
                "Standby Generator Installation",
                "Whole-Home Surge Protection",
                "Ceiling Fans & Smart Devices",
                "Commercial & Tenant Build-Outs",
                "Troubleshooting & Repairs",
              ].map((s, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo("services")}
                  className="text-left text-white/55 hover:text-white transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Ready to Book?
            </p>
            <div
              className="p-5 rounded-xl border"
              style={{
                background: "rgba(29,78,216,0.15)",
                borderColor: "rgba(250,204,21,0.30)",
              }}
            >
              <p className="text-white font-semibold text-sm mb-1">
                Free, no-obligation quote.
              </p>
              <p className="text-white/55 text-xs mb-4">
                Call, text, or send us a quick form. Same-day response.
              </p>
              <button
                onClick={() => scrollTo("quote")}
                style={{ background: BLUE, color: "white" }}
                className="w-full py-2.5 rounded-lg text-sm font-extrabold hover:brightness-110 transition-all shadow"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col gap-3 text-white/35 text-xs">
          <p
            className="text-center sm:text-left italic"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Template demo site for electrical contractors. Final design,
            branding and content will be customized for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} [Your Business Name] · Licensed
              Electrical Contractor
            </p>
            <p>Master Electrician Owned · Serving Your Area &amp; Surrounding Towns</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
