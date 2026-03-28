"use client";

import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/custom/icons";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ContactSection() {
    const { t } = useI18n();

    return (
        <div className="border rounded-xl p-10 relative">
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
                <span className="text-background text-sm font-medium">{t("contact.sectionLabel")}</span>
            </div>
            <div className="absolute inset-0 top-0 left-0 right-0 h-full rounded-xl overflow-hidden">
                <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    className={cn(
                        "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
                    )}
                />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} inView>
                <div className="relative flex flex-col items-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {t("contact.heading")}
                    </h2>
                    <p className="mx-auto max-w-lg text-muted-foreground text-balance">
                        {t("contact.body")}
                    </p>

                    <div className="flex gap-5 mt-3 flex-col lg:flex-row">
                        <Link
                            href={DATA.contact.social.Discord.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="cursor-pointer hover:opacity-50 transition-all duration-200">
                                {Icons.discord({ className: "w-10 h-10" })}
                            </button>
                        </Link>

                        <Link
                            href={DATA.contact.social.Roblox.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="cursor-pointer hover:opacity-50 transition-all duration-200">
                                {Icons.roblox({ className: "w-10 h-10" })}
                            </button>
                        </Link>
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}
