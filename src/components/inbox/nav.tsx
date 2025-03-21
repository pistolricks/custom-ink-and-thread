import type { Component } from "solid-js"
import { For, Show } from "solid-js"

import { cn } from "~/lib/ui"
import { buttonVariants } from "~/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: Component
    variant: "default" | "ghost"
  }[]
}

export function Nav(props: NavProps) {
  return (
    <div
      data-collapsed={props.isCollapsed}
      class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <For each={props.links}>
          {(item) => {
            const Icon = item.icon
            return (
              <Show
                when={props.isCollapsed}
                fallback={
                  <a
                    href="#"
                    class={cn(
                      buttonVariants({ variant: item.variant, size: "sm", class: "text-sm" }),
                      item.variant === "default" &&
                        "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                      "justify-start"
                    )}
                  >
                    <div class="mr-2">
                      <Icon />
                    </div>
                    {item.title}
                    {item.label && (
                      <span
                        class={cn(
                          "ml-auto",
                          item.variant === "default" && "text-background dark:text-white"
                        )}
                      >
                        {item.label}
                      </span>
                    )}
                  </a>
                }
              >
                <Tooltip openDelay={0} closeDelay={0} placement="right">
                  <TooltipTrigger
                    as="a"
                    href="#"
                    class={cn(
                      buttonVariants({ variant: item.variant, size: "icon" }),
                      "size-9",
                      item.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <Icon />
                    <span class="sr-only">{item.title}</span>
                  </TooltipTrigger>
                  <TooltipContent class="flex items-center gap-4">
                    {item.title}
                    <Show when={item.label}>
                      <span class="ml-auto text-muted-foreground">{item.label}</span>
                    </Show>
                  </TooltipContent>
                </Tooltip>
              </Show>
            )
          }}
        </For>
      </nav>
    </div>
  )
}
