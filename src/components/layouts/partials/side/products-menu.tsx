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
                        <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">
                            Apparel
                        </p>
                        <ul role="list" aria-labelledby="women-clothing-heading-mobile"
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
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
                </div>
                <div class="flow-root">
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
                </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
                <div class="flow-root">
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
                </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6">
                <a href="#" class="-m-2 flex items-center p-2">
                    <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt=""
                         class="block h-auto w-5 shrink-0"/>
                    <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span class="sr-only">, change currency</span>
                </a>
            </div>
        </div>
    );
};

export default ProductMenu;