// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>




            <link rel="icon" href="icons/icon.png" sizes="32x32" />
            <link rel="icon" href="icons/icon192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="icons/icon180x180.png" />
            <meta name="msapplication-TileImage" content="icon270x270.png" />




            <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/icons/icon.png" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
