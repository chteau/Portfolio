"use client";

import { useI18n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LOCALES: Locale[] = ["en", "fr", "bzh"];

export function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center rounded-full border border-border bg-card/80 backdrop-blur-md shadow-sm overflow-hidden">
            {LOCALES.map((l, i) => (
                <div key={l} className="flex items-center">
                    {i > 0 && <div className="w-px h-3 bg-border" />}
                    <button
                        onClick={() => setLocale(l)}
                        className={cn(
                            "px-3 py-1.5 text-[11px] font-bold tracking-wide transition-colors select-none cursor-pointer",
                            locale === l
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {l === "bzh" ? "BZH" : l.toUpperCase()}
                    </button>
                </div>
            ))}
        </div>
    );
}
