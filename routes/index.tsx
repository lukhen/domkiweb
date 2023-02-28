import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import GeneralDesc from "../components/GeneralDesc.tsx";
import NavMenu from "../islands/NavMenu.tsx"
import NavMenu2 from "../islands/NavMenu2.tsx"
import LandingPage from "../components/LandingPage.tsx"
import DomekDesc from "../components/DomekDesc.tsx"
import Menu from "../islands/Menu.tsx"

export default function Home() {
    return (
	<>
	    <Head>
		<title>Domki Słoneczko</title>
	    </Head>
	    <Menu />
	    <LandingPage />
	    <DomekDesc
	    title="Domki nad morzem"
		image="/domki.jpg"
	    elements={
	    [{
		title: "Lokalizacja",
		text: "Doskonała lokalizacja. Z dala od zgiełku, ale wciąż blisko plaży."},
	     {
		 title: "Obiekt przyjazny dzieciom",
		 text: "Duży plac zabaw. Teren ogrodzony i monitorowany."
	     }
	    ]}
	    />
	</>
    );
}
