import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LightRays } from "@/components/magicui/light-rays";
import { IconCloud } from "@/components/ui/icon-cloud";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
        title: `${DATA.name}`,
        description: DATA.description,
        url: DATA.url,
        siteName: `${DATA.name}`,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: `${DATA.name}`,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
};

const slugs = [
    "typescript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "supabase",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "luau",
    "lua",
    "javascript",
    "figma",
    "roblox",
    "discord"
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/white`
    )

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased relative",
                    geist.variable,
                    geistMono.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <TooltipProvider delayDuration={0}>
                        <div className="absolute inset-0 top-0 left-0 right-0 h-dvh overflow-hidden z-0">
                            <LightRays color="rgba(165, 4, 29, 0.5)" length="50vh" />
                            <div className="relative flex size-full items-center justify-center overflow-hidden">
                                <IconCloud images={images} />
                            </div>
                        </div>
                        <div className="relative z-10 mx-auto py-12 pb-24 sm:py-24 px-6">
                            {children}
                        </div>
                        <Navbar />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
