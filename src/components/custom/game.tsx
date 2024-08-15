"use client";

import { useTarget } from "@/lib/hooks/useTarget";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variantClassName?: string;
}
export function Game({
  className,
  variantClassName = "",
  children,
  ...props
}: Props) {
  const [prevented, setPrevented] = useState(false);
  const { ref, on: touch, setOn: setTouch } = useTarget("touchstart");

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
          [variantClassName]: touch,
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
      onTransitionEnd={(e) => e.propertyName == "transform" && setTouch(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
