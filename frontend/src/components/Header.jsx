import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import NavSearchBar from "./NavSearchBar";
import NavLinks from "./NavLinks";
import NavDropdowns from "./NavDropdowns";

const Header = () => {
  return (
    <header className="bg-white sticky top-0">
      <nav className="grid grid-cols-3 gap-1 pt-1 items-center shadow">
        <div className="flex gap-1 h-12 items-center col-span-2 lg:col-span-1">
          <Link to="/" className="ml-3 text-5xl">
            <FaFacebook className="text-blue-600" />
          </Link>
          <NavSearchBar />
        </div>
        <NavLinks />
        <NavDropdowns />
      </nav>
    </header>
  );
};

export default Header;
