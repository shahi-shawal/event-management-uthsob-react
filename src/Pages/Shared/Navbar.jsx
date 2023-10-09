import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import navbg from "/images/color.png"
import pp2 from  "/images/pp2.svg"
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
const Navbar = () => {
 const navigate= useNavigate()
    const {user, logout}= useContext(AuthContex)
    const handelsignOut=()=>{
       logout()
     navigate("/")
    }
    const navlinks =<>
      <li className="font-bold"><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/services">Services</NavLink></li>
                      <li><NavLink to="/blog">Blog</NavLink></li>
                      {
                        user &&  <li><NavLink to="/booking">Booking</NavLink></li>
                      }
      </>
    return (
        <div >
            <div className="navbar" style={{backgroundImage: `url(${navbg})`}}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52 bg-[#D3B714] ">
       {navlinks}
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Uthsob</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1 text-white font-bold">
      {
        navlinks
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <>
       <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL? user.photoURL : pp2} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#D3B714] rounded-box w-52 text-white font-bold">
        <li>
          <a className="justify-between">
            {
              user?.displayName? user.displayName :"Your Name"
            }
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handelsignOut} ><a>Logout</a></li>
      </ul>
    </div>
   

      </>
      :
      <Link to="/login">
    <button className="btn opacity-80 font-bold text-white bg-[#D3B714] border-[#D3B714] hover:bg-[#D3B714]">Log in</button>
    </Link>
    }
    
  </div>
</div>
 <Toaster/>
        </div>
    );
};

export default Navbar;