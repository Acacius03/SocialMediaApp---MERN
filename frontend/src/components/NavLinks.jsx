import NavLink from "./NavLink";

import { FaGamepad, FaShop, FaUserGroup, FaYoutube } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className="grid grid-cols-5 order-last col-span-3 lg:order-none lg:col-auto h-12">
      <NavLink icon={<FaHome />} />
      <NavLink to={"/friends"} icon={<FaUserGroup />} />
      <NavLink to={"/videos"} icon={<FaYoutube />} />
      <NavLink to={"/games"} icon={<FaGamepad />} />
      <NavLink to={"/market"} icon={<FaShop />} />
    </div>
  );
};

export default NavLinks;
