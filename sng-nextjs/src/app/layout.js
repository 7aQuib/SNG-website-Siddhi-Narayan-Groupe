import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: 'swap',
});

export const metadata = {
  title: "SNG | Siddhi Narayan Group",
  description: "A dialogue between heritage stone and shadow. Reinterpreting regional craft methods through architectural minimalism.",
};

import Navbar from "@/components/layout/Navbar";
import DotNav from "@/components/layout/DotNav";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}>
        <DotNav />
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
        <Script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
        <Script src="/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
