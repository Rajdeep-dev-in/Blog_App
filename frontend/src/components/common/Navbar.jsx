import logo from "../../image/storyteller_logo.png";
import { Search, SquarePen } from "lucide-react";
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  const [searchBarActive, setSearchBarActive] = useState(false);

  function toggleSearchBar() {
    setSearchBarActive((currentVal) => !currentVal);
  }
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center h-16 px-1 py-1 w-32 mx-5 lg:mx-20">
            <Link to="/">
              <img className="w-full h-full" src={logo} alt="Storyteller" />
            </Link>
          </div>
          <div className="  justify-center items-center w-72 h-12 px-2 gap-x-2 rounded-xl border border-zinc-600 hidden lg:flex">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none"
            />
          </div>
          <div className="flex justify-center items-center gap-x-8 mr-1 md:mr-5 lg:mr-10">
            <div
              onClick={toggleSearchBar}
              className=" lg:hidden flex justify-center items-center cursor-pointer px-2 py-2 rounded-full bg-zinc-300"
            >
              <Search size={20} />
            </div>
            <NavLink to="/addblog" className=" cursor-pointer">
              <SquarePen size={20} />
            </NavLink>
            <div>
              <NavLink to='/login' className="px-3 py-2 text-white bg-black">Log In</NavLink>
            </div>
            <div className="hidden md:block">
              <NavLink to="/signup" className="px-3 py-2 text-black bg-white">Sign Up</NavLink>
            </div>
          </div>
        </div>
        {searchBarActive && (
          <div className="flex justify-center items-center h-12 px-2 gap-x-2 mx-5 my-3 rounded-xl border border-zinc-600  lg:hidden ">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none"
            />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
