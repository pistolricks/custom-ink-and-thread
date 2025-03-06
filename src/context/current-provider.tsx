import {createContext, createEffect, createMemo, JSXElement, useContext} from "solid-js";
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {handleUserName} from "~/lib/utils";

import {Feature, FeatureCollection} from "~/lib/store";
import {createStore, Store} from "solid-js/store";
import {SessionUser, updateSessionCurrentLocation, updateSessionData, updateSessionUser} from "~/lib/session";

type CurrentContextType = {
    current: [Store<SessionUser>, Store<Feature>, Store<FeatureCollection>, { handleUser: () => void }, {
        handleLocation: () => void
    }, { handleCollection: () => void }]
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


    const userData = createMemo(async() => {
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
        let session = await updateSessionData(currentUser)
        console.log(session)
        return currentUser;
    })

    const locationData = createMemo(() => {
        let l = location();
        if(!l)return
       storeLocation(l)
        return currentLocation;
    })


    const collectionData = createMemo(() => {
        let c = collection();
        if(!c)return
        storeCollection(c);
        return currentCollection;
    })


    const current: [Store<SessionUser>, Store<Feature>, Store<FeatureCollection>, { handleUser: () => void }, {
        handleLocation: () => void
    }, { handleCollection: () => void }] = [
        currentUser,
        currentLocation,
        currentCollection,
        {
            handleUser() {
                return currentUser
            }
        },
        {
            handleLocation() {
                return currentLocation
            }
        },
        {
            handleCollection() {
                return currentCollection


                //  let c = collection();
                //  if (!c) return
                //  storeCollection(c);
            }
        }
    ]


    createEffect(async() => {
        console.log(user, await userData())
        console.log(location, locationData())
        console.log(collection, collectionData())
    })

    return (
        <CurrentContext.Provider value={{
            current
        }}>
            {props.children}
        </CurrentContext.Provider>
    );
}

export function useCurrentContext() {
    return useContext(CurrentContext)!;
}