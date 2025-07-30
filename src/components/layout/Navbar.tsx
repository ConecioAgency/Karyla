"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Menu, ChevronDown, User, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import MiniCartDrawer from "@/components/layout/MiniCartDrawer";
import { SearchBar } from "@/components/ui/search";

export const MENU_STRUCTURE = [
  {
    label: "Bagues",
    category: "bague",
    subs: [
      { label: "Bague argentée", sub: "argentee" },
      { label: "Bague acier", sub: "acier" },
      { label: "Bague mariage", sub: "mariage" },
      { label: "Bague fille", sub: "fille" },
      { label: "Bague homme", sub: "homme" },
    ],
  },
  {
    label: "Colliers",
    category: "collier",
    subs: [
      { label: "Collier argenté", sub: "argente" },
      { label: "Collier acier", sub: "acier" },
      { label: "Collier pendentif", sub: "pendentif" },
      { label: "Collier ras du cou", sub: "rasducou" },
    ],
  },
  {
    label: "Ensembles",
    category: "ensemble",
    subs: [],
  },
  {
    label: "Pendentifs",
    category: "pendentif",
    subs: [],
  },
  {
    label: "Bracelets",
    category: "bracelet",
    subs: [
      { label: "Bracelet argenté", sub: "argente" },
      { label: "Bracelet acier", sub: "acier" },
      { label: "Jonc", sub: "jonc" },
      { label: "Manchette", sub: "manchette" },
    ],
  },
  {
    label: "Montres",
    category: "montre",
    subs: [],
  },
  {
    label: "Sacs",
    category: "sac",
    subs: [],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const specialSections = [
    { name: "Nouveautés", href: "/shop?section=new" },
    { name: "Best Sellers", href: "/shop?section=best-sellers" },
    { name: "Promotions", href: "/shop?section=sale" },
  ];

  // Menu compact qui apparaît au scroll
  const CompactMenu = () => (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-serif text-black tracking-wider">
            Karyla
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-black transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Menu complet en haut de page
  const FullMenu = () => (
    <motion.header
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-40"
    >
      {/* Barre supérieure avec logo et panier */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-3xl font-serif text-black tracking-wider">
              Karyla
            </Link>

            <div className="hidden md:block w-[400px] mx-8">
              <SearchBar />
            </div>

            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider">
                À propos
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider">
                Contact
              </Link>
              <Link href="/guide-tailles" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider">
                Guide des tailles
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider">
                FAQ
              </Link>
              <Link href="/wishlist" className="relative group" aria-label="Voir mes favoris">
                <Heart className="text-gray-600 group-hover:text-black transition-colors duration-300" size={20} />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  0
                </motion.span>
              </Link>
              <button
                className="relative group"
                onClick={() => setIsCartOpen(true)}
                aria-label="Ouvrir le panier"
              >
                <ShoppingCart className="text-gray-600 group-hover:text-black transition-colors duration-300" size={20} />
                {items.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {items.length}
                  </motion.span>
                )}
              </button>
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300">
                    <User size={20} />
                    <span className="text-sm hidden lg:block">{user?.name}</span>
                  </button>
                  <div className="absolute top-full right-0 w-48 bg-white/95 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg z-30">
                    <div className="p-4">
                      <div className="mb-3 pb-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-black">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <button
                        onClick={logout}
                        className="w-full text-left text-sm text-gray-600 hover:text-black transition-colors duration-300"
                      >
                        Se déconnecter
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/auth" className="group" aria-label="Mon compte">
                  <User className="text-gray-600 group-hover:text-black transition-colors duration-300" size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu principal */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <nav className="hidden md:flex items-center space-x-12">
              {MENU_STRUCTURE.map((cat) => (
                <div key={cat.category} className="group relative">
                  {cat.subs.length > 0 ? (
                    <button className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider flex items-center space-x-1">
                      <span>{cat.label}</span>
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                  ) : (
                    <Link
                      href={`/shop?category=${cat.category}`}
                      className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider flex items-center space-x-1"
                    >
                      <span>{cat.label}</span>
                    </Link>
                  )}
                  {cat.subs.length > 0 && (
                    <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg z-30">
                      <div className="p-4">
                        <ul className="space-y-3">
                          {cat.subs.map((sub) => (
                            <li key={sub.sub}>
                              <Link
                                href={`/shop?category=${cat.category}&sub=${sub.sub}`}
                                className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Shop */}
              <div className="group relative">
                <button className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider flex items-center space-x-1">
                  <span>Shop</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <div className="p-4">
                    <ul className="space-y-3">
                      {specialSections.map((section) => (
                        <li key={section.name}>
                          <Link
                            href={section.href}
                            className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider"
                          >
                            {section.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );

  return (
    <>
      {isScrolled ? <CompactMenu /> : <FullMenu />}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Barre de recherche mobile */}
              <div className="mb-6">
                <SearchBar />
              </div>
              
              {/* Catégories Mobile */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {MENU_STRUCTURE.map((cat) => (
                  <div key={cat.category} className="space-y-3">
                    <h3 className="text-black font-serif text-sm tracking-wider border-b border-gray-100 pb-2">
                      {cat.label}
                    </h3>
                    <ul className="space-y-2">
                      {cat.subs.map((sub) => (
                        <li key={sub.sub}>
                          <Link
                            href={`/shop?category=${cat.category}&sub=${sub.sub}`}
                            className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider block py-1"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Shop Mobile */}
              <div className="mb-8 border-t border-gray-100 pt-6">
                <h3 className="text-black font-serif text-sm tracking-wider mb-4">Shop</h3>
                <div className="grid grid-cols-2 gap-4">
                  {specialSections.map((section) => (
                    <Link
                      key={section.name}
                      href={section.href}
                      className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider block py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Liens rapides Mobile */}
              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider text-center py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    À propos
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider text-center py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/guide-tailles"
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider text-center py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    Guide des tailles
                  </Link>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider text-center py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/cart"
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider text-center py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 relative"
                  >
                    Panier
                    {items.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {items.length}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MiniCartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export { Navbar }; 