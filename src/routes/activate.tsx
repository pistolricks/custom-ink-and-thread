import {Component, createEffect, Match, Switch} from "solid-js";
import ActivateUserForm from '~/components/users/forms/activate-user-form';
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";
import FormLayout from "~/components/forms/partials/form-layout";

const Activate: Component<RouteSectionProps> = props => {
    const {storedCurrentUser} = useLayoutContext();



    return (
        <FormLayout>
            <Switch>
                <Match when={!storedCurrentUser?.activated}>
                    <ActivateUserForm/>
                </Match>
                <Match when={!storedCurrentUser}>
                    <ActivateUserForm/>
                </Match>
            </Switch>
        </FormLayout>
    );
};

export default Activate;