import Carousel from "../islands/Carousel.tsx"

interface Element {
    title: string;
    text: string
}

interface Props {
    id: string;
  title: string;
    images: string[];
    elements: Element[]
}


const DomekDesc: preact.FunctionalComponent<Props> = ({ id, title, images, elements }) => {
    return (
        <div id={id} class="lg:w-4/5 my-10 rounded-xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start flex flex-col-reverse">

                {/* Tekst – scroll tylko na dużych ekranach */}
                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg md:pl-12 lg:max-h-[500px] lg:overflow-y-auto lg:pr-6 lg:border-r lg:border-gray-200 dark:lg:border-gray-700">
                    <h4 class="text-xl font-bold leading-6 tracking-tight text-gray-900 dark:text-white sm:leading-7 mb-4">
                        {title}
                    </h4>
                    <ul class="mt-2 ml-2 space-y-6">
                        {elements.map(el => (
                            <li class="flex items-start space-x-3">
                                {/* Ikona z Heroicons */}
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     class="w-5 h-5 text-blue-500 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M11.25 9.75h.008v.008H11.25V9.75zm0 3.75h.008v.008H11.25v-.008zm.75-7.5a8.25 8.25 0 110 16.5 8.25 8.25 0 010-16.5z" />
                                </svg>

                                {/* Tekst */}
                                <div>
                                    <h5 class="text-base font-semibold text-gray-900 dark:text-white mb-1">
                                        {el.title}
                                    </h5>
                                    <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                                        {el.text}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Karuzela */}
                <div class="mb-8 lg:mb-0">
                    <Carousel items={images} />
                </div>
            </div>

            {/* Przycisk CTA – przekierowanie do strony rezerwacji */}
            <div class="text-center mt-8">
                <a 
                    href="/rezerwacja"  // Możesz tutaj podać link do strony rezerwacji
                    class="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Zarezerwuj teraz
                </a>
            </div>
        </div>
    );
};




export default DomekDesc
