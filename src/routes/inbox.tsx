import {Component, ParentProps} from "solid-js";
import {MainNav} from "~/components/dashboard/partials/main-nav";

const InboxLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <>
            <div class={'h-full w-full relative'}>
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

export default InboxLayout;