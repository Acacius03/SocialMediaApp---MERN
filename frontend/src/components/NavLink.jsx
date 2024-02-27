import { Link } from "react-router-dom";

// import { FaUserGroup } from "react-icons/fa6";
const NavLink = ({ icon, to = "/" }) => {
  return (
    <Link to={to} className="flex justify-center items-center text-2xl">
      {icon}
    </Link>
  );
};

export default NavLink;
