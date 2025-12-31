import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOT_NAME = "Skyrina Assistant";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello 👋 I’m the Skyrina Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply = getBotReply(input);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-blue-600 
        text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-xl"
      >
        💬
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[500px] bg-white 
            rounded-2xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-800 to-green-700 px-4 py-3 
            text-white flex justify-between items-center">
              <span className="font-semibold">{BOT_NAME}</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 bg-blue-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] px-4 py-2 rounded-xl text-sm shadow
                  ${
                    msg.from === "user"
                      ? "ml-auto bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-blue-100 bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Skyrina..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-green-600 text-white px-4 rounded-lg text-sm font-medium"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Simple rule-based replies */
function getBotReply(text) {
  const msg = text.toLowerCase();

  if (msg.includes("skyrina")) {
    return (
      "Skyrina México, S.A. de C.V. is a vertically integrated apparel manufacturer " +
      "backed by Skytex Group and Sabrina Taiwan, delivering high-quality garments " +
      "with speed and consistency."
    );
  }

  if (msg.includes("service") || msg.includes("offer")) {
    return (
      "We provide end-to-end apparel manufacturing including fabric sourcing, " +
      "cutting, sewing, finishing, and quality control. For detailed requirements, " +
      "please contact us directly."
    );
  }

  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach")) {
    return (
      "You can contact our team at 📧 info@skyrina.com or reach us through the " +
      "Contact page. Our leadership team will respond promptly."
    );
  }

  if (msg.includes("location") || msg.includes("where")) {
    return "Skyrina operates in Mexico, offering fast delivery to the USA within 36 hours.";
  }

  return (
    "Thanks for reaching out! For detailed discussions or quotations, " +
    "please contact us at 📧 info@skyrina.com or use the Contact page."
  );
}
