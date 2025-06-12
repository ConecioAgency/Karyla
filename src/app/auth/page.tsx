"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-md mt-16 md:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-gold-700 font-serif tracking-tight mb-2">
            {isLogin ? "Connexion" : "Inscription"}
          </h1>
          <p className="text-gray-600">
            {isLogin 
              ? "Bienvenue ! Connectez-vous pour accéder à votre compte"
              : "Créez votre compte pour une expérience personnalisée"
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isLogin 
                    ? "bg-white text-gold-700 shadow-sm" 
                    : "text-gray-600 hover:text-gold-700"
                }`}
              >
                Connexion
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isLogin 
                    ? "bg-white text-gold-700 shadow-sm" 
                    : "text-gray-600 hover:text-gold-700"
                }`}
              >
                Inscription
              </button>
            </div>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmer le mot de passe"
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-end">
                <Link 
                  href="/forgot-password"
                  className="text-sm text-gold-600 hover:text-gold-700 transition-colors duration-300"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {isLogin ? "Se connecter" : "S&apos;inscrire"}
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Pas encore de compte ?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-gold-600 hover:text-gold-700 font-medium transition-colors duration-300"
                >
                  S&apos;inscrire
                </button>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 