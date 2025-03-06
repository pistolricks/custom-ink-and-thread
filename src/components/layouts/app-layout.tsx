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
    const {getHeight, setCurrentUser, storedCurrentUser} = useLayoutContext()
    const user = createAsync(async () => getUser())

    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()

    console.log('name', user()?.name)

    createEffect(() => {
        if (!user()?.name) {
            setCurrentUser({
                id: undefined,
                name: undefined,
                email: undefined,
                activated: undefined,
                created_at: undefined,
                token: undefined,
                expiry: undefined,
                folder: undefined,
            })
        }

        if (!storedCurrentUser && user()?.name) {
            let usr = user();
            if (!usr) return
            setCurrentUser(usr)
        }

        if (storedCurrentUser?.folder !== user()?.folder) {
            let usr = user();
            if (!usr) return
            setCurrentUser(usr)
        }

        console.log('storedCurrentUser', storedCurrentUser)
        setPath(() => location?.pathname)
    })

    return (
        <CurrentProvider user={user()} token={} folder={} location={} collection={}>
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
                    {children()}
                </main>
            </Show>
        </SideDrawer>
        </CurrentProvider>
    )
}

export default AppLayout
