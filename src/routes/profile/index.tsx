import {Component} from "solid-js";
import UserProfile from "~/components/users/profile";
import {createAsync, RouteDefinition} from "@solidjs/router";


type PROPS = {}

export const route = {
    preload() {
       /**/
    }
} satisfies RouteDefinition

const Profile: Component<PROPS> = props => {



    return (
        <div class={'h-full w-full relative'}>
            <UserProfile  {...models()}/>
        </div>
    );
};

export default Profile;