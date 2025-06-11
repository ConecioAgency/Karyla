"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { X, CheckCircle } from "lucide-react";
import { formatPrice } from "@/data/products";
import { createContext, useContext, useState, ReactNode } from "react";

interface MiniCartDrawerContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const MiniCartDrawerContext = createContext<MiniCartDrawerContextType | undefined>(undefined);

export function MiniCartDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <MiniCartDrawerContext.Provider value={{ isOpen, open, close }}>
      {children}
    </MiniCartDrawerContext.Provider>
  );
}

export function useMiniCartDrawer() {
  const ctx = useContext(MiniCartDrawerContext);
  if (!ctx) throw new Error("useMiniCartDrawer must be used within a MiniCartDrawerProvider");
  return ctx;
}

interface ToastContextType {
  show: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);
  const show = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };
  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999]">
        {toast && (
          <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg text-sm animate-fade-in-out font-medium border border-green-400/70 min-w-[180px] max-w-xs mx-auto">
            <CheckCircle size={18} className="text-white flex-shrink-0" />
            <span className="truncate">{toast}</span>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

export default function MiniCartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="fixed top-0 right-0 h-full w-full max-w-md z-[100] bg-white shadow-2xl border-l border-gray-200 flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold">Votre panier</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center text-gray-400 mt-16">Votre panier est vide.</div>
            ) : (
              items.map((item, index) => {
                const safeKey = [item.id, item.size, item.color].filter(Boolean).join("-") || `item-${index}`;
                return (
                  <div key={safeKey}
                    className="flex gap-4 items-center border-b pb-4 last:border-b-0"
                  >
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      {item.size && <div className="text-xs text-gray-500">Taille : {item.size}</div>}
                      {item.color && <div className="text-xs text-gray-500">Couleur : {item.color}</div>}
                      <div className="text-xs text-gray-500">Réf. : {item.reference}</div>
                    </div>
                    <div className="font-bold text-lg text-gold-600">x{item.quantity}</div>
                    <div className="text-sm text-gray-700 font-semibold mt-1">{formatPrice(item.price, 'MAD')}</div>
                  </div>
                );
              })
            )}
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-xl font-bold text-gold-700">{formatPrice(total, 'MAD')}</span>
            </div>
            <div className="flex gap-3">
              <Link href="/cart" className="flex-1">
                <button className="w-full py-3 rounded-lg bg-white border border-gold-500 text-gold-700 font-semibold hover:bg-gold-50 transition">Voir le panier</button>
              </Link>
              <button className="flex-1 py-3 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition">Commander</button>
            </div>
          </div>
        </motion.div>
      )}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99] bg-black"
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
} 