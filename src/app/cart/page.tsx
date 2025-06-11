"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Votre Panier
        </motion.h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600 mb-8">
              Votre panier est vide
            </p>
            <Button
              onClick={() => window.location.href = "/shop"}
              className="bg-black text-white hover:bg-gray-800"
            >
              Découvrir nos collections
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 py-6 border-b last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">
                        {item.price.toLocaleString("fr-FR")} €
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className="border rounded-md px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {(item.price * item.quantity).toLocaleString("fr-FR")} €
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Récapitulatif</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span>{total.toLocaleString("fr-FR")} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{total.toLocaleString("fr-FR")} €</span>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 mt-6">
                    Procéder au paiement
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
} 