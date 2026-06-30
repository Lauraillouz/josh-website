"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  path: (route: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
};

export function LocaleProvider({ locale, dict, children }: LocaleProviderProps) {
  return (
    <LocaleContext.Provider
      value={{
        locale,
        dict,
        path: (route) => localePath(locale, route),
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
