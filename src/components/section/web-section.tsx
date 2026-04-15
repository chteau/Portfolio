"use client";

import { WebProjectCard } from "@/components/custom/web-project-card";
import { WEB_PROJECTS } from "@/data/resume";
import { Marquee } from "@/components/ui/marquee";
import { useI18n } from "@/lib/i18n";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function WebSection() {
    const { t } = useI18n();

    if (WEB_PROJECTS.length === 0) return null;

    return (
        <section id="web">
            <div className="flex min-h-0 flex-col gap-y-8">
                <BlurFade delay={BLUR_FADE_DELAY} inView>
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <div className="flex items-center w-full">
                            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                                <span className="text-background text-sm font-medium">{t("webProjects.sectionLabel")}</span>
                            </div>
                            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                        </div>
                        <div className="flex flex-col gap-y-3 items-center justify-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("webProjects.heading")}</h2>
                            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                                {t("webProjects.subheading")}
                            </p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                    {WEB_PROJECTS.length >= 4 ? (
                        <>
                            <div className="sm:block hidden">
                                <Marquee pauseOnHover className="[--duration:60s]" repeat={10}>
                                    {WEB_PROJECTS.map((project) => (
                                        <WebProjectCard
                                            key={project.title}
                                            {...project}
                                            className="w-90"
                                        />
                                    ))}
                                </Marquee>
                                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr sm:hidden">
                                {WEB_PROJECTS.map((project) => (
                                    <WebProjectCard key={project.title} {...project} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col gap-y-4 items-center justify-center">
                            {WEB_PROJECTS.map((project) => (
                                <WebProjectCard key={project.title} {...project} />
                            ))}
                        </div>
                    )}
                </BlurFade>
            </div>
        </section>
    );
}
