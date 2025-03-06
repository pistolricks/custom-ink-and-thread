import {Component, createEffect, lazy} from "solid-js";
import {AccessorWithLatest, createAsync, RouteSectionProps, useNavigate} from "@solidjs/router";
import {AUTHENTICATION_TOKEN, getUserToken} from "~/lib";

const RegisterUserForm = lazy(() => import('~/components/users/forms/register-user-form'));
const FormLayout = lazy(() => import("~/components/forms/partials/form-layout"));

type PROPS = {}

const Register: Component<RouteSectionProps> = props => {





    return (
        <FormLayout title={'Register'}>
            <RegisterUserForm/>
        </FormLayout>
    );
};

export default Register;