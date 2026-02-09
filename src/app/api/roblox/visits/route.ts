/**
 * @description This file contains the API route for fetching Roblox visits data. 🗣️🔥
 */

import { NextResponse } from "next/server";


// Globals
const ROBLOX_USER_ID = process.env.ROBLOX_USER_ID!;
const REQUIRED_RANK = parseInt(process.env.MINIMUM_RANK_REQUIRED!);


// Helpers
/**
 *
 */
async function robloxFetch<T>(url: string): Promise<T> {
    const res = await fetch(url, {
        headers: {
            "Accept": "application/json",
        },
        next: {
            revalidate: 3600,
        }
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data from Roblox API: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

/**
 *
 */
async function getContributedGroups() {
    const groupsData = await robloxFetch<{
        data: [
            {
                group: {
                    id: number;
                    name: string;
                    description: string;
                },
                role: {
                    id: number;
                    name: string;
                    rank: number;
                }
            }
        ]
    }>(`https://groups.roblox.com/v1/users/${ROBLOX_USER_ID}/groups/roles`);

    let result = [];

    for (const data of groupsData.data) {
        if (data.role.rank >= REQUIRED_RANK) {
            result.push({
                id: data.group.id,
                name: data.group.name,
                description: data.group.description,
            });
        }
    }

    return result;
}

/**
 *
 */
async function getGroupGames(groupId: number, cursor: string | null = null, accumulatedResults: any[] = []): Promise<any[]> {
    const gamesData = await robloxFetch<{
        previousPageCursor: string | null;
        nextPageCursor: string | null;
        data: {
            id: number;
            name: string;
            description: string;
            rootPlace: {
                id: number;
                type: string;
            },
            placeVisits: number;
        }[];
    }>(`https://games.roblox.com/v2/groups/${groupId}/gamesv2?accessFilter=Public&cursor=${cursor ? cursor : ""}&limit=100&sortOrder=Desc`);

    let result = [];
    for (const game of gamesData.data) {
        if (game.placeVisits > 0) {
            result.push({
                id: game.id,
                name: game.name,
                description: game.description,
                rootPlaceId: game.rootPlace.id,
                placeVisits: game.placeVisits,
            });
        }
    }
    accumulatedResults = accumulatedResults.concat(result);

    if (gamesData.nextPageCursor) {
        return await getGroupGames(groupId, gamesData.nextPageCursor, accumulatedResults);
    } else {
        return accumulatedResults;
    }
}


// Route handler
export async function GET() {
    try {
        const groups = await getContributedGroups();
        let allContributedVisits = 0;
        let allGames = [];

        for (const group of groups) {
            const games = await getGroupGames(group.id);
            for (const game of games) {
                allGames.push(game);
                allContributedVisits += game.placeVisits;
            }
        }

        return NextResponse.json({
            userID: ROBLOX_USER_ID,
            totalContributedVisits: allContributedVisits,
        });
    } catch (error) {
        console.error("Error fetching Roblox visits data:", error);
        return NextResponse.json({ error: "Failed to fetch Roblox visits data" }, { status: 500 });
    }
}