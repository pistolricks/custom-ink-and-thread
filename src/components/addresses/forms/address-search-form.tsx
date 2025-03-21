import {Component, createEffect, createMemo, JSX, Setter, Show} from "solid-js";
import {useSubmission} from "@solidjs/router";
import {TextField, TextFieldErrorMessage, TextFieldInput} from "~/components/ui/field/text-field";
import {Button} from "../../ui/button";
import {showToast} from "~/components/ui/toast";
import {IconChevronsLeft, IconSearch, IconMapPin, IconCircle, IconX} from "~/components/ui/svg";
import {addressSearchHandler} from "~/lib/addresses";
import {useLayoutContext} from "~/context/layout-provider";
import Drawer from "@corvu/drawer";

type PROPS = { class?: string, contextId: string, onClick: () => void };

const AddressSearchForm: Component<PROPS> = props => {
    const {getViewbox, getQuery, setQuery, setStoreCollection} = useLayoutContext();
    const submission = useSubmission(addressSearchHandler);
    const contextId = () => props.contextId ?? 'map1';
    const {open, setOpen} = Drawer.useDialogContext(contextId())

    const className = () => props.class ?? 'flex justify-center items-center';

    const results = createMemo(() => {
        console.log("result", submission?.result)
        return submission?.result
    })


    createEffect(() => {
        if (submission?.pending) {
            setStoreCollection({
                type: "FeatureCollection",
                features: []
            })
        }

        console.log("search", getQuery())
        if (results()?.error) {
            showToast({
                variant: "error",
                title: "Error",
                description: results()?.error
            })
        }
    })


    const handleSearch: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
        console.log("Search Input changed to", event.currentTarget.value)

        setQuery(event.currentTarget.value)
    }

    const handleClearQuery = () => {
        getQuery()?.length > 0 ? setQuery("") : setOpen(false)

    }

    return (
        <>
            <form class={className()} action={addressSearchHandler} method="post">
                <TextField class={'w-full relative'}>
                    <Button
                        onClick={props.onClick}
                        class={'absolute left-[1px] hover:text-red-5 inset-y-0 z-40 w-12 py-5 rounded-l rounded-r-none h-6 flex items-center'}
                        variant={'link'}
                        size="icon">
                        <IconMapPin class={'stroke-green-11 size-8'}/>
                    </Button>
                    <TextFieldInput onInput={handleSearch}
                                    value={getQuery()} class={"w-full pl-16 pr-24"} type="text"
                                    autocomplete="none" id="search"
                                    name="search" placeholder="Search"/>

                    <input class={'sr-only'} id={'viewbox'} name={'viewbox'} type={'text'}
                           value={String(getViewbox())}/>


                    <Show when={results()?.error?.search}>
                        <TextFieldErrorMessage>
                            {results()?.error?.search}
                        </TextFieldErrorMessage>
                    </Show>


                    <Button
                        onClick={handleClearQuery}
                        disabled={getQuery()?.length < 1 && !open()}
                        class={'absolute right-12 inset-y-0 z-40 w-12 p-1 rounded-none h-full flex items-center'}
                        variant={'link'}
                        size="icon">
                        <Show
                            fallback={<IconX class={"p-1.5 stroke-red-11 hover:stroke-red-12"}/>}
                            when={getQuery()?.length > 0}>
                            <IconChevronsLeft class={"p-1.5 stroke-red-8 hover:stroke-red-12"}/>
                        </Show>
                    </Button>

                    <Button disabled={getQuery()?.length < 1}
                            class={'absolute right-0 inset-y-0 z-40 w-12 p-1 h-full flex items-center bg-mint-3 hover:bg-mint-4 border border-gray-10 rounded-l-none rounded-r-md'}
                            variant={'link'}
                            type={"submit"}
                            size="icon">
                        <Show
                            fallback={<IconCircle class={"p-0.5 stroke-red-8 hover:stroke-red-7 "}/>}
                            when={!submission.pending}>
                            <IconSearch class={"p-0.5 stroke-red-8 hover:stroke-red-7 "}/>
                        </Show>

                    </Button>
                </TextField>
            </form>
        </>
    )
}


export default AddressSearchForm;