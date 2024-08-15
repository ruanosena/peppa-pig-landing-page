import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clickJogos(query: string) {
  const queryPath = encodeURIComponent(query);
  return "https://www.clickjogos.com.br/busca/" + queryPath;
}

export function googleNetflix(query: string) {
  const googleParam = "site:https://www.netflix.com/br",
    queryParam = encodeURIComponent(`${query} ${googleParam}`);
  return "https://www.google.com.br/search?q=" + queryParam;
}
