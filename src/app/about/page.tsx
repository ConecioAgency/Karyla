"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="/about-hero.jpg"
            alt="Notre Histoire"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 text-center text-white z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Notre Histoire</h1>
          <p className="text-xl md:text-2xl">
            L'excellence dans chaque détail
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre Passion</h2>
              <p className="text-gray-600 leading-relaxed">
                Depuis notre création, nous nous engageons à créer des bijoux
                d'exception qui allient tradition et modernité. Chaque pièce est
                minutieusement conçue par nos artisans passionnés, utilisant
                uniquement les matériaux les plus précieux et les pierres les
                plus rares.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <img
                src="/about-craft.jpg"
                alt="Notre Savoir-faire"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Nos Valeurs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "Nous visons l'excellence dans chaque détail, de la conception à la réalisation finale.",
                icon: "✨",
              },
              {
                title: "Durabilité",
                description:
                  "Nous nous engageons à utiliser des matériaux éthiques et durables.",
                icon: "🌱",
              },
              {
                title: "Innovation",
                description:
                  "Nous repoussons les limites de la création de bijoux avec des designs modernes.",
                icon: "💎",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 