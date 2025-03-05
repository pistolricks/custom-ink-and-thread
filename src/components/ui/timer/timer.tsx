import { Timer, useTimer } from '@ark-ui/solid/timer'

export const RootProvider = () => {
    const timer = useTimer({ targetMs: 60 * 60 * 1000 })

    return (
        <>
            <button onClick={() => timer().pause()}>Pause</button>

            <Timer.RootProvider value={timer}>
                <Timer.Area>
                    <Timer.Item type="days" />
                    <Timer.Separator>:</Timer.Separator>
                    <Timer.Item type="hours" />
                    <Timer.Separator>:</Timer.Separator>
                    <Timer.Item type="minutes" />
                    <Timer.Separator>:</Timer.Separator>
                    <Timer.Item type="seconds" />
                </Timer.Area>
                <Timer.Control>
                    <Timer.ActionTrigger action="start">Play</Timer.ActionTrigger>
                    <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
                    <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
                </Timer.Control>
            </Timer.RootProvider>
        </>
    )
}



export const Events = () => (
    <Timer.Root
        targetMs={5 * 1000}
        onComplete={() => console.log('Timer completed')}
        onTick={(details) => console.log('Tick:', details.formattedTime)}
    >
        <Timer.Item type="seconds" />
    </Timer.Root>
)



export const Countdown = () => (
    <Timer.Root autoStart countdown startMs={60 * 60 * 500}>
        <Timer.Area>
            <Timer.Item type="days" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="hours" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="minutes" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="seconds" />
        </Timer.Area>
    </Timer.Root>
)



export const Basic = () => (
    <Timer.Root targetMs={60 * 60 * 1000}>
        <Timer.Area>
            <Timer.Item type="days" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="hours" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="minutes" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="seconds" />
        </Timer.Area>
        <Timer.Control>
            <Timer.ActionTrigger action="start">Play</Timer.ActionTrigger>
            <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
            <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
        </Timer.Control>
    </Timer.Root>
)
