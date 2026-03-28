import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const userIdsParam = request.nextUrl.searchParams.get("userIds");

    if (!userIdsParam) {
        return NextResponse.json({ error: "Missing userIds parameter" }, { status: 400 });
    }

    const userIds = userIdsParam.split(",").map(Number).filter((id) => id > 0);

    if (userIds.length === 0) {
        return NextResponse.json({ data: {} });
    }

    try {
        const res = await fetch(
            `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userIds.join(",")}&size=420x420&format=Png&isCircular=false`,
            {
                headers: { "Accept": "application/json" },
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error(`Roblox thumbnails API error: ${res.status}`);
        }

        const data: { data: { targetId: number; state: string; imageUrl: string }[] } =
            await res.json();

        const result: Record<string, string> = {};
        for (const entry of data.data) {
            if (entry.state === "Completed") {
                result[entry.targetId.toString()] = entry.imageUrl;
            }
        }

        return NextResponse.json({ data: result });
    } catch (error) {
        console.error("Error fetching Roblox avatars:", error);
        return NextResponse.json({ error: "Failed to fetch avatars" }, { status: 500 });
    }
}
