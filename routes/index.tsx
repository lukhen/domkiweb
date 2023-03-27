import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import GeneralDesc from "../components/GeneralDesc.tsx";
import NavMenu from "../islands/NavMenu.tsx"
import NavMenu2 from "../islands/NavMenu2.tsx"
import LandingPage from "../components/LandingPage.tsx"
import DomekDesc from "../components/DomekDesc.tsx"
import Menu from "../islands/Menu.tsx"
import CardWith4Images from "../components/cardWith4Images.tsx"
import OfferList from "../islands/OfferList.tsx"
import ContactSection from "../components/ContactSection.tsx"
import CardWith4ImagesIsland from "../islands/CardWith4ComponentsIsland.tsx"
import Description from "../islands/Description.tsx"
export default function Home() {
    return (
	<>
	    <Head>
		<title>Domki Słoneczko</title>
	    </Head>
	    <Menu />
	    <LandingPage />
	    <CardWith4Images
	    header={"Ośrodek Słoneczko"}
	    title={"Drewniane domki niedaleko pięknej piaszczystej plaży."}
	    desc={"Myślisz o spokojnych wakacjach z dziećmi. Zapoznaj się z naszą ofertą."}
	    image11={"./domki.jpg"}
	    image12={"./domek6.jpg"}
	    image21={"./20230303_0667_przyciety.jpg"}
	    image22={"./20230303_0884_przyciety.jpg"}
	    elements={["duże tarasy", "plac zabaw dla dzieci", "teren ogrodzony i monitorowany", "parking"]}
	    />
	    <Description />
	    <OfferList />
	    <DomekDesc
		id="domek6"
		title="Domek piętrowy"
	    image="/20230303_0737_przyciety_01.jpg"
		elements={
		[{
		    title: "6 osób",
		    text: "Dwie sypialnie na piętrze, w każdej po dwa łóżka jednoosobowe. Na parterze salon z rozkładanym narożnikiem i łóżkiem jednoosobowym."},
		 {
		     title: "Duża łazienka",
		     text: "Łazienka z natryskiem 5 m^2."
		 },
		 {
		     title: "Aneks kuchenny",
		     text: "Wyposażony aneks, wystarczający do przygotowania posiłku dla całej rodziny."
		 },
		 {
		     title: "Taras",
		     text: "Przestronny taras z meblami ogrodowymi."
		 }
		]}
	    />
	    <DomekDesc
		id="domek4"
		title="Domek parterowy"
	    image="/20230303_0129_przyciety.jpg"
		elements={
		[{
		    title: "4 osoby",
		    text: "Oddzielna, zamykana sypialnia i salon z aneksem"},
		 {
		     title: "Łazienka",
		     text: ""
		 },
		 {
		     title: "Aneks kuchenny",
		     text: "Wyposażony aneks, wystarczający do przygotowania posiłku dla całej rodziny."
		 },
		 {
		     title: "Taras",
		     text: "Przestronny taras z meblami ogrodowymi."
		 }
		]}
	    />
	    <DomekDesc
		id="apartament"
		title="Apartament"
		image="/domki.jpg"
		elements={
		[{
		    title: "6 osób",
		    text: "Dwie sypialnie i salon."},
		 {
		     title: "Kuchnia",
		     text: "Dostępna na wyłączność na parterze budynku."
		 },
		 {
		     title: "Łazienka",
		     text: "Prysznic z hydromasażem i wanna."
		 },
		 {
		     title: "Balkon",
		     text: "Słoneczny balkon z widokiem na ogród i łąkę."
		 }
		]}
	    />
	    <ContactSection />
	</>
    );
}
