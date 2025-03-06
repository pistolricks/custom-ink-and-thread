import {Component, createEffect, createSignal, ParentProps, Show} from 'solid-js'

import {createAsync, useLocation} from '@solidjs/router'
import {getUser} from '~/lib/users'
import Header from "~/components/layouts/partials/header";
import {AUTHENTICATION_TOKEN} from "~/lib";


// const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const location = useLocation()
    const user = createAsync(async () => getUser())

    const children = () => props.children
    const [getPath, setPath] = createSignal<string | undefined>()


    const [getToken, setToken] = createSignal<AUTHENTICATION_TOKEN | undefined>()


    createEffect(() => {


        let token = user()?.token;
        let expiry = user()?.expiry;
        if (!token) return
        if (!expiry) return
        let tk = {token: token, expiry: expiry}
        setToken(tk)


        setPath(() => location?.pathname)

        console.log("getPath", getPath())
    })

    return (


        <Show when={getPath()}>
            <Header/>
            <main
                style={{
                    height: window.innerHeight + 'px',
                    width: '100%'
                }}
            >
                {children()}
            </main>
        </Show>

    )
}

export default AppLayout
