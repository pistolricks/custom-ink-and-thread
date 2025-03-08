import {Component, ParentProps} from "solid-js";
import {MainNav} from "~/components/dashboard/partials/main-nav";

const InboxLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <>
            {children()}
        </>
    );
};

export default InboxLayout;