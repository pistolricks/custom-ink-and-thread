import {Component, ParentProps} from "solid-js";
import CategoryFilters from "~/components/products/category-filters";

const NewArrivals: Component<ParentProps> = props => {

    return (
        <>
        <CategoryFilters name={'New Arrivals'}>
            <></>
        </CategoryFilters>

        </>
    )
};

export default NewArrivals;