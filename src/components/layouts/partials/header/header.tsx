import {Component, Show, VoidComponent} from "solid-js";
import {A} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import {DrawerContent} from "~/components/ui/drawer";
import {SessionUser} from "~/lib/session";


const Header: Component<{
    user: SessionUser;
}> = () => {


    return (
        <>

            <header class="h-[104px]">
                <nav class={''} aria-label="Top">
                    <div
                        class="relative isolate flex items-center gap-x-6 overflow-hidden bg-muted-foreground px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                        <div
                            class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                            aria-hidden="true">
                            <div
                                class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[var(--color-cerulean-blue-300)] to-[var(--color-cerulean-blue-800)] opacity-30"
                                style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"></div>
                        </div>
                        <div
                            class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                            aria-hidden="true">
                            <div
                                class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[var(--color-cerulean-blue-300)] to-[var(--color-cerulean-blue-800)] opacity-30"
                                style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"></div>
                        </div>

                        <div class="flex flex-1 justify-end">
                            <div class="flex items-center space-x-6">
                                <Show
                                    fallback={<div class={'h-[20px]'}/>}
                                    when={true}>
                                    <A href={'/login'} class="text-sm font-medium text-text-700/50 hover:text-gray-100">
                                        Sign in
                                    </A>

                                    <A href={'/register'}
                                       class="text-sm font-medium text-text-700/50 hover:text-gray-100">
                                        Register
                                    </A>
                                </Show>
                            </div>
                        </div>
                    </div>


                    <div class="bg-muted/50 backdrop-blur-md backdrop-filter">
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div>
                                <div class="flex h-16 items-center justify-between">

                                    <div class="flex lg:flex-1 lg:items-center">
                                        <a href="#">
                                            <span class="sr-only"></span>
                                            <img
                                                src="icons/icon180x180.png"
                                                width={50}
                                                height={50}
                                                alt="Custom Ink and Thread"
                                            />

                                        </a>
                                    </div>

                                    <div class="hidden h-full lg:flex">


                                        <div class="flex h-full justify-center items-center space-x-8 p-2">


                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-center justify-end">
                                        <A href="#"
                                           class="hidden text-sm font-medium text-secondary-foreground lg:block">Search</A>

                                        <div class="flex items-center lg:ml-8">

                                            <Drawer.Trigger contextId={'sd1'} type="button"
                                                            class="-ml-2 p-2 text-white">
                                                <span class="sr-only">Open menu</span>
                                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                     stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>
                                            </Drawer.Trigger>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <DrawerContent side={"right"} contextId={'sd1'}>
                <>

                </>
            </DrawerContent>
        </>
    )

};

export default Header;