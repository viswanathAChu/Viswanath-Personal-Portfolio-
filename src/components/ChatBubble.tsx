"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function ChatBubble() {
  return (
    <motion.a
      href="https://viswa-ds.app.n8n.cloud/webhook/0acf8e10-9b70-4687-9dd2-6f3b064c3388/chat"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)" }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center border border-indigo-400/30 transition-all duration-300 group"
      title="Chat with Viswanath's AI Assistant"
    >
      <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      {/* Pulsing online status dot */}
      <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
      </span>
    </motion.a>
  );
}
