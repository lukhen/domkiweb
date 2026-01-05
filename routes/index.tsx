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
import { useEffect } from "preact/hooks";

export default function Home() {
	
    return (
	<>
<Head>
        <title>Domki FarAway (dawniej Słoneczko)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QZ651WN12Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QZ651WN12Y');
            `,
          }}
        />
      </Head>
	    <Menu />
	    <LandingPage />
	    <CardWith4Images
		header={"Domki FarAway (dawniej Słoneczko)"}
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
	    <Carousel items={["./domki.jpg", "./domek6.jpg"]} />
	    <ContactSection />
	</>
    );
}

