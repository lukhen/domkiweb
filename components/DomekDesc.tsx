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
		    <div class="flex flex-wrap my-12 dark:text-white">
              <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
		  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
			  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
			  </path>
                      </svg>
                      <div class="ml-4 text-xl">
			  Lokalizacja i okolica
                      </div>
		  </div>
		  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Nasze miejsce to prawdziwy raj dla miłośników słońca i morza! Oto, co dla Ciebie mamy:
              <ul class="list-disc ml-6 mt-2">
                    <li><strong>Zaledwie 350 m od morza!</strong> Gotowy na plażowe szaleństwo?</li>
                    <li><strong>Blisko centrum miejscowości!</strong> Wszystkie atrakcje na wyciągnięcie ręki.</li>
                    <li><strong>Z dala od miejskiego zgiełku!</strong> Tu królują spokój i natura.</li>
                    <li><strong>1 km od jeziora</strong> i centrum sportów wodnych – czas na aktywny wypoczynek!</li>
                    <li><strong>400 m od marketu!</strong> Wszystko, czego potrzebujesz, tuż obok.</li>
              </ul>
         </p>
              </div>
		</div>
		<div class="mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
		    <Carousel items={images} />
		</div>
			
	    </div>
	</div>
    );
};
export default DomekDesc
