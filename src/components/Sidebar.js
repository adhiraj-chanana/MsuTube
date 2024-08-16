import React from 'react';
import { FaHome, FaFire, FaYoutube, FaBell, FaFolderOpen } from 'react-icons/fa';
import { MdSubscriptions, MdLibraryMusic, MdHistory, MdVideoLibrary, MdWatchLater, MdThumbUp, MdExpandMore } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="w-60 bg-[#212121] h-screen text-white pr-5 overflow-auto pb-8">
      <ul className="space-y-4">
        {/* Main Sections */}
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <FaHome className="text-xl" />
          <span>Home</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <FaFire className="text-xl" />
          <span>Trending</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <MdSubscriptions className="text-xl" />
          <span>Subscriptions</span>
        </li>

        {/* Divider */}
        <hr className="border-zinc-600 my-4" />

        {/* Library Sections */}
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <MdVideoLibrary className="text-xl" />
          <span>Library</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <MdHistory className="text-xl" />
          <span>History</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <MdWatchLater className="text-xl" />
          <span>Watch Later</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <MdThumbUp className="text-xl" />
          <span>Liked Videos</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <MdExpandMore className="text-xl" />
          <span>Show more</span>
        </li>

        {/* Divider */}
        <hr className="border-zinc-600 my-4" />

        {/* Subscriptions */}
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <FaYoutube className="text-xl text-red-500" />
          <span>Your Channel</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <FaBell className="text-xl" />
          <span>Notifications</span>
        </li>
        <li className="flex items-center gap-5 text-lg cursor-pointer hover:bg-zinc-700 p-2 rounded-lg">
          <FaFolderOpen className="text-xl" />
          <span>Collections</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
