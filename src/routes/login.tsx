import {Component, lazy} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";

const LoginUserForm = lazy(() => import('~/components/forms/login-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));

const Login: Component<RouteSectionProps> = props => {


    return (

        <FormLayout title={'Login'}>
            <LoginUserForm/>
        </FormLayout>
    );
};

export default Login;