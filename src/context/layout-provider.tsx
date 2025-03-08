import {Accessor, Component, createContext, createSignal, JSX, JSXElement, onMount, Setter, useContext} from "solid-js";
import {Feature, FeatureCollection, MenuItemType} from "~/lib/store";

import {createStore, SetStoreFunction, Store} from "solid-js/store";


import {SessionUser} from "~/lib/session";
import {Extent} from "ol/extent";
import {IconCategories, IconContents, IconPlaces, IconProfile, IconProps, IconVendors} from "~/components/ui/svg";



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

    const [currentUser, setCurrentUser] = createStore<SessionUser>()
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
        {title: "profile", href: "/profile", icon: IconProfile},
        {title: "vendors", href: "/vendors", icon: IconVendors},
        {title: "places", href: "/places", icon: IconPlaces},
        {title: "contents", href: "/contents", icon: IconContents},
        {title: "categories", href: "/categories", icon: IconCategories}
    ]

    const apps: MenuItemType[] = [
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