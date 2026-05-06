import { MessageCircle } from "lucide-react";

const BLUE = "#1d4ed8";

// TODO: wire this up to the real chat provider (Lead Connector, Intercom, etc.).
export default function ChatWidget() {
  const handleClick = () => {
    window.alert("Chat widget placeholder — connect your chat provider here.");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open chat"
      style={{ background: BLUE, color: "white" }}
      className="pulse-ring fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:brightness-110 transition-all duration-200"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </button>
  );
}
