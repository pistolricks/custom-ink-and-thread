import Drawer from "@corvu/drawer";
import {DrawerContent} from "~/components/ui/drawer";
import {Component, JSXElement} from "solid-js";
import SideDrawer from "~/components/ui/drawer/side-drawer";
import {IconChevronRight} from "~/components/ui/svg";

type PROPS = {
    name: string;
    children: JSXElement;
}

const CategoryFilters: Component<PROPS> = props => {
    const name = () => props.name;
    const children = () => props.children;
    return (
        <SideDrawer side={'right'} contextId={'filter1'}>

            <div class="bg-white rounded-lg p-2">
                <div>
                    <DrawerContent side={"right"} contextId={'filter1'} class={'overflow-y-auto scrollbar-hide'}>

                        <div class="relative  w-full lg:hidden" role="dialog" aria-modal="true">


                            <div class="fixed inset-0  w-full bg-black/25" aria-hidden="true"></div>

                            <div class="fixed inset-0 bg-white flex">

                                <div
                                    class="relative mx-auto flex size-full max-w-xs flex-col overflow-y-auto scrollbar-hide bg-white py-4 pb-12 shadow-xl">
                                    <div class="flex items-center justify-between px-4">
                                        <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                        <Drawer.Trigger contextId={'filter1'} type="button"
                                                        class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                            <span class="sr-only">Close menu</span>
                                            <IconChevronRight/>
                                        </Drawer.Trigger>
                                    </div>


                                    <form class="mt-4 border-t border-gray-200">
                                        <h3 class="sr-only">{name()}</h3>
                                        <div class="border-t border-gray-200 px-4 py-6">
                                            <h3 class="-mx-2 -my-3 flow-root">

                                                <button type="button"
                                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                        aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                    <span class="font-medium text-gray-900">Color</span>
                                                    <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                                </button>
                                            </h3>

                                            <div class="pt-6" id="filter-section-mobile-0">
                                                <div class="space-y-6">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-color-0" name="color[]"
                                                                       value="white"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-color-0"
                                                               class="min-w-0 flex-1 text-gray-500">White</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-color-1" name="color[]"
                                                                       value="beige"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-color-1"
                                                               class="min-w-0 flex-1 text-gray-500">Beige</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-color-2" name="color[]"
                                                                       value="blue"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-color-2"
                                                               class="min-w-0 flex-1 text-gray-500">Blue</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-color-3" name="color[]"
                                                                       value="brown"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-color-3"
                                                               class="min-w-0 flex-1 text-gray-500">Brown</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-color-4" name="color[]"
                                                                       value="green"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-color-4"
                                                               class="min-w-0 flex-1 text-gray-500">Green</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-color-5" name="color[]"
                                                                       value="purple"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-color-5"
                                                               class="min-w-0 flex-1 text-gray-500">Purple</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-gray-200 px-4 py-6">
                                            <h3 class="-mx-2 -my-3 flow-root">

                                                <button type="button"
                                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                        aria-controls="filter-section-mobile-1" aria-expanded="false">
                                                    <span class="font-medium text-gray-900">Category</span>
                                                    <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                                </button>
                                            </h3>

                                            <div class="pt-6" id="filter-section-mobile-1">
                                                <div class="space-y-6">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-category-0" name="category[]"
                                                                       value="new-arrivals" type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-category-0"
                                                               class="min-w-0 flex-1 text-gray-500">{name()}</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-category-1" name="category[]"
                                                                       value="sale" type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-category-1"
                                                               class="min-w-0 flex-1 text-gray-500">Sale</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-category-2" name="category[]"
                                                                       value="travel" type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-category-2"
                                                               class="min-w-0 flex-1 text-gray-500">Travel</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-category-3" name="category[]"
                                                                       value="organization" type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-category-3"
                                                               class="min-w-0 flex-1 text-gray-500">Organization</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-category-4" name="category[]"
                                                                       value="accessories" type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-category-4"
                                                               class="min-w-0 flex-1 text-gray-500">Accessories</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-gray-200 px-4 py-6">
                                            <h3 class="-mx-2 -my-3 flow-root">

                                                <button type="button"
                                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                        aria-controls="filter-section-mobile-2" aria-expanded="false">
                                                    <span class="font-medium text-gray-900">Size</span>
                                                    <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                                </button>
                                            </h3>

                                            <div class="pt-6" id="filter-section-mobile-2">
                                                <div class="space-y-6">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-size-0" name="size[]"
                                                                       value="2l"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-size-0"
                                                               class="min-w-0 flex-1 text-gray-500">2L</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-size-1" name="size[]"
                                                                       value="6l"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-size-1"
                                                               class="min-w-0 flex-1 text-gray-500">6L</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-size-2" name="size[]"
                                                                       value="12l"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-size-2"
                                                               class="min-w-0 flex-1 text-gray-500">12L</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-size-3" name="size[]"
                                                                       value="18l"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-size-3"
                                                               class="min-w-0 flex-1 text-gray-500">18L</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-size-4" name="size[]"
                                                                       value="20l"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-size-4"
                                                               class="min-w-0 flex-1 text-gray-500">20L</label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input id="filter-mobile-size-5" name="size[]"
                                                                       value="40l"
                                                                       type="checkbox"
                                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14" fill="none">
                                                                    <path
                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path
                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        d="M3 7H11" stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label for="filter-mobile-size-5"
                                                               class="min-w-0 flex-1 text-gray-500">40L</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </DrawerContent>

                    <div class="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between border-b border-gray-200 pb-6 pt-24">
                            <h1 class="text-4xl font-semibold tracking-tight text-gray-900">{name()}</h1>

                            <div class="flex items-center">


                                <Drawer.Trigger contextId={'filter1'} type="button"
                                                class="m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                    <span class="sr-only">Filters</span>
                                    <svg class="size-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor"
                                         data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </Drawer.Trigger>
                            </div>
                        </div>


                        <section aria-labelledby="products-heading" class="pb-24 pt-6">
                            <h2 id="products-heading" class="sr-only">Products</h2>

                            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                                <form class="hidden lg:block">
                                    <h3 class="sr-only">{name()}</h3>


                                    <div class="border-b border-gray-200 py-6">
                                        <h3 class="-my-3 flow-root">

                                            <button type="button"
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-0" aria-expanded="false">
                                                <span class="font-medium text-gray-900">Color</span>
                                                <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                            </button>
                                        </h3>

                                        <div class="pt-6" id="filter-section-0">
                                            <div class="space-y-4">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-color-0" name="color[]" value="white"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-color-0"
                                                           class="text-sm text-gray-600">White</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-color-1" name="color[]" value="beige"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-color-1"
                                                           class="text-sm text-gray-600">Beige</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-color-2" name="color[]" value="blue"
                                                                   type="checkbox" checked
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-color-2"
                                                           class="text-sm text-gray-600">Blue</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-color-3" name="color[]" value="brown"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-color-3"
                                                           class="text-sm text-gray-600">Brown</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-color-4" name="color[]" value="green"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-color-4"
                                                           class="text-sm text-gray-600">Green</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-color-5" name="color[]" value="purple"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-color-5"
                                                           class="text-sm text-gray-600">Purple</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-b border-gray-200 py-6">
                                        <h3 class="-my-3 flow-root">

                                            <button type="button"
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-1" aria-expanded="false">
                                                <span class="font-medium text-gray-900">Category</span>
                                                <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                            </button>
                                        </h3>

                                        <div class="pt-6" id="filter-section-1">
                                            <div class="space-y-4">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-category-0" name="category[]"
                                                                   value="new-arrivals" type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-category-0" class="text-sm text-gray-600">New
                                                        Arrivals</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-category-1" name="category[]" value="sale"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-category-1"
                                                           class="text-sm text-gray-600">Sale</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-category-2" name="category[]"
                                                                   value="travel"
                                                                   type="checkbox" checked
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-category-2"
                                                           class="text-sm text-gray-600">Travel</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-category-3" name="category[]"
                                                                   value="organization" type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-category-3"
                                                           class="text-sm text-gray-600">Organization</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-category-4" name="category[]"
                                                                   value="accessories" type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-category-4"
                                                           class="text-sm text-gray-600">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-b border-gray-200 py-6">
                                        <h3 class="-my-3 flow-root">

                                            <button type="button"
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-2" aria-expanded="false">
                                                <span class="font-medium text-gray-900">Size</span>
                                                <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                            </button>
                                        </h3>

                                        <div class="pt-6" id="filter-section-2">
                                            <div class="space-y-4">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-size-0" name="size[]" value="2l"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-size-0" class="text-sm text-gray-600">2L</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-size-1" name="size[]" value="6l"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-size-1" class="text-sm text-gray-600">6L</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-size-2" name="size[]" value="12l"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-size-2" class="text-sm text-gray-600">12L</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-size-3" name="size[]" value="18l"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-size-3" class="text-sm text-gray-600">18L</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-size-4" name="size[]" value="20l"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-size-4" class="text-sm text-gray-600">20L</label>
                                                </div>
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-size-5" name="size[]" value="40l"
                                                                   type="checkbox" checked
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path class="opacity-0 group-has-[:checked]:opacity-100"
                                                                      d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-size-5" class="text-sm text-gray-600">40L</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>


                                <div class="lg:col-span-3">
                                    {children()}
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>

        </SideDrawer>
    )
        ;
};

export default CategoryFilters;