"use client";

import { ArrowUpIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollTop = useCallback(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    let scheduled: Event | null = null;
    const handleScroll = (e: Event) => {
      if (!scheduled) {
        setTimeout(() => {
          if (window.scrollY > 500) {
            setShowBackToTop(true);
          } else {
            setShowBackToTop(false);
          }
          scheduled = null;
        }, 250);
      }
      scheduled = e;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2">
      <Link
        href="https://www.instagram.com/ruan.sena01/"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#6a9560] text-primary-foreground shadow-lg transition-colors hover:bg-[#6a9560]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        prefetch={false}
      >
        <InstagramLogoIcon className="h-6 w-6" />
        <span className="sr-only">Instagram</span>
      </Link>
      {showBackToTop && (
        <Button
          variant="ghost"
          size="icon"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background text-muted-foreground shadow-lg transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={scrollTop}
        >
          <ArrowUpIcon className="h-6 w-6" />
          <span className="sr-only">Voltar ao topo</span>
        </Button>
      )}
    </div>
  );
}
