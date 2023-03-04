const LandingPage: preact.FunctionalComponent<Props> = () => {
  return (
      <div class="relative h-screen overflow-hidden bg-indigo-900">
	  <img src="/20230303_0725.jpg" class="absolute object-cover w-full h-full"/>
	  <div class="absolute inset-0 bg-black opacity-25">
	  </div>
	  <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
              <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
		  <span class="font-bold text-yellow-400 uppercase">
                      Słoneczko
		  </span>
		  <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                      Domki
                      <br/>
                      zaledwie 350 m od piaszczystej plaży
		  </h1>
		  <a href="#" class="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                      Discover
		  </a>
              </div>
	  </div>
      </div>
  );
};
export default LandingPage
