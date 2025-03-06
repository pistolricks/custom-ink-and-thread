import {AccessorWithLatest, createAsync, RouteDefinition} from "@solidjs/router";
import {lazy, onMount} from "solid-js";
import {getContents} from "~/lib/contents";
import {Button} from "~/components/ui/button";
import {PhotoIcon, PlusIcon} from "~/components/svg";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";
import {updateCollection} from "~/lib/features";

import BaseDialog, {DialogContent} from "~/components/dialogs/base-dialog";
import FooterMenu from "~/components/layouts/partials/footer-menu";
import {FileUploader} from "~/components/ui/file/file-uploader";
import {Feature} from "~/lib/store";


const ContentsList = lazy(() => import( "~/components/contents/list"));

export const route = {

} satisfies RouteDefinition
export default function Contents() {

    const {getMyLocation, getStoreCollection, setStoreCollection} = useLayoutContext();




    onMount(async () => {

        let location = getMyLocation();
        if(!location) return;
        let col = updateCollection(getStoreCollection, setStoreCollection, location)
        console.log("col", col)
    })
    return (
        <>
            <ContentsList feature={getMyLocation()}/>
            <BaseDialog contextId={'albd1'}>
                <DialogContent contextId={'albd1'}>
                    <FileUploader/>
                </DialogContent>
                <FooterMenu title={<PhotoIcon class={'size-full stroke-sky-11 p-0.5 fill-green-2'}/>} variant={'ghost'}
                            size={'icon'}>
                    <Button as={Drawer.Trigger} contextId={"albd1"} variant={"ghost"} size={'icon'}>
                        <PlusIcon class={'size-full p-0.5 stroke-slate-11'}/>
                    </Button>
                </FooterMenu>
            </BaseDialog>
        </>
    );
}

