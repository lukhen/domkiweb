import { Head } from "$fresh/runtime.ts";

export default function LogoPage() {
  return (
    <>
      <Head>
        <title>Logo | Domki FarAway</title>
      </Head>

      <main class="min-h-screen flex items-center justify-center bg-white">
        <img
          src="/logo_200px.png"
          alt="Logo FarAway"
          class="max-w-[420px] w-full h-auto"
        />
      </main>
    </>
  );
}
