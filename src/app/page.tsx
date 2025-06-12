"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { products, formatPrice } from "@/data/products";
import { useMiniCartDrawer, useToast } from "@/components/layout/MiniCartDrawer";
import { CategoryQuickNav } from "@/components/ui/CategoryQuickNav";
import { SiteBenefits } from "@/components/ui/SiteBenefits";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { Heart, ShoppingCart, Eye, Truck, RefreshCw, Shield, CreditCard, Wand2 } from "lucide-react";
import { useState } from "react";
import { AccordionItemPremium } from "@/components/ui/AccordionItemPremium";

// Sélectionner les meilleures ventes et les nouveautés
const bestSellers = products.filter(product => product.isBestSeller).slice(0, 3);
const newArrivals = products.filter(product => product.isNew).slice(0, 3);

// FAQ items for homepage
const faqItems = [
  {
    title: "Quels sont les délais et modalités de livraison ?",
    content: "Nous expédions toutes les commandes sous 24h à 48h ouvrées. La livraison est assurée partout au Maroc, généralement sous 1 à 3 jours ouvrés. Un numéro de suivi vous sera communiqué dès l'expédition. La livraison est offerte dès 500 MAD d'achat.",
    icon: Truck,
  },
  {
    title: "Comment fonctionne le retour ou l'échange d'un bijou ?",
    content: "Vous disposez de 14 jours après réception pour demander un retour ou un échange, sans frais. Il vous suffit de contacter notre service client par WhatsApp ou via le formulaire de contact. Nous vous accompagnerons dans chaque étape.",
    icon: RefreshCw
  },
  {
    title: "Les bijoux Karyla sont-ils garantis ?",
    content: "Oui, tous nos bijoux bénéficient d'une garantie de 6 mois contre les défauts de fabrication. Pour toute question ou demande de SAV, notre équipe est à votre écoute et vous répond sous 24h.",
    icon: Shield
  },
  {
    title: "Quels moyens de paiement acceptez-vous ?",
    content: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), PayPal, ainsi que le paiement à la livraison (COD) partout au Maroc. Toutes les transactions sont 100% sécurisées.",
    icon: CreditCard
  },
  {
    title: "Proposez-vous des bijoux personnalisés ou sur-mesure ?",
    content: "Certains modèles sont personnalisables (gravure, choix de la taille, etc.). Pour une création sur-mesure, contactez-nous directement : nous serons ravis de donner vie à votre projet unique.",
    icon: Wand2
  }
];

export default function Home() {
  const { addItem } = useCart();
  const { open: openMiniCart } = useMiniCartDrawer();
  const { show: showToast } = useToast();
  const [previewImage, setPreviewImage] = useState<string|null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section (vidéo carrousel) */}
      <HeroCarousel />

      {/* Navigation rapide par type de bijou */}
      <CategoryQuickNav />

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Bagues",
                image: "/products/bague/bague_6.jpg",
                href: "/shop?category=bague",
              },
              {
                label: "Colliers",
                image: "/products/collier/collier_2.jpg",
                href: "/shop?category=collier",
              },
              {
                label: "Bracelets",
                image: "/products/bracelet/bracelet_1.jpg",
                href: "/shop?category=bracelet",
              },
            ].map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative h-96 group cursor-pointer"
              >
                <Link href={cat.href} className="block h-full w-full">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{cat.label}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link href="/shop?section=bestsellers">
              <Button variant="outline">Voir tout</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
                    {/* Overlay actions au hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      <div className="flex gap-2">
                        <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-gold-100 transition-colors text-black" title="Ajouter au panier" onClick={e => { e.preventDefault(); e.stopPropagation(); addItem({ ...product, price: product.price.MAD, quantity: 1 }); openMiniCart(); showToast('Produit ajouté au panier !'); }}>
                          <ShoppingCart size={18} />
                        </button>
                        <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-pink-100 transition-colors text-pink-600" title="Ajouter à la wishlist" onClick={e => { e.preventDefault(); e.stopPropagation(); }}>
                          <Heart size={18} />
                        </button>
                        <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-gold-100 transition-colors text-gold-600" title="Voir l'image en grand" onClick={e => { e.preventDefault(); e.stopPropagation(); setPreviewImage(product.image); }}>
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-semibold hover:underline">{product.name}</h3>
                  </div>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {formatPrice(product.price.MAD, 'MAD')}
                  </span>
                  <Button
                    onClick={() => {
                      addItem({ ...product, price: product.price.MAD, quantity: 1 });
                      openMiniCart();
                      showToast("Produit ajouté au panier !");
                    }}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Ajouter au panier
                  </Button>
                </div>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteBenefits />

      {/* New Arrivals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Nouveautés</h2>
            <Link href="/shop?section=new">
              <Button variant="outline">Voir tout</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
                    {/* Overlay actions au hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      <div className="flex gap-2">
                        <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-gold-100 transition-colors text-black" title="Ajouter au panier" onClick={e => { e.preventDefault(); e.stopPropagation(); addItem({ ...product, price: product.price.MAD, quantity: 1 }); openMiniCart(); showToast('Produit ajouté au panier !'); }}>
                          <ShoppingCart size={18} />
                        </button>
                        <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-pink-100 transition-colors text-pink-600" title="Ajouter à la wishlist" onClick={e => { e.preventDefault(); e.stopPropagation(); }}>
                          <Heart size={18} />
                        </button>
                        <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-gold-100 transition-colors text-gold-600" title="Voir l'image en grand" onClick={e => { e.preventDefault(); e.stopPropagation(); setPreviewImage(product.image); }}>
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-semibold hover:underline">{product.name}</h3>
                  </div>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {formatPrice(product.price.MAD, 'MAD')}
                  </span>
                  <Button
                    onClick={() => {
                      addItem({ ...product, price: product.price.MAD, quantity: 1 });
                      openMiniCart();
                      showToast("Produit ajouté au panier !");
                    }}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Ajouter au panier
                  </Button>
                </div>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              Restez informé de nos nouveautés
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              Inscrivez-vous à notre newsletter pour recevoir nos dernières
              collections et offres exclusives.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                S&apos;inscrire
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section premium */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-gold-700 font-serif tracking-tight">Foire aux questions</h2>
          <p className="text-gray-500 text-center mb-10 text-lg max-w-xl mx-auto">Retrouvez ici les réponses à vos questions les plus fréquentes sur nos bijoux, la livraison, le paiement et le service client. Notre équipe Karyla vous accompagne à chaque étape de votre expérience d&apos;achat premium.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <AccordionItemPremium
                  title={item.title}
                  icon={item.icon}
                >
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.content}
                  </p>
                </AccordionItemPremium>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modale d'aperçu grand format */}
      {previewImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60" onClick={() => setPreviewImage(null)}>
          <div className="bg-white rounded-xl shadow-2xl p-4 max-w-lg w-full flex flex-col items-center relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={() => setPreviewImage(null)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <img src={previewImage} alt="Aperçu grand format" className="w-full h-auto max-h-[70vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
