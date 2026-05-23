"use client";

import { Mail, Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer className="bg-transparent border-t border-white/10 pt-16 pb-8 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let&apos;s Connect.</h2>
          <p className="text-neutral-400 max-w-md">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* Right Section / Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
          
          <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="mailto:vizwanathas@gmail.com" className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-blue-500/30 hover:bg-white/[0.06] transition-all text-neutral-200 hover:text-white">
            <Mail className="text-blue-400" />
            <span className="text-sm font-medium">vizwanathas@gmail.com</span>
          </motion.a>

          <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="tel:+917356182226" className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all text-neutral-200 hover:text-white">
            <Phone className="text-emerald-400" />
            <span className="text-sm font-medium">+91 7356182226</span>
          </motion.a>

          <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="https://linkedin.com/in/viswanath-as" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all text-neutral-200 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span className="text-sm font-medium">LinkedIn</span>
          </motion.a>

          <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="https://github.com/viswanathAchu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-neutral-500/35 hover:bg-white/[0.06] transition-all text-neutral-200 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span className="text-sm font-medium">GitHub</span>
          </motion.a>

          <motion.a whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} href="https://drive.google.com/file/d/1SWuuvdpr0sb4a-L4nu1Fx6tOqAjc_mLi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-purple-500/20 bg-purple-500/10 shadow-xl hover:shadow-2xl hover:bg-purple-500/20 hover:border-purple-500/35 transition-all sm:col-span-2 justify-center text-purple-300 hover:text-white">
            <FileText className="text-purple-400" />
            <span className="text-sm font-bold tracking-wide">Download Resume</span>
          </motion.a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-neutral-500 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} VISWANATH A S. All rights reserved.</p>
        <p>Trivandrum, Kerala</p>
      </div>
    </footer>
  );
}
