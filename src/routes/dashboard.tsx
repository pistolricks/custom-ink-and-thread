import {Component, ParentProps} from "solid-js";
const DashboardLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <>

                {children()}


        </>
    );
};

export default DashboardLayout;