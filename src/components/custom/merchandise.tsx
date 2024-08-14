"use client";

import { useWide } from "@/lib/contexts/wideContext";
import { useTarget } from "@/lib/hooks/useTarget";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
}
export function Merchandise({
  className,
  activeClassName,
  children,
  ...props
}: Props) {
  const isWide = useWide();
  const [prevented, setPrevented] = useState(false);
  const { ref, on: touch, setOn: setTouch } = useTarget("touchend");

  useEffect(() => {
    if (!touch) setPrevented(false);
  }, [touch]);

  return (
    <Link
      ref={ref}
      href="#"
      className={cn(
        "overflow-hidden rounded-lg bg-white opacity-90 transition-transform",
        {
          "hover:z-10 hover:skew-x-0 hover:skew-y-0 hover:scale-150 hover:opacity-100":
            isWide,
          [cn(
            "animate-[wiggle_0.45s_ease-in-out_2] opacity-100 xs:z-10 xs:scale-[1.20]",
            activeClassName,
          )]: touch,
        },
        className,
      )}
      prefetch={false}
      onClick={(e) => {
        if (!prevented) {
          e.preventDefault();
          setPrevented(true);
        }
      }}
      onAnimationEnd={(e) =>
        e.animationName == "wiggle" && setTimeout(() => setTouch(false), 2500)
      }
      {...props}
    >
      {children}
    </Link>
  );
}
