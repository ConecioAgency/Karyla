"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { MENU_STRUCTURE } from "@/components/layout/Navbar";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-gold-500 font-bold">Karyla</h3>
            <p className="text-gray-300">
              Votre destination pour des bijoux d&apos;exception. Chaque pièce raconte une histoire unique.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gold-500 hover:text-gold-400"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gold-500 hover:text-gold-400"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gold-500 hover:text-gold-400"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-serif text-gold-500 font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/guide-tailles" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Guide des tailles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="text-lg font-serif text-gold-500 font-bold mb-4">Catégories</h4>
            <ul className="space-y-2">
              {MENU_STRUCTURE.map((cat) => (
                <li key={cat.category}>
                  <Link
                    href={`/shop?category=${cat.category}`}
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif text-gold-500 font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="text-gold-500" size={20} />
                <span className="text-gray-300">123 Rue du Luxe, Paris</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gold-500" size={20} />
                <span className="text-gray-300">+212 661713235</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gold-500" size={20} />
                <span className="text-gray-300">contact@karyla.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {year ?? "..."} Karyla. Tous droits réservés.
          </p>
          <p className="text-gray-400 mt-2">
            Créé par <a href="https://www.conecio.com" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">Conecio Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 