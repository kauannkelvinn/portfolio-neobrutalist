import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const exorts = localFont({
  src: "./fonts/exortscompressed-Bold.woff2",
  variable: "--font-exorts",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Kauan Kelvin | Software Engineer",
  description: "Portfolio Neo-Brutalista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${sora.variable} ${exorts.variable}`}>
        {children}
      </body>
    </html>
  );
}