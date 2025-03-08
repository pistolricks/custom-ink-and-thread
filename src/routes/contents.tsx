import {Component, createEffect, ParentProps} from "solid-js";
import {useNavigate} from "@solidjs/router";
import { useLayoutContext } from "~/context/layout-provider";

const ContentsLayout: Component<ParentProps> = props => {
    const navigate = useNavigate();
    const {currentUser} = useLayoutContext();


    createEffect(() => {
        console.log(currentUser)
        if (!currentUser?.id) {
            navigate('/', {replace: true});
        }
    })
    return (
        <>
            {props.children}
        </>
    );
};

export default ContentsLayout;