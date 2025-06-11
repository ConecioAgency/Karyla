"use client";

import Link from "next/link";
import { getAvailableCategories } from "@/data/products";

const categoryMeta: Record<string, { label: string; image: string }> = {
  bague: { label: "Bagues", image: "/icones/bague.webp" },
  collier: { label: "Colliers", image: "/icones/collier.webp" },
  bracelet: { label: "Bracelets", image: "/icones/bracelet.webp" },
  boucle: { label: "Boucles d'oreilles", image: "/icones/boucle.webp" },
  ensemble: { label: "Ensembles", image: "/icones/1B.webp" },
  montre: { label: "Montres", image: "/icones/montre.webp" },
};

export function CategoryQuickNav() {
  const categories = getAvailableCategories();

  return (
    <div className="w-full flex justify-center py-8 bg-transparent">
      <div className="flex gap-10 md:gap-16 lg:gap-24 xl:gap-32">
        {categories.map((cat) =>
          categoryMeta[cat] ? (
            <Link
              key={cat}
              href={`/shop?category=${cat}`}
              className="flex flex-col items-center group focus:outline-none"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-50 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-200 border border-gray-100 overflow-hidden">
                <img
                  src={categoryMeta[cat].image}
                  alt={categoryMeta[cat].label}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-200 group-hover:scale-110"
                  draggable={false}
                />
              </div>
              <span className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide group-hover:text-black transition-colors duration-200 text-center">
                {categoryMeta[cat].label}
              </span>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
} 