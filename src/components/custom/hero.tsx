"use client";

import { useWide } from "@/lib/contexts/wideContext";
import { useTarget } from "@/lib/hooks/useTarget";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

export function Hero({ className, ...props }: Props) {
  const isWide = useWide();
  const { ref, on: touch } = useTarget("touchstart");

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-between bg-[#ff6b6b] px-6 py-12 md:flex-row md:px-2 md:py-24 min-[800px]:px-[max((100%_-_70rem)/2,_3rem)]",
        className,
      )}
      {...props}
    >
      <div className="max-w-md space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Bem-vindo ao Mundo da Peppa Pig!
        </h1>
        <p className="text-lg text-white md:text-xl">
          Junte-se a Peppa, George e seus amigos em emocionantes aventuras.
        </p>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-[#ff6b6b] transition-colors hover:bg-[#ffd166] hover:text-white active:bg-[#ffd166] active:text-white"
            prefetch={false}
          >
            Assistir Episódios
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap rounded-full bg-[#ffd166] px-6 py-3 text-[#ff6b6b] transition-colors hover:bg-white hover:text-[#ff6b6b] active:bg-white active:text-[#ff6b6b]"
            prefetch={false}
          >
            Jogar Jogos
          </Link>
        </div>
      </div>
      <Image
        ref={ref}
        src="/peppa-pig.jpg"
        alt="Peppa Pig"
        width={400}
        height={400}
        className={cn("mt-8 md:mt-0", {
          "animate-bounce": isWide,
          "animate-bounce-low": touch,
        })}
        style={{ aspectRatio: "400/400", objectFit: "cover" }}
      />
    </section>
  );
}
