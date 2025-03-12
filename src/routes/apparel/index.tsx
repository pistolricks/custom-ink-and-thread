import {Component, ParentProps} from "solid-js";
import CategoryFilters from "~/components/products/category-filters";
import ProductList from "~/components/products/product-list";
import rawProducts from "~/lib/data/products.json";
import {ProductSizesType} from "~/components/products/product-view";
import {createAsync, RouteSectionProps} from "@solidjs/router";
import {getCategory} from "~/lib/category";
import {TypingAnimation} from "~/components/ui-animated/typing-animation";


type PROPS = RouteSectionProps;
const Apparel: Component<ParentProps> = props => {


    const products = rawProducts.map(product => ({
        ...product,
        sizes: product.sizes?.map(size => ({
            ...size,
            name: size.name as ProductSizesType, // Ensure correct type for 'name'
        })),
    }));

    console.log("apparel", products)

    return (
        <>

            <TypingAnimation text={"CustomINK and Thread"}/>

            <CategoryFilters name={'New Arrivals'}>
                <ProductList list={products}/>
            </CategoryFilters>

        </>
    )
};

export default Apparel;