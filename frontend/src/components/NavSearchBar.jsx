import { FaSearch } from "react-icons/fa";

const NavSearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border rounded-full"
    >
      <label htmlFor="search" className="w-10 h-10 btn">
        <FaSearch />
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search..."
        className="mr-3 focus:outline-none"
      />
    </form>
  );
};

export default NavSearchBar;
