import {Component, ParentProps} from "solid-js";
import CategoryFilters from "~/components/products/category-filters";
import ProductList from "~/components/products/product-list";

const NewArrivals: Component<ParentProps> = props => {

    return (
        <>
        <CategoryFilters name={'New Arrivals'}>
            <ProductList list={[]}/>
        </CategoryFilters>

        </>
    )
};

export default NewArrivals;