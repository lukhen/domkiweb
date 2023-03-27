interface Props {
    header: string;
    title: string;
    desc: string
    image11: string;
    image12: string;
    image21: string;
    image22: string
    elements: string[]
}


const CardWith4Images: preact.FunctionalComponent<Props> = ({
    header,
    title,
    desc,
    image11,
    image12,
    image21,
    image22,
    elements
}) => {
    return (
	
	<div id="oobiekcie" class="max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
	    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
	    <div class="">
		<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
		    <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
			<p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
			    {header}
			</p>
			<h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
			    {title}
			</h4>
			<p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
			    {desc}
			</p>
			<ul class="gap-6 mt-8 md:grid md:grid-cols-2">
			    {elements.map(el => (
				<li class="mt-6 lg:mt-0">
				    <div class="flex">
					<span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
					    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
						</path>
					    </svg>
					</span>
					<span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
					    {el} 
					</span>
				    </div>
				</li>
			    ))}
			</ul>
		    </div>
		    <div class="mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
			<div class="space-y-4">
			    <div class="flex items-end justify-center space-x-4 lg:justify-start">
				<img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={image11} alt="1"/>
				<img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src={image12} alt="2"/>
			    </div>
			    <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
				<img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src={image21} alt="3"/>
				<img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={image22} alt="4"/>
			    </div>
			</div>
		    </div>
		</div>
	    </div>
	</div>

    );
};
export default CardWith4Images
