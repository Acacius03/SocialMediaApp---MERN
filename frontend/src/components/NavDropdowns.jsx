import { FaBell } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const NavDropdowns = () => {
  return (
    <div className="flex gap-1 h-12 justify-end py-1 mr-3">
      <Dropdown
        trigger={
          <span className="text-2xl btn-float size-10">
            <FaBell />
          </span>
        }
      >
        <li>Notification</li>
        <li>Notification</li>
        <li>Notification</li>
      </Dropdown>
      <Dropdown
        trigger={
          <img
            src={`https://i.pravatar.cc/40?img=0`}
            width="40px"
            height="40px"
            className="rounded-full size-10"
          />
        }
      >
        <Link to="/">My Account</Link>
        <Link to="/logout">Log out</Link>
      </Dropdown>
    </div>
  );
};

export default NavDropdowns;
