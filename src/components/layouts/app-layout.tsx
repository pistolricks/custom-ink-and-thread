import {Component, createEffect, createSignal, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/drawer/side-drawer'
import {createAsync, useLocation} from '@solidjs/router'
import {getUser} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'


type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const {getIsDesktop, getHeight, setCurrentUser, storedCurrentUser} = useLayoutContext()
    const user = createAsync(async () => getUser())

    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()



    createEffect(() => {
        if (!user()) {
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

        if (!storedCurrentUser && user()) {
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

        <SideDrawer side={"left"} contextId={'sd1'}>
            <Show when={getPath()}>
                {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}

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

    )
}

export default AppLayout
