import {Component, createEffect, createSignal, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/dialogs/side-drawer'
import Nav from '~/components/layouts/partials/nav'

import {createAsync, useLocation} from '@solidjs/router'
import {getUser} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'
import {SessionUser} from "~/lib/session";
import Header from "~/components/layouts/partials/header";
import {CurrentProvider} from "~/context/current-provider";


// const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const {getHeight} = useLayoutContext()
    const user = createAsync(async () => getUser())

    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()


    createEffect(() => {

        setPath(() => location?.pathname)
    })

    return (

        <SideDrawer side={'left'} contextId={'sd1'}>
            <Show when={getPath()}>
                {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}
                <Header/>
                <main
                    style={{
                        height: getHeight() + 'px',
                        width: '100%'
                    }}
                >
                    <CurrentProvider
                        user={user()}
                        folder={user()?.folder}
                        location={user()?.current_location}
                        collection={undefined}
                        token={{
                            token: user()?.token,
                            expiry: user()?.expiry
                        }}>
                        {children()}
                    </CurrentProvider>
                </main>
            </Show>
        </SideDrawer>

    )
}

export default AppLayout
