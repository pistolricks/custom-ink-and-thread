import {createContext, createEffect, createSignal, JSXElement, onMount, useContext} from "solid-js";
import {USER} from "~/lib/db";
import {handleUserName} from "~/lib/utils";

import {Feature, FeatureCollection} from "~/lib/store";
import {createStore, Store} from "solid-js/store";
import {SessionUser, updateSessionData} from "~/lib/session";

export type CurrentContextType = {
    current: {
        user: Store<SessionUser>,
        location?: Store<Feature>,
        collection?: Store<FeatureCollection>,
        session: any
    },
    status: string
}

export const CurrentContext = createContext<CurrentContextType>();

export function CurrentProvider(
    props: {
        user: SessionUser | USER | undefined,
        token: { token: string | undefined, expiry: string | undefined }
        folder: string | undefined,
        location: Feature | undefined,
        collection: FeatureCollection | undefined,
        children: JSXElement;
    }) {

    const [getSession, setSession] = createSignal({})
    const [getStatus, setStatus] = createSignal("unauthenticated")

    const [currentUser, storeCurrentUser] = createStore<SessionUser>()
    const [currentLocation, storeLocation] = createStore<Feature>({
        type: "Feature",
    })
    const [currentCollection, storeCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })
    const user = () => props.user ?? undefined;
    const token = () => props.token ?? undefined;
    const folder = () => props.folder ?? undefined;
    const location = () => props.location ?? undefined;
    const collection = () => props.collection ?? undefined;

    const handleSession = (async () => {
        storeCurrentUser({
            id: user()?.id,
            name: user()?.name,
            email: user()?.email,
            display_name: handleUserName(user()?.name),
            activated: user()?.activated,
            created_at: user()?.created_at,
            token: token()?.token,
            expiry: token()?.expiry,
            folder: folder(),
            current_location: location()
        })
        let currentSession = await updateSessionData(currentUser)
        console.log(currentSession)
        setSession(currentSession)
        setStatus("authenticated")
        return currentSession;

    })

    const handleLocation = (async () => {
        let l = location();
        if (!l) return
        storeLocation(l)
        return currentLocation;
    })


    const handleCollection = (async () => {
        let c = collection();
        if (!c) return
        storeCollection(c);
        return currentCollection;
    })

    onMount(async () => {
        await handleSession();
        await handleLocation();
        await handleCollection();

    })


    createEffect(() => {
        console.log("getSession", getSession())
    })

    return (
        <CurrentContext.Provider value={{
            current: {
                user: currentUser,
                location: currentLocation,
                collection: currentCollection,
                session: getSession()
            },
            status: getStatus()
        }}>
            {props.children}
        </CurrentContext.Provider>
    );
}

export function useCurrentContext() {
    return useContext(CurrentContext)!;
}