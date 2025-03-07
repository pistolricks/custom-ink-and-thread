import {Component, ParentProps} from "solid-js";
import Dashboard from "~/routes/dashboard";
import {MainNav} from "~/components/dashboard/partials/main-nav";

const DashboardLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <>
            <div class={' w-full h-full relative'}>
                {children()}

            </div>
            <div class="fixed w-full inset-x-0 border-t">
                <div class="flex h-16 items-center px-4">
                    <MainNav class="mx-6"/>
                    <div class="ml-auto flex items-center space-x-4">

                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;