import {Component, createEffect, lazy, Show, VoidComponent} from "solid-js";
import {AccessorWithLatest, createAsync, RouteSectionProps, useNavigate} from "@solidjs/router";
import {USER} from "~/lib/store";
import {getUser} from "~/lib/users";
import {redirectTo} from "~/lib";
import {useLayoutContext} from "~/context/layout-provider";
import {SessionUser} from "~/lib/session";

const ResendActivateEmailForm = lazy(() => import( "~/components/users/forms/resend-activate-email-form"));
const LoginUserForm = lazy(() => import('~/components/users/forms/login-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));


const Resend: Component<RouteSectionProps> = props => {

    const {currentUser} = useLayoutContext();
    const navigate = useNavigate();

    createEffect(() => {

        if (currentUser?.activated) {
            navigate('/', {replace: true});
        }
    })

    return (
        <FormLayout>
            <Show
                fallback={<LoginUserForm/>}
                when={!currentUser?.name}>
                    <Show  when={!currentUser?.activated}>
                        <ResendActivateEmailForm/>
                    </Show>
            </Show>

        </FormLayout>
    );
};

export default Resend;