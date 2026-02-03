import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    name: "Cheeteau",
    initials: "C.TEAU",
    url: "https://github.com/chteau",
    avatarUrl: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-46AFC8D276F10329C8F153E2B1A29EC6-Png/150/150/AvatarHeadshot/Webp/noFilter",
    location: "France, EU",
    description:
        "French full-stack developer and security guard. I absolutely love learning new frameworks and techniques as well as bringing projects to life.",
    summary: `I've been interested in programming since 6th grade. Since then, I've built a wide range of projects—both as a freelancer and purely for fun.
    Alongside development, I work as a security guard in a nightclub. I have hands-on experience in web development and Roblox game development.`,
    reviews: [
        {
            name: "Viken",
            username: "@Syveric",
            body: "Very nice! He scripts better and faster than me.",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-676D98F452E709EAABB18AB8365EF440-Png/420/420/AvatarHeadshot/Png/noFilter",
        },
        {
            name: "ShotgunRound",
            username: "@ShotgunRound",
            body: "Very Observant and can accept criticism and focuses on improvements.",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-07788BAC5520BEBC5C026DA8284CEAEA-Png/420/420/AvatarHeadshot/Png/noFilter",
        },
        {
            name: "Lexie",
            username: "@igotyour",
            body: "Works well with everyone - Is a good & fast pace scripter.",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-934F4CAC7DB7FDF2E304DA87D46D90E8-Png/420/420/AvatarHeadshot/Png/noFilter",
        },
        {
            name: "LazyBadDevs",
            username: "@LazyBadDevs",
            body: "-",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-7A3AE92CD52633A6BC2449748053F9E8-Png/420/420/AvatarHeadshot/Png/noFilter",
        }
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/chteau",
                icon: Icons.github,
                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "https://www.youtube.com/@Cheetoes",
                icon: Icons.youtube,
                navbar: true,
            },
            Roblox: {
                name: "Roblox",
                url: "https://www.roblox.com/users/925308243/profile",
                icon: Icons.roblox,
                navbar: true,
            },
            Discord: {
                name: "Discord",
                url: "https://discord.com/users/830189337244991488",
                icon: Icons.discord,
                navbar: true,
            }
        },
    },

    projects: [
        {
            title: "Roblox Supabase Client",
            href: "https://roblox-supabase.vercel.app/",
            dates: "2025 - 2026",
            active: true,
            description:
                "A comprehensive, type-safe Supabase client for Roblox Luau, providing full access to PostgREST API, Storage, and Edge Functions. Built specifically for Roblox's server-side environment with Rojo workflow compatibility.",
            technologies: [
                "Luau",
                "PostgreSQL",
                "Supabase",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://roblox-supabase.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/chteau/Roblox-Supabase",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://roblox-supabase.vercel.app/banner.png",
        },
        {
            title: "Archon Admin Panel",
            dates: "2025",
            active: false,
            description:
                "An admin panel demo to experiment with responsive UI in Roblox. The project is sadly now inactive however. It did teach me a lot about UI however.",
            technologies: [
                "Luau",
                "UI",
            ],
            links: [],
            video: "/videos/ArchonDemo.mp4",
        },
        {
            title: "Night Shift: Observation Duty",
            dates: "2024",
            href: "https://www.roblox.com/games/16398007442/Night-Shift-Observation-Duty",
            active: false,
            description: "A Roblox game I made inspired by the game \"I'm on observation duty\". You're an employee of the “secure-view” company, responsible for monitoring various locations where anomalies have been spotted.",
            technologies: [
                "Luau",
            ],
            links: [
                {
                    type: "Play",
                    href: "https://www.roblox.com/games/16398007442/Night-Shift-Observation-Duty",
                    icon: <Icons.roblox className="size-3" />,
                }
            ],
            image: "https://tr.rbxcdn.com/180DAY-6a07a6f585bfa753acdf5fc43e1e5369/768/432/Image/Webp/noFilter",
        },
        {
            title: "Heimdall",
            dates: "2023 - 2024",
            href: "https://github.com/chteau/heimdall",
            active: false,
            description: "Some kind of gatekeeping and server protection discord bot I work on when I have some time available.",
            technologies: [
                "TypeScript",
                "Deno",
                "SQLite3",
                "Discord.js",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/chteau/heimdall",
                    icon: <Icons.github className="size-3" />,
                }
            ],
            image: "https://opengraph.githubassets.com/e84107274f1ff72e93f9b1c0042e674188b19acf7c484c8f64dacb6f9eba4295/chteau/Heimdall"
        }
    ],
} as const;
