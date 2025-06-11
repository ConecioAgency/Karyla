import { Gift, Lock, Package, Type } from "lucide-react";

const benefits = [
  {
    icon: <Package size={40} strokeWidth={1.2} />, // Livraison
    title: "Livraison et retour offerts",
    desc: "Pour toute commande expédiée au Maroc (hors zones éloignées)",
  },
  {
    icon: <Lock size={40} strokeWidth={1.2} />, // Paiement sécurisé
    title: "Paiement sécurisé",
    desc: "Par CB, Visa, Mastercard, American Express, Alma et Paypal",
  },
  {
    icon: <Gift size={40} strokeWidth={1.2} />, // Coffret cadeau
    title: "Coffret cadeau premium",
    desc: "Chaque bijou est délicatement livré dans un écrin signature",
  },
  {
    icon: <Type size={40} strokeWidth={1.2} />, // Bijou personnalisé
    title: "Bijou personnalisé",
    desc: "Ajouter une gravure sur les créations personnalisables",
  },
];

export function SiteBenefits() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-4 text-gold-700">{b.icon}</div>
              <div className="font-semibold text-lg mb-2">{b.title}</div>
              <div className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 