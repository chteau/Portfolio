"use client";

import { GameCard } from "@/components/custom/game-card";
import { DATA } from "@/data/resume";
import { Marquee } from "@/components/ui/marquee";
import { useEffect, useState } from "react";

interface GameStats {
    visits: number;
    playing: number;
    favorites: number;
}

export default function GamesSection() {
    const [thumbnailUrls, setThumbnailUrls] = useState<Record<string, string>>({});
    const [gameStats, setGameStats] = useState<Record<string, GameStats>>({});

    useEffect(() => {
        async function loadGameData() {
            const universeIds = DATA.games.map((g) => g.universeID).join(",");
            const [thumbnailsRes, statsRes] = await Promise.allSettled([
                fetch(`/api/roblox/thumbnails?universeIds=${universeIds}`).then((r) => r.json()),
                fetch(`/api/roblox/gamestats?universeIds=${universeIds}`).then((r) => r.json()),
            ]);
            if (thumbnailsRes.status === "fulfilled") setThumbnailUrls(thumbnailsRes.value.data ?? {});
            if (statsRes.status === "fulfilled") setGameStats(statsRes.value.data ?? {});
        }

        loadGameData();
    }, []);

    return (
        <section id="games">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Games</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Games I have contributed on or made</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            Here's a selection of some games I worked on or even made.
                        </p>
                    </div>
                </div>
                <div className="sm:block hidden">
                    <Marquee pauseOnHover className="[--duration:60s]" repeat={3}>
                        {DATA.games.map((game) => (
                            <GameCard
                                href={game.href}
                                key={game.title}
                                title={game.title}
                                description={game.description}
                                image={thumbnailUrls[game.universeID.toString()]}
                                released={game.released}
                                universeID={game.universeID}
                                className="w-90"
                                role={game.role}
                                stats={gameStats[game.universeID.toString()]}
                            />
                        ))}
                    </Marquee>
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr sm:hidden">
                    {DATA.games.map((game) => (
                        <GameCard
                            href={game.href}
                            key={game.title}
                            title={game.title}
                            description={game.description}
                            image={thumbnailUrls[game.universeID.toString()]}
                            released={game.released}
                            universeID={game.universeID}
                            className="w-90"
                            role={game.role}
                            stats={gameStats[game.universeID.toString()]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
