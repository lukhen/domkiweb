import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
  menuItems: Array<string>;
}

const NavMenu: FunctionComponent<Props> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src="logo.svg" alt="Logo" className="h-8" />
        <h1 className="ml-2 text-white text-lg font-medium">Domki "Słoneczko"</h1>
      </div>
      <div className="hidden md:flex">
        {menuItems.map((item) => (
          <a href="#" className="text-white mr-4">
            {item}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
        <div className={`absolute right-0 top-16 bg-gray-800 py-2 px-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {menuItems.map((item) => (
            <a href="#" className="text-white block mb-1">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
