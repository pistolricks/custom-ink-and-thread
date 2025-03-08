import {Component, For} from "solid-js";
import {useLayoutContext} from "~/context/layout-provider";
import {A} from "@solidjs/router";
import Drawer from "@corvu/drawer";

type PROPS = {
    contextId: string;
}

const ProductMenu: Component<PROPS> = props => {
    const {apps} = useLayoutContext();

    const contextId = () => props.contextId;

    return (
        <div class="relative flex w-full flex-col  bg-white pb-12 shadow-xl">
            <div class="">


                <div class="space-y-10 px-4 pb-8 pt-4"
                     role="tabpanel" tabindex="0">
                    <div class="grid grid-cols-2 gap-x-4">
                        <div class="group relative text-sm">
                            <img
                                src="/web/custom-branded-merchandise.jpg"
                                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                            <Drawer.Trigger contextId={contextId()} as={A} href={"/new-arrivals"} class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                New Arrivals
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                            </Drawer.Trigger>
                        </div>
                        <div class="group relative text-sm">
                            <img
                                src="/web/cesar-chavez-titans-rev-tee.jpg"
                                alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                            <Drawer.Trigger contextId={contextId()} as={A} href={"/reversibles"} class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Reversibles
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                            </Drawer.Trigger>
                        </div>
                    </div>

                    <div>
                        <Drawer.Trigger contextId={contextId()} as={A} href={"/apparel"}>
                            <p id="apparel" class="font-medium text-gray-900">
                                Apparel
                            </p>
                        </Drawer.Trigger>

                        <ul role="list" aria-labelledby="apparel"
                            class="mt-6 flex flex-col space-y-6">

                            <For each={apps}>
                                {(app) => (
                                    <li class="flow-root">
                                        <Drawer.Trigger contextId={contextId()} as={A} href={app.href} class="-m-2 block p-2 text-gray-500">
                                            {app.title}
                                        </Drawer.Trigger>
                                    </li>
                                )}
                            </For>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                    <Drawer.Trigger contextId={contextId()} as={A} href={"/company"} class="-m-2 block p-2 font-medium text-gray-900">
                        Company
                    </Drawer.Trigger>
                </div>
                <div class="flow-root">
                    <Drawer.Trigger contextId={contextId()} as={A} href={"/wholesale"} class="-m-2 block p-2 font-medium text-gray-900">
                        Wholesale
                    </Drawer.Trigger>
                </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                    <Drawer.Trigger contextId={contextId()} as={A} href={"/login"} class="-m-2 block p-2 font-medium text-gray-900">
                        Login
                    </Drawer.Trigger>
                </div>
                <div class="flow-root">
                    <Drawer.Trigger contextId={contextId()} as={A} href={"/register"} class="-m-2 block p-2 font-medium text-gray-900">
                        Register
                    </Drawer.Trigger>
                </div>
            </div>

        </div>
    );
};

export default ProductMenu;