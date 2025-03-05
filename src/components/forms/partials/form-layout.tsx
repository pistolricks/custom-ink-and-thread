import {Component, JSXElement, Show} from "solid-js";
import {A} from "@solidjs/router";


type PROPS = {
    title?: string
    imageSrc?: string
    hideLogo?: boolean
    children?: JSXElement
}

const FormLayout: Component<PROPS> = props => {

    const hideLogo = () => props.hideLogo ?? false;
    const title = () => props.title ?? '';
    const imageSrc = () => props.imageSrc ?? import.meta.env.VITE_APP_LOGO;

    return (
        <div>
            <div class="w-full h-screen items-center justify-center  bg-gray-50 sm:px-4">
                <div class="flex h-full min-h-full flex-col justify-center">
                    <div class="sm:mx-auto sm:w-full">
                        <Show when={!hideLogo()}>
                            <A href={'/'}>
                                <img class="mx-auto h-24 w-auto rounded"
                                     src={imageSrc()} alt="logo"/>
                            </A>
                        </Show>
                        <h2 class="mt-4 text-center text-2xl/9 tracking-tight text-gray-11 uppercase">
                            {title()}
                        </h2>
                    </div>
                    <div class="w-full space-y-6 text-gray-600">
                        <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
                            <div class="mx-auto max-w-lg container">
                                {props.children}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormLayout;