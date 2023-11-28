import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const navOptions = (
        <>
          <li>
            <NavLink className={({isActive})=>isActive?"me-6 text-blue-400 text-sm bg-transparent":"me-6 hover:text-blue-400 text-black hover:text-sm hover:bg-transparent"} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?"me-6 text-blue-400 text-sm bg-transparent":"me-6 hover:text-blue-400 text-black hover:text-sm hover:bg-transparent"} to="/e-certificate">E-Certificate</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?"me-6 text-blue-400 text-sm bg-transparent":"me-6 hover:text-blue-400 text-black hover:text-sm hover:bg-transparent"} to="/admin">Admin</NavLink>
          </li>
        </>
      );
      return (
        <>
          <div className="navbar bg-slate-400 -mt-4  md:-mt-0 relative z-10 bg-opacity-30 ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn border-none btn-sm bg-slate-300 md:hidden">
                <FaBars>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </FaBars>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact
                     dropdown-content p-2 shadow bg-slate-300 rounded-box w-48"
                >
                  {navOptions}
                </ul>
              </div>
              <div className="flex items-center justify-end mt-2 md:-ps-4 ms-5">
                <img
                  className="md:w-32 w-28 md:ms-40 mt-5 ms-20"
                  src="/image/logo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="navbar-center hidden md:flex ms-96">
              <ul className="flex px-1 md:mt-7">{navOptions}</ul>
            </div>
          </div>
        </>
      );    
};

export default Navbar;