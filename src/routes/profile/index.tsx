import {Component} from "solid-js";
import {RouteDefinition} from "@solidjs/router";
import GeneralDetails from "~/components/profiles/general-details";


type PROPS = {}

export const route = {
    preload() {
        /**/
    }
} satisfies RouteDefinition

const Profile: Component<PROPS> = props => {

    return (
        <div class={'h-full w-full relative'}>

            <div class="space-y-10">
                <section aria-labelledby="personal-information">
                    <form>
                        <div class="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                            <div>
                                <h2
                                    id="personal-information"
                                    class="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                                >
                                    Personal information
                                </h2>
                                <p class="mt-1 text-sm leading-6 text-gray-500">
                                    Manage your personal information and role.
                                </p>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    );
};

export default Profile;