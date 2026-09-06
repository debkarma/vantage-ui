"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Vantage" 
                className="h-5 w-auto brightness-0 invert opacity-90" 
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 text-body-sm text-mist">
            <Link href="/#features" className="hover:text-paper transition-colors">Features</Link>
            <Link href="/docs" className="hover:text-paper transition-colors">Documentation</Link>
            <Link href="/changelog" className="hover:text-paper transition-colors">Changelog</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/debkarma/vantage" target="_blank" rel="noopener noreferrer" className="text-mist hover:text-paper transition-colors font-[510] text-[14px]">
              GitHub
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-mist p-2 -mr-2">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-border bg-void/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-4 text-body-sm text-mist">
                <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-paper transition-colors">Features</Link>
                <Link href="/docs" onClick={() => setMobileMenuOpen(false)} className="hover:text-paper transition-colors">Documentation</Link>
                <Link href="/changelog" onClick={() => setMobileMenuOpen(false)} className="hover:text-paper transition-colors">Changelog</Link>
                <a href="https://github.com/debkarma/vantage" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-paper transition-colors font-[510]">GitHub</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
