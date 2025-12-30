import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScrool";
import { dimensions, helvetica, sfPro, oswald } from "./fonts/fonts";
import { TransitionProvider } from "@/app/context/TransitionContext";
import PageTransition from "@/components/ui/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

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
        className={`${dimensions.variable} ${helvetica.variable} ${sfPro.variable} ${oswald.variable} font-body antialiased bg-brand-black text-brand-white selection:bg-brand-red selection:text-white p-2 md:p4 h-screen overflow-hidden`}
      >
        <NoiseOverlay />

        <SmoothScroll>
          <TransitionProvider>
            <CustomCursor />
            <PageTransition />
            <main className="relative h-full w-full rounded-3xl md:rounded-4xl overflow-y-auto overflow-x-hidden bg-zinc-950 border-white/5 shadow">
              {children}
            </main>
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}