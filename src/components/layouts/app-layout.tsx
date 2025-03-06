import {Component, createEffect, createMemo, createSignal, onMount, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/drawer/side-drawer'
import {AccessorWithLatest, createAsync, useLocation, useNavigate, useSubmission} from '@solidjs/router'
import {getUser, loginUserHandler, logoutUserHandler, resendActivateEmailHandler} from '~/lib/users'
import {LayoutProvider, useLayoutContext} from '~/context/layout-provider'
import {AUTHENTICATION_TOKEN, getUserToken} from "~/lib";
import {getContents} from "~/lib/contents";

import {
    actionPositionHandler,
    addAddress,
    addressSearchHandler,
    getAddresses,
    getAddressFormFormats
} from "~/lib/addresses";
import {addVendor} from "~/lib/vendors";
import {getSessionFolder, getSessionUser} from "~/lib/session";
import {FeatureCollection} from "~/lib/store";


type PROPS = ParentProps
export const route = {
    preload() {
        getUser();

        getContents();
    },
}


const getResendEmail = () => useSubmission(resendActivateEmailHandler)
const getAddedVendor = () => useSubmission(addVendor)
const getAddedAddress = () => useSubmission(addAddress)
const getPlacesSearch = () => useSubmission(addressSearchHandler)
const getCurrentPosition = () => useSubmission(actionPositionHandler)
const getLoggedInSession = () => useSubmission(loginUserHandler)
const getLoggedOurSession = () => useSubmission(logoutUserHandler)

const getLoggedInUser = () => getSessionUser();
const user = () => createAsync(() => getUser())
const getToken: () => AccessorWithLatest<AUTHENTICATION_TOKEN | undefined> = () => createAsync(() => getUserToken())
const getAddressData = () => createAsync(() => getAddresses());
const getContentCollection: () => AccessorWithLatest<FeatureCollection | undefined> = () => createAsync(() => getContents());

const getFolder = async() => await getSessionFolder()
const getAddressFormats = () => getAddressFormFormats();

const AppLayout: Component<PROPS> = (props) => {







    // const results = createMemo(() => {
    //     console.log("result2", submission.result)
//
    //     if(submission.result?.length > 0){
    //         setStoreCollection(submission.result)
    //     }
//
    //     if(submissionAv1.result?.length > 0){
    //         setStoreCollection(submissionAv1.result)
    //     }
    //     setOpen(getStoreCollection?.features?.length > 0)
    //     return getStoreCollection;
    // })

    // const [getPlace, setPlace] = createSignal<OsmOutput | undefined>()
    // const [getDetails, setDetails] = createSignal<LookupResult | undefined>()

    const children = () => props.children


    //   console.log("open", open())
    //   console.log("getDetails", getDetails())
    //   console.log("getPlace", getPlace())
    //   console.log("getStoreCollection", getStoreCollection)
    //   console.log("addresses", addressData())
    //   console.log("currentPosition", currentPosition.result?.results)
    //   setMyLocation(currentPosition.result?.results)


    createEffect(() => {
        /*
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
        */
           // if (getToken()) {
           //     navigate('/', {replace: true});
           // }

     //       if (storedCurrentUser?.activated) {
     //           navigate('/')
     //       }


    })




    const height = createMemo(() =>  window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight)

    const width = createMemo(() =>  window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth)

    return (
        <LayoutProvider
            height={height()}
            width={width()}
            authentication_token={getToken()}
            currentLocation={getCurrentPosition()}
            collection={getContentCollection()}
            query
        >
            <SideDrawer side={"left"} contextId={'sd1'}>

                    {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}

                    <main>
                        {children()}
                    </main>

            </SideDrawer>
        </LayoutProvider>
    )
}

export default AppLayout
