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
        <div id={id} class="lg:w-4/5 my-10 rounded-xl mx-auto p-4 bg-white dark:bg-gray-800">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div class="bg-white lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
                
                {/* Tekst */}
                <div class="md:pl-12">
                    <h4 class="text-xl font-bold leading-6 tracking-tight text-gray-900 dark:text-white sm:leading-7">
                        {title}
                    </h4>
                    <ul class="mt-2 ml-6 space-y-3">
                        {elements.map(el => (
                            <li>
                                <h5 class="text-base font-semibold text-gray-900 dark:text-white">
                                    {el.title}
                                </h5>
                                <p class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300">
                                    {el.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Karuzela */}
                <div class="mt-8 lg:mt-0">
                    <Carousel items={images} />
                </div>
            </div>
        </div>
    );
};


export default DomekDesc
