import {Component, JSXElement} from "solid-js";
import {NavigationMenu, type Orientation} from "@kobalte/core/navigation-menu";
import style from "~/components/layouts/partials/nav.module.css";

type PROPS = {
    children?: JSXElement;
}

const NavigationRootMenu: Component<PROPS> = props => {

    const children = () => props.children;
    return (
        <NavigationMenu  class={style["navigation-menu__root"]}>
            {children()}
        </NavigationMenu>
    );
};

export default NavigationRootMenu;