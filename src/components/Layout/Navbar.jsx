import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F9F9F7] w-full">
      <div className="container mx-auto flex justify-between items-center h-16 px-5 md:px-10">
        {/* Logo */}
        <a href="#" aria-label="Back to homepage">
          <img src={logo} className="h-14 w-auto" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center mx-auto space-x-6 text-[16px] font-[Montserrat] font-medium text-black">
          <Link to={"/"} className="px-3">Home</Link>
          <Link to={"/Offerspage"} className="px-3">Offers</Link>
          <Link to={"/grouporder"} className="px-3">Group Order</Link>
          <Link to={"/Resto"} className="px-3">Resto page</Link>
          {/* <a href="#" className="px-3">Group Order</a> */}
          <Link to={"/"} className="px-3">Help</Link>
          <Link to={"/login"} className="px-3">Login</Link>
          <Link to={"/signup"} className="px-3">Signup</Link>
          <Link to={"/otpverify"} className="px-3">Otpverify</Link>

          {/* Search Bar */}
          <div className="relative">
            <input type="text" className="border rounded-2xl px-8 py-1" placeholder="Search..." />
            <svg className='absolute h-5 w-5 top-1.5 ml-2 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                     <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                 </svg>
          </div>

          <a href="#" className="px-3">Orders</a>

          {/* Cart Icon */}
          <svg className=' h-5 w-5 my-auto ' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" >
                 <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zM362 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" fill="currentColor" opacity="1" data-original="#000000"></path>
             </svg>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#F9F9F7] flex flex-col items-center space-y-4 py-4 text-black text-lg">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Offers</a>
          <a href="#" className="block">Group Order</a>
          <a href="#" className="block">Help</a>
          <a href="#" className="block">Login</a>
          <a href="#" className="block">Orders</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
