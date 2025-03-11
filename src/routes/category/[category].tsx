import {Component, ParentProps} from "solid-js";
import CategoryFilters from "~/components/products/category-filters";
import ProductList from "~/components/products/product-list";
import rawProducts from "~/lib/data/products.json";
import {ProductSizesType} from "~/components/products/product-view";
import {createAsync, RouteSectionProps} from "@solidjs/router";
import {getCategory} from "~/lib/category";
import {Feature} from "~/lib/store";
import {getVendor} from "~/lib/vendors";


type PROPS = RouteSectionProps;
const Apparel: Component<PROPS> = props => {

    const categoryData: () => Feature = createAsync(async () => getCategory(props.params.category))



    console.log("apparel", categoryData())

    return (
        <>

            <CategoryFilters name={'New Arrivals'}>
                <ProductList list={[]}/>
            </CategoryFilters>

        </>
    )
};

export default Apparel;