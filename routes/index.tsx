import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
      <>
	  <Head>
              <title>Fresh App</title>
	  </Head>
          <div class="bg-gray-100 flex h-screen">
	      <aside class="lg:w-1/5 sm:w-0 bg-gray-200 h-full flex">
	      </aside> 
	      <div class="lg:w-3/5 sm:w-full bg-white px-6 text-xl h-full flex flex-col items-center justify-center">
		  <h2 class="text-3xl  font-medium py-4">Domki nad morzem</h2>
		  <div class="flex flex-col lg:flex-row ">
		      <div class="content-container w-full lg:w-2/4 px-4">
			  Jeśli szukasz spokojnego miejsca wakacyjnego blisko morza Bałtyckiego, to ośrodek drewnianych domków jest idealnym wyborem. Nasz ośrodek z dala od zgiełku, ale zarazem zaledwie kilka minut spacerem od piaszczystej plaży. Dla dzieci przygotowaliśmy specjalnie zagospodarowany plac zabaw, dla rodziców natomiast wypożyczalnię rowerów, dzięki czemu mogą podziwiać piękno okolic na dwóch kółkach. Nasze domki są wyposażone w wygodne łazienki i aneksy kuchenne, dzięki czemu będzie można swobodnie przygotowywać posiłki. W ośrodku panuje przyjazna atmosfera i wszystko jest skoncentrowane na odpoczynku i relaksie. Zachęcamy do zarezerwowania noclegów w naszych domkach i przyjechania do nas na wypoczynek.
		      </div>
		      <img src="/domki.jpg" alt="Alt text" class="sm:w-full lg:w-1/2 h-auto lg:h-full object-cover mb-4 lg:mb-0 mr-4 lg:mr-0" />
		  </div>
	      </div>
	      <aside class="lg:w-1/5 sm:w-0 bg-gray-200 h-full flex">
		  
	      </aside> 
	      
	  </div>
      </>
  );
}
