const OfferList: preact.FunctionalComponent = () => {
    return (
	<div id="oferta" class="lg:w-4/5 my-10  rounded-xl mx-auto p-4 bg-white dark:bg-gray-800">
	    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

	    <div class="w-full p-12 bg-white">
		<div class="flex items-end justify-between mb-12 header">
		    <div class="title">
			<p class="mb-4 text-4xl font-bold text-gray-800">
			    Nasza oferta
			</p>
			<p class="text-2xl font-light text-gray-400">
			    Oferujemy dwa rodzaje domków i apartament
			</p>
		    </div>
		    
		</div>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
		    <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-80">
			<a href="#domek6" class="block h-full">
			    <img alt="blog photo" src="./domki.jpg" class="object-cover w-full max-h-40"/>
			    <div class="w-full p-4 bg-white dark:bg-gray-800">
				<p class="font-medium text-indigo-500 text-md">
				    Max 6 osób
				</p>
				<p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
				    Domek piętrowy
				</p>
				<p class="font-light text-gray-400 dark:text-gray-300 text-md">
				    Na piętrze dwie sypialnie, na parterze salon z aneksem i łazienka.
				</p>
				<div class="flex items-center mt-4">
				    
				    <div class="flex flex-col justify-between ml-4 text-sm">
					<button
					    className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
					><a href="https://cloud.kwhotel.com/be/pl/1/5ab78fc4-6474-4ced-ba21-9754fad71f2a?roomGroupCategoryFilterId=60" target="_blank" class="block">
					    Sprawdź ceny i zarezerwuj
					</a></button>
				    </div>
				</div>
			    </div>
			</a>
		    </div>
		    <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-80">
			<a href="#domek4" class="block h-full">
			    <img alt="blog photo" src="./20230303_0129_przyciety.jpg" class="object-cover w-full max-h-40"/>
			    <div class="w-full p-4 bg-white dark:bg-gray-800">
				<p class="font-medium text-indigo-500 text-md">
				    Max 4 osoby
				</p>
				<p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
				    Domek parterowy
				</p>
				<p class="font-light text-gray-400 dark:text-gray-300 text-md">
				    Oddzielna, zamykana sypialnia oraz salon z aneksem i łazienka.
				</p>
				<div class="flex items-end mt-4">
				    <div class="flex flex-col justify-between ml-4 text-sm">
					<button
					    className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
					><a href="https://cloud.kwhotel.com/be/pl/1/5ab78fc4-6474-4ced-ba21-9754fad71f2a?roomGroupCategoryFilterId=61" target="_blank" class="block">
					    Sprawdź ceny i zarezerwuj
					</a></button>
				    </div>
				</div>
			    </div>
			</a>
		    </div>
		</div>
	    </div>
	</div>

    );
};
export default OfferList
