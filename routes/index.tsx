import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import GeneralDesc from "../components/GeneralDesc.tsx";
import NavMenu from "../islands/NavMenu.tsx"
import NavMenu2 from "../islands/NavMenu2.tsx"
import LandingPage from "../components/LandingPage.tsx"
import DomekDesc from "../components/DomekDesc.tsx"
import Menu from "../islands/Menu.tsx"
import CardWith4Images from "../components/cardWith4Images.tsx"

export default function Home() {
    return (
	<>
	    <Head>
		<title>Domki Słoneczko</title>
	    </Head>
	    <Menu />
	    <LandingPage />
	    <CardWith4Images
		header={"HEN DALEKO"}
		title={"Drewniane domki niedaleko pięknej piaszczystej plaży."}
		desc={"Myślisz o spokojnych wakacjach z dziećmi. Zapoznaj się z naszą ofertą."}
		image11={"./domki.jpg"}
		image12={"./domek6.jpg"}
		image21={"./3.jpg"}
		image22={"./4.jpg"}
		elements={["duże tarasy", "plac zabaw dla dzieci", "teren ogrodzony i monitorowany", "parking"]}
	    />
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
