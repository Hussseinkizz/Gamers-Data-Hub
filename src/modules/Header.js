import * as BsIcons from 'react-icons/bs';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-gradient-to-t from-gray-900 to-gray-800 text-gray-50 border-b-4   border-indigo-100">
        <nav className="flex justify-between px-4 py-2">
          {/* BRAND / WORDMARK WRAPPER */}
          <Link to="/">
            <div className="flex space-x-2 align-middle text-lg">
              <span>
                <BsIcons.BsBarChartFill className="w-6 h-6 text-blue-500" />
              </span>
              <span className="space-x-2 font-semibold">
                <span className="tracking-wider text-blue-500 custom-font">
                  GAMERS Data
                </span>
                <span className="text-blue-300 p-1 bg-gray-800 rounded-lg">
                  Hub
                </span>
              </span>
            </div>
          </Link>
          {/* NAV MENU */}
          <div className="flex space-x-2 text-base align-middle place-items-center md:text-lg">
            <NavMenu />
          </div>
        </nav>
      </header>
      <div id="spacer" className="w-full h-12" />
    </>
  );
};

export default Header;
