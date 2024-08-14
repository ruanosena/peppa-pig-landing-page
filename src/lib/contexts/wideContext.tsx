"use client";
import { createContext, ReactNode, useContext } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const WideContext = createContext(false);

interface Props {
  defaultState?: boolean;
  children: ReactNode;
}

export function WideContextProvider({ defaultState = false, children }: Props) {
  const isWide = useBreakpoint("lg", defaultState);

  return <WideContext.Provider value={isWide}>{children}</WideContext.Provider>;
}

export const useWide = () => useContext(WideContext);
