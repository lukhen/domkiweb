const ContactSection: preact.FunctionalComponent = () => {
    return (
	
	<div id="kontakt" class="px-4 py-20 bg-lightblue">
	    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
	    <div class="flex flex-col max-w-6xl mx-auto md:flex-row">
		<h2 class="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
		    Skontaktuj się
		</h2>
		<dl class="w-full md:w-2/3">
		    <dd class="mb-16">
			<p>
			    Jeśli jesteś zainteresowany pobytem u nas, chcesz zapytać o ceny lub nurtuje Cię coś innego napisz lub zadzwoń:
			</p>
			<p>email: domki.sloneczko@gmail.com</p>
			<p>tel: 509 572 320</p>
		    </dd>
		</dl>
	    </div>
	</div>

    );
};
export default ContactSection
