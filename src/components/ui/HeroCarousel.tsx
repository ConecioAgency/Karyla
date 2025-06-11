"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    video: "/video/167340-836755001_small.webm",
    title: "Bagues de mariage",
    desc: "Découvrez nos bagues de mariage raffinées, symbole d'amour éternel.",
    button: { label: "Découvrir les bagues", href: "/shop?category=bague&mariage" },
  },
  {
    video: "/video/247488_small.webm",
    title: "Bijoux d'exception",
    desc: "Sublimez chaque moment avec nos ensembles de bijoux uniques.",
    button: { label: "Découvrir les ensembles", href: "/shop?category=ensemble" },
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <video
            src={slides[index].video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
        >
          {slides[index].title}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-white mb-8 drop-shadow"
        >
          {slides[index].desc}
        </motion.p>
        <Link href={slides[index].button.href}>
          <button className="relative overflow-hidden bg-white/90 text-black font-semibold rounded-full px-8 py-3 text-base md:text-lg shadow-lg transition group hover:bg-gold-500 hover:shadow-2xl hover:scale-105">
            <span className="relative z-20 drop-shadow-md text-black">{slides[index].button.label}</span>
            {/* Shine effect */}
            <span className="absolute left-[-75%] top-0 h-full w-1/2 bg-gradient-to-r from-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />
          </button>
        </Link>
      </div>
      {/* Dots navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full border-2 ${i === index ? "bg-gold-500 border-gold-700" : "bg-white/60 border-white/80"} transition`}
            aria-label={`Aller à la slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
      </button>
    </section>
  );
} 