import {IconCircle, IconCreditCard, IconStar} from "~/components/ui/svg";
import {Component, createSignal, For} from "solid-js";
import {RadioGroup, RadioGroupItem} from "~/components/ui/radio-group/radio-group";


const policies = [
    {name: 'International delivery', icon: IconCircle, description: 'Get your order in 2 years'},
    {name: 'Loyalty rewards', icon: IconCreditCard, description: "Don't look at other tees"},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export type ProductImageType = {
    id: number,
    src: string,
    alt: string,
}

export type ProductColorType = {
    name: string;
    bgColor: string;
    selectedColor: string;
}

export type ProductSizesType =  "XXS" | "XS" | "S" | "M" | "L" | "XL" | "NA"

export type ProductSizeType = {
   name: ProductSizesType,
   inStock: boolean
}

export type ProductDetailType = {
    id?: string;
    name?: string
    price?: string
    rating?: number,
    reviewCount?: string,
    src?: string,
    href?: string,
    images?: ProductImageType[],
    colors?: ProductColorType[],
    sizes?: ProductSizeType[],
    description?: string;
    details?: string[]
}

const ProductView: Component<ProductDetailType> = props => {

    const defaultColor = {
        name: "",
        bgColor: "",
        selectedColor: "",
    }
    const defaultSize = {
        name: "NA",
        inStock: false
    }

    const id = () => props.id;
    const name = () => props.name;
    const price = () => props.price;
    const rating = () => props.rating ?? 4;
    const reviewCount = () => props.reviewCount;
    const href = () => props.href;
    const images = () => props.images;
    const colors = () => props.colors ?? [defaultColor];
    const sizes = () => props.sizes ?? [defaultSize];
    const description = () => props.description;
    const details = () => props.details;



    const [selectedColor, setSelectedColor] = createSignal(colors()[0])
    const [selectedSize, setSelectedSize] = createSignal(sizes()[2])

    return (
        <div class="bg-white rounded-xl overflow-y-auto scrollbar-hide">
            <div class="pb-16 pt-6 sm:pb-24">
                <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                        <div class="lg:col-span-5 lg:col-start-8">
                            <div class="flex justify-between">
                                <h1 class="text-xl font-medium text-gray-900">{name()}</h1>
                                <p class="text-xl font-medium text-gray-900">{price()}</p>
                            </div>
                            {/* Reviews */}
                            <div class="mt-4">
                                <h2 class="sr-only">Reviews</h2>
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-700">
                                        {rating()}
                                        <span class="sr-only"> out of 5 stars</span>
                                    </p>
                                    <div class="ml-1 flex items-center">
                                        {[0, 1, 2, 3, 4].map((index) => (
                                            <IconStar
                                                aria-hidden="true"
                                                class={classNames(
                                                    rating() > index ? 'text-yellow-400' : 'text-gray-200',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <div aria-hidden="true" class="ml-4 text-sm text-gray-300">
                                        ·
                                    </div>
                                    <div class="ml-4 flex">
                                        <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            See all {reviewCount()} reviews
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image gallery */}
                        <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                            <h2 class="sr-only">Images</h2>

                            <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                                <For each={images()}>
                                    {(image, i) => (
                                    <img
                                        alt={image.alt}
                                        src={image.src}
                                        class={classNames(
                                           i() === 0 ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                                            'rounded-lg',
                                        )}
                                    />
                                )}
                                </For>
                            </div>
                        </div>

                        <div class="mt-8 lg:col-span-5">
                            <form>
                                {/* Color picker */}
                                <div>
                                    <h2 class="text-sm font-medium text-gray-900">Color</h2>

                                    <fieldset aria-label="Choose a color" class="mt-2">
                                        <RadioGroup  onChange={setSelectedColor}
                                                    class="flex items-center gap-x-3">
                                            {colors().map((color) => (
                                                <RadioGroupItem
                                                    value={color.name}
                                                    aria-label={color.name}
                                                    class={classNames(
                                                        color.selectedColor,
                                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                                    )}
                                                >
                          <span
                              aria-hidden="true"
                              class={classNames(color.bgColor, 'size-8 rounded-full border border-black/10')}
                          />
                                                </RadioGroupItem>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                {/* Size picker */}
                                <div class="mt-8">
                                    <div class="flex items-center justify-between">
                                        <h2 class="text-sm font-medium text-gray-900">Size</h2>
                                        <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            See sizing chart
                                        </a>
                                    </div>

                                    <fieldset aria-label="Choose a size" class="mt-2">
                                        <RadioGroup
                                            value={selectedSize?.name}
                                            onChange={setSelectedSize}
                                            class="grid grid-cols-3 gap-3 sm:grid-cols-6"
                                        >
                                            <For each={sizes()}>
                                            {(size) => (
                                                <RadioGroupItem
                                                    value={size?.name}
                                                    disabled={!size.inStock}
                                                    class={classNames(
                                                        size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                                                        'flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1',
                                                    )}
                                                >
                                                    {size.name}
                                                </RadioGroupItem>
                                            )}
                                            </For>
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <button
                                    type="submit"
                                    class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to cart
                                </button>
                            </form>

                            {/* Product details */}
                            <div class="mt-10">
                                <h2 class="text-sm font-medium text-gray-900">Description</h2>

                                <div class="mt-4 space-y-4 text-sm/6 text-gray-500">
                                    {description()}
                                </div>
                            </div>

                            <div class="mt-8 border-t border-gray-200 pt-8">
                                <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

                                <div class="mt-4">
                                    <ul role="list"
                                        class="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                                        <For each={details()}>
                                            {(item) => (
                                            <li class="pl-2">
                                                {item}
                                            </li>
                                        )}
                                        </For>
                                    </ul>
                                </div>
                            </div>

                            {/* Policies */}
                            <section aria-labelledby="policies-heading" class="mt-10">
                                <h2 id="policies-heading" class="sr-only">
                                    Our Policies
                                </h2>

                                <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                    <For each={policies}>
                                        {(policy) => (
                                        <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                                            <dt>
                                                <policy.icon aria-hidden="true"
                                                             class="mx-auto size-6 shrink-0 text-gray-400"/>
                                                <span
                                                    class="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                        </div>
                                    )}
                                    </For>
                                </dl>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductView;
