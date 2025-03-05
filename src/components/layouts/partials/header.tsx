import {Component, createEffect, createSignal} from "solid-js";
import Nav from "~/components/layouts/partials/nav";
import {A} from "@solidjs/router";

type PROPS = {}

const Header: Component<PROPS> = props => {
    



        const [state, setState] = createSignal(false)

        // Replace javascript:void(0) paths with your paths


        createEffect(() => {
            document.onclick = (e) => {
                const target = e.target as Element;
                if (!target?.closest(".menu-btn")) setState(false);
            };
        }, [])

        return (
            <>

                <header class="fixed top-0 inset-x-0  z-10">
                    <nav aria-label="Top">
                        <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                            <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                                <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"></div>
                            </div>
                            <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                                <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"></div>
                            </div>

                            <div class="flex flex-1 justify-end">
                                <div class="flex items-center space-x-6">

                                    <A href={'/login'} class="text-sm font-medium text-white hover:text-gray-100">
                                        Sign in
                                    </A>

                                    <A href={'/register'} class="text-sm font-medium text-white hover:text-gray-100">
                                        Create an account
                                    </A>
                                </div>
                            </div>
                        </div>



                        <div class="bg-white/10 backdrop-blur-md backdrop-filter">
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div>
                                    <div class="flex h-16 items-center justify-between">

                                        <div class="hidden lg:flex lg:flex-1 lg:items-center">
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

                                            <div class="inset-x-0 bottom-0 px-4">
                                                <div class="flex h-full justify-center items-center space-x-8">
                                                    <Nav/>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex flex-1 items-center lg:hidden">

                                            <button type="button" class="-ml-2 p-2 text-white">
                                                <span class="sr-only">Open menu</span>
                                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                     stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>
                                            </button>


                                            <a href="#" class="ml-2 p-2 text-white">
                                                <span class="sr-only">Search</span>
                                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                     stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                                </svg>
                                            </a>
                                        </div>


                                        <a href="#" class="lg:hidden">
                                            <span class="sr-only">Your Company</span>
                                            <img
                                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                                                alt="" class="h-8 w-auto"/>
                                        </a>

                                        <div class="flex flex-1 items-center justify-end">
                                            <a href="#"
                                               class="hidden text-sm font-medium text-white lg:block">Search</a>

                                            <div class="flex items-center lg:ml-8">

                                                <a href="#" class="p-2 text-white lg:hidden">
                                                    <span class="sr-only">Help</span>
                                                    <svg class="size-6" fill="none" viewBox="0 0 24 24"
                                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                         data-slot="icon">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
                                                    </svg>
                                                </a>
                                                <a href="#"
                                                   class="hidden text-sm font-medium text-white lg:block">Help</a>


                                                <div class="ml-4 flow-root lg:ml-8">
                                                    <a href="#" class="group -m-2 flex items-center p-2">
                                                        <svg class="size-6 shrink-0 text-white" fill="none"
                                                             viewBox="0 0 24 24" stroke-width="1.5"
                                                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                                        </svg>
                                                        <span class="ml-2 text-sm font-medium text-white">0</span>
                                                        <span class="sr-only">items in cart, view bag</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

            </>
        )

};

export default Header;