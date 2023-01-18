import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import GeneralDesc from "../islands/GeneralDesc.tsx";
import Menu from "../components/Menu.tsx";

export default function Home() {
    return (
	<>
	    <Head>
		<title>Domki Słoneczko</title>
	    </Head>
	    <Menu />
            <GeneralDesc />

	</>
    );
}
