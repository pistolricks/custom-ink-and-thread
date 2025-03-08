import {Component, createEffect} from "solid-js";
import {useSubmission} from "@solidjs/router";
import {logoutUserHandler} from "~/lib/users";

import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";
import {Button} from "~/components/ui/button";

type PROPS = {}

const LogoutUserForm: Component<PROPS> = props => {
    const submission = useSubmission(logoutUserHandler);
    const {currentUser, setCurrentUser} = useLayoutContext();
    createEffect(() => {
        setCurrentUser({
            id: undefined,
            name: undefined,
            email: undefined,
            display_name: undefined,
            activated: undefined,
            created_at: undefined,
            token: undefined,
            expiry: undefined,
            folder: undefined,
            current_location: undefined,
        })

        console.log(currentUser)

    })

    return (
        <>
            <form class={''} action={logoutUserHandler} method="post">
                <Drawer.Trigger contextId={'sd1'} as={"div"}>
                    <Button as={"button"} variant={"default"} size={"lg"} type={"submit"}>LOGOUT</Button>
                </Drawer.Trigger>
            </form>
        </>
    );
};

export default LogoutUserForm;