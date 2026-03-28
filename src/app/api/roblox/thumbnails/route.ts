import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const universeIdsParam = request.nextUrl.searchParams.get("universeIds");

    if (!universeIdsParam) {
        return NextResponse.json({ error: "Missing universeIds parameter" }, { status: 400 });
    }

    try {
        const res = await fetch(
            `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeIdsParam}&countPerUniverse=1&defaults=true&size=768x432&format=Webp&isCircular=false`,
            {
                headers: { "Accept": "application/json" },
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error(`Roblox thumbnails API error: ${res.status}`);
        }

        const data: {
            data: {
                universeId: number;
                thumbnails: { imageUrl: string; state: string }[];
            }[];
        } = await res.json();

        const result: Record<string, string> = {};
        for (const game of data.data) {
            const thumbnail = game.thumbnails?.find((t) => t.state === "Completed");
            if (thumbnail) {
                result[game.universeId.toString()] = thumbnail.imageUrl;
            }
        }

        return NextResponse.json({ data: result });
    } catch (error) {
        console.error("Error fetching Roblox thumbnails:", error);
        return NextResponse.json({ error: "Failed to fetch thumbnails" }, { status: 500 });
    }
}
