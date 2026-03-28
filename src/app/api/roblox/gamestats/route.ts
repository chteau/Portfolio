import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const universeIdsParam = request.nextUrl.searchParams.get("universeIds");

    if (!universeIdsParam) {
        return NextResponse.json({ error: "Missing universeIds parameter" }, { status: 400 });
    }

    try {
        const res = await fetch(
            `https://games.roblox.com/v1/games?universeIds=${universeIdsParam}`,
            {
                headers: { "Accept": "application/json" },
                next: { revalidate: 300 },
            }
        );

        if (!res.ok) {
            throw new Error(`Roblox games API error: ${res.status}`);
        }

        const data: {
            data: {
                id: number;
                description: string;
                visits: number;
                playing: number;
                favoritedCount: number;
            }[];
        } = await res.json();

        const result: Record<string, { visits: number; playing: number; favorites: number; description: string }> = {};
        for (const game of data.data) {
            result[game.id.toString()] = {
                visits: game.visits,
                playing: game.playing,
                favorites: game.favoritedCount,
                description: game.description ?? "",
            };
        }

        return NextResponse.json({ data: result });
    } catch (error) {
        console.error("Error fetching Roblox game stats:", error);
        return NextResponse.json({ error: "Failed to fetch game stats" }, { status: 500 });
    }
}
