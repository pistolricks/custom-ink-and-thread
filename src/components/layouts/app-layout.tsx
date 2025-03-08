import {Component, createEffect, createSignal, onMount, ParentProps, Show} from 'solid-js'

import {createAsync, query, useLocation, useSubmission} from '@solidjs/router'

import {useLayoutContext} from '~/context/layout-provider'
import SideDrawer from "~/components/ui/drawer/side-drawer";
import Header from "~/components/layouts/partials/header/header";
import {getSessionUser, SessionUser} from "~/lib/session";
import {SetStoreFunction} from "solid-js/store";
import {getCurrentUser} from "~/lib/users";


// const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps

export const route = (e: SetStoreFunction<SessionUser>) => ({
    preload: () => getCurrentUser(e)
});


const AppLayout: Component<PROPS> = (props) => {
    const {currentUser, setCurrentUser} = useLayoutContext()

    route(setCurrentUser)
    const userData = createAsync(async () => getCurrentUser(setCurrentUser))





    const children = () => props.children;
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()





    createEffect(() => {
        console.log(userData())


        setPath(() => location?.pathname)
        console.log("currentUser", currentUser)
    })


    return (

        <div class="min-h-screen h-screen flex flex-col">
            <SideDrawer side={'right'} contextId={'sd1'}>
                <Show when={getPath()}>
                    {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}


                    <Header user={userData()}/>
                    <div class={'flex-1 flex flex-row overflow-y-hidden'}>
                        <main
                            class={'flex-1 bg-background border-l border-r border-muted/50 text-xs p-2 overflow-y-auto'}
                        >
                            {children()}
                        </main>
                    </div>

                    <footer class={'bg-muted/50'}>
                        <div class="">
                            <div class="flex h-16 items-center px-4">

                            </div>
                        </div>
                    </footer>
                </Show>
            </SideDrawer>

        </div>

    )
}

export default AppLayout