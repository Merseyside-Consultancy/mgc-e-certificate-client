import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  
  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error => {
      console.log(error)
    })
  }

    const navOptions = (
        <>
          <li>
            <NavLink className={({isActive})=>isActive?"me-6 text-blue-400 text-sm bg-transparent":"me-6 hover:text-blue-400 text-black hover:text-sm hover:bg-transparent"} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?"me-6 text-blue-400 text-sm bg-transparent":"me-6 hover:text-blue-400 text-black hover:text-sm hover:bg-transparent"} to="/e-certificate">
              E-Certificate</NavLink>
          </li>
          {user? (<div className="flex items-center">
          <li>
            <NavLink className={({isActive})=>isActive?"me-6 text-blue-400 text-sm bg-transparent":"me-6 hover:text-blue-400 text-black hover:text-sm hover:bg-transparent"} to="/admin">Admin</NavLink>
          </li>
              <button onClick={handleLogOut} className="px-5 py-1 font-semibold bg-sky-500 text-white rounded ms-2">Logout</button>
            </div>
            
            ) : (
              <NavLink className={({isActive})=> isActive ? "px-6 py-2 scale-110 font-semibold bg-sky-500 text-white rounded w-36" : "px-6 py-2 w-36 font-semibold bg-sky-500 text-white rounded " } to="/login">
                <button >Admin Login</button></NavLink>
            )
          }
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
                <a href="https://mgccollege.com/"><img
                  className="md:w-32 w-28 md:ms-40 mt-5 ms-20"
                  src="https://i.ibb.co/Xjm36nt/Final-MGC.png"
                  alt=""
                /></a>
              </div>
            </div>
            <div className="navbar-center hidden md:flex ms-96">
              <ul className="flex items-center px-1 md:mt-7">{navOptions}</ul>
            </div>
          </div>
        </>
      );    
};

export default Navbar;