"use client";
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import BlurFade from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";
import { Marquee } from "@/components/ui/marquee"
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";

import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { useRef } from "react";

const BLUR_FADE_DELAY = 0.04;

const ReviewCard = ({
    username,
    name,
    body,
    img,
    verified,
}: {
    username: string;
    name: string;
    body: string;
    img?: string;
    verified?: boolean;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5 transition-colors duration-100 ease-in-out",
                "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />

                <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white flex flex-row items-center gap-1">
                    {name}
                    {verified && (
                        Icons.roblox_verified({
                            className: "w-4 h-4"
                        })
                    )}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    )
}

export default function Page() {
    const aboutRef = useRef<HTMLElement | null>(null);

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">

            {/* Header */}
            <section id="hero">
                <div className="mx-auto w-full h-vh flex flex-col items-center space-y-8 pt-20 pb-85">
                    <TextAnimate animation="slideUp" by="character" className="lg:text-8xl text-6xl text-center font-bold tracking-tighter " once>
                        Hello there!
                    </TextAnimate>
                    <BlurFade delay={BLUR_FADE_DELAY * 10} className="text-3xl" inView>
                        <p className="opacity-50 font-300">
                            I'm {DATA.name}.
                        </p>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 15} className="mt-5 w-full flex justify-center" inView>
                        <Terminal className="w-full">
                            <TypingAnimation>admin@ch.teau:~$ run description</TypingAnimation>

                            <AnimatedSpan className="text-blue-500 text-wrap">
                                {DATA.description}
                            </AnimatedSpan>
                        </Terminal>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 25} className="mt-20 text-muted-foreground">
                        <button
                            className="cursor-pointer hover:translate-y-1 hover:opacity-50 transition-all duration-200"
                            onClick={() => {
                                aboutRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <ArrowDown className="w-10 h-10" />
                        </button>
                    </BlurFade>
                </div>
            </section>

            <section id="about" ref={aboutRef} className="px-15">
                <h2 className="lg:text-6xl lg:text-left text-center text-4xl font-bold tracking-tighter ">About me</h2>
                <p className="lg:text-2xl lg:text-left text-justify text-xl pt-5">
                    {DATA.summary}
                </p>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-5">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {DATA.reviews.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                </div>
            </section>

            {/* <div
                className="h-px mx-50 bg-linear-to-r from-transparent via-border to-transparent"
            /> */}

            <section id="projects" className="px-15 mt-20">
                <ProjectsSection />
            </section>

            <section id="contact"  className="px-15 mt-20">
                <ContactSection />
            </section>
        </main>
    );
}
