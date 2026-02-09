"use client";

/* eslint-disable @next/next/no-img-element */
import { ArrowDown } from "lucide-react";
import { DATA } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils"
import BlurFade from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { DotPattern } from "@/components/magicui/dot-pattern";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";
import { Marquee } from "@/components/ui/marquee"
import { Icons } from "@/components/custom/icons";
import CountUp from "@/components/ui/CountUp";

import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import GamesSection from "@/components/section/games-section";

/**
 * Delay constant for BlurFade animations in seconds.
 * @constant {number} BLUR_FADE_DELAY
 */
const BLUR_FADE_DELAY = 0.04;

/**
 * ReviewCard component displays a testimonial card with user information.
 * Used in the about section's marquee display of reviews.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.username - Username/handle of the reviewer
 * @param {string} props.name - Display name of the reviewer
 * @param {string} props.body - Review text/content
 * @param {string} [props.img] - Optional profile image URL
 * @param {boolean} [props.verified] - Whether the reviewer is verified
 * @returns {JSX.Element} Review card element with user info and testimonial
 * @example
 * <ReviewCard
 *   username="john_doe"
 *   name="John Doe"
 *   body="Amazing work!"
 *   img="/avatar.jpg"
 *   verified={true}
 * />
 */
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
                "border-gray-950/10 bg-linear-to-r from-gray-900/10 to-gray-600/10 hover:bg-gray-950/5 transition-colors duration-100 ease-in-out",
                "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
                "backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 ease-in-out",
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

/**
 * Main portfolio page component displaying personal information, projects, games, and contact section.
 * Uses various animation components for visual effects and interactive elements.
 * @component
 * @returns {JSX.Element} Portfolio page with multiple sections
 * @example
 * <Page />
 */
export default function Page() {
    /**
     * Reference to the about section for smooth scrolling navigation.
     * @type {React.RefObject<HTMLElement>} aboutRef
     */
    const aboutRef = useRef<HTMLElement | null>(null);
    const [totalContributedVisits, setTotalContributedVisits] = useState(0);

    // Loads contributed visits from API
    useEffect(() => {
        async function loadContributedVisits() {
            try {
                const response = await fetch("/api/roblox/visits");
                const data = await response.json();
                setTotalContributedVisits(data.totalContributedVisits);
            } catch (error) {
                console.error("Error loading contributed visits:", error);
            }
        }

        loadContributedVisits();
    }, [ totalContributedVisits ]);

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">

            {/* Hero Section */}
            <section id="hero">
                <div className="mx-auto w-full h-vh flex flex-col items-center space-y-8 pt-20 pb-85">
                    <TextAnimate
                        animation="slideUp"
                        by="character"
                        className="lg:text-8xl text-6xl text-center font-bold tracking-tighter"
                        once
                    >
                        Hello there!
                    </TextAnimate>

                    <BlurFade delay={BLUR_FADE_DELAY * 10} className="text-3xl" inView>
                        <p className="opacity-30 font-300">
                            I'm {DATA.name}.
                        </p>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 15} className="mt-5 w-full flex justify-center" inView>
                        <Terminal className="w-full">
                            <TypingAnimation>admin@ch.teau:~$ run description</TypingAnimation>

                            <AnimatedSpan className="text-red-400 text-wrap">
                                {DATA.description}
                            </AnimatedSpan>
                        </Terminal>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 20} className="w-full flex justify-center gap-2" inView>
                        <div
                            className={cn(
                                "h-full w-64 cursor-pointer overflow-hidden rounded-xl border",
                                "border-gray-950/10 hover:bg-gray-950/5 transition-colors duration-100 ease-in-out",
                                "bg-background/10 dark:border-gray-50/10 dark:hover:bg-gray-50/5",
                            )}
                        >
                            <div className="p-4">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-col w-full">
                                        <span className="text-md text-muted-foreground font-medium text-center w-full">
                                            Contributed Visits
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2 text-2xl font-bold text-center">
                                    <CountUp
                                        from={totalContributedVisits - 4 * 1e6}
                                        to={totalContributedVisits}
                                        separator=","
                                        direction="up"
                                        duration={.25}
                                    />
                                </div>
                            </div>
                        </div>
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

            {/* About Section */}
            <section
                id="about"
                ref={aboutRef}
                className="px-15 relative h-[50vh] flex flex-col items-center justify-center"
            >
                <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden -z-10 opacity-40">
                    <DotPattern
                        className={cn(
                            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
                        )}
                    />
                </div>

                <TextAnimate
                    animation="slideUp"
                    by="character"
                    className="lg:text-6xl lg:text-left text-center text-4xl font-bold tracking-tighter"
                    once
                >
                    About me
                </TextAnimate>

                <p className="lg:text-2xl lg:text-left text-justify text-xl pt-15">
                    {DATA.summary}
                </p>

                <div className="relative w-full flex-col items-center justify-center overflow-hidden pt-15 hidden lg:flex">
                    <Marquee className="[--duration:40s]">
                        {DATA.reviews.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mt-20 relative">
                <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden -z-10 opacity-40 top-5">
                    <DotPattern
                        className={cn(
                            "mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
                        )}
                    />
                </div>
                <ProjectsSection />
            </section>

            {/* Games Section */}
            <section id="games" className="mt-20 relative">
                <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden -z-10 opacity-40 top-5">
                    <DotPattern
                        className={cn(
                            "mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
                        )}
                    />
                </div>
                <GamesSection />
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-15 mt-20">
                <ContactSection />
            </section>
        </main>
    );
}