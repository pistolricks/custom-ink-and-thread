import {action, query, redirect} from "@solidjs/router";
import {activateUser, getUserDetails, getUserToken, login, logout, register, resendActivateEmail,} from "~/lib/server";
import {getSessionUser, SessionUser} from "~/lib/session";
import {capitalizeFirstLetter} from "~/lib/utils";
import {SetStoreFunction} from "solid-js/store";

export const getUser = query(async () => {
    "use server";
    let userData = (await getSessionUser()) as SessionUser | undefined;
    console.log("getUser", userData)
    if(!userData) return;
    return console.log("user", userData);
}, "user")

export const getCurrentUser = query(async (setCurrentUser: SetStoreFunction<SessionUser>) => {
    let userData = (await getSessionUser()) as SessionUser;
    if(!userData?.id) {
        setCurrentUser({
            id: undefined,
            name: undefined,
            email: undefined,
            display_name: undefined,
            activated: undefined,
            created_at: undefined,
            token: undefined,
            expiry: undefined,
            folder: undefined,
            current_location: undefined,
        })
    } else {
       setCurrentUser(userData)
    }
    return userData;
}, "user")


export const getUserDetailsHandler = action(async (data: FormData) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    const userInput = {
        email: String(data.get("email")),
        token: token.token,
    }
    let res = await getUserDetails(userInput)
    console.log("getUserDetailsHandler", res)
    return res;
})


export const registerUserHandler = action(async (data: FormData) => {
    "use server";

    let fName = String(data.get("firstName"));
    let lName = String(data.get("lastName"));

    let firstName = fName.toLowerCase();
    let lastName = lName.toLowerCase();

    let name = capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName)
    let email = String(data.get("email"));

    const userInput = {
        name: name,
        email: email.toLowerCase(),
        password: String(data.get("password")),
    }
    let res = await register(userInput)
    if (res.user?.id) throw redirect("/activate")
    else return res;
})

export const activateUserHandler = async (token: string) => {
    "use server";
    const activateInput = {
        token: token,
    }
    return activateUser(activateInput)
}

export const resendActivateEmailHandler = action(async (data: FormData) => {
    "use server";
    const resendInput = {
        email: String(data.get("email")),
    }
    return resendActivateEmail(resendInput)
})

export const loginUserHandler = action(async (data: FormData) => {
    "use server";
    const userInput = {
        email: String(data.get("email")),
        password: String(data.get("password")),
    }
    return await login(userInput)
})

export const logoutUserHandler = action(async () => {
    "use server";
    return await logout()
})
