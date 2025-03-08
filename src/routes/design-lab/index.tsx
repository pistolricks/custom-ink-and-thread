import {Component} from "solid-js";
import {useLayoutContext} from "~/context/layout-provider";

type PROPS = {

}

const DesignLab: Component<PROPS> = props => {

    const {getHeight} = useLayoutContext();

    return (
        <div
            style={{
                height: getHeight() + 'px'
            }}
            class="w-screen relative overflow-hidden">
            <iframe
                height={getHeight()}
                title="TaildwindCSS"
                src="http://localhost:3040/"
                class="w-screen"
            >
            </iframe>
        </div>
    );
};

export default DesignLab;