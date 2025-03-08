import {Component, JSXElement} from "solid-js";
import {NavigationMenu, type Orientation} from "@kobalte/core/navigation-menu";
import style from "~/components/layouts/partials/header/nav.module.css";

const NavigationMenuItem: Component<{
    href?: string;
children?: JSXElement;
}> = props => {

    const href = () => props.href;
    const children = () => props.children;

    return (
        <NavigationMenu.Item
            class={style["navigation-menu__item"]}
            href={href() ?? undefined}
        >

            {children()}
        </NavigationMenu.Item>
    );
}


export {NavigationMenuItem};