"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content, defaultLocale, localStorageKey, locales } from "../../data/mock";

const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(localStorageKey);
    if (stored && locales.includes(stored)) {
      setLocale(stored);
      return;
    }
    window.localStorage.setItem(localStorageKey, defaultLocale);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, locale);
  }, [locale]);

  const t = useMemo(() => content[locale] || content[defaultLocale], [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside a LocaleProvider");
  }
  return context;
};
