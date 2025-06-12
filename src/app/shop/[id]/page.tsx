"use client";

import { useParams } from "next/navigation";
import { products, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useMiniCartDrawer } from "@/components/layout/MiniCartDrawer";
import { useToast } from "@/components/layout/MiniCartDrawer";
import { AccordionItem } from "@/components/ui/Accordion";

const SIZES = ["Taille unique", "S", "M", "L"];
const COLORS = ["Argent rhodié", "Doré"];
const BAGUE_ENSEMBLE_SIZES = [
  "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"
];

const COLOR_MAP: Record<string, string> = {
  "Argent rhodié": "bg-gray-300 border-gray-400",
  "Doré": "bg-yellow-400 border-yellow-600",
};

const COLOR_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  "Argent rhodié": { bg: "bg-gray-200", text: "text-gray-800", border: "border-gray-400" },
  "Doré": { bg: "bg-yellow-300", text: "text-yellow-800", border: "border-yellow-600" },
};

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const { open: openMiniCart } = useMiniCartDrawer();
  const { show: showToast } = useToast();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [quantity, setQuantity] = useState(1);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [previewImage, setPreviewImage] = useState<string|null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const isWishlisted = product ? wishlist.includes(product.id) : false;

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

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images?.[0] || product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Produit introuvable.</p>
      </div>
    );
  }

  // Suggestions (hors produit courant)
  const suggestions = products.filter((p) => p.id !== id).slice(0, 6);

  const showSizeSelector = product.category === "bague" || product.category === "ensemble";

  // Badge de stock
  const getStockBadge = (status?: string) => {
    switch (status) {
      case 'en stock':
        return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>En stock</span>;
      case 'en cours de réapprovisionnement':
        return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-yellow-500 inline-block"></span>En cours de réapprovisionnement</span>;
      case 'épuisé':
        return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-red-500 inline-block"></span>Épuisé</span>;
      default:
        return null;
    }
  };

  // Préparer les infos techniques pour le tableau
  const infosTechniques = [
    { label: "Référence", value: product.reference },
    { label: "Catégorie", value: product.category },
    { label: "Matière", value: product.material === 'silver' ? 'Argent rhodié' : 'Cuivre doré' },
    // Ajouter ici d'autres propriétés si besoin (ex: poids, dimensions, couleur, etc.)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-6">
      <div
        className="container mx-auto px-2 flex flex-col md:flex-row gap-6 items-start max-w-5xl mt-16 md:mt-32"
        style={isClient && navbarHeight ? { paddingTop: navbarHeight } : {}}
      >
        {/* Galerie d'images */}
        <div className="w-full md:w-1/2 flex flex-col items-center sticky top-16 self-start">
          <div className="relative w-full max-w-xs">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-cover rounded-xl shadow-lg border-2 border-white"
              />
            )}
            <button
              aria-label="Ajouter à la wishlist"
              className={`absolute top-3 right-3 z-10 rounded-full p-1.5 bg-white/80 shadow-sm border border-gray-200 hover:bg-pink-100 transition-colors ${isWishlisted ? 'text-pink-600' : 'text-gray-400'}`}
              onClick={() => setWishlist((prev) => isWishlisted ? prev.filter(id => id !== product.id) : [...prev, product.id])}
            >
              <Heart fill={isWishlisted ? '#ec4899' : 'none'} strokeWidth={2.2} size={22} />
            </button>
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex gap-1 mt-2">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-10 h-10 rounded border-2 ${selectedImage === img ? 'border-gold-500' : 'border-gray-200'} overflow-hidden focus:outline-none`}
                >
                  <img src={img} alt={product.name + ' miniature ' + (idx+1)} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Infos produit + description + tableau + livraison/retour */}
        <div className="w-full md:w-1/2 bg-white/90 rounded-xl shadow-lg p-4 border border-gray-100 flex flex-col gap-4">
          <h1 className="text-xl md:text-2xl font-extrabold mb-1 text-gray-900 tracking-tight">
            {product.name}
          </h1>
          <div className="text-lg md:text-xl font-bold mb-1 text-gold-600">
            {formatPrice(product.price.MAD, 'MAD')}
          </div>
          <div className="mb-1">{getStockBadge(product.stockStatus)}</div>
          {/* Sélecteurs */}
          <div className="mb-2">
            <span className="block text-xs font-semibold text-gray-700 mb-1">Taille</span>
            {showSizeSelector ? (
              <div className="flex gap-1 flex-wrap">
                {BAGUE_ENSEMBLE_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-200 ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-3 py-1 rounded-full border bg-gray-100 text-gray-700 inline-block text-xs">Taille unique</div>
            )}
          </div>
          <div className="mb-2">
            <span className="block text-xs font-semibold text-gray-700 mb-1">Couleur</span>
            <div className="flex gap-1">
              {COLORS.map((color) => {
                const isSelected = selectedColor === color;
                const style = COLOR_STYLE[color] || { bg: "bg-gray-200", text: "text-gray-800", border: "border-gray-300" };
                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full border text-xs font-semibold flex items-center gap-1 transition-all duration-200 ${isSelected ? `${style.bg} ${style.text} ${style.border}` : 'bg-white text-gray-700 border-gray-300 hover:border-gold-500'}`}
                    style={{ borderWidth: 2 }}
                  >
                    <span className={`inline-block w-4 h-4 rounded-full border-2 mr-1 ${COLOR_MAP[color] || 'bg-gray-200 border-gray-300'}`}></span>
                    {color}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            {/* Sélecteur de quantité */}
            <div className="flex items-center border rounded-md px-1.5 py-0.5 bg-gray-50">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-2 text-base font-bold text-gray-500 hover:text-black"
                disabled={quantity <= 1}
                type="button"
              >-</button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-8 text-center bg-transparent outline-none border-0 text-xs font-semibold"
              />
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-2 text-base font-bold text-gray-500 hover:text-black"
                type="button"
              >+</button>
            </div>
            <Button
              onClick={() => {
                addItem({ ...product, price: product.price.MAD, quantity, size: selectedSize, color: selectedColor });
                openMiniCart();
                showToast("Produit ajouté au panier !");
              }}
              className="bg-black text-white hover:bg-gray-800 py-2 px-4 text-xs font-semibold rounded-lg shadow-sm"
              disabled={product.stockStatus === 'épuisé'}
            >
              Ajouter au panier
            </Button>
            {/* Wishlist à droite */}
            <button
              aria-label="Ajouter à la wishlist"
              className={`rounded-full p-2 bg-white/80 shadow border border-gray-200 hover:bg-pink-100 transition-colors ${isWishlisted ? 'text-pink-600' : 'text-gray-400'}`}
              onClick={() => setWishlist((prev) => isWishlisted ? prev.filter(id => id !== product.id) : [...prev, product.id])}
              type="button"
            >
              <Heart fill={isWishlisted ? '#ec4899' : 'none'} strokeWidth={2.2} size={20} />
            </button>
          </div>
          {/* Blocs premium */}
          <div className="flex flex-col gap-4">
            <AccordionItem title="Description" defaultOpen>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {product.description}
              </p>
            </AccordionItem>
            <AccordionItem title="Informations">
              <table className="w-full text-sm border rounded-lg overflow-hidden bg-white">
                <tbody>
                  {infosTechniques.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-2 px-3 font-semibold text-gray-700 w-1/3 bg-gray-50">{row.label}</td>
                      <td className="py-2 px-3 text-gray-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionItem>
            <AccordionItem title="Livraison & Retour">
              <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                <li>🚚 Livraison offerte dès 500 MAD partout au Maroc</li>
                <li>⏱️ Expédition sous 24h-48h après validation de la commande</li>
                <li>🔄 Retours gratuits sous 14 jours, sans frais</li>
                <li>📦 Emballage cadeau premium et soigné pour chaque bijou</li>
                <li>💬 Service client réactif par WhatsApp et téléphone</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
      {/* Suggestions carrousel */}
      <div className="container mx-auto px-2 mt-10 max-w-5xl">
        <h2 className="text-lg font-bold mb-4 text-gray-900">VOUS AIMEREZ PEUT-ÊTRE AUSSI</h2>
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gold-300">
          {suggestions.map((sugg) => (
            <Link key={sugg.id} href={`/shop/${sugg.id}`} className="relative group min-w-[180px] max-w-[180px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex-shrink-0 overflow-hidden cursor-pointer">
              <img
                src={sugg.image}
                alt={sugg.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-base mb-1 truncate">{sugg.name}</h3>
                <div className="text-gold-600 font-bold mb-2 text-sm">{formatPrice(sugg.price.MAD, 'MAD')}</div>
                <div className="text-xs text-gray-500 truncate">{sugg.description.slice(0, 40)}...</div>
              </div>
              {/* Overlay actions au hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                <div className="flex gap-2">
                  <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-gold-100 transition-colors text-black" title="Ajouter au panier" onClick={e => e.stopPropagation()}>
                    <ShoppingCart size={18} />
                  </button>
                  <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-pink-100 transition-colors text-pink-600" title="Ajouter à la wishlist" onClick={e => e.stopPropagation()}>
                    <Heart size={18} />
                  </button>
                  <button className="rounded-full p-2 bg-white shadow border border-gray-200 hover:bg-gold-100 transition-colors text-gold-600" title="Voir l'image en grand" onClick={e => { e.stopPropagation(); setPreviewImage(sugg.image); }}>
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
    </div>
  );
} 