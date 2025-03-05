import { Avatar, useAvatar } from '@ark-ui/solid/avatar'

export const RootProvider = () => {
    const avatar = useAvatar()

    return (
        <>
            <button onClick={() => avatar().setSrc('https://new-source.com')}>Change Source</button>

            <Avatar.RootProvider value={avatar}>
                <Avatar.Fallback>PA</Avatar.Fallback>
                <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
            </Avatar.RootProvider>
        </>
    )
}



export const Events = () => {
    const handleStatusChange = (details: Avatar.StatusChangeDetails) => {
        console.log(details.status)
    }

    return (
        <Avatar.Root onStatusChange={handleStatusChange}>
            <Avatar.Fallback>PA</Avatar.Fallback>
            <Avatar.Image src="https://i.pravatar.cc/3000" alt="avatar" />
        </Avatar.Root>
    )
}



export const Basic = () => (
    <Avatar.Root>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
)
