import {Component, createEffect, lazy} from "solid-js";
import {AccessorWithLatest, createAsync, RouteSectionProps, useNavigate} from "@solidjs/router";
import {AUTHENTICATION_TOKEN, getUserToken} from "~/lib";

const RegisterUserForm = lazy(() => import('~/components/forms/register-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));

type PROPS = {}

const Register: Component<RouteSectionProps> = props => {
    const navigate = useNavigate();
    const token: AccessorWithLatest<AUTHENTICATION_TOKEN | undefined> = createAsync(async () => getUserToken());


    createEffect(() => {
        if (token()) {
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