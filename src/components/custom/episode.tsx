"use client";

import { useWide } from "@/lib/contexts/wideContext";
import { useTarget } from "@/lib/hooks/useTarget";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variantClassName?: string;
}
export function Episode({
  className,
  variantClassName,
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
        "overflow-hidden rounded-lg bg-white transition-transform",
        {
          "hover:scale-110": isWide,
          [cn("animate-beat", variantClassName)]: touch,
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
        e.animationName == "beat" && setTimeout(() => setTouch(false), 3000)
      }
      {...props}
    >
      {children}
    </Link>
  );
}
