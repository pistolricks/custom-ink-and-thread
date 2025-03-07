import {Component, ParentProps} from "solid-js";

const ProfileLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <div class={'h-full w-full relative'}>
            {children()}
        </div>
    );
};

export default ProfileLayout;