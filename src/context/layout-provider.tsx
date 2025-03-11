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
    category1: MenuItemType[]
    category2: MenuItemType[]
    category3: MenuItemType[]
    brand1: MenuItemType[]
    brand2: MenuItemType[]
    brand3: MenuItemType[]
    brand4: MenuItemType[]
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



    const category1: MenuItemType[] = [
        {title: "T-Shirts", href: "t-shirts"},
        {title: "Polos/Knits", href: "polos_knits"},
        {title: "Sweatshirts/Fleece", href: "sweatshirts_fleece"},
        {title: "Woven/Dress Shirts", href: "woven_dress-shirts"},
        {title: "Women's", href: "womens"},
        {title: "Tall", href: "tall"},
        {title: "Bottoms", href: "bottoms"},
    ]

    const category2: MenuItemType[] = [
        {title: "Activewear", href: "activewear"},
        {title: "Workwear", href: "workwear"},
        {title: "Personal Protection", href: "personal-protection"},
        {title: "Young Men", href: "young-men"},
        {title: "Juniors", href: "juniors"},
        {title: "Youth", href: "youth"},
    ]

    const category3: MenuItemType[] = [
        {title: "Caps", href: "caps"},
        {title: "Bags", href: "bags"},
        {title: "Accessories", href: "accessories"},
    ]


    const brand1: MenuItemType[] = [
        {title: "A4", href: "a4"},
        {title: "Allmade", href: "allmade"},
        {title: "American Apparel", href: "american-apparel"},
        {title: "BELLA+CANVAS", href: "bella+canvas"},
        {title: "Brooks Brothers", href: "brooks-brothers"},
        {title: "Bulwark", href: "bulwark"},
        {title: "Carhartt", href: "carhartt"},
        {title: "Champion", href: "champion"},
    //    {title: "Comfort Colors", href: "comfort-colors"},
   //     {title: "CornerStone", href: "cornerstone"},
   //     {title: "Cotopaxi", href: "cotopaxi"},
   //     {title: "District", href: "district"},
   //     {title: "Eddie Bauer", href: "eddie-bauer"},



    ]

    const brand2: MenuItemType[] = [
        {title: "Gildan", href: "gildan"},
        {title: "Hanes", href: "hanes"},
        {title: "Jerzees", href: "jerzees"},
        {title: "Mercer+Mettle", href: "mercer+mettle"},
        {title: "New Era", href: "new era"},
        {title: "Next Level Apparel", href: "next-level-apparel"},
        {title: "Nike", href: "nike"},
    //    {title: "OGIOOutdoor", href: "ogiooutdoor"},
    //    {title: "ResearchPort & CompanyPort", href: "researchport-&-companyport"},
    //    {title: "Authority", href: "authority"},
    //    {title: "Rabbi", href: "rabbi"},
    ]

    const brand3: MenuItemType[] = [
        {title: "Skins", href: "skins"},
        {title: "Re", href: "re"},
        {title: "Kap", href: "kap"},
        {title: "Russel", href: "russel"},
        {title: "Outdoors", href: "outdoors"},
        {title: "Spacecraft", href: "spacecraft"},
    //    {title: "Sport - Tek", href: "sport---tek"},
    //    {title: "Stanley / Stella", href: "stanley-/-stella"},
    //    {title: "tentree", href: "tentree"},
    ]

    const brand4: MenuItemType[] = [
        {title: "The North Face", href: "the-north-face"},
        {title: "Tommy Bahamas", href: "tommy-bahama"},
        {title: "TravisMathew", href: "travismathew"},
        {title: "Volunteer", href: "volunteer"},
        {title: "Knitwear", href: "knitwear"},
        {title: "Wink", href: "wink"},
    ]

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
            category1,
            category2,
            category3,
            brand1,
            brand2,
            brand3,
            brand4,
        }}>
            {props.children}
        </LayoutContext.Provider>
    );
}

export function useLayoutContext() {
    return useContext(LayoutContext)!
}