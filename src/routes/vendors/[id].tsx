import {Component, createEffect, lazy} from "solid-js";
import {createAsync, RouteDefinition, RouteSectionProps} from "@solidjs/router";
import {getVendor} from "~/lib/vendors";
import {Feature} from "~/lib/store";

const VendorDetails = lazy(() => import("~/components/vendors/details"));

export const route = {
    preload({params}) {
        getVendor(+params.id);
    }
} satisfies RouteDefinition

type PROPS = RouteSectionProps;

const View: Component<PROPS> = props => {

    const vendorData: () => Feature = createAsync(async () => getVendor(+props.params.id))


    createEffect(() => console.log(vendorData()))


    return (

        <VendorDetails details={vendorData()}/>

    );
};

export default View;