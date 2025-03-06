import {Accessor, createContext, createEffect, createSignal, JSX, onMount, Setter, useContext} from "solid-js";
import {Feature, FeatureCollection} from "~/lib/store";

import {createStore, SetStoreFunction, Store} from "solid-js/store";

import ProfileIcon from '~/lib/icons/profile.svg'
import VendorsIcon from '~/lib/icons/vendors.svg'
import PlacesIcon from '~/lib/icons/places.svg'
import ContentsIcon from '~/lib/icons/contents.svg'
import CategoriesIcon from '~/lib/icons/categories.svg'
import {SessionUser} from "~/lib/session";
import {Extent} from "ol/extent";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {AccessorWithLatest} from "@solidjs/router";

export type MenuItem = {
    title: string;
    href: string;
    description?: string;
    icon?: string;
}

type POSITION = [number, number] | undefined

type LayoutType = {
    storedCurrentUser: Store<SessionUser>
    setCurrentUser: SetStoreFunction<SessionUser>
    getStoreCollection: Store<FeatureCollection>
    setStoreCollection: SetStoreFunction<FeatureCollection>
    getViewbox: Accessor<Extent | undefined>
    setViewbox: Setter<Extent | undefined>
    getMyLocation: Accessor<Feature | undefined>
    setMyLocation: Setter<Feature | undefined>
    getPosition: Accessor<POSITION>
    setPosition: Setter<POSITION>
    getHeight: Accessor<number>
    getIsDesktop: Accessor<boolean>
    getQuery: Accessor<string>
    setQuery: Setter<string>
    menu: MenuItem[]
    apps: MenuItem[]
}

let headerHeight = import.meta.env.VITE_HEADER_HEIGHT
let footerHeight = import.meta.env.VITE_FOOTER_HEIGHT


export const LayoutContext = createContext<LayoutType>();

export function LayoutProvider(props: {
    children: JSX.Element,
    height?: number,
    width?: number,
    authentication_token?: AccessorWithLatest<AUTHENTICATION_TOKEN | undefined>
    currentLocation?: Feature,
    boundingBox?: Extent,
    collection?: AccessorWithLatest<FeatureCollection | undefined>
    query?: string
}) {


    const authentication_token = () => props.authentication_token;
    const currentLocation = () => props.currentLocation;
    const collection = () => props.collection;
    const query  = () => props.query;

    const height = () => props.height;
    const width = () => props.width;

    const [storedCurrentUser, setCurrentUser] = createStore<SessionUser>()


    const [getStoreCollection, setStoreCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })

    const [getPosition, setPosition] = createSignal<POSITION>(undefined)
    const [getMyLocation, setMyLocation] = createSignal<Feature | undefined>(undefined)
    const [getViewbox, setViewbox] = createSignal<Extent | undefined>(undefined)
    const [getHeight, setHeight] = createSignal(height() ?? 0)
    const [getQuery, setQuery] = createSignal("")

    createEffect(() => {
        console.log("getHeight", getHeight())
        /*

         setCurrentUser(() => ({
                 id: session.data.id,
                 name: session.data.name,
                 email: session.data.email,
                 display_name: handleUserName(session.data.name),
                 activated: session.data.activated,
                 created_at: session.data.created_at,
                 token: session.data.authentication_token?.token,
                 expiry: session.data.authentication_token?.expiry,
                 folder: session.data?.folder,
                 current_location: session.data?.current_location
             })
         )

         setMyLocation(() => session.data?.current_location)
         setPosition(() => session.data?.position)
         setQuery(() => session.data?.query)


         */
    })


    const handleHeight = () => {

        let h = height();
        if(!h) return;
        setHeight(() => h - (headerHeight) - (footerHeight))
        let w = width();
        if(!w) return;
        setIsDesktop(w >= 726)

        console.log('height', getHeight())
    }

    const [getIsDesktop, setIsDesktop] = createSignal(false)


    const menu: MenuItem[] = [
        {title: "profile", href: "/profile", icon: ProfileIcon},
        {title: "vendors", href: "/vendors", icon: VendorsIcon},
        {title: "places", href: "/places", icon: PlacesIcon},
        {title: "contents", href: "/contents", icon: ContentsIcon},
        {title: "categories", href: "/categories", icon: CategoriesIcon}
    ]

    const apps: MenuItem[] = [
        {title: "beauty", href: "/categories/beauty"},
        {title: "car wash", href: "/categories/car-wash"},
        {title: "cleaning", href: "/categories/cleaning"},
        {title: "entertainment", href: "/categories/entertainment"},
        {title: "handyman", href: "/categories/handyman"},
        {title: "homemade food", href: "/categories/homemade-food"},
    ]


    onMount(() => {
        handleHeight();

    })

    return (
        <LayoutContext.Provider value={{
            storedCurrentUser,
            setCurrentUser,
            getStoreCollection,
            setStoreCollection,
            getQuery,
            setQuery,
            getViewbox,
            setViewbox,
            getMyLocation,
            setMyLocation,
            getPosition,
            setPosition,
            getHeight,
            getIsDesktop,
            menu,
            apps,
        }}>
            {props.children}
        </LayoutContext.Provider>
    );
}

export function useLayoutContext() {
    return useContext(LayoutContext)!
}