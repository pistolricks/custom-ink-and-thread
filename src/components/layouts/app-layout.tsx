import {Component, createEffect, createMemo, createSignal, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/drawer/side-drawer'

import {createAsync, useLocation, useNavigate, useSubmission} from '@solidjs/router'
import {getUser, loginUserHandler, logoutUserHandler} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'
import Header from "~/components/layouts/partials/header/header";
import {CurrentProvider} from "~/context/current-provider";
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {Feature, FeatureCollection} from "~/lib/store";
import {SessionUser} from "~/lib/session";
import {MainNav} from "~/components/dashboard/partials/main-nav";


// const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const navigate = useNavigate();
    const loggedIn = useSubmission(loginUserHandler);
    const loggedOut = useSubmission(logoutUserHandler);
    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()


    // await updateSessionUser(res.user, res.authentication_token, res.folder)

    const handleUserData = (e: SessionUser | USER | undefined) => {
        return e;
    }
    const handleTokenData = (e: AUTHENTICATION_TOKEN | undefined) => {
        return e;
    }
    const handleFolderData = (e: string | undefined) => {
        return e;
    }
    const handleLocationData = (e: Feature | undefined) => {
        return e;
    }

    const handleCollectionData = (e: FeatureCollection | undefined) => {
        return e;
    }

    const responseData = createMemo(() => {
        let res = loggedIn.result;
        if (!res?.user?.id) return;
        return {
            user: handleUserData(res?.user),
            token: handleTokenData(res?.authentication_token),
            folder: handleFolderData(res?.folder),
            location: handleLocationData(res?.location),
            collection: handleCollectionData(res?.collection)
        };

    })


    createEffect(() => {
        let authenticated = loggedIn;
        if (authenticated?.result?.user?.id) {
            navigate('/', {replace: true});
        }


        setPath(() => location?.pathname)
    })

    return (
        <>
            <div class="min-h-screen h-screen flex flex-col">
                <SideDrawer side={'right'} contextId={'sd1'}>
                    <Show when={getPath()}>
                        {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}


                        <CurrentProvider
                            user={responseData()?.user}
                            folder={responseData()?.folder}
                            location={responseData()?.location}
                            collection={responseData()?.collection}
                            token={{
                                token: responseData()?.token?.token ?? "",
                                expiry: responseData()?.token?.expiry ?? ""
                            }}>
                            <Header/>
                            <div class={'flex-1 flex flex-row overflow-y-hidden'}>
                                <main
                                    class={'flex-1 bg-background border-l border-r border-muted text-xs p-2 overflow-y-auto'}
                                >
                                    {children()}
                                </main>
                            </div>
                        </CurrentProvider>

                        <footer class={'p-1'}>
                            <div class="border-t">
                                <div class="flex h-16 items-center px-4">
                                    <MainNav class="mx-6"/>
                                </div>
                            </div>
                        </footer>
                    </Show>
                </SideDrawer>

            </div>

        </>
    )
}

export default AppLayout
