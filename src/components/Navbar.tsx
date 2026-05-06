import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const RED = "#dc2626";
const BLACK = "#0a0a0a";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <div
        style={{ background: BLACK }}
        className="fixed top-0 inset-x-0 z-50 h-9 flex items-center justify-center px-4"
      >
        <a
          href="tel:5551234567"
          className="flex items-center gap-2 text-white text-xs sm:text-sm font-medium hover:text-red-300 transition-colors"
        >
          <Phone className="h-3.5 w-3.5" style={{ color: RED }} />
          <span>Licensed Electrical Contractor · Serving Your Area</span>
          <span className="text-white/30">·</span>
          <span>(555) 123-4567</span>
        </a>
      </div>

      <nav
        className={`fixed top-9 inset-x-0 z-50 bg-white border-b transition-shadow duration-300 ${
          scrolled ? "shadow-md border-gray-200" : "border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.webp"
              alt="Your business logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="font-extrabold text-gray-900 text-base leading-tight tracking-tight">
                [Your Business Name]
              </p>
              <p className="text-gray-500 text-[11px] sm:text-xs uppercase tracking-wider">
                Licensed Electrical Contractor
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {[
              ["Services", "services"],
              ["How It Works", "how"],
              ["Why Us", "why"],
              ["Areas", "areas"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:5551234567"
              className="flex items-center gap-1.5 text-gray-800 hover:text-black text-sm font-semibold transition-colors"
            >
              <Phone className="h-3.5 w-3.5" style={{ color: RED }} />
              (555) 123-4567
            </a>
            <button
              onClick={() => scrollTo("quote")}
              style={{ background: RED, color: "white" }}
              className="px-5 py-2.5 rounded-lg font-bold text-sm hover:brightness-110 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Free Quote
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 pt-3 flex flex-col gap-1 animate-fade-in">
            {[
              ["Services", "services"],
              ["How It Works", "how"],
              ["Why Us", "why"],
              ["Service Areas", "areas"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-gray-700 font-medium py-3 px-2 border-b border-gray-100"
              >
                {label}
              </button>
            ))}
            <a
              href="tel:5551234567"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-3 text-gray-800 py-3 border border-gray-200 rounded-lg font-semibold text-sm"
            >
              <Phone className="h-4 w-4" style={{ color: RED }} />
              (555) 123-4567
            </a>
            <button
              onClick={() => scrollTo("quote")}
              style={{ background: RED, color: "white" }}
              className="mt-2 py-3.5 rounded-lg font-extrabold text-sm shadow-md"
            >
              Get a Free Quote
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
