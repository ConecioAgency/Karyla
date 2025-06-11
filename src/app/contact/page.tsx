"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="/contact-hero.jpg"
            alt="Contactez-nous"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 text-center text-white z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl">
            Nous sommes à votre écoute pour toute question
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Prénom
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sujet
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {[
                {
                  title: "Adresse",
                  content: "123 Rue du Luxe, 75001 Paris",
                  icon: "📍",
                },
                {
                  title: "Téléphone",
                  content: "+33 1 23 45 67 89",
                  icon: "📞",
                },
                {
                  title: "Email",
                  content: "contact@karyla.com",
                  icon: "✉️",
                },
              ].map((info, index) => (
                <div
                  key={info.title}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 