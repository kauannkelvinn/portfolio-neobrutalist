"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { ButtonMenu } from "../ui/ButtonMenu";
import CreativeBackground from "../ui/CreativeBackground";
import LogoImg from "@/assets/images/logo.png";
import { useTransition } from "@/app/context/TransitionContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { startTransition } = useTransition();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleNavigation = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    await startTransition(href);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
      <div className="w-full mx-auto flex items-center justify-between px-7 py-3">
        <Link
          href="/"
          onClick={(e) => handleNavigation(e, '/')}
          className="relative w-[83px] h-14 pointer-events-auto"
        >
          <Image
            src={LogoImg}
            alt="Logo"
            fill
            className="object-contain"
            priority
            sizes="150px"
          />
        </Link>

        <nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex h-5 w-8 cursor-pointer flex-col items-center justify-between pointer-events-auto"
            aria-label="Toggle menu"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ButtonMenu isOpen={isOpen} isHovered={isHovered} />
          </button>

          {isOpen && (
            <div className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center space-y-4 text-4xl font-bold text-white transition-all duration-500 animate-in fade-in pointer-events-auto">
              <CreativeBackground />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 cursor-pointer transition hover:text-gray-400"
              >
                <X size={30} />
              </button>

              <Link
                href="/"
                onClick={(e) => handleNavigation(e, '/')}
                className="text-6xl font-heading font-extrabold tracking-[-0.06em] transition-all duration-100 ease-in-out hover:text-gray-400 cursor-pointer"
              >
                HOME
              </Link>

              <Link
                href="/#about"
                onClick={(e) => handleNavigation(e, '/#about')}
                className="text-6xl font-heading font-extrabold tracking-[-0.06em] transition-all duration-100 ease-in-out hover:text-gray-400 cursor-pointer"
              >
                ABOUT
              </Link>

              <Link
                href="/#work"
                onClick={(e) => handleNavigation(e, '/#work')}
                className="text-6xl font-heading font-extrabold tracking-[-0.06em] transition-all duration-100 ease-in-out hover:text-gray-400 cursor-pointer"
              >
                WORK
              </Link>

              <Link
                href="/#statistics"
                onClick={(e) => handleNavigation(e, '/#statistics')}
                className="text-6xl font-heading font-extrabold tracking-[-0.06em] transition-all duration-100 ease-in-out hover:text-gray-400 cursor-pointer"
              >
                STATISTICS
              </Link>

              <Link
                href="/#contact"
                onClick={(e) => handleNavigation(e, '/#contact')}
                className="text-6xl font-heading font-extrabold tracking-[-0.06em] transition-all duration-100 ease-in-out hover:text-gray-400 cursor-pointer"
              >
                CONTACT
              </Link>

              <CreativeBackground />

              <footer className="absolute inset-x-0 bottom-0 px-8 pb-8 md:px-12">
                <div className="flex w-full flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div className="font-mono text-xs tracking-widest uppercase">
                    ©2025 ALL RIGHTS RESERVED
                  </div>

                  <div className="flex flex-col items-start space-y-2 text-xs font-mono uppercase tracking-widest text-white md:flex-row md:items-center md:space-y-0 md:space-x-6">
                    <a
                      href="https://www.linkedin.com/in/kauannkelvinn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gray-400"
                    >
                      LINKEDIN
                    </a>
                    <a
                      href="https://github.com/kauannkelvinn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gray-400"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}