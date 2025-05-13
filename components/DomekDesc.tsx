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


const DomekDesc: preact.FunctionalComponent<Props> = ({id, title, images, elements}) => {
    return (
	<div id={id} class="lg:w-4/5 my-10  rounded-xl mx-auto  p-4 bg-white dark:bg-gray-800">
	    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

	    <div class="bg-white lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
		<div class="lg:col-start-2 md:pl-20">
		    <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
			{title}
		    </h4>
		    <ul class="mt-2 ml-6">
			{elements.map(el => (
			    <li>

					<h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
					    {el.title}
					</h5>
					<p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
					    {el.text}
					</p>

			    </li>

			))}
		    </ul>
		</div>
		<div class="mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
		    <Carousel items={images} />
		</div>
			
	    </div>
	</div>
    );
};
export default DomekDesc
