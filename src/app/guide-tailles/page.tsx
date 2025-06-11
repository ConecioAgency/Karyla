"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GuideTailles() {
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
    <div className="min-h-screen bg-white py-16">
      <div
        className="container mx-auto px-4 max-w-3xl mt-16 md:mt-28"
        style={isClient && navbarHeight ? { paddingTop: navbarHeight } : {}}
      >
        <h1 className="text-4xl font-extrabold text-gold-700 mb-6 text-center font-serif">Guide des tailles</h1>
        <p className="text-gray-600 text-center mb-8 text-lg">Trouvez la taille idéale pour vos bagues, colliers et bracelets Karyla. Suivez nos conseils pour un ajustement parfait et consultez notre guide détaillé en PDF.</p>
        <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gold-700 mb-4">Bagues</h2>
          <p className="mb-3 text-gray-700">Pour mesurer votre taille de bague, utilisez un baguier ou mesurez le diamètre intérieur d'une bague qui vous va bien. Reportez-vous au tableau ci-dessous :</p>
          <table className="w-full text-sm border rounded-lg overflow-hidden bg-white mb-4">
            <thead>
              <tr className="bg-gold-50">
                <th className="py-2 px-3 font-semibold text-gold-700">Taille FR</th>
                <th className="py-2 px-3 font-semibold text-gold-700">Diamètre (mm)</th>
                <th className="py-2 px-3 font-semibold text-gold-700">Tour de doigt (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-3">50</td><td className="py-2 px-3">16.0</td><td className="py-2 px-3">50</td></tr>
              <tr><td className="py-2 px-3">52</td><td className="py-2 px-3">16.5</td><td className="py-2 px-3">52</td></tr>
              <tr><td className="py-2 px-3">54</td><td className="py-2 px-3">17.2</td><td className="py-2 px-3">54</td></tr>
              <tr><td className="py-2 px-3">56</td><td className="py-2 px-3">17.8</td><td className="py-2 px-3">56</td></tr>
              <tr><td className="py-2 px-3">58</td><td className="py-2 px-3">18.5</td><td className="py-2 px-3">58</td></tr>
              <tr><td className="py-2 px-3">60</td><td className="py-2 px-3">19.1</td><td className="py-2 px-3">60</td></tr>
            </tbody>
          </table>
          <p className="text-gray-500 text-sm">Astuce : Si vous hésitez entre deux tailles, choisissez la plus grande.</p>
        </div>
        <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gold-700 mb-4">Colliers</h2>
          <p className="mb-3 text-gray-700">La longueur de collier idéale dépend de votre style et de votre morphologie. Voici les longueurs standards :</p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Choker : 35-40 cm</li>
            <li>Princesse : 45-50 cm</li>
            <li>Matinée : 55-60 cm</li>
            <li>Opéra : 70-85 cm</li>
            <li>Sautoir : 90 cm et plus</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gold-700 mb-4">Bracelets</h2>
          <p className="mb-3 text-gray-700">Pour choisir la taille de votre bracelet, mesurez votre tour de poignet et ajoutez 1 à 2 cm selon le confort souhaité.</p>
          <table className="w-full text-sm border rounded-lg overflow-hidden bg-white mb-4">
            <thead>
              <tr className="bg-gold-50">
                <th className="py-2 px-3 font-semibold text-gold-700">Taille</th>
                <th className="py-2 px-3 font-semibold text-gold-700">Tour de poignet (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-3">S</td><td className="py-2 px-3">15-16</td></tr>
              <tr><td className="py-2 px-3">M</td><td className="py-2 px-3">17-18</td></tr>
              <tr><td className="py-2 px-3">L</td><td className="py-2 px-3">19-20</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <button
            className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-full shadow transition-colors duration-300"
          >
            Télécharger le guide PDF complet
          </button>
        </div>
      </div>
    </div>
  );
} 