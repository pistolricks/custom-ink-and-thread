import {NavigationMenu, type Orientation,} from "@kobalte/core/navigation-menu";
import {Component, createEffect, createSignal, For, JSXElement} from "solid-js";
import style from "~/components/layouts/partials/header/navigation.module.css";
import {A, useIsRouting} from "@solidjs/router";
import {MenuItemType} from "~/lib/store";
import {useLayoutContext} from "~/context/layout-provider";

export function Navigation() {
    const {category1, category2, category3, brand1, brand2, brand3, brand4} = useLayoutContext();
    const [orientation, setOrientation] = createSignal<Orientation>("horizontal");

    const isRouting = useIsRouting();


    const [get1Open,set1Open] = createSignal(false);
    const [get2Open,set2Open] = createSignal(false);
    const [get3Open,set3Open] = createSignal(false);

    createEffect(() => {

        if(isRouting()){
            set1Open(false);
            set2Open(false);
            set3Open(false);
        }
    })


    return (
        <>
            <NavigationMenu
                class={`grid grid-cols-3 ${style["navigation-menu__root"]}`} orientation={orientation()}>


                <NavigationMenu.Menu
                    open={get1Open()}
                    onOpenChange={set1Open}
                >
                    <div class="flex">
                        <div class="relative flex bg-transparent">
                            <NavigationMenu.Trigger
                                class={style["navigation-menu__trigger"]}>
                                BRANDS

                            </NavigationMenu.Trigger>
                        </div>
                        <NavigationMenu.Portal>
                            <NavigationMenu.Content
                                class={`${style["navigation-menu__content"]} ${style["content-1"]}`}>
                                <MenuLayout>
                                    <MenuLink title={'T-Shirts'} href={'/apparel/categories/t-shirts'} src={'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg'}/>
                                    <MenuTextLinks path={'brand'} list={brand2}/>
                                    <MenuTextLinks path={'brand'} list={brand3}/>
                                    <MenuTextLinks path={'brand'} list={brand4}/>
                                </MenuLayout>
                            </NavigationMenu.Content>
                        </NavigationMenu.Portal>
                    </div>
                </NavigationMenu.Menu>

                <NavigationMenu.Menu
                    open={get2Open()}
                    onOpenChange={set2Open}
                >
                    <div class="flex">
                        <div class="relative flex bg-transparent">
                            <NavigationMenu.Trigger
                                class={style["navigation-menu__trigger"]}>
                                APPAREL
                            </NavigationMenu.Trigger>
                        </div>
                        <NavigationMenu.Portal>
                            <NavigationMenu.Content
                                class={`${style["navigation-menu__content"]} ${style["content-1"]} `}>
                                <MenuLayout>
                                    <MenuLink title={'T-Shirts'} href={'/apparel/categories/t-shirts'} src={'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg'}/>
                                    <MenuTextLinks path={'category'} list={category1}/>
                                    <MenuTextLinks path={'category'} list={category2}/>
                                    <MenuTextLinks path={'category'} list={category3}/>
                                </MenuLayout>
                            </NavigationMenu.Content>
                        </NavigationMenu.Portal>
                    </div>
                </NavigationMenu.Menu>


                <NavigationMenu.Menu
                    open={get3Open()}
                    onOpenChange={set3Open}
                >
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
                                <MenuLayout>
                                    <></>
                                </MenuLayout>
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

const MenuLayout: Component<{
    children?: JSXElement;
}> = props => {

    const children = () => props.children;

    return (
        <div class="absolute inset-x-0  top-0 text-sm text-gray-500 bg-white pb-6">

                <div class="mx-auto w-full p-8">
                    <div class="grid grid-cols-4 gap-x-8 gap-y-10">
                        {children()}
                    </div>
                </div>
        </div>


    );
};


const MenuLink: Component<{ title: string, href: string, src: string }> = props => {
    const title = () => props.title;
    const href = () => props.href;
    const src = () => props.src;


    return (
        <div class="group relative pt-6 pb-10 bg-white">
            <img src={src()} alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                 class="aspect-square w-2/3 rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
            <A href={href()} class="mt-4 block font-medium text-gray-900">
                <span aria-hidden="true"></span>

                {title()}
                <p aria-hidden="true" class="mt-1">Shop now</p>

            </A>


        </div>
    );
}

const MenuTextLinks: Component<{ path?: string; list: MenuItemType[] }> = props => {
    const list = () => props.list;

    const path = () => props.path;

    return (
        <ul role="list" aria-labelledby="" class="mt-6 flex flex-col space-y-6 w-full">
            <For each={list()}>
                {(item) => (
                    <li class="flow-root">

                        <A href={path() ? `/${path()}/${item.href}` :  `/${item.href}`} class="-m-2 block p-2 text-gray-500">{item.title}</A>

                    </li>
                )}

            </For>
        </ul>
    );
}