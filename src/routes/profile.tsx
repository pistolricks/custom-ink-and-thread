import {Component, createEffect, ParentProps} from "solid-js";
import {useNavigate} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";

const ProfileLayout: Component<ParentProps> = props => {
    const navigate = useNavigate();
    const {currentUser} = useLayoutContext();


    createEffect(() => {
        console.log(currentUser)
        if (currentUser?.id) {
            navigate('/', {replace: true});
        }
    })
    const children = () => props.children;

    return (
        <div class={'h-full w-full relative'}>
            {children()}
        </div>
    );
};

export default ProfileLayout;