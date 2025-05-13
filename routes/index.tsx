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
import Description2 from "../islands/Description2.tsx"
import Description from "../islands/Description.tsx"
import Carousel from "../islands/Carousel.tsx"
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
	    desc={"Ośrodek Słoneczko-Domki położony jest zaledwie 350 m od piaszczystej plaży. Do dyspozycji gości oddajemy komfortowe, drewniane domki. Na gości czeka wiele atrakcji, w tym jacuzzi, sauna fińska, pomieszczenie gier i zabaw dla dzieci, wypożyczalnia rowerów, zewnętrzny plac zabaw oraz ogród pełen zieleni i kwiatów. Gościom oferujemy menu śniadaniowe oraz grillowe. Zapewniamy cichą i kameralną atmosferę w doskonałej lokalizacji w centrum Dźwirzyna, w izolacji od ruchu ulicznego i nocnego życia, w spacerowej odległości od plaży i wszelkich atrakcji miasteczka."}
	    image11={"./domki.jpg"}
	    image12={"./domek6.jpg"}
	    image21={"./20230303_0667_przyciety.jpg"}
	    image22={"./20230303_0884_przyciety.jpg"}
	    elements={["jacuzzi i sauna", "śniadania", "grill", "sala zabaw", "wypożyczalnia rowerów", "duże tarasy", "plac zabaw dla dzieci", "teren ogrodzony i monitorowany", "parking"]}
	    />
		<Description />
	    <OfferList />
	    <DomekDesc
		id="domek6"
		title="Domek piętrowy"
	    images={["./salon2_3x2.jpg", "./salon3_3x2.jpg", "./salon_3x2.jpg", "./sypialnia2_3x2.jpg", "Sypialnia_3x2.jpg", "łazienka_3x2.jpg"]}
		elements={
		[{
		    title: "Przestronny i komfortowy",
		    text: "54 m² powierzchni, idealny dla rodzin i grup przyjaciół"},
		 {
		     title: "Dwupoziomowa aranżacja",
		     text: " dwie oddzielne sypialnie na piętrze, zapewniające prywatność"
		 },
		 {
		     title: "Wygodne łóżka",
		     text: " w każdej sypialni po dwa jednoosobowe łóżka, zapewniające komfortowy sen"
		 },
		 {
		     title: "Funkcjonalny salon",
		     text: "przestronny z aneksem kuchennym, idealny na wspólne posiłki przy stole dla 6 osób"
		 },
		 {
		     title: "Nowoczesne wyposażenie",
		     text: "kuchenka, czajnik, mikrofalówka i ekspres do kawy, by cieszyć się domowymi posiłkami i kawą"
		 },
		 {
		     title: "Funkcjonalny salon",
		     text: "przestronny z aneksem kuchennym, idealny na wspólne posiłki przy stole dla 6 osób"
		 },
		 {
		     title: "Duża łazienka",
		     text: "komfortowy prysznic i nowoczesne wykończenia"
		 },
		 {
		     title: "Ogród i taras",
		     text: "duży taras z meblami ogrodowymi, idealny do relaksu na świeżym powietrzu"
		 },
		 {
		     title: "Świeżo po remoncie",
		     text: "nowoczesny wystrój i komfortowe wnętrze"
		 },
		 {
		     title: "Możliwość zakwaterowania do 7 osób",
		     text: "przytulna przestrzeń dla rodzin i grup przyjaciół"
		 }
		]}
	    />
	    <DomekDesc
		id="domek4"
		title="Domek parterowy"
	    images={["salon_w_małym_domku_3x2.jpg", "sypialnia_w_małym_domku_3x2.jpg", "aneks_3x2.jpg", "aneks2_3x2.jpg", "20230303_0129_przyciety.jpg"]}
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
		<Carousel items={["./domki.jpg", "./domek6.jpg"]} />
	    <ContactSection />
	</>
    );
}
