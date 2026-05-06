import { useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";

const RED = "#dc2626";

// TODO: replace with real webhook URL when backend is connected.
const WEBHOOK_URL = "";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (WEBHOOK_URL) {
      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });
      try {
        await fetch(`${WEBHOOK_URL}?${params.toString()}`);
      } catch {
        // Always show success regardless of network result.
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-100">
      {submitted ? (
        <div className="p-10 text-center flex flex-col items-center gap-3">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
          <h3 className="font-bold text-gray-900 text-xl">Request Sent!</h3>
          <p className="text-gray-500 text-sm">
            We'll reach out shortly to schedule your free quote.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="text-center pb-1">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2"
              style={{ background: "#fee2e2", color: "#7f1d1d" }}
            >
              <Zap className="h-3 w-3" />
              Licensed &amp; Insured
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              GET YOUR <span style={{ color: RED }}>FREE</span> QUOTE
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Fast response. No obligation. Honest pricing.
            </p>
          </div>

          {[
            { label: "Full Name", key: "name", type: "text", placeholder: "Your Name" },
            { label: "Phone Number", key: "phone", type: "tel", placeholder: "(555) 000-0000" },
            { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                {label}{" "}
                {key !== "email" && <span className="text-red-400">*</span>}
              </label>
              <input
                type={type}
                value={formData[key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                placeholder={placeholder}
                required={key !== "email"}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
              />
            </div>
          ))}

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              How can we help? <span className="text-red-400">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              required
              placeholder="Briefly describe the job — panel, lighting, EV charger, address..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition resize-none"
            />
          </div>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer"
              style={{ accentColor: RED }}
            />
            <span className="text-gray-500 text-xs leading-relaxed">
              I agree to receive automated text messages from{" "}
              <strong className="text-gray-700">Voltline Electric Co.</strong> at
              the number provided. Message and data rates may apply. Reply STOP
              to opt out, HELP for help.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{ background: RED, color: "white" }}
            className="w-full py-5 rounded-lg font-extrabold text-base hover:brightness-110 transition-all tracking-widest shadow-lg uppercase disabled:opacity-70"
          >
            {loading ? "Sending…" : "Get My Free Quote"}
          </button>
        </form>
      )}
    </div>
  );
}
