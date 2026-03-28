"use client";

import { ProjectCard } from "@/components/custom/project-card";
import { DATA } from "@/data/resume";
import { Marquee } from "@/components/ui/marquee";
import { useI18n } from "@/lib/i18n";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const { t } = useI18n();

    return (
        <section id="projects" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-8">
                <BlurFade delay={BLUR_FADE_DELAY} inView>
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <div className="flex items-center w-full">
                            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                                <span className="text-background text-sm font-medium">{t("projects.sectionLabel")}</span>
                            </div>
                            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                        </div>
                        <div className="flex flex-col gap-y-3 items-center justify-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("projects.heading")}</h2>
                            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                                {t("projects.subheading")}
                            </p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                    <div className="sm:block hidden">
                        <Marquee pauseOnHover className="[--duration:60s]" reverse repeat={3}>
                            {DATA.projects.map((project, id) => (
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                    className="w-90"
                                />
                            ))}
                        </Marquee>
                        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr sm:hidden">
                        {DATA.projects.map((project, id) => (
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        ))}
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
