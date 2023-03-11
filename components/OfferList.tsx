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
				    <a href="#" class="block">
					<img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
				    </a>
				    <div class="flex flex-col justify-between ml-4 text-sm">
					<p class="text-gray-800 dark:text-white">
					    Cena już od
					</p>
					<p class="text-gray-400 dark:text-gray-300">
					    250 zł za dobę
					</p>
				    </div>
				</div>
			    </div>
			</a>
		    </div>
		    <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-80">
			<a href="#domek4" class="block h-full">
			    <img alt="blog photo" src="./domek6.jpg" class="object-cover w-full max-h-40"/>
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
				    <a href="#" class="block">
					<img alt="profil" src="./6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
				    </a>
				    <div class="flex flex-col justify-between ml-4 text-sm">
					<p class="text-gray-800 dark:text-white">
					    Cena już od
					</p>
					<p class="text-gray-400 dark:text-gray-300">
					    150 zł za dobę
					</p>
				    </div>
				</div>
			    </div>
			</a>
		    </div>
		    <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-80">
			<a href="#apartament" class="block h-full">
			    <img alt="blog photo" src="./1.jpg" class="object-cover w-full max-h-40"/>
			    <div class="w-full p-4 bg-white dark:bg-gray-800">
				<p class="font-medium text-indigo-500 text-md">
				    Max 6 osób
				</p>
				<p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
				    Apartament
				</p>
				<p class="font-light text-gray-400 dark:text-gray-300 text-md">
				    Komfortowy apartament z dwoma sypialniami i salonem.
				</p>
				<div class="flex items-start mt-4">
				    <a href="#" class="block">
					<img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
				    </a>
				    <div class="flex flex-col justify-between ml-4 text-sm">
					<p class="text-gray-800 dark:text-white">
					    Cena już od
					</p>
					<p class="text-gray-400 dark:text-gray-300">
					    250 zł za dobę
					</p>
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
