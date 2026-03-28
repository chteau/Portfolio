/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Lens } from "@/components/ui/lens";
import { cn } from "@/lib/utils";
import { Eye, Heart, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { Icons } from "@/components/custom/icons";

function GameImage({ src, alt }: { src: string; alt: string }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    if (!src || error) {
        return <div className="w-full h-48 bg-muted" />;
    }

    return (
        <div className="relative w-full h-48">
            {!loaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={cn(
                    "w-full h-48 object-cover transition-opacity duration-500",
                    loaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
        </div>
    );
}

interface GameStats {
    visits: number;
    playing: number;
    favorites: number;
}

function formatCount(n: number): string {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toString();
}

interface Props {
    title: string;
    universeID: number;
    href: string;
    description: string;
    released: boolean;
    image: string;
    className?: string;
    role: number;
    stats?: GameStats;
}

export function GameCard({
    title,
    universeID,
    href,
    description,
    released,
    image,
    className,
    role,
    stats,
}: Props) {
    const roles = [
        {
            id: 1,
            name: "Owner/Developer",
        },
        {
            id: 2,
            name: "Developer",
        },
        {
            id: 3,
            name: "Contributor",
        }
    ];
    const _role = roles.find((r) => r.id === role);

    return (
        <div
            className={cn(
                "bg-background flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
                className,
                !released && "pointer-events-none grayscale-50"
            )}
        >
            {!released && (
                <div className="absolute group bg-linear-to-t from-neutral-900 to-slate-900/30 top-0 left-0 w-full h-full flex flex-col items-center justify-end z-50">
                    <p className="pb-0 text-muted-foreground text-lg opacity-0 group-hover:pb-10 group-hover:opacity-100 transition-all duration-400 ease-in-out">This game isn't released yet!</p>
                </div>
            )}

            <div className="relative shrink-0">
                {href ? (
                    <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <GameImage src={image} alt={title} />
                    </Link>
                ) : (
                    <div className="w-full h-48 bg-muted" />
                )}

                <div className="absolute top-2 right-2 flex flex-wrap gap-2 z-10">
                    <Badge className={cn(
                        "flex items-center gap-1.5 text-xs bg-black text-white cursor-default hover:bg-black"
                    )}>
                        {_role?.name}
                    </Badge>
                </div>
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold">{title}</h3>
                    </div>
                </div>
                {stats && (
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                            </span>
                            {formatCount(stats.playing)} playing
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Eye className="size-3" />
                            {formatCount(stats.visits)}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Heart className="size-3" />
                            {formatCount(stats.favorites)}
                        </span>
                    </div>
                )}
                <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                    <Markdown>{description}</Markdown>
                </div>

                <Link href={href} target="_blank" rel="noopener noreferrer" className="pt-10">
                    <button className={cn(
                        "w-full p-3 cursor-pointer bg-gray-500 rounded-sm hover:opacity-70 transition-all duration-100 ease-in-out",
                        !released && "opacity-70 cursor-not-allowed grayscale-50",
                        "flex items-center justify-center gap-2"
                    )}>
                        Play on Roblox <Icons.roblox className="size-4" />
                    </button>
                </Link>
            </div>
        </div>
    );
}