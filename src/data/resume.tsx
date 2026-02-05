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
    summary: `My interest in programming dates back to sixth grade. Since then, I have built a wide range of projects, both as a freelancer and purely for personal interest. In addition to my role in development, I am employed as a security guard at a nightclub. I possess hands-on experience in web development and Roblox game development.`,
    reviews: [
        {
            name: "Viken",
            username: "@Syveric",
            body: "Very nice! He scripts better and faster than me.",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-676D98F452E709EAABB18AB8365EF440-Png/420/420/AvatarHeadshot/Png/noFilter",
            verified: true,
        },
        {
            name: "ShotgunRound",
            username: "@ShotgunRound",
            body: "Very Observant and can accept criticism and focuses on improvements.",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-07788BAC5520BEBC5C026DA8284CEAEA-Png/420/420/AvatarHeadshot/Png/noFilter",
            verified: false,
        },
        {
            name: "Lexie",
            username: "@igotyour",
            body: "Works well with everyone - Is a good & fast pace scripter.",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-934F4CAC7DB7FDF2E304DA87D46D90E8-Png/420/420/AvatarHeadshot/Png/noFilter",
            verified: true,
        },
        {
            name: "LazyBadDevs",
            username: "@LazyBadDevs",
            body: "Pookie",
            img: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-7A3AE92CD52633A6BC2449748053F9E8-Png/420/420/AvatarHeadshot/Png/noFilter",
            verified: true,
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
                {
                    type: "Donate",
                    href: "https://www.roblox.com/games/93084555973765/Roblox-Supabase-Donations",
                    icon: <Icons.roblox className="size-3" />,
                }
            ],
            image: "https://roblox-supabase.vercel.app/banner.png",
            video: "",
        },
                {
            title: "Heimdall",
            dates: "2023 - 2024",
            href: "https://github.com/chteau/heimdall",
            active: false,
            description: "A gatekeeping and self-hostable discord bot project I used to work on. Supports natively spam and phishing links detection as well as a cross-server verification process (background checks, etc).",
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
            image: "/images/heimdall.png",
            video: "",
        },
    ],

    // Role: 1 - Owner/Developer, 2 - Developer, 3 - Contributer
    games: [
        {
            title: "Night Shift: Observation Duty",
            universeID: 5652703661,
            role: 1,
            href: "https://www.roblox.com/games/16398007442/Night-Shift-Observation-Duty",
            released: true,
            description: "A Roblox game I made inspired by the game \"I'm on observation duty\". You're an employee of the “secure-view” company, responsible for monitoring various locations where anomalies have been spotted.",
            image: "https://tr.rbxcdn.com/180DAY-6a07a6f585bfa753acdf5fc43e1e5369/768/432/Image/Webp/noFilter",
        },
        {
            title: "Gravity Playground",
            universeID: 4938416935,
            role: 3,
            href: "https://www.roblox.com/games/14280398854/Gravity-Playground",
            released: true,
            description: "A roblox game about running and playing around with gravity. Pretty simple concept but pretty fun apparently as it was the first game I worked on with 1M+ visits. It was my first ever experience on roblox.",
            image: "https://tr.rbxcdn.com/180DAY-51141cd66e48b46b29cd8079589e63f1/768/432/Image/Webp/noFilter"
        },
        {
            title: "[NEW] MARKED 🎯",
            universeID: 9440522195,
            role: 1,
            href: "#",
            released: false,
            description: "I'm very proud of this one and I sure do hope this goes well. This game is inspired by Murder Mystery 2 but with a catch: the hunter can't see its preys. This also allows me to learn about react-luau.",
            image: "https://tr.rbxcdn.com/180DAY-331428ec00fd5fb410c531686dba1d97/768/432/Image/Webp/noFilter",
        },
    ],
} as const;