import { Geist, Geist_Mono } from "next/font/google";
// 1. IMPORTAÇÃO DA NOVA FONTE SERIFADA (Estilo Medium)
import { Literata } from "next/font/google"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. DEFININDO A FONTE LITERATA
const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vitoria Souza Portifólio",
  description: "Portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${literata.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}