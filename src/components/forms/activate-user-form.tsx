import {Component, createMemo, createSignal, JSX} from "solid-js";
import {activateUserHandler} from "~/lib/users";
import {TextField, TextFieldInput} from "~/components/ui/field/text-field";
import {showToast} from "~/components/ui/toast";
import {useNavigate} from "@solidjs/router";
import {ChevronLeft} from "lucide-solid";
import {Button} from "~/components/ui/button";

type PROPS = {}

const ActivateUserForm: Component<PROPS> = props => {

    const [getToken, setToken] = createSignal("")

    const [getResponse, setResponse] = createSignal<any>()

    const navigate = useNavigate();

    const handleToken: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
        console.log("Input changed to", event.currentTarget.value)
        setToken(event.currentTarget.value)
    }

    const token = createMemo(() => {
        console.log(getToken())
        return getToken()
    })


    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        let res = await activateUserHandler(token())
        setResponse(await res)

        console.log("activate-response", getResponse())
        if (getResponse()?.user?.activated) {
            showToast({
                variant: "success",
                title: "Success",
                description: "You are activated successfully!",
            })
            navigate("/login")
        }

        if (getResponse()?.error?.token) {
            showToast({
                variant: "error",
                title: "Error",
                description: getResponse()?.error?.token,
            })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} class={'space-y-4'}>

                <TextField>
                    <TextFieldInput onInput={handleToken} type="text" autocomplete={'none'} required name="token"
                                    placeholder="activation token"/>
                </TextField>
                <div class={'flex justify-end space-x-2'}>
                    <Button as={"A"} href={'/resend'} variant={'secondary'} type={"button"}>Resend</Button>
                    <div class={'items-center flex flex-row-reverse space-x-2 space-x-reverse'}>
                        <Button as={"button"} variant={'default'} type={"submit"}>Login</Button>
                        <Button
                            as={"A"}
                            href={'/'}
                            variant={'secondary'}
                            size={"icon"}
                            type={"button"}
                        >
                            <ChevronLeft fill="current"/>
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ActivateUserForm;