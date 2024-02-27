import { useState } from "react";

const Dropdown = ({ children, trigger }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleDropdown = () => setIsActive(!isActive);

  return (
    <div className="relative">
      <button onClick={toggleDropdown}>{trigger}</button>
      {isActive && <div className="absolute right-0">{children}</div>}
    </div>
  );
};

export default Dropdown;
