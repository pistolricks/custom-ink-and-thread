import {Component, createEffect, lazy} from "solid-js";
import {AccessorWithLatest, createAsync, RouteSectionProps, useNavigate} from "@solidjs/router";
import {AUTHENTICATION_TOKEN, getUserToken} from "~/lib";

const LoginUserForm = lazy(() => import('~/components/users/forms/login-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));

const Login: Component<RouteSectionProps> = props => {

    return (

        <FormLayout title={'Login'}>
            <LoginUserForm/>
        </FormLayout>
    );
};

export default Login;