"use client";

import { useWide } from "@/lib/contexts/wideContext";
import { useTarget } from "@/lib/hooks/useTarget";
import { cn } from "@/lib/utils";
import { SVGAttributes, useCallback, useRef } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

export function Logo({ className, ...props }: Props) {
  const isWide = useWide();
  const { ref, on: touch } = useTarget("touchstart");

  return (
    <svg
      ref={ref}
      viewBox="0 17.5 76 40.85"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      baseProfile="full"
      enableBackground="new 0 0 40.85 40.85"
      xmlSpace="preserve"
      fill="#000000"
      className={cn(
        "[stroke-linejoin:round stroke-black stroke-2 transition-all duration-500 ease-in [stroke-dasharray:190] [stroke-linecap:round]",
        {
          "[stroke-dashoffset:190]": !touch || isWide,
          "[stroke-dashoffset:0]": touch,
          "hover:[stroke-dashoffset:0]": isWide,
        },
        className,
      )}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M 22.1667,57C 22.1667,55.2511 20.7489,53.8333 19,53.8333L 19,50.6667C 20.7489,50.6667 22.1667,49.2489 22.1667,47.5C 22.1667,45.7511 20.7489,44.3333 19,44.3333L 19,41.1667C 20.7489,41.1667 22.1667,39.7489 22.1667,38C 22.1667,36.2511 20.7489,34.8333 19,34.8333L 19,31.6667C 20.7489,31.6667 22.1667,30.2489 22.1667,28.5C 22.1667,26.7511 20.7489,25.3333 19,25.3333L 19,22.1667C 20.7489,22.1667 22.1667,20.7489 22.1667,19L 25.3333,19C 25.3333,20.7489 26.7511,22.1667 28.5,22.1667C 30.2489,22.1667 31.6667,20.7489 31.6667,19L 34.8333,19C 34.8333,20.7489 36.2511,22.1667 38,22.1667C 39.7489,22.1667 41.1667,20.7489 41.1667,19L 44.3333,19C 44.3333,20.7489 45.7511,22.1667 47.5,22.1667C 49.2489,22.1667 50.6667,20.7489 50.6667,19L 53.8333,19C 53.8333,20.7489 55.2511,22.1667 57,22.1667L 57,25.3333C 55.2511,25.3333 53.8333,26.7511 53.8333,28.5C 53.8333,30.2489 55.2511,31.6667 57,31.6667L 57,34.8333C 55.2511,34.8333 53.8333,36.2511 53.8333,38C 53.8333,39.7489 55.2511,41.1667 57,41.1667L 57,44.3333C 55.2511,44.3333 53.8333,45.7511 53.8333,47.5C 53.8333,49.2489 55.2511,50.6667 57,50.6667L 57,53.8333C 55.2511,53.8333 53.8333,55.2511 53.8333,57L 50.6667,57C 50.6667,55.2511 49.2489,53.8333 47.5,53.8333C 45.7511,53.8333 44.3333,55.2511 44.3333,57L 41.1667,57C 41.1667,55.2511 39.7489,53.8333 38,53.8333C 36.2511,53.8333 34.8333,55.2511 34.8333,57L 31.6667,57C 31.6667,55.2511 30.2489,53.8333 28.5,53.8333C 26.7511,53.8333 25.3333,55.2511 25.3333,57L 22.1667,57 Z "></path>
        <text fill="none" x={0} y={43}>
          Peppa Pig
        </text>
      </g>
    </svg>
  );
}
