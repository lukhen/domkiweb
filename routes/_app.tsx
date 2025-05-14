import { Html, Head, Main, Scripts } from "$fresh/runtime.ts";

console.log("✅ _document.tsx was loaded!");

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <title>Test dokumentu</title>
        <meta name="custom-doc-test" content="yes" />
      </Head>
      <body>
        <Main />
        <Scripts />
      </body>
    </Html>
  );
}
