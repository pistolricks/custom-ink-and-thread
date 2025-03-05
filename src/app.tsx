import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "~/components/layouts/partials/nav";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav menu={[]}/>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
