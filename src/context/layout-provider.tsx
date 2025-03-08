import {Accessor, Component, createContext, createSignal, JSX, JSXElement, onMount, Setter, useContext} from "solid-js";
import {Feature, FeatureCollection, MenuItemType} from "~/lib/store";

import {createStore, SetStoreFunction, Store} from "solid-js/store";


import {SessionUser} from "~/lib/session";
import {Extent} from "ol/extent";
import {
    IconCategories,
    IconCircleCheck,
    IconContents,
    IconMail,
    IconPlaces,
    IconProfile,
    IconVendors
} from "~/components/ui/svg";



type POSITION = [number, number] | undefined

type LayoutType = {
    currentUser: Store<SessionUser>
    setCurrentUser: SetStoreFunction<SessionUser>
    getStoreCollection: Store<FeatureCollection>
    setStoreCollection: SetStoreFunction<FeatureCollection>
    getMyLocation: Accessor<Feature | undefined>
    setMyLocation: Setter<Feature | undefined>
    getViewbox: Accessor<Extent | undefined>
    setViewbox: Setter<Extent | undefined>
    getPosition: Accessor<POSITION>
    setPosition: Setter<POSITION>
    getHeight: Accessor<number>
    getIsDesktop: Accessor<boolean>
    getQuery: Accessor<string>
    setQuery: Setter<string>
    menu: MenuItemType[]
    apps: MenuItemType[]
}

let headerHeight = import.meta.env.VITE_HEADER_HEIGHT
let footerHeight = import.meta.env.VITE_FOOTER_HEIGHT


export const LayoutContext = createContext<LayoutType>();

export function LayoutProvider(props: { children: JSX.Element }) {

    const [currentUser, setCurrentUser] = createStore<SessionUser>({
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
    const [getMyLocation, setMyLocation] = createSignal<Feature | undefined>(undefined)
    const [getStoreCollection, setStoreCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })


    const [getPosition, setPosition] = createSignal<POSITION>(undefined)

    const [getViewbox, setViewbox] = createSignal<Extent | undefined>(undefined)
    const [getHeight, setHeight] = createSignal(0)
    const [getQuery, setQuery] = createSignal("")

    const handleHeight = () => {
        setHeight(() => window.innerHeight - (headerHeight) - (footerHeight))
        setIsDesktop(window.innerWidth >= 726)

        console.log('height', getHeight())
    }

    const [getIsDesktop, setIsDesktop] = createSignal(false)


    const menu: MenuItemType[] = [
        {title: "New Arrivals", href: "/new-arrivals", icon: IconVendors},
        {title: "apparel", href: "/apparel", icon: IconVendors},
        {title: "Design Lab", href: "/design-lab", icon: IconVendors},

    ]

    const apps: MenuItemType[] = [
        {title: "reversibles", href: "/reversibles"},
        {title: "schools", href: "/schools"},
        {title: "activewear", href: "/activewear"},
        {title: "outerware", href: "/outerware"},
        {title: "workwear", href: "/workwear"},
        {title: "uniforms", href: "/uniform"},
        {title: "brands", href: "/vendors"},
    ]


    onMount(() => {
        handleHeight();

    })

    return (
        <LayoutContext.Provider value={{
            currentUser,
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