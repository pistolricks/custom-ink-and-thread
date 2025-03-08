import {AccessorWithLatest, createAsync} from "@solidjs/router";
import {lazy, onMount} from "solid-js";
import {getVendors} from "~/lib/vendors";
import FooterMenu from "~/components/layouts/partials/footer/footer-menu";
import {Button} from "~/components/ui/button";
import BaseDialog, {DialogContent} from "~/components/ui/dialogs/base-dialog";
import Drawer from "@corvu/drawer";
import FormLayout from "~/components/forms/partials/form-layout";
import CreateVendorForm from "~/components/vendors/forms/create-vendor-form";
import {useLayoutContext} from "~/context/layout-provider";
import {Feature} from "~/lib/store";
import {updateCollection} from "~/lib/features";
import {IconCircle, IconPlus} from "~/components/ui/svg";

const VendorsList = lazy(() => import( "~/components/vendors/list"));


export const route = {
    preload() {
        getVendors();
    }
}

export default function Vendors() {
    const {getStoreCollection, setStoreCollection} = useLayoutContext();

    const features: AccessorWithLatest<Feature> = createAsync(async () => getVendors());


    onMount(async () => {

        let col = updateCollection(getStoreCollection, setStoreCollection, features())
        console.log("col", col)

    })


    return (
        <>


            <VendorsList vendors={features()?.properties?.vendors}/>

            <BaseDialog contextId={'albd1'}>
                <DialogContent class={'min-h-[70dvh] md:w-1/2 lg:w-2/3'} contextId={'albd1'}>
                    <FormLayout hideLogo title="Add Vendor">
                        {/*
            <FileUploader/>
            */}
                        <CreateVendorForm/>
                    </FormLayout>
                </DialogContent>

                <FooterMenu title={<IconCircle class={'size-full stroke-sky-11 p-0.5 fill-green-2'}/>}
                            variant={'ghost'}
                            size={'icon'}>
                    <Button as={Drawer.Trigger} type={"button"} contextId={"albd1"} variant={"ghost"} size={'icon'}>
                        <IconPlus class={'size-full p-0.5 stroke-slate-11'}/>
                    </Button>
                </FooterMenu>

            </BaseDialog>
        </>

    );
}
