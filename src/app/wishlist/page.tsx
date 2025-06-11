"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Trash2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Données de test pour la wishlist
const mockWishlistItems: any[] = [];

export default function WishlistPage() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);

  useEffect(() => {
    setIsClient(true);
    const updateNavbarHeight = () => {
      const nav = document.getElementById('navbar');
      setNavbarHeight(nav ? nav.offsetHeight : 0);
    };
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div
        className="container mx-auto px-4 max-w-6xl mt-16 md:mt-28"
        style={isClient && navbarHeight ? { paddingTop: navbarHeight } : {}}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-gold-700 font-serif tracking-tight mb-2">
            Ma liste de souhaits
          </h1>
          <p className="text-gray-600">
            Retrouvez ici tous vos bijoux préférés
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8"
        >
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-medium text-gray-600 mb-2">Votre liste de souhaits est vide</h2>
              <p className="text-gray-500 mb-6">Découvrez notre collection et ajoutez vos bijoux préférés</p>
              <Link
                href="/shop"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Découvrir la collection
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <Link
                      href={`/shop/${item.category}/${item.subcategory}/${item.slug}`}
                      className="text-lg font-medium text-gray-900 hover:text-gold-700 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gold-600 font-medium mt-1">{item.price} MAD</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {/* Ajouter au panier */}}
                      className="p-2 text-gray-600 hover:text-gold-700 transition-colors duration-300"
                      aria-label="Ajouter au panier"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                      aria-label="Retirer de la liste de souhaits"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 