import {Component, createEffect, createMemo, createSignal, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/drawer/side-drawer'

import {createAsync, useLocation, useNavigate, useSubmission} from '@solidjs/router'
import {getUser, loginUserHandler, logoutUserHandler} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'
import Header from "~/components/layouts/partials/header";
import {CurrentProvider} from "~/context/current-provider";
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib";
import {Feature, FeatureCollection} from "~/lib/store";
import {SessionUser} from "~/lib/session";


// const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const {getHeight} = useLayoutContext()
    const navigate = useNavigate();
    const user = createAsync(async () => getUser())
    const loggedIn = useSubmission(loginUserHandler);
    const loggedOut = useSubmission(logoutUserHandler);
    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()



    // await updateSessionUser(res.user, res.authentication_token, res.folder)

    const handleUserData = (e: SessionUser|USER|undefined) => {
        return e;
    }
    const handleTokenData = (e: AUTHENTICATION_TOKEN|undefined) => {
        return e;
    }
    const handleFolderData = (e: string|undefined) => {
        return e;
    }
    const handleLocationData = (e: Feature|undefined) => {
        return e;
    }

    const handleCollectionData = (e: FeatureCollection|undefined) => {
        return e;
    }

    const responseData = createMemo(() => {
        let res = loggedIn.result;
        if(!res?.user?.id)return;
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


    })

    return (

        <SideDrawer side={'left'} contextId={'sd1'}>
            <Show when={getPath()}>
                {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}
                <Header user={user()}/>
                <main
                    style={{
                        height: getHeight() + 'px',
                        width: '100%'
                    }}
                >
                    <CurrentProvider
                        user={responseData()?.user}
                        folder={responseData()?.folder}
                        location={responseData()?.location}
                        collection={responseData()?.collection}
                        token={{
                            token: responseData()?.token?.token,
                            expiry: responseData()?.token?.expiry
                        }}>
                        {children()}
                    </CurrentProvider>
                </main>
            </Show>
        </SideDrawer>

    )
}

export default AppLayout
