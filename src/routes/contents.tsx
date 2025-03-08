import {Component, ParentProps} from "solid-js";

const ContentsLayout: Component<ParentProps> = props => {

    return (
        <>
            {props.children}
        </>
    );
};

export default ContentsLayout;