import DomekDesc from "../components/DomekDesc.tsx"

const OfferList: preact.FunctionalComponent = () => {
    return (
        <div id="oferta" class="w-full max-w-screen-2xl mx-auto my-10 px-4 lg:px-8 bg-white dark:bg-gray-800">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div class="w-full py-6 sm:py-12 bg-white dark:bg-gray-800">
                <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
                    <div class="title">
                        <p class="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
                            Nasza oferta
                        </p>
                        <p class="text-2xl font-light text-gray-400 dark:text-gray-300">
                            Oferujemy dwa rodzaje domków
                        </p>
                    </div>
                </div>
            </div>

            {/* Domek piętrowy */}
            <DomekDesc
                id="domek6"
                title="Domek piętrowy"
                images={[
                    "./salon2_3x2.jpg",
                    "./salon3_3x2.jpg",
                    "./salon_3x2.jpg",
                    "./sypialnia2_3x2.jpg",
                    "Sypialnia_3x2.jpg",
                    "łazienka_3x2.jpg"
                ]}
                elements={[
                    {
                        title: "Przestronny i komfortowy",
                        text: "54 m² powierzchni, idealny dla rodzin i grup przyjaciół"
                    },
                    {
                        title: "Dwupoziomowa aranżacja",
                        text: "dwie oddzielne sypialnie na piętrze, zapewniające prywatność"
                    },
                    {
                        title: "Wygodne łóżka",
                        text: "w każdej sypialni po dwa jednoosobowe łóżka, zapewniające komfortowy sen"
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

            {/* Domek parterowy */}
            <DomekDesc
                id="domek4"
                title="Domek parterowy"
                images={[
                    "salon_w_małym_domku_3x2.jpg",
                    "sypialnia_w_małym_domku_3x2.jpg",
                    "aneks_3x2.jpg",
                    "aneks2_3x2.jpg",
                    "20230303_0129_przyciety.jpg"
                ]}
                elements={[
                    {
                        title: "4 osoby",
                        text: "Oddzielna, zamykana sypialnia i salon z aneksem"
                    },
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
        </div>
    );
};



export default OfferList
