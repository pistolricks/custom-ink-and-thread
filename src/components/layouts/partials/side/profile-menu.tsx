import {Component, JSXElement, lazy, Show} from "solid-js";
import {useLayoutContext} from "~/context/layout-provider";
import {handleUserName} from "~/lib/utils";

import {SessionUser} from "~/lib/session";
import {Avatar} from "~/components/ui/avatar/avatar-ui";
import MenuSection from "~/components/layouts/partials/menu-section";
import Drawer from "@corvu/drawer";
import {Button} from "~/components/ui/button";
import {A} from "@solidjs/router";

const LogoutUserForm = lazy(() => import("~/components/users/forms/logout-user-form"));
type PROPS = {
    user?: SessionUser,
    contextId: string,
    children?: JSXElement
}

const ProfileMenu: Component<PROPS> = props => {

    const {menu, apps} = useLayoutContext();
    const user = () => props.user;
    const title = () => user()?.name ?? import.meta.env.VITE_APP_NAME;

    const contextId = () => props.contextId;

    const children = () => props.children;

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
            <div class="p-2 border-b border-slate-200 flex justify-between items-center w-full">


                <Show
                    fallback={
                        <>


                        </>
                    }
                    when={user()?.id}>

                    <Drawer.Trigger contextId={'sd1'} as={"div"}>
                    <Button as={A} href={'/dashboard'} variant={"link"} size={"sm"} type={"button"}>DASHBOARD</Button>
                    </Drawer.Trigger>
                    <Drawer.Trigger contextId={'sd1'} as={"div"}>
                        <Button as={A} href={'/profile'} variant={"link"} size={"sm"} type={"button"}>PROFILE</Button>
                    </Drawer.Trigger>
                    <Drawer.Trigger contextId={'sd1'} as={"div"}>
                        <Button as={A} href={'/inbox'} variant={"link"} size={"sm"} type={"button"}>INBOX</Button>
                    </Drawer.Trigger>
                    <LogoutUserForm/>
                </Show>
            </div>

            <MenuSection list={menu} contextId={contextId()}/>


            {children()}

        </aside>
    );
};

export default ProfileMenu;



