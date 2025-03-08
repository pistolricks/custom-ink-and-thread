import {Component, For} from "solid-js";
import {MenuItemType} from "~/lib/store";
import {MenuItem} from "~/components/layouts/partials/menu-item";
import {Dynamic} from "solid-js/web";

type PROPS = {
    list: MenuItemType[]
    contextId: string;
}

const MenuSection: Component<PROPS> = props => {

    const list = () => props.list;
    const contextId = () => props.contextId;
    return (
        <div aria-label="side navigation" class="flex-1 overflow-auto divide-y divide-slate-100">
            <div>
                <ul class="flex flex-col flex-1 gap-1 py-3">
                    <For each={list()}>
                        {(item) => (
                            <li class="px-3">
                                <MenuItem contextId={contextId()} {...item}>
                                    <Dynamic component={item.icon}/>
                                </MenuItem>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </div>
    );
};

export default MenuSection;