"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Translations } from "@/locales/en";
import { en } from "@/locales/en";
import { fr } from "@/locales/fr";
import { bzh } from "@/locales/bzh";

export type Locale = "en" | "fr" | "bzh";

const LOCALES: Record<Locale, Translations> = { en, fr, bzh };
const CYCLE: readonly Locale[] = ["en", "fr", "bzh"] as const;
const STORAGE_KEY = "portfolio_locale";

interface I18nContextValue {
    locale: Locale;
    t: (key: string) => string;
    setLocale: (locale: Locale) => void;
    cycleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
        if (saved && saved in LOCALES) setLocaleState(saved as Locale);
    }, []);

    const setLocale = useCallback((next: Locale) => {
        setLocaleState(next);
        localStorage.setItem(STORAGE_KEY, next);
    }, []);

    const cycleLocale = useCallback(() => {
        setLocaleState((prev) => {
            const next = CYCLE[(CYCLE.indexOf(prev) + 1) % CYCLE.length];
            localStorage.setItem(STORAGE_KEY, next);
            return next;
        });
    }, []);

    const t = useCallback(
        (key: string): string => {
            const parts = key.split(".");
            let value: unknown = LOCALES[locale];
            for (const part of parts) {
                if (typeof value === "object" && value !== null) {
                    value = (value as Record<string, unknown>)[part];
                } else {
                    return key;
                }
            }
            return typeof value === "string" ? value : key;
        },
        [locale]
    );

    return (
        <I18nContext.Provider value={{ locale, t, setLocale, cycleLocale }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
    return ctx;
}
