import { Avatar } from "~/components/ui/avatar/avatar-ui"

export function RecentSales() {
    return (
        <div class="space-y-8">
            <div class="flex items-center">
                <Avatar name={'Erik Smith'} class="size-9"/>

                <div class="ml-4 space-y-1">
                    <p class="text-sm font-medium leading-none">Olivia Martin</p>
                    <p class="text-sm text-muted-foreground">olivia.martin@email.com</p>
                </div>
                <div class="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div class="flex items-center">
                <Avatar name={'Erik Smith'} class="size-9"/>
                <div class="ml-4 space-y-1">
                    <p class="text-sm font-medium leading-none">Jackson Lee</p>
                    <p class="text-sm text-muted-foreground">jackson.lee@email.com</p>
                </div>
                <div class="ml-auto font-medium">+$39.00</div>
            </div>
            <div class="flex items-center">
           <Avatar name={'Erik Smith'} class="size-9"/>
                <div class="ml-4 space-y-1">
                    <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p class="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                </div>
                <div class="ml-auto font-medium">+$299.00</div>
            </div>
            <div class="flex items-center">
           <Avatar name={'Erik Smith'} class="size-9"/>
                <div class="ml-4 space-y-1">
                    <p class="text-sm font-medium leading-none">William Kim</p>
                    <p class="text-sm text-muted-foreground">will@email.com</p>
                </div>
                <div class="ml-auto font-medium">+$99.00</div>
            </div>
            <div class="flex items-center">
           <Avatar name={'Erik Smith'} class="size-9"/>
                <div class="ml-4 space-y-1">
                    <p class="text-sm font-medium leading-none">Sofia Davis</p>
                    <p class="text-sm text-muted-foreground">sofia.davis@email.com</p>
                </div>
                <div class="ml-auto font-medium">+$39.00</div>
            </div>
        </div>
    )
}