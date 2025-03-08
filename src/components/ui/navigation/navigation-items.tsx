import {Component, JSXElement, Match, Switch} from "solid-js";
import {NavigationMenu} from "@kobalte/core/navigation-menu";
import style from "~/components/layouts/partials/header/navigation.module.css";



const NavigationItem: Component<{
    label?: string;
    href?: string;
    variant?: string;
    as?: string;
    target?: string;
    type: string;
    children?: JSXElement;
}> = props => {

    const type = () => props.type;

    let types = {
        label:"navigation-menu__item-label",
        description:"navigation-menu__item-description",
        viewport: "navigation-menu__viewport",
        trigger: "navigation-menu__trigger",
        indicator: "navigation-menu__trigger-indicator",
    }[type()]

    const label = () => props.label;

    const href = () => props.href;
    const variant = () => props.variant ?? types ?? "";
    const children  = () => props.children;
    const as = () => props.as;
    const target = () => props.target;



    let variants: string = {
        label: "navigation-menu__item-label",
        description: "navigation-menu__item-description",
        callout: "navigation-menu__item-callout",
        arrow: "navigation-menu__arrow",
        viewport: "navigation-menu__viewport",
        trigger: "navigation-menu__trigger",
        indicator: "navigation-menu__trigger-indicator",
    }[variant()] ?? types ?? "";

    return (
        <Switch>
            <Match when={type() === 'label'}>
                <NavigationMenu.ItemLabel
                    class={style[variants]}
                >
                    {children() ?? label()}
                </NavigationMenu.ItemLabel>
            </Match>
            <Match when={type() === 'description'}>
                <NavigationMenu.ItemDescription
                    class={style[variants]}>
                    {children() ?? label()}
                </NavigationMenu.ItemDescription>
            </Match>
            <Match when={type() === 'trigger'}>
                <NavigationMenu.Trigger
                    as={as()}
                    href={href()}
                    target={target()}
                    class={style[variants]}>
                    {children() ?? label()}
                </NavigationMenu.Trigger>
            </Match>
            <Match when={type() === 'icon'}>
                <NavigationMenu.Icon
                    aria-hidden="true"
                    class={style[variants]}
                >
                    {children()}
                </NavigationMenu.Icon>
            </Match>
            <Match when={type() === 'viewport'}>
                <NavigationMenu.Viewport
                    class={style[variants]}>
                    {children() ?? label()}
                </NavigationMenu.Viewport>
            </Match>
        </Switch>

    );
};




export {NavigationItem};

export const NavigationArrow = () => <NavigationMenu.Arrow class={style["navigation-menu__arrow"]}/>
