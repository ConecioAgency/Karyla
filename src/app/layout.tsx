"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { MiniCartDrawerProvider } from "@/components/layout/MiniCartDrawer";
import { ToastProvider } from "@/components/layout/MiniCartDrawer";
import { WhatsappChatButton } from "@/components/ui/WhatsappChatButton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastProvider>
          <MiniCartDrawerProvider>
            <AuthProvider>
              <CartProvider>
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-grow">
                    {children}
                  </main>
                  <Footer />
                  <WhatsappChatButton />
                </div>
              </CartProvider>
            </AuthProvider>
          </MiniCartDrawerProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
