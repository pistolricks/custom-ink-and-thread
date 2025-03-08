import {Component, For, JSXElement, lazy, Show} from "solid-js";
import {A} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";
import {Dynamic} from "solid-js/web";
import {handleUserName} from "~/lib/utils";

import {SessionUser} from "~/lib/session";
import {Avatar} from "~/components/ui/avatar/avatar-ui";
import {MenuItemType} from "~/lib/store";

const LogoutUserForm = lazy(() => import("~/components/users/forms/logout-user-form"));
type PROPS = {
    user?: SessionUser
}

const ProfileMenu: Component<PROPS> = props => {

    const {menu, apps} = useLayoutContext();
    const user = () => props.user;
    const title = () => user()?.name ?? import.meta.env.VITE_APP_NAME;


    const active = (routePath: string) =>
        routePath == path() ? "border-gray-normal" : "border-transparent hover:border-gray-dim";




    const path = () => location.pathname;
    return (
        <aside id="nav-menu-1" aria-label="Side navigation"
               class=" flex flex-col  border-r-slate-200">
            <div class="flex flex-col items-center gap-4 p-6 border-b border-slate-200">
                <div class="shrink-0">
                    <Avatar name={user()?.name}/>
                </div>
                <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0 text-center">
                    <h4 class="w-full text-base truncate text-slate-700">
                        {title()}
                    </h4>
                    <p class="w-full text-xs truncate text-slate-500">{handleUserName(user()?.name)}</p>
                </div>
            </div>
            <div class="p-3 border-b border-slate-200 flex justify-between items-center w-full">

                <div></div>

                <Show
                    fallback={
                        <>
                            {/* Add Falback info */}

                        </>
                    }
                    when={user()?.id}>
                    <LogoutUserForm/>
                </Show>
            </div>
            <div aria-label="side navigation" class="flex-1 overflow-auto divide-y divide-slate-100">
                <div>
                    <ul class="flex flex-col flex-1 gap-1 py-3">
                        <For each={menu}>
                            {(item) => (
                                <li class="px-3">
                                    <MenuItem contextId={'sd1'} {...item}>
                                        <Dynamic component={item.icon}/>
                                    </MenuItem>
                                </li>
                            )}
                        </For>
                    </ul>
                </div>
                <div>
                    <h3 class="p-6 pb-0 text-sm font-medium text-slate-400">
                        Contacts
                    </h3>
                    <ul class="flex flex-col flex-1 gap-1 py-3">
                        <li class="px-3">
                            <a href="#"
                               class="flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-blue-500 hover:bg-blue-50 focus:bg-blue-50 aria-[current=page]:text-blue-500 aria-[current=page]:bg-blue-50 ">
            <span class="relative inline-flex items-center justify-center w-6 h-6 text-white rounded-full">
              <img src="https://i.pravatar.cc/24?img=3" alt="user name" title="user name" width="24" height="24"
                   class="max-w-full rounded-full"/>
              <span
                  class="absolute inline-flex items-center justify-center gap-1 p-1 text-sm text-white border-2 border-white rounded-full bg-blue-500 -top-1 -right-1">
                <span class="sr-only"> offline </span>
              </span>
            </span>
                                <div
                                    class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                                    John Langan
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default ProfileMenu;



export const MenuItem: Component<MenuItemType & { contextId: string, children?: JSXElement }> = props => {

    const title = () => props.title;
    const href = () => props.href;
    const icon = () => props.icon;
    const contextId = () => props.contextId;

    const children = () => props.children;
    return (
        <Drawer.Trigger contextId={contextId()} as={A} href={href()}
                        class="flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-blue-500 hover:bg-blue-50 focus:border-blue-50 aria-[current=page]:text-blue-500 aria-[current=page]:bg-blue-50 ">
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
