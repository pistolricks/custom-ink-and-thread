import {Component} from "solid-js";

import {RouteDefinition} from "@solidjs/router";
import UserProfile from "~/components/users/profile";


type PROPS = {}

export const route = {
    preload() {
        /**/
    }
} satisfies RouteDefinition

const Profile: Component<PROPS> = props => {


    return (
        <div class={'h-full w-full relative'}>
           {/*
            <UserProfile  {...models()}/>
            */}
        </div>
    );
};

export default Profile;