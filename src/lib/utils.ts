import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function apiUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api${
    path.startsWith("/") ? "" : "/"
  }${path}`;
}

export function localizeValue(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: { [key: string]: any },
  // eslint-enable-next-line @typescript-eslint/no-explicit-any
  key: string,
  locale: string
) {
  if (locale === "ar") {
    return obj[`${key}Ar`];
  }

  return obj[key];
}
