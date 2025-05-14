// routes/_app.tsx
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="de">
      <head>
        <title>My Fresh App</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
