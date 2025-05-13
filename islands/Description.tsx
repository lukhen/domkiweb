export default function Description() {
  return (
    <div class="container p-6 px-6 mx-auto bg-white dark:bg-gray-800 rounded-xl ring-1 ring-gray-100 dark:ring-gray-700">
      <div class="mb-16 text-center">
        <h2 class="text-sm font-semibold tracking-wide text-blue-600 uppercase">Features</h2>
        <div class="h-1 w-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mx-auto mt-4 mb-6" />
        <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Kilka faktów
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 dark:text-white">
        {[
          {
            title: "Lokalizacja i okolica",
            content: "Nasze miejsce to prawdziwy raj dla miłośników słońca i morza!",
            items: [
              "Zaledwie 350 m od morza – Gotowy na plażowe szaleństwo?",
              "Blisko centrum miejscowości – Wszystkie atrakcje na wyciągnięcie ręki.",
              "Z dala od miejskiego zgiełku – Tu królują spokój i natura.",
              "1 km od jeziora i centrum sportów wodnych – czas na aktywny wypoczynek!",
              "400 m od marketu – Wszystko, czego potrzebujesz, tuż obok.",
            ],
          },
          {
            title: "Dla dzieci",
            content: "Rodziny z dziećmi, mamy coś specjalnie dla Was!",
            items: [
              "Plac zabaw zewnętrzny – Idealne miejsce na radość i śmiech na świeżym powietrzu.",
              "Sala zabaw – Bezpieczna przestrzeń pełna zabawy i kreatywności.",
            ],
          },
          {
            title: "Rekreacja i relaks",
            content: "Czas na odprężenie! Oto, co na Ciebie czeka:",
            items: [
              "Jacuzzi i sauna – Idealne na relaks po dniu pełnym przygód.",
              "Wypożyczalnia rowerów – Odkrywaj piękno okolicy na dwóch kółkach.",
              "Stół do piłkarzyków i XBOX – Świetna zabawa dla całej rodziny.",
              "Gry planszowe i biblioteczka – Dla miłośników spokojnych wieczorów z książką.",
              "Duże tarasy – Idealne na grilla, opalanie i chwile w towarzystwie bliskich.",
            ],
          },
          {
            title: "Wyżywienie",
            content: "Nasza kuchnia czeka na Ciebie z pysznościami:",
            items: [
              "Śniadania – Pyszne i zdrowe zaczynają Twój dzień!",
              "Menu grillowe – Wyjątkowe potrawy na świeżym powietrzu.",
              "Kawa i ciasto – Idealne na słodkie chwile w ciągu dnia.",
              "Świeżo wyciskane soki i zimne napoje – Orzeźwienie na każdą pogodę!",
            ],
          },
          {
            title: "Bezpieczeństwo i komfort",
            content: "Bezpieczeństwo przede wszystkim! Oto, co dla Ciebie przygotowaliśmy:",
            items: [
              "Teren ogrodzony – Dla Twojego spokoju i prywatności.",
              "Monitoring – Dla dodatkowego komfortu.",
              "Parking – Miejsce dla Twojego pojazdu, zawsze bezpieczne.",
            ],
          },
          {
            title: "Zwierzęta",
            content: "Nie zostawiaj swojego pupila w domu – zabierz go ze sobą!",
            items: [],
          },
        ].map((section) => (
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="flex items-center mb-4 group">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl font-semibold text-gray-900 dark:text-white">{section.title}</div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{section.content}</p>
            {section.items.length > 0 && (
              <ul class="list-disc ml-6 mt-4 text-gray-600 dark:text-gray-300 space-y-1">
                {section.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

