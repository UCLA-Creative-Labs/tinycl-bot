/* Registers commands for a test guild, specified by env var TEST_GUILD_ID */
import { deployCommands } from "./deploy-commands";
import dotenv from "dotenv";

dotenv.config();

const { TEST_GUILD_ID } = process.env;

if (!TEST_GUILD_ID) {
    throw new Error("Missing environmental variable: TEST_GUILD_ID");
}

deployCommands( { guildId: TEST_GUILD_ID } );