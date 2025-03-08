import {Component} from "solid-js";
import {RouteDefinition} from "@solidjs/router";
import UserProfile from "~/components/profiles/user-profile";
import {useLayoutContext} from "~/context/layout-provider";


type PROPS = {}

export const route = {
    preload() {
        /**/
    }
} satisfies RouteDefinition

const Profile: Component<PROPS> = props => {

    const {currentUser} = useLayoutContext();


    return (
        <section aria-labelledby="personal-information">
            <UserProfile user={currentUser}/>
        </section>
    );
};

export default Profile;