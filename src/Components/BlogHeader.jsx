import React from "react";
import { Link } from "react-router-dom";

function BlogHeader() {
  return (
    <div className="w-full h-16 bg-blue-500 text-white flex">
      {/* Logo Section */}
      <div className="h-full w-[20%] flex items-center justify-center ">
        <img src="/logo-blog.jpg" alt="Logo" className="h-16 w-45" />
      </div>

      {/* Navbar Section */}
      <nav className="flex items-center justify-end w-[80%] h-full pr-15 mr-10">
        <ul className="flex gap-15 italic font-bold text-lg">
          <li className=" flex items-center border-0 ">
            <Link to={"/blog"} className=" border-0 hover:text-emerald-400">
              Blog
            </Link>
          </li>
          <li className=" flex items-center ">
            <Link
              to={"/BlogCreate"}
              className=" border-0 hover:text-emerald-400"
            >
              Create
            </Link>
          </li>
          <li className=" flex items-center ">
            <Link to={"/listing"} className=" border-0 hover:text-emerald-400">
              Listing
            </Link>
          </li>
          <li>
            <button className="rounded p-2 w-[80px] bg-white text-blue-500 font-bold hover:bg-yellow-600 hover:text-white duration-300">
              <Link to={"/BlogLogin"} className=" border-0">
                Login
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BlogHeader;
