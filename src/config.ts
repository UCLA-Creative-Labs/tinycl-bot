/* Imports environmental variables */
import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, CMA_TOKEN, SPACE_ID, CDN_TOKEN } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !CMA_TOKEN || !SPACE_ID || !CDN_TOKEN) {
    throw new Error("Missing environmental variables");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    CMA_TOKEN,
    SPACE_ID,
    CDN_TOKEN
}