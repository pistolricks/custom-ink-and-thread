import {Component, createEffect, lazy} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import { useLayoutContext } from "~/context/layout-provider";

const LoginUserForm = lazy(() => import('~/components/users/forms/login-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));

const Login: Component<RouteSectionProps> = props => {
    const navigate = useNavigate();
    const {currentUser} = useLayoutContext();


    createEffect(() => {
        console.log(currentUser)
        if (currentUser?.id) {
            navigate('/', {replace: true});
        }
    })

    return (

        <FormLayout title={'Login'}>
            <LoginUserForm/>
        </FormLayout>
    );
};

export default Login;