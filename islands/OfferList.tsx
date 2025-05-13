import DomekDesc from "../components/DomekDesc.tsx"

const OfferList: preact.FunctionalComponent = () => {
    return (
        <div id="oferta" class="lg:w-[90%] max-w-screen-xl my-10 rounded-xl mx-auto p-6 bg-white dark:bg-gray-800">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div class="w-full p-6 sm:p-12 bg-white dark:bg-gray-800">
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
                    { title: "Przestronny i komfortowy", text: "54 m² powierzchni, idealny dla rodzin i grup przyjaciół" },
                    { title: "Dwupoziomowa aranżacja", text: "dwie oddzielne sypialnie na piętrze, zapewniające prywatność" },
                    { title: "Wygodne łóżka", text: "w każdej sypialni po dwa jednoosobowe łóżka, zapewniające komfortowy sen" },
                    { title: "Funkcjonalny salon", text: "przestronny z aneksem kuchennym, idealny na wspólne posiłki przy stole dla 6 osób" },
                    { title: "Nowoczesne wyposażenie", text: "kuchenka, czajnik, mikrofalówka i ekspres do kawy, by cieszyć się domowymi posiłkami i kawą" },

export default OfferList
