import {Component, ParentProps} from "solid-js";

const InboxLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <>
            {children()}
        </>
    );
};

export default InboxLayout;