import {createContext, createEffect, JSXElement, useContext} from "solid-js";
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {handleUserName} from "~/lib/utils";

import {Feature, FeatureCollection} from "~/lib/store";
import {createStore, Store} from "solid-js/store";
import {SessionUser} from "~/lib/session";

type CurrentContextType = {
    current: [Store<SessionUser>, Store<Feature>,Store<FeatureCollection>, { handleUser: () => void },{ handleLocation: () => void }, { handleCollection: () => void }]
}

export const CurrentContext = createContext<CurrentContextType>();

export function CurrentProvider(props: {
    user: USER | SessionUser,
    token: AUTHENTICATION_TOKEN,
    folder: string,
    location: Feature,
    collection: FeatureCollection,
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
    const user = () => props.user
    const token = () => props.token
    const folder = () => props.folder
    const location = () => props.location
    const collection = () => props.collection


    const current: [Store<SessionUser>, Store<Feature>, Store<FeatureCollection>, { handleUser: () => void }, { handleLocation: () => void }, { handleCollection: () => void }] = [
        currentUser,
        currentLocation,
        currentCollection,
        {
            handleUser() {
                storeCurrentUser({
                    id: user()?.id,
                    name: user()?.name,
                    email: user()?.email,
                    display_name: handleUserName(user()?.name),
                    activated: user()?.activated,
                    created_at: user()?.created_at,
                    token: token()?.token,
                    folder: folder(),
                    current_location: location()
                })
            }
        },
        {
            handleLocation() {
                storeLocation(location()!);
            }
        },
        {
            handleCollection() {
                storeCollection(collection());
            }
        }
    ]





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
