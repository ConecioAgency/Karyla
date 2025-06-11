export interface Product {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: {
    EUR: number;
    USD: number;
    MAD: number;
  };
  category: string;
  material: 'silver' | 'cuivre';
  image: string;
  images?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  stockStatus?: 'en stock' | 'en cours de réapprovisionnement' | 'épuisé';
}

// Taux de conversion approximatifs (à ajuster selon les taux actuels)
const MAD_TO_EUR = 0.091; // 1 MAD = 0.091 EUR
const MAD_TO_USD = 0.098; // 1 MAD = 0.098 USD

export const products: Product[] = [
  // Bagues
  {
    id: 'bague-1',
    reference: 'KARYLA-BAG-001',
    name: 'Bague Élégance',
    description: 'Bague en argent rhodié avec un design moderne et minimaliste. Parfaite pour un style quotidien ou pour des occasions spéciales.',
    price: {
      MAD: 350,
      EUR: Math.round(350 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(350 * MAD_TO_USD * 100) / 100
    },
    category: 'bague',
    material: 'silver',
    image: '/products/bague/bagueç1.jpg',
    images: ['/products/bague/bagueç1.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'bague-2',
    reference: 'KARYLA-BAG-002',
    name: 'Bague Classique',
    description: 'Bague en argent rhodié avec un design intemporel. Un bijou essentiel pour toute collection.',
    price: {
      MAD: 450,
      EUR: Math.round(450 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(450 * MAD_TO_USD * 100) / 100
    },
    category: 'bague',
    material: 'silver',
    image: '/products/bague/bague_2.jpg',
    images: ['/products/bague/bague_2.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },

  // Colliers
  {
    id: 'collier-1',
    reference: 'KARYLA-COL-001',
    name: 'Collier Minimaliste',
    description: 'Collier en argent rhodié avec un pendentif délicat. Un accessoire parfait pour sublimer votre tenue.',
    price: {
      MAD: 550,
      EUR: Math.round(550 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(550 * MAD_TO_USD * 100) / 100
    },
    category: 'collier',
    material: 'silver',
    image: '/products/collier/collier_1.jpg',
    images: ['/products/collier/collier_1.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'collier-2',
    reference: 'KARYLA-COL-002',
    name: 'Collier Élégance',
    description: 'Collier en argent rhodié avec un design sophistiqué. Un bijou qui attire tous les regards.',
    price: {
      MAD: 650,
      EUR: Math.round(650 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(650 * MAD_TO_USD * 100) / 100
    },
    category: 'collier',
    material: 'silver',
    image: '/products/collier/collier_2.jpg',
    images: ['/products/collier/collier_2.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },

  // Bracelets
  {
    id: 'bracelet-1',
    reference: 'KARYLA-BRA-001',
    name: 'Bracelet Delicat',
    description: 'Bracelet en argent rhodié avec des détails fins. Un accessoire raffiné pour votre poignet.',
    price: {
      MAD: 400,
      EUR: Math.round(400 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(400 * MAD_TO_USD * 100) / 100
    },
    category: 'bracelet',
    material: 'silver',
    image: '/products/bracelet/bracelet_1.jpg',
    images: ['/products/bracelet/bracelet_1.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'bracelet-2',
    reference: 'KARYLA-BRA-002',
    name: 'Bracelet Classique',
    description: 'Bracelet en argent rhodié avec un design intemporel. Un bijou qui complète parfaitement votre style.',
    price: {
      MAD: 500,
      EUR: Math.round(500 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(500 * MAD_TO_USD * 100) / 100
    },
    category: 'bracelet',
    material: 'silver',
    image: '/products/bracelet/bracelet_2.jpg',
    images: ['/products/bracelet/bracelet_2.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },

  // Boucles d'oreilles
  {
    id: 'boucle-1',
    reference: 'KARYLA-BOU-001',
    name: 'Boucles d\'oreilles Delicates',
    description: 'Boucles d\'oreilles en argent rhodié avec un design minimaliste. Un accessoire raffiné pour vos oreilles.',
    price: {
      MAD: 300,
      EUR: Math.round(300 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(300 * MAD_TO_USD * 100) / 100
    },
    category: 'boucle',
    material: 'silver',
    image: '/products/boucle/boucle_1.jpg',
    images: ['/products/boucle/boucle_1.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'boucle-2',
    reference: 'KARYLA-BOU-002',
    name: 'Boucles d\'oreilles Classiques',
    description: 'Boucles d\'oreilles en argent rhodié avec un design intemporel. Un bijou qui complète parfaitement votre style.',
    price: {
      MAD: 400,
      EUR: Math.round(400 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(400 * MAD_TO_USD * 100) / 100
    },
    category: 'boucle',
    material: 'silver',
    image: '/products/boucle/boucle_2.jpg',
    images: ['/products/boucle/boucle_2.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },
  {
    id: 'boucle-3',
    reference: 'KARYLA-BOU-003',
    name: 'Boucles d\'oreilles Élégance',
    description: 'Boucles d\'oreilles en argent rhodié avec un design sophistiqué. Un bijou qui attire tous les regards.',
    price: {
      MAD: 350,
      EUR: Math.round(350 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(350 * MAD_TO_USD * 100) / 100
    },
    category: 'boucle',
    material: 'silver',
    image: '/products/boucle/boucle_3.jpg',
    images: ['/products/boucle/boucle_3.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'boucle-4',
    reference: 'KARYLA-BOU-004',
    name: 'Boucles d\'oreilles Modernes',
    description: 'Boucles d\'oreilles en argent rhodié avec un design contemporain. Un bijou qui reflète votre style unique.',
    price: {
      MAD: 450,
      EUR: Math.round(450 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(450 * MAD_TO_USD * 100) / 100
    },
    category: 'boucle',
    material: 'silver',
    image: '/products/boucle/boucle_4.jpg',
    images: ['/products/boucle/boucle_4.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },

  // Ensembles
  {
    id: 'ensemble-1',
    reference: 'KARYLA-ENS-001',
    name: 'Ensemble Élégance',
    description: 'Ensemble de bijoux en argent rhodié comprenant un collier, des boucles d\'oreilles et un bracelet. Un set complet pour sublimer votre tenue.',
    price: {
      MAD: 900,
      EUR: Math.round(900 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(900 * MAD_TO_USD * 100) / 100
    },
    category: 'ensemble',
    material: 'silver',
    image: '/products/ensemble/ensemble_1.jpg',
    images: ['/products/ensemble/ensemble_1.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'ensemble-2',
    reference: 'KARYLA-ENS-002',
    name: 'Ensemble Classique',
    description: 'Ensemble de bijoux en argent rhodié comprenant un collier, des boucles d\'oreilles et un bracelet. Un set complet pour sublimer votre tenue.',
    price: {
      MAD: 1200,
      EUR: Math.round(1200 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(1200 * MAD_TO_USD * 100) / 100
    },
    category: 'ensemble',
    material: 'silver',
    image: '/products/ensemble/ensemble_2.jpg',
    images: ['/products/ensemble/ensemble_2.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },
  {
    id: 'ensemble-3',
    reference: 'KARYLA-ENS-003',
    name: 'Ensemble Modern',
    description: 'Ensemble de bijoux en argent rhodié avec un design contemporain. Un set qui reflète votre style unique.',
    price: {
      MAD: 950,
      EUR: Math.round(950 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(950 * MAD_TO_USD * 100) / 100
    },
    category: 'ensemble',
    material: 'silver',
    image: '/products/ensemble/ensemble_3.jpg',
    images: ['/products/ensemble/ensemble_3.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  {
    id: 'ensemble-4',
    reference: 'KARYLA-ENS-004',
    name: 'Ensemble Delicat',
    description: 'Ensemble de bijoux en argent rhodié avec des détails fins. Un set raffiné pour les occasions spéciales.',
    price: {
      MAD: 1100,
      EUR: Math.round(1100 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(1100 * MAD_TO_USD * 100) / 100
    },
    category: 'ensemble',
    material: 'silver',
    image: '/products/ensemble/ensemble_4.jpg',
    images: ['/products/ensemble/ensemble_4.jpg'],
    isBestSeller: true,
    stockStatus: 'en stock'
  },
  {
    id: 'ensemble-5',
    reference: 'KARYLA-ENS-005',
    name: 'Ensemble Premium',
    description: 'Ensemble de bijoux en argent rhodié avec un design sophistiqué. Un set qui attire tous les regards.',
    price: {
      MAD: 1000,
      EUR: Math.round(1000 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(1000 * MAD_TO_USD * 100) / 100
    },
    category: 'ensemble',
    material: 'silver',
    image: '/products/ensemble/ensemble_5.jpg',
    images: ['/products/ensemble/ensemble_5.jpg'],
    isNew: true,
    stockStatus: 'en stock'
  },
  // Sacs
  {
    id: 'sac-1',
    reference: 'KARYLA-SAC-001',
    name: 'Sac Raffiné en Cuivre',
    description: `Sac en cuivre raffiné, fabrication artisanale, disponible uniquement sur commande. Un accessoire d'exception pour sublimer vos tenues.`,
    price: {
      MAD: 2500,
      EUR: Math.round(2500 * MAD_TO_EUR * 100) / 100,
      USD: Math.round(2500 * MAD_TO_USD * 100) / 100
    },
    category: 'sac',
    material: 'cuivre',
    image: '/products/sac/sac1.jpg',
    images: ['/products/sac/sac1.jpg'],
    isNew: true,
    stockStatus: 'en cours de réapprovisionnement', // sur commande
  },
];

// Fonctions utilitaires pour filtrer les produits
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsByMaterial = (material: 'silver' | 'cuivre') => {
  return products.filter(product => product.material === material);
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getBestSellers = () => {
  return products.filter(product => product.isBestSeller);
};

export const getOnSale = () => {
  return products.filter(product => product.isOnSale);
};

// Fonction utilitaire pour formater les prix
export const formatPrice = (price: number, currency: 'EUR' | 'USD' | 'MAD') => {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formatter.format(price);
};

// Fonction utilitaire pour obtenir la liste unique des catégories présentes dans les produits
export const getAvailableCategories = () => {
  const cats = products.map(p => p.category);
  return Array.from(new Set(cats));
}; 