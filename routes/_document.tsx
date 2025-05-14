// routes/_document.tsx
import { Html, Head, Main, Scripts } from "$fresh/runtime.ts";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <title>Domki Słoneczko</title>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QZ651WN12Y"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QZ651WN12Y');
          `,
        }} />
      </Head>
      <body>
        <Main />
        <Scripts />
      </body>
    </Html>
  );
}
