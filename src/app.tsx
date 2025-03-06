import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import "./app.css";
import Header from "~/components/layouts/partials/header";
import {Toaster} from "~/components/ui/toast";
import AppLayout from "~/components/layouts/app-layout";
import {LayoutProvider} from "~/context/layout-provider";
import {SessionProvider} from "~/context/current-provider";


export default function App() {
    return (
        <Router
            root={(props) => (

                    <LayoutProvider>
                        <AppLayout>

                            <Suspense>{props.children}</Suspense>

                        </AppLayout>
                    </LayoutProvider>
                )}
        >
            <Toaster/>
            <FileRoutes/>
        </Router>
    );
}
