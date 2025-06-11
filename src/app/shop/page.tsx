"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { products, formatPrice } from "@/data/products";
import Link from "next/link";
import { useMiniCartDrawer, useToast } from "@/components/layout/MiniCartDrawer";
import { ShoppingCart, Heart, Eye, Share2 } from "lucide-react";

const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "bague", name: "Bagues" },
  { id: "collier", name: "Colliers" },
  { id: "bracelet", name: "Bracelets" },
  { id: "boucle", name: "Boucles d'oreilles" },
  { id: "ensemble", name: "Ensembles" },
];

export default function Shop() {
  const { addItem } = useCart();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { open: openMiniCart } = useMiniCartDrawer();
  const { show: showToast } = useToast();

  useEffect(() => {
    const category = searchParams.get("category");
    const section = searchParams.get("section");

    if (category) setSelectedCategory(category);
    if (section) setSelectedSection(section);
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedSection !== "all") {
      switch (selectedSection) {
        case "new":
          filtered = filtered.filter((product) => product.isNew);
          break;
        case "bestsellers":
          filtered = filtered.filter((product) => product.isBestSeller);
          break;
        case "sale":
          filtered = filtered.filter((product) => product.isOnSale);
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSection]);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Notre Collection
        </motion.h1>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div className="flex gap-4 justify-center mt-4">
            {[
              { id: "all", name: "Tout" },
              { id: "new", name: "Nouveautés" },
              { id: "bestsellers", name: "Best Sellers" },
              { id: "sale", name: "Promotions" },
            ].map((section) => (
              <Button
                key={section.id}
                variant={selectedSection === section.id ? "default" : "outline"}
                onClick={() => setSelectedSection(section.id)}
              >
                {section.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/shop/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Actions flottantes au hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 z-20">
                    <button
                      onClick={e => { e.preventDefault(); addItem({ ...product, price: product.price.MAD, quantity: 1 }); openMiniCart(); showToast('Produit ajouté au panier !'); }}
                      className="bg-white/90 hover:bg-gold-500 text-black hover:text-white rounded-full p-2 shadow-md transition flex items-center justify-center"
                      title="Ajouter au panier"
                    >
                      <ShoppingCart size={20} />
                    </button>
                    <button
                      onClick={e => { e.preventDefault(); showToast('Fonctionnalité wishlist à venir !'); }}
                      className="bg-white/90 hover:bg-pink-500 text-black hover:text-white rounded-full p-2 shadow-md transition flex items-center justify-center"
                      title="Ajouter à la wishlist"
                    >
                      <Heart size={20} />
                    </button>
                    <Link href={`/shop/${product.id}`} className="bg-white/90 hover:bg-gray-800 text-black hover:text-white rounded-full p-2 shadow-md transition flex items-center justify-center" title="Voir la fiche produit" onClick={e => e.stopPropagation()}>
                      <Eye size={20} />
                    </Link>
                    <button
                      onClick={e => { e.preventDefault(); navigator.clipboard.writeText(window.location.origin + `/shop/${product.id}`); showToast('Lien copié !'); }}
                      className="bg-white/90 hover:bg-blue-500 text-black hover:text-white rounded-full p-2 shadow-md transition flex items-center justify-center"
                      title="Partager"
                    >
                      <Share2 size={20} />
                    </button>
                  </div>
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                      Nouveau
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      Promo
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold hover:underline">{product.name}</h3>
                </div>
              </Link>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">
                  {formatPrice(product.price.MAD, 'MAD')}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Aucun produit ne correspond à vos critères
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 