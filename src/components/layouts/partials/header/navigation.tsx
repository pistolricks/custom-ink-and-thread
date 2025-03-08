import {NavigationMenu, type Orientation,} from "@kobalte/core/navigation-menu";
import {Component, createSignal, JSXElement} from "solid-js";

import {ChevronDownIcon} from "~/components/ui/svg";
import style from "~/components/layouts/partials/header/nav.module.css";
import {A} from "@solidjs/router";

export function Navigation() {
    const [orientation, setOrientation] = createSignal<Orientation>("horizontal");

    const navigation = [
        {title: "Shop", path: "/shop"},
        {title: "Spirit", path: "/spirit"},
        {title: "Custom", path: "/custom"},
        {title: "Contact", path: "/contact"},
    ]


    return (
        <>
            <NavigationMenu
                class={`grid grid-cols-3 ${style["navigation-menu__root"]}`} orientation={orientation()}>


                <NavigationMenu.Menu>
                    <div class="flex">
                        <div class="relative flex bg-transparent">
                            <NavigationMenu.Trigger
                                class={style["navigation-menu__trigger"]}>
                                SHOP

                            </NavigationMenu.Trigger>
                        </div>
                        <NavigationMenu.Portal>
                            <NavigationMenu.Content
                                class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>
                                <MenuLayout/>
                            </NavigationMenu.Content>
                        </NavigationMenu.Portal>
                    </div>
                </NavigationMenu.Menu>

                <NavigationMenu.Menu>
                    <div class="flex">
                        <div class="relative flex bg-transparent">
                            <NavigationMenu.Trigger
                                class={style["navigation-menu__trigger"]}>
                                CUSTOM APPAREL
                            </NavigationMenu.Trigger>
                        </div>
                        <NavigationMenu.Portal>
                            <NavigationMenu.Content
                                class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>
                                <MenuLayout/>
                            </NavigationMenu.Content>
                        </NavigationMenu.Portal>
                    </div>
                </NavigationMenu.Menu>


                <NavigationMenu.Menu>
                    <div class="flex">
                        <div class="relative flex bg-transparent">
                            <NavigationMenu.Trigger
                                class={style["navigation-menu__trigger"]}>
                                DESIGN LAB
                            </NavigationMenu.Trigger>
                        </div>
                        <NavigationMenu.Portal>
                            <NavigationMenu.Content
                                class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>
                                <MenuLayout/>
                            </NavigationMenu.Content>
                        </NavigationMenu.Portal>
                    </div>
                </NavigationMenu.Menu>

                <NavigationMenu.Viewport class={style["navigation-menu__viewport"]}>
                    <NavigationMenu.Arrow class={style["navigation-menu__arrow"]}/>
                </NavigationMenu.Viewport>
            </NavigationMenu>


            <div style="height: 2rem;"/>


        </>
    );
}

export default Navigation;

export function AnimationExample() {
    return (
        <>
            <NavigationMenu class={style["navigation-menu__root"]}>
                <NavigationMenu.Menu>
                    <NavigationMenu.Trigger
                        class={style["navigation-menu__trigger"]}>
                        Learn{" "}

                    </NavigationMenu.Trigger>
                    <NavigationMenu.Portal>
                        <NavigationMenu.Content
                            class={`${style["navigation-menu__content"]} ${style["content-1"]} ${style["content-empty"]}`}
                        >
                            Learn Content
                        </NavigationMenu.Content>
                    </NavigationMenu.Portal>
                </NavigationMenu.Menu>

                <NavigationMenu.Menu>
                    <NavigationMenu.Trigger
                        class={style["navigation-menu__trigger"]}>
                        Overview{" "}
                        <NavigationMenu.Icon
                            class={style["navigation-menu__trigger-indicator"]}
                        >
                            <ChevronDownIcon/>
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Portal>
                        <NavigationMenu.Content
                            class={`${style["navigation-menu__content"]} ${style["content-2"]} ${style["content-empty"]}`}
                        >
                            Overview Content
                        </NavigationMenu.Content>
                    </NavigationMenu.Portal>
                </NavigationMenu.Menu>

                <NavigationMenu.Trigger
                    class={style["navigation-menu__trigger"]}
                    as="a"
                    href="https://github.com/kobaltedev/kobalte"
                    target="_blank"
                >
                    GitHub
                </NavigationMenu.Trigger>

                <NavigationMenu.Viewport class={style["navigation-menu__viewport"]}>
                    <NavigationMenu.Arrow class={style["navigation-menu__arrow"]}/>
                </NavigationMenu.Viewport>
            </NavigationMenu>
        </>
    );
}


const MenuLayout: Component<{
    children?: JSXElement;
}> = props => {

    return (
        <div class="absolute inset-x-0  top-0 text-sm text-gray-500">


            <div class="relative bg-white">
                <div class="mx-auto max-w-7xl px-8">
                    <div class="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                        <div class="group relative">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg"
                                alt="Model wearing minimalist watch with black wristband and white watch face."
                                class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
                            <a href="#" class="mt-4 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Accessories
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                        </div>
                        <div class="group relative">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg"
                                alt="Model opening tan leather long wallet with credit card pockets and cash pouch."
                                class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
                            <a href="#" class="mt-4 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Carry
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};




const MenuLink: Component<{ label: string, href: string, src: string }> = props => {
    const label = () => props.label;
    const href = () => props.href;
    const src = () => props.src;


    return (
        <div class="group relative">
            <img src={src()} alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                 class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
            <A href={href()} class="mt-4 block font-medium text-gray-900">
                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                {label()}
            </A>
            <p aria-hidden="true" class="mt-1">Shop now</p>
        </div>
    );
}