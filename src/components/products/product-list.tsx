import {Component, createEffect, createSelector, createSignal, For} from "solid-js";
import SideDrawer from "~/components/ui/drawer/side-drawer";
import {CONTENT} from "~/lib/store";
import {Drawer, DrawerContent} from "~/components/ui/drawer";
import ProductView, {ProductDetailType} from "~/components/products/product-view";
import {IconX} from "~/components/ui/svg";


type PROPS = {
    list: ProductDetailType[]
}


const ProductList: Component<PROPS> = props => {
    const list = () => props.list;


    createEffect(() => console.log(list()))


    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<ProductDetailType>()
    const isSelected = createSelector(getSelectedId)

    const handler = (data: ProductDetailType, event: Event) => {
        console.log("Data:", data, "Event:", event);
        setSelectedId(data.id)
        if (isSelected(data.id)) {
            setSelected(data)
        }

    };


    return (
        <SideDrawer side={'bottom'} contextId={'product-preview-1'}>
            <div class="bg-white">

                <DrawerContent side={"bottom"} contextId={'product-preview-1'} class={'px-2 bg-white overflow-y-hidden'}>
                    <>

                        <Drawer.Trigger
                            contextId={'product-preview-1'}
                            class="absolute p-1 top-1 right-1 z-50 border border-gray-400 rounded-full hover:border-accent/80 backdrop-blur-2xl">
                            <IconX class={'size-8 hover:stroke-accent/50'}/>
                        </Drawer.Trigger>

                        <ProductView {...getSelected()}/>
                    </>
                </DrawerContent>

                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        <For each={list()}>
                            {(product) => (

                                <Drawer.Trigger
                                    contextId={'product-preview-1'}
                                    onClick={[handler, product]}
                                    class="group relative">
                                    <img
                                        alt={product.name}
                                        src={product.src}
                                        class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                    />
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-gray-700">

                                                    <span aria-hidden="true" class="absolute inset-0"/>
                                                    {product.name}

                                            </h3>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </Drawer.Trigger>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </SideDrawer>
    )
}

export default ProductList;
