import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#212121] opacity-95 px-4 h-14 sticky top-0 z-50'>
      {/* Left Section */}
      <div className='flex items-center text-white'>
        <div className='text-2xl mr-6'>
          <GiHamburgerMenu />
        </div>
        <div className='flex items-center'>
          <FaYoutube className='text-3xl text-red-600' />
          <span className='text-xl font-bold ml-2'>YouTube</span>
        </div>
      </div>

      {/* Center Section */}
      <div className='flex items-center flex-grow max-w-2xl'>
        <form className='flex flex-grow'>
          <input
            type='text'
            placeholder='Search'
            className='w-full h-10 px-4 bg-zinc-900 text-white border border-zinc-700 rounded-l-full focus:outline-none'
          />
          <button className='w-16 h-10 flex items-center justify-center bg-zinc-700 text-white rounded-r-full'>
            <CiSearch className='text-2xl' />
          </button>
        </form>
        <div className='ml-4 p-2 rounded-full bg-zinc-900 text-xl text-white cursor-pointer'>
          <FaMicrophone />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4 text-xl text-white'>
        <BsFillCameraVideoFill className='cursor-pointer' />
        <div className='relative cursor-pointer'>
          <FaBell />
          <span className='absolute top-0 right-0 bg-red-600 text-xs rounded-full px-1'>
            9+
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
