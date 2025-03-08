import {Component, createEffect, createSignal, ParentProps, Show} from 'solid-js'

import {useLocation} from '@solidjs/router'
import {getUser} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'
import SideDrawer from "~/components/ui/drawer/side-drawer";
import Header from "~/components/layouts/partials/header/header";


// const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const {currentUser} = useLayoutContext()

    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()



    createEffect(() => {

        setPath(() => location?.pathname)
    })

    return (

        <div class="min-h-screen h-screen flex flex-col">
            <SideDrawer side={'right'} contextId={'sd1'}>
                <Show when={getPath()}>
                    {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}


                    <Header user={currentUser}/>
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