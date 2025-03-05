import {Component, JSXElement} from "solid-js";
import {A} from "@solidjs/router";

type PROPS = {
    children?: JSXElement;
}

const NavMenuUi: Component<PROPS> = props => {

    return (
        <div class="absolute inset-x-0 top-full text-sm text-gray-500">

            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

            <div class="relative bg-white">
                <div class="mx-auto max-w-7xl px-8">
                    <div class="grid grid-cols-4 gap-x-8 gap-y-10 py-16">





                        <div class="group relative">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg" alt="Model wearing minimalist watch with black wristband and white watch face." class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
                                <a href="#" class="mt-4 block font-medium text-gray-900">
                                    <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                    Accessories
                                </a>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                        </div>
                        <div class="group relative">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg" alt="Model opening tan leather long wallet with credit card pockets and cash pouch." class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
                                <a href="#" class="mt-4 block font-medium text-gray-900">
                                    <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                    Carry
                                </a>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default NavMenuUi;


const NavMenuLink: Component<{label: string, href: string, src: string}> = props => {
    const label = () => props.label;
    const href = () => props.href;
    const src = () => props.src;


    return (
        <div class="group relative">
            <img src={src()} alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"/>
            <A href={href()} class="mt-4 block font-medium text-gray-900">
                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                {label()}
            </A>
            <p aria-hidden="true" class="mt-1">Shop now</p>
        </div>
    );
};