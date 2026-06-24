"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/actions/send-email";

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setStatus("idle");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
      setIsPending(false);
      return;
    }

    setStatus("success");
    setIsPending(false);
    (e.target as HTMLFormElement).reset(); // Clear the form
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-panel p-8 rounded-3xl border border-zinc-800/50"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all resize-none"
            placeholder="Let's talk about..."
          />
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm ml-1">{errorMessage}</p>
        )}

        {status === "success" && (
          <div className="flex items-center gap-2 text-emerald-400 text-sm ml-1 bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <p>Message sent successfully! I&apos;ll get back to you soon.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending || status === "success"}
          className="w-full inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
        >
          {isPending ? "Sending..." : status === "success" ? "Sent" : "Send Message"}
          {!isPending && status !== "success" && (
            <Send className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          )}
        </button>
      </form>
    </motion.div>
  );
}