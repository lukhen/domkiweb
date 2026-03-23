import { Head } from "$fresh/runtime.ts";

export default function LogoPage() {
  return (
    <>
      <Head>
        <title>Parking | Domki FarAway</title>
      </Head>

      <main class="min-h-screen flex items-center justify-center bg-white">
        <img
          src="/parking.png"
          alt="Parking FarAway"
        />
      </main>
    </>
  );
}
