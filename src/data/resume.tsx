import { Icons } from "@/components/custom/icons";
import { HomeIcon } from "lucide-react";

export type SkillId = "luau" | "webdev";

export interface Skill {
    id: SkillId;
    icon: string;
    proficiency: number;
}

export const SKILLS: Skill[] = [
    { id: "luau", icon: "⚡", proficiency: 80 },
    { id: "webdev", icon: "🌐", proficiency: 90 },
];

export const DATA = {
    name: "Cheeteau",
    initials: "C.TEAU",
    url: "https://cheeteau.vercel.app/",
    location: "France, EU",
    description:
        "French full-stack developer and security guard. I absolutely love learning new frameworks and techniques as well as bringing projects to life.",
    summary: `My interest in programming dates back to sixth grade. Since then, I have built a wide range of projects, both as a freelancer and purely for personal interest. In addition to my role in development, I am employed as a security guard at a nightclub. I possess hands-on experience in web development and Roblox game development.`,
    reviews: [
        {
            name: "Viken",
            username: "@Syveric",
            userId: 105519417,
            body: "Very nice! He scripts better and faster than me.",
            verified: true,
        },
        {
            name: "ShotgunRound",
            username: "@ShotgunRound",
            userId: 5647093294,
            body: "Very Observant and can accept criticism and focuses on improvements.",
            verified: false,
        },
        {
            name: "Lexie",
            username: "@igotyour",
            userId: 70693779,
            body: "Works well with everyone - Is a good & fast pace scripter.",
            verified: true,
        },
        {
            name: "LazyBadDevs",
            username: "@LazyBadDevs",
            userId: 4337879873,
            body: "Pookie",
            verified: true,
        },
        {
            name: "SERABEU",
            username: "@SERABEU",
            userId: 5208557083,
            body: "Always attentive, he even allows himself to be creative. He is truly passionate about what he does.",
            verified: false,
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
            title: "Fragment",
            href: "https://chteau.github.io/Fragment/",
            dates: "2026",
            active: true,
            description:
                "Fragment is a simple module I made to manage Roblox's imperative UI instance system inspired by React. It currently supports state management, effects, declarative rendering, globals stores which allow you to build reactive user interfaces whilst still using default Roblox's UI components.",
            technologies: [
                "Luau",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://chteau.github.io/Fragment/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/chteau/Fragment",
                    icon: <Icons.github className="size-3" />,
                }
            ],
            image: "https://chteau.github.io/Fragment/banner.png",
            video: "",
        },
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

    // Role: 1 - Owner/Developer, 2 - Developer, 3 - Contributor
    games: [
        // {
        //     title: "Night Shift: Observation Duty",
        //     universeID: 5652703661,
        //     role: 1,
        //     href: "https://www.roblox.com/games/16398007442/Night-Shift-Observation-Duty",
        //     released: true,
        //     description: "A Roblox game I made inspired by the game \"I'm on observation duty\". You're an employee of the “secure-view” company, responsible for monitoring various locations where anomalies have been spotted.",
        // },
        // {
        //     title: "Gravity Playground",
        //     universeID: 4938416935,
        //     role: 3,
        //     href: "https://www.roblox.com/games/14280398854/Gravity-Playground",
        //     released: true,
        //     description: "A roblox game about running and playing around with gravity. Pretty simple concept but pretty fun apparently as it was the first game I worked on with 1M+ visits. It was my first ever experience on roblox.",
        // },
        {
            title: "Crushed by Speeding Wall For Brainrots",
            universeID: 9583687222,
            role: 3,
            href: "https://www.roblox.com/games/101354784559824/Crushed-by-Speeding-Wall-For-Brainrots",
            released: true,
            description: `😡 Crushed by Speeding Wall For Brainrots
            How to play:
            - Crushed by Speeding Wall For Brainrots 😡
            - Collect brainrots, farther to go means better luck! ✨
            - Earn Cash from your Brainrots! 💰
            - Upgrade your speed to run faster! ⚡
            - Rebirth to increase your multiplier and unlock Boots! ♻️
            - Unlock and Equip new boots to increase your speed! 👟`,
        },
        {
            title: "Pop Starz ⭐",
            universeID: 7025744580,
            role: 3,
            href: "https://www.roblox.com/games/118770786913389/Pop-Starz",
            released: true,
            description: `Welcome to Pop Starz, step onto the red carpet and live the dream life!
            🎬 Climb the fame ladder as a rising star
            👠 Collect & wear the rarest clothing
            🌃 Own luxury apartments
            🛍️ Dress up & RP with your friends!`,
        },
        {
            title: "Ascension Incremental",
            universeID: 9668694532,
            role: 2,
            href: "https://www.roblox.com/games/98388247482875/Ascension-Incremental",
            released: true,
            description: `💎 Welcome to Ascension Incremental
            💰 Gain Points Per Second
            ⬆️ Buy Upgrades.
            ⭐ Reach Highest Ascension
            🔮 Roll Runes To Boost All Your Stats!
            🏆 Climb The Leaderboards And Get To #1`,
        }
    ],
} as const;