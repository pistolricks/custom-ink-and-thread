import {query, redirect} from "@solidjs/router";
import {baseApi, getUserToken} from "~/lib/server";


export const getCategory = query(async (category: string)  => {
    "use server";

    const response = await fetch(`${baseApi}/apparel/category/${category}`, {

    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "category")

