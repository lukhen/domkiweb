import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import GeneralDesc from "../components/GeneralDesc.tsx";
import NavMenu from "../islands/NavMenu.tsx"

export default function Home() {
    return (
	<>
	    <Head>
		<title>Domki Słoneczko</title>
	    </Head>
	    <NavMenu menuItems={["Domki", "Dźwirzyno", "Kontakt"]} />
	    <GeneralDesc />
	    <GeneralDesc />
	    
	</>
    );
}
