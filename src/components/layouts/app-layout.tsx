import {Component, createEffect, createSignal, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/drawer/side-drawer'
import {createAsync, Submission, useLocation, useSubmission} from '@solidjs/router'
import {getUser, loginUserHandler} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'
import Header from "~/components/layouts/partials/header";
import { SessionProvider } from '~/context/session-provider'
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {getSession} from "~/lib/session";
import {actionPositionHandler} from "~/lib/addresses";



type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}

type LoginResponseType = {
    user: USER,
    token: AUTHENTICATION_TOKEN,
    folder: string
}
const AppLayout: Component<PROPS> = (props) => {
    const lRes: any = useSubmission(loginUserHandler);
    const currentPosition = useSubmission(actionPositionHandler);

    const {getIsDesktop, getHeight, setCurrentUser, storedCurrentUser} = useLayoutContext()
    const user = createAsync(async () => getUser())

    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()






    createEffect(async() => {
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
        <SessionProvider user={lRes.user} token={lRes.token} folder={lRes.folder} session={getSession()}  location={currentPosition.result} >
        <SideDrawer side={"left"} contextId={'sd1'}>
            <Show when={getPath()}>
                {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}

                <main
                    style={{
                        height: getHeight() + 'px',
                        width: '100%'
                    }}
                >
                    <Header/>
                    {children()}
                </main>
            </Show>
        </SideDrawer>
        </SessionProvider>
    )
}

export default AppLayout
