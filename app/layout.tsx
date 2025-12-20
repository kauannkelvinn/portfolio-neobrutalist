import type { Metadata } from "next";
import "./globals.css";
import { dimensions, helvetica, sfPro } from "./fonts/fonts";

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
      <body
        className={`${dimensions.variable} ${helvetica.variable} ${sfPro.variable} font-body antialiased bg-brand-black text-brand-white selection:bg-brand-red selection:text-white`}
      >
        {children}
        
        <svg style={{ display: 'none' }}>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
        </svg>
      </body>
    </html>
  );
}