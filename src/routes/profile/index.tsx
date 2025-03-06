import {Component} from "solid-js";
import UserProfile from "~/components/users/user-profile";
import {createAsync, RouteDefinition} from "@solidjs/router";
import {getOwnerModels} from "~/lib/owners";


type PROPS = {}

export const route = {
    preload() {
        /**/
    }
} satisfies RouteDefinition

const Profile: Component<PROPS> = props => {
    const models = createAsync(async () => getOwnerModels());

    return (
        <div class={'h-full w-full relative'}>
            <UserProfile  {...models()}/>
        </div>
    );
};

export default Profile;