import {Component, ParentProps} from "solid-js";
import CategoryFilters from "~/components/products/category-filters";
import ProductList, {Product} from "~/components/products/product-list";
import SideDrawer from "~/components/ui/drawer/side-drawer";
import products from "~/lib/data/products.json";

const Apparel: Component<ParentProps> = props => {

    console.log("apparel", products)

    return (
        <>

            <CategoryFilters name={'New Arrivals'}>
                <ProductList list={products}/>
            </CategoryFilters>

        </>
    )
};

export default Apparel;