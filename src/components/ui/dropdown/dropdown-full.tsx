import {createSignal, For} from "solid-js";
import {Menu} from "@kobalte/core/menubar";
import {MenuContent, MenuItem, MenuTrigger} from "@ark-ui/solid";

export default function DropdownFull() {

  const options = [
    {
      id: 0,
      value: 'Most Popular'
    },
    {
      id: 1,
      value: 'Newest'
    },
    {
      id: 2,
      value: 'Lowest Price'
    },
    {
      id: 3,
      value: 'Highest Price'
    }
  ]

  const [getSelected, setSelected] = createSignal<number>(0)

  return (
    <Menu> {/* class="relative inline-flex w-full"  */}
          <MenuTrigger class="btn w-full justify-between min-w-[11rem] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100" aria-label="Select option">
            <span class="flex items-center">
              <span>{options[getSelected()].value}</span>
            </span>
            <svg class="shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500" width="11" height="7" viewBox="0 0 11 7">
              <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
            </svg>
          </MenuTrigger>
            <MenuContent class="font-medium text-sm text-gray-600 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700/60 focus:outline-hidden">

                  <For each={options}>
                    {(option: {id: number, value: string}) => (
                            <button
                                class={`flex items-center justify-between w-full py-2 px-3 cursor-pointer ${true ? 'bg-gray-50 dark:bg-gray-700/20' : ''} ${option.id === getSelected() && 'text-violet-500'}`}
                                onClick={() => { setSelected(option.id) }}
                            >
                              <span>{option.value}</span>
                              <svg class={`shrink-0 mr-2 fill-current text-violet-500 ${option.id !== getSelected() && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                                <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                              </svg>
                            </button>
                        )}
                  </For>


            </MenuContent>
    </Menu>
  )
}