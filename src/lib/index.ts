import {query, redirect} from "@solidjs/router";
import {getUserToken} from "~/lib/server";

export * from './server'

export type AUTHENTICATION_TOKEN = {
    token: string;
    expiry: string;
}

export const redirectTo = (path?: string) => {
    let urlPath = `/${path ?? ``}`
    throw redirect(urlPath)
}