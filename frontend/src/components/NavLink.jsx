import { NavLink as Link } from "react-router-dom";

const NavLink = ({ icon, to = "/" }) => {
  return (
    <Link to={to} className={`text-2xl btn`}>
      {icon}
    </Link>
  );
};

export default NavLink;
