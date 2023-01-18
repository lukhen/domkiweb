import { h, Component } from 'preact';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
	<nav class="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span class="font-semibold text-xl tracking-tight">Company Name</span>
        </div>
        <div class="block lg:hidden">
        <button onClick={this.toggleMenu} class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        </div>
        <div class={`w-full lg:flex lg:items-center lg:w-auto ${this.state.isOpen ? 'block' : 'hidden'}`}>
        <div class="text-sm lg:flex-grow">
        <a href="#about" class="block mt-4 lg:inline-block
	lg:mt-0 text-black hover:text-gray-900 mr-4">About</a>
            <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 mr-4">Services</a>
            <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900">Contact</a>
          </div>
          <div>
            <a href="#login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Log In</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu;
