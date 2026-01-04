import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScrool";
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
        className="font-body antialiased bg-brand-black text-brand-white selection:bg-brand-red selection:text-white md:p-4 md:h-screen md:overflow-hidden"
      >
        <NoiseOverlay />

        <SmoothScroll>
          <TransitionProvider>
            <CustomCursor />
            <PageTransition />
            <main className="relative w-full bg-zinc-950 min-h-screen md:h-full md:rounded-4xl md:overflow-y-auto md:overflow-x-hidden md:border md:border-white/5 md:shadow-2xl">
              {children}
            </main>
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}