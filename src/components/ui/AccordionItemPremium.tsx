"use client";
import * as React from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface AccordionItemPremiumProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  icon?: LucideIcon;
}

export function AccordionItemPremium({ title, defaultOpen = false, children, icon: Icon }: AccordionItemPremiumProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <motion.div
      initial={false} // Use current CSS values as initial state
      animate={open 
        ? { x: -10, scale: 1.01, boxShadow: "0 8px 30px -4px rgba(0,0,0,0.15)", zIndex: 10 } 
        : { x: 0, scale: 1, boxShadow: "0 4px 20px -4px rgba(0,0,0,0.05)", zIndex: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white border border-gold-200/50 rounded-2xl mb-0 overflow-hidden group backdrop-blur-sm"
    >
      <button
        className="w-full flex items-center justify-between px-8 py-6 text-lg focus:outline-none select-none relative"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-5">
          {Icon && (
            <div className="relative">
              <div className="absolute inset-0 bg-gold-200/20 rounded-full blur-md group-hover:bg-gold-200/30 transition-all duration-500"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gold-50 to-gold-100 flex items-center justify-center group-hover:from-gold-100 group-hover:to-gold-200 transition-all duration-500 shadow-inner">
                <Icon className="w-6 h-6 text-gold-600 group-hover:text-gold-700 transition-colors duration-300" />
              </div>
            </div>
          )}
          <span className="font-serif text-xl font-extrabold tracking-tight text-gold-700 group-hover:text-gold-800 transition-colors duration-300">{title}</span>
        </div>
        <span 
          className={`ml-2 transition-all duration-500 ${
            open 
              ? 'rotate-180 text-gold-600 bg-gradient-to-br from-gold-50 to-gold-100' 
              : 'text-gray-400 group-hover:text-gold-500'
          } p-2.5 rounded-full shadow-sm`}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          open 
            ? 'max-h-[500px] opacity-100 border-t border-gold-100/50' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-8 py-6 bg-gradient-to-b from-white via-gold-50/20 to-gold-50/30">
          <div className="prose prose-gold max-w-none">
            {open && children}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 