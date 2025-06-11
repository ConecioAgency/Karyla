"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Rechercher un bijou..."
          className="w-full bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500/50 transition-all duration-300 placeholder:text-gray-400"
        />
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 p-4 z-50"
          >
            <p className="text-sm text-gray-500">
              Appuyez sur Entrée pour rechercher
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
} 