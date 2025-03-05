import {
    NavigationMenu,
    type Orientation,
} from "@kobalte/core/navigation-menu";
import { RadioGroup } from "@kobalte/core/radio-group";
import { For, createSignal } from "solid-js";

import { ChevronDownIcon } from "~/components/icons";
import style from "~/components/layouts/partials/nav.module.css";
import radioStyle from "~/components/ui/radio-group/radio-group.module.css";
import {Col, Grid} from "~/components/ui/grid";
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {NavigationMenuContent} from "~/components/ui/navigation/navigation-menu-content";

export function Nav() {
    const [orientation, setOrientation] = createSignal<Orientation>("horizontal");

    const navigation = [
        { title: "Shop", path: "/shop" },
        { title: "Spirit", path: "/spirit" },
        { title: "Custom", path: "/custom" },
        { title: "Contact", path: "/contact" },
    ]


    return (
        <>
            <NavigationMenu
                class={style["navigation-menu__root" + "" ]}
                orientation={orientation()}
            >
                <NavigationMenu.Menu>
                    <NavigationMenu.Trigger class={style["navigation-menu__trigger"]}>
                        <span class={'text-gray-800'}>Custom Apparel</span>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Portal>
                    <NavigationMenu.Content
                        class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>

                    <NavigationMenu.Item class={'w-full'}>
                        <Grid cols={2} colsMd={2} class="w-full gap-2">
                            <Col span={2} spanMd={2} >
                                <img
                                    src="https://kobalte.dev/android-chrome-192x192.png"
                                    role="presentation"
                                    class={'size-full'}
                                    alt="Kobalte"
                                />

                            </Col>

                        </Grid>

                      </NavigationMenu.Item>
                    </NavigationMenu.Content>
                    </NavigationMenu.Portal>
                </NavigationMenu.Menu>

                <NavigationMenu.Menu>
                    <NavigationMenu.Trigger class={style["navigation-menu__trigger"]}>
                        <span class={'text-gray-800'}>Custom Apparel</span>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Portal>
                        <NavigationMenu.Content
                            class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>

                            <NavigationMenu.Item class={'w-full'}>
                                <Grid cols={2} colsMd={2} class="w-full gap-2">
                                    <Col span={2} spanMd={2} >
                                        <img
                                            src="https://kobalte.dev/android-chrome-192x192.png"
                                            role="presentation"
                                            class={'size-full'}
                                            alt="Kobalte"
                                        />

                                    </Col>

                                </Grid>

                            </NavigationMenu.Item>
                        </NavigationMenu.Content>
                    </NavigationMenu.Portal>
                </NavigationMenu.Menu>
                <NavigationMenu.Menu>
                    <NavigationMenu.Trigger class={style["navigation-menu__trigger"]}>
                        <span class={'text-gray-800'}>Custom Apparel</span>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Portal>
                        <NavigationMenu.Content
                            class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>

                            <NavigationMenu.Item class={'w-full'}>
                                <Grid cols={2} colsMd={2} class="w-full gap-2">
                                    <Col span={2} spanMd={2} >
                                        <img
                                            src="https://kobalte.dev/android-chrome-192x192.png"
                                            role="presentation"
                                            class={'size-full'}
                                            alt="Kobalte"
                                        />

                                    </Col>

                                </Grid>

                            </NavigationMenu.Item>
                        </NavigationMenu.Content>                   </NavigationMenu.Portal>
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
                    <NavigationMenu.Arrow class={style["navigation-menu__arrow"]} />
                </NavigationMenu.Viewport>
            </NavigationMenu>

            <div style="height: 2rem;" />


        </>
    );
}
export default Nav;
export function AnimationExample() {
    return (
        <>
            <NavigationMenu class={style["navigation-menu__root"]}>
                <NavigationMenu.Menu>
                    <NavigationMenu.Trigger class={style["navigation-menu__trigger"]}>
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
                    <NavigationMenu.Trigger class={style["navigation-menu__trigger"]}>
                        Overview{" "}
                        <NavigationMenu.Icon
                            class={style["navigation-menu__trigger-indicator"]}
                        >
                            <ChevronDownIcon />
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
                    <NavigationMenu.Arrow class={style["navigation-menu__arrow"]} />
                </NavigationMenu.Viewport>
            </NavigationMenu>
        </>
    );
}