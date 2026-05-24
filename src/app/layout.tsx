import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: "VISWANATH A S | AI Enthusiast",
  description: "AI enthusiast with a strong analytical mindset and hands-on experience in developing intelligent applications. Specialized in Machine Learning, Deep Learning, and Generative AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.className} antialiased bg-black text-white`}>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
