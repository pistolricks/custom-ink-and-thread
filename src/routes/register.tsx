import {Component, createEffect, lazy} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";

const RegisterUserForm = lazy(() => import('~/components/users/forms/register-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));

type PROPS = {}

const Register: Component<RouteSectionProps> = props => {
    const navigate = useNavigate();
    const {currentUser} = useLayoutContext();


    createEffect(() => {
        console.log(currentUser)
        if (currentUser?.id) {
            navigate('/', {replace: true});
        }
    })

    return (
        <FormLayout title={'Register'}>
            <RegisterUserForm/>
        </FormLayout>
    );
};

export default Register;