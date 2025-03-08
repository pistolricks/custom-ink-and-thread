import {Component, ParentProps} from "solid-js";
import Dashboard from "~/routes/dashboard";
import {MainNav} from "~/components/dashboard/partials/main-nav";

const DashboardLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <>

                {children()}


        </>
    );
};

export default DashboardLayout;