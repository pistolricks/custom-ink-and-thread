import {Component, JSXElement} from "solid-js";
import {NavigationMenu} from "@kobalte/core/navigation-menu";
import style from "~/components/layouts/partials/nav.module.css";



const NavigationMenuContent: Component<{
    class?: string;
    variant: string;
    children: JSXElement;
}> = props => {

    const className = () => props.class;
    const variant = () => props.variant;
    const children = () => props.children;

    let variants: string = {
        c1: "content-1",
        c2: "content-2",
        c3: "content-3",
        empty: "content-empty",
    }[variant()] ?? "";


    return (
        <NavigationMenu.Portal>
            <NavigationMenu.Content
                class={`${style["navigation-menu__content"]} ${style[variants]}  ${className()}`}
            >
                {children()}
            </NavigationMenu.Content>
        </NavigationMenu.Portal>
    );
};

export {NavigationMenuContent};