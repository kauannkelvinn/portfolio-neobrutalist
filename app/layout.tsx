import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScrool";
import { dimensions, helvetica, sfPro } from "./fonts/fonts";
import { TransitionProvider } from "@/app/context/TransitionContext";
import PageTransition from "@/components/ui/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";

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
        <SmoothScroll>
          <TransitionProvider>
            <CustomCursor />
            <PageTransition />
            <div className="noise-overlay" />
            {children}
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}