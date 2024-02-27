import { FaGamepad, FaShop, FaUserGroup, FaYoutube } from "react-icons/fa6";

import React from "react";
import NavLink from "./NavLink";
import { FaHome } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className="grid grid-cols-5 order-last col-span-3 md:order-none md:col-auto h-12">
      <NavLink icon={<FaHome />} />
      <NavLink icon={<FaUserGroup />} />
      <NavLink icon={<FaYoutube />} />
      <NavLink icon={<FaGamepad />} />
      <NavLink icon={<FaShop />} />
    </div>
  );
};

export default NavLinks;
