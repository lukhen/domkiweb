import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';


const Menu: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
	setIsMenuOpen(!isMenuOpen);
    };
    
    return (
	<header class="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-40 backtrop-blur-sm">
	    <nav class="container px-6 py-4 mx-auto md:px-12">
		<div class="items-center justify-between md:flex">
		    <div class="flex items-center justify-between">
			<a href="#" class="text-white">
			    <svg class="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
				<defs>
				</defs>
				<path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
				</path>
				<path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
				</path>
			    </svg>
			</a>
			<div class="md:hidden">
			    <button class="text-white focus:outline-none" onClick={toggleMenu}>
				<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				    </path>
				</svg>
			    </button>
			</div>
		    </div>
		    <div class={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
			<a href="#oferta" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
			    Oferta
			</a>
			<a href="#oobiekcie" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
			    O obiekcie
			</a>
			<a href="https://cloud.kwhotel.com/be/pl/1/5ab78fc4-6474-4ced-ba21-9754fad71f2a" target="_blank" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
			    Rezerwacja
			</a>
			<a href="#kontakt" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
			    Kontakt
			</a>
		    </div>
		</div>
	    </nav>
	</header>

    );
};

export default Menu;
