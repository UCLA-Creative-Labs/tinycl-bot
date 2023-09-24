import * as cma from "contentful-management";
import * as cdn from "contentful";
import { config } from "../config";

export const clientCMA = cma.createClient({
    accessToken: config.CMA_TOKEN
});

export const clientCDN = cdn.createClient({
    accessToken: config.CDN_TOKEN,
    space: config.SPACE_ID,
    environment: "master"
});