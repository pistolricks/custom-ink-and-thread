import {NavigationMenu, type Orientation,} from "@kobalte/core/navigation-menu";
import {createSignal} from "solid-js";

import {ChevronDownIcon} from "~/components/icons";
import style from "~/components/layouts/partials/nav.module.css";
import NavMenuUi from "~/components/layouts/partials/nav-menu-ui";

export function Nav() {
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
                                <NavMenuUi/>
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
                                <NavMenuUi/>
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
                                <NavMenuUi/>
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

export default Nav;

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