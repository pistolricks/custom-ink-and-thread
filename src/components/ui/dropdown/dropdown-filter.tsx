import Popover from "@corvu/popover";

export default function DropdownProfile({ align }: {
  align?: 'left' | 'right'
}) {
  return (

    <Popover>
      <Popover.Trigger class="btn px-2.5 bg-white dark:bg-gray-800 border-gray-200 hover:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600 text-gray-400 dark:text-gray-500">
        <span class="sr-only">Filter</span><wbr />
        <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16">
          <path d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM3 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM7 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z" />
        </svg>
      </Popover.Trigger>
      <Popover.Portal>
      <Popover.Content class="relative inline-flex">

            <>
              <div class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-3">Filters</div>
              <ul class="mb-4">
                <li class="py-1 px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm font-medium ml-2">Direct VS Indirect</span>
                  </label>
                </li>
                <li class="py-1 px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm font-medium ml-2">Real Time Value</span>
                  </label>
                </li>
                <li class="py-1 px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm font-medium ml-2">Top Channels</span>
                  </label>
                </li>
                <li class="py-1 px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm font-medium ml-2">Sales VS Refunds</span>
                  </label>
                </li>
                <li class="py-1 px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm font-medium ml-2">Last Order</span>
                  </label>
                </li>
                <li class="py-1 px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm font-medium ml-2">Total Spent</span>
                  </label>
                </li>
              </ul>
              <div class="py-2 px-3 border-t border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-700/20">
                <ul class="flex items-center justify-between">
                  <li>
                    <button class="btn-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-red-500">Clear</button>
                  </li>
                  <li>
                    <button class="btn-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300" onClick={() => close()}>Apply</button>
                  </li>
                </ul>
              </div>
            </>

        </Popover.Content>
      </Popover.Portal>
    </Popover>

  )
}