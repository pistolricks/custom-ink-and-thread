import {Component, createEffect} from "solid-js";
import {useSubmission} from "@solidjs/router";
import {logoutUserHandler} from "~/lib/users";
import {Button} from "../../ui/button";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";

type PROPS = {}

const LogoutUserForm: Component<PROPS> = props => {
    const submission = useSubmission(logoutUserHandler);
    const {currentUser, setCurrentUser} = useLayoutContext();
    createEffect(() => {
        if(submission.result) {
           console.log("test logout")
        }

        console.log(currentUser)

    })

    return (
        <>
            <form class={''} action={logoutUserHandler} method="post">
                <Drawer.Trigger contextId={'sd1'} as={"div"}>
                    <Button as={"button"} variant={"link"} size={"sm"} type={"submit"}>LOGOUT</Button>
                </Drawer.Trigger>
            </form>
        </>
    );
};

export default LogoutUserForm;