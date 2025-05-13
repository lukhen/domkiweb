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

            <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start flex flex-col-reverse">
                
                {/* Tekst – przewijany tylko na dużych ekranach */}
                <div class="md:pl-12 lg:max-h-[500px] lg:overflow-y-auto lg:pr-2">
                    <h4 class="text-xl font-bold leading-6 tracking-tight text-gray-900 dark:text-white sm:leading-7">
                        {title}
                    </h4>
                    <ul class="mt-4 ml-6 space-y-5">
                        {elements.map(el => (
                            <li>
                                <h5 class="text-base font-semibold text-gray-900 dark:text-white mb-1">
                                    {el.title}
                                </h5>
                                <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                                    {el.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Karuzela */}
                <div class="mb-8 lg:mb-0">
                    <Carousel items={images} />
                </div>
            </div>
        </div>
    );
};


export default DomekDesc
