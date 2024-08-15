"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useBreakpoint } from "@/lib/hooks/useBreakpoint";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLElement> {
  variantClassName?: string;
}

export function Nav({ className, variantClassName, ...props }: Props) {
  const isMedium = useBreakpoint("md", false);
  const [open, setOpen] = useState(false);

  return isMedium ? (
    <nav
      className={cn("flex items-center space-x-6 text-4xl", variantClassName)}
      {...props}
    >
      <Link
        href="#Episodios"
        className="text-white transition-colors hover:text-[#ffd166] active:text-[#ffd166]"
        prefetch={false}
      >
        Episódios
      </Link>
      <Link
        href="#Jogos"
        className="text-white transition-colors hover:text-[#ffd166] active:text-[#ffd166]"
        prefetch={false}
      >
        Jogos
      </Link>
      <Link
        href="#Mercadorias"
        className="text-white transition-colors hover:text-[#ffd166] active:text-[#ffd166]"
        prefetch={false}
      >
        Mercadorias
      </Link>
    </nav>
  ) : (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-white text-[#ff6b6b] transition-colors hover:bg-[#ffd166] hover:text-white active:bg-[#ffd166] active:text-white md:hidden"
        >
          Menu
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className={cn("mr-1 flex w-min flex-col p-0 text-xl", className)}
        {...props}
      >
        <Link
          onClick={() => setOpen(false)}
          href="#Episodios"
          className="bg-[#ffd166] px-4 py-1.5 text-[#ff6b6b] transition-colors"
          prefetch={false}
        >
          Episódios
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#Jogos"
          className="bg-[#ffd166] px-4 py-1.5 text-[#ff6b6b] transition-colors"
          prefetch={false}
        >
          Jogos
        </Link>
        <Link
          href="#Mercadorias"
          onClick={() => setOpen(false)}
          className="bg-[#ffd166] px-4 py-1.5 text-[#ff6b6b] transition-colors"
          prefetch={false}
        >
          Mercadorias
        </Link>
      </PopoverContent>
    </Popover>
  );
}
