import {Accessor, createContext, createEffect, createSignal, JSXElement, Setter, useContext} from "solid-js";
import type {Session} from "vinxi/http";
import {LayoutContext} from "~/context/layout-provider";
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {handleUserName} from "~/lib/utils";
import {SessionUser} from "~/lib/session";
import {Feature, FeatureCollection, Point, Properties} from "~/lib/store";
import {createStore, SetStoreFunction, Store} from "solid-js/store";

type SessionContextType = {
    currentUser: Store<SessionUser>
    collection: Store<FeatureCollection>
    currentLocation: Store<Feature>
}

export const SessionContext = createContext<SessionContextType>();

export function SessionProvider(props: {
    user: USER | undefined,
    token: AUTHENTICATION_TOKEN | undefined,
    session: Record<string, any>;
    folder: string | undefined,
    location: Feature | undefined,
    children: JSXElement;
}) {


    const [currentUser, storeCurrentUser] = createStore<SessionUser>()
    const [currentLocation, storeLocation] = createStore<Feature>({
        type: "Feature",
    })
    const [collection, storeCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })


    const setSession = (s: Record<string, any>, u?: USER, a?: AUTHENTICATION_TOKEN, f?: string, l?: Feature) => {

        let sess = s.update((su: SessionUser) => {
            su.id = u?.id;
            su.name = u?.name;
            su.email = u?.email;
            su.display_name = handleUserName(u?.name)
            su.activated = u?.activated;
            su.created_at = u?.created_at;
            su.token = a?.token;
            su.expiry = s?.expiry;
            su.folder = f;
            su.current_location = l
        })

        storeCurrentUser(() => sess)
        storeLocation(() => sess.current_location)

    }


    createEffect(() => {
        setSession(props.session, props.user, props.token, props.folder, props.location)
    })


    return (
        <SessionContext.Provider value={{
            currentUser,
            currentLocation,
            collection
        }}>
            {props.children}
        </SessionContext.Provider>
    );
}

export function useSessionContext() {
    return useContext(SessionContext)!;
}
