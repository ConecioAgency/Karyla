"use client";
import { useEffect, useState } from "react";
import { AccordionItemPremium } from "@/components/ui/AccordionItemPremium";
import { motion } from "framer-motion";
import { Sparkles, Truck, RefreshCw, Shield, CreditCard, Wand2 } from "lucide-react";

const faqItems = [
  {
    title: "Quels sont les délais et modalités de livraison ?",
    content: "Nous expédions toutes les commandes sous 24h à 48h ouvrées. La livraison est assurée partout au Maroc, généralement sous 1 à 3 jours ouvrés. Un numéro de suivi vous sera communiqué dès l'expédition. La livraison est offerte dès 500 MAD d'achat.",
    icon: Truck,
    defaultOpen: true
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

export default function FAQ() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div
        className="container mx-auto px-4 max-w-3xl mt-16 md:mt-28"
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
          <h1 className="text-5xl font-extrabold mb-4 text-gold-700 font-serif tracking-tight">
            Foire aux questions
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Retrouvez ici les réponses à vos questions les plus fréquentes sur nos bijoux, 
            la livraison, le paiement et le service client. Notre équipe Karyla vous 
            accompagne à chaque étape de votre expérience d&apos;achat premium.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <AccordionItemPremium
                title={item.title}
                defaultOpen={item.defaultOpen}
                icon={item.icon}
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.content}
                </p>
              </AccordionItemPremium>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 