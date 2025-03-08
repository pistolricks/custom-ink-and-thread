import {Component, JSXElement} from "solid-js";
import {MenuItemType} from "~/lib/store";
import Drawer from "@corvu/drawer";
import {A} from "@solidjs/router";

export const MenuItem: Component<MenuItemType & { contextId: string, children?: JSXElement }> = props => {

    const title = () => props.title;
    const href = () => props.href;
    const icon = () => props.icon;
    const contextId = () => props.contextId;

    const children = () => props.children;
    return (
        <Drawer.Trigger contextId={contextId()} as={A} href={href()}
                        class="flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-blue-500 hover:bg-blue-100 focus:border-blue-200 aria-[current=page]:text-blue-500 aria-[current=page]:bg-blue-200 ">
            <div class="flex items-center self-center w-6">

                {children() || <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                                    aria-label="Dashboard icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>}

            </div>
            <div
                class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate capitalize">
                {title()}
            </div>
        </Drawer.Trigger>
    );
};
