import {Component, ParentProps} from "solid-js";

const DashboardLayout: Component<ParentProps> = props => {

    const children = () => props.children;

    return (
        <div class="flex h-[100dvh] overflow-hidden">

            {/* Sidebar */}
            <Sidebar />

            {/* Content area */}
            <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header />

                <main class="grow [&>*:first-child]:scroll-mt-16">
                    {children()}
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;