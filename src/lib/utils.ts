import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertThousandsToK = (n: number) => {
  if ((n / 100) % 10 == 0) return Math.floor(n / 1000) + "k";
  else return Math.floor(n / 100) / 10.0 + "k";
};
