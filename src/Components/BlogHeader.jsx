import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../MainContext";

function BlogHeader() {
  const [token, setToken] = useContext(loginContext);
  useEffect(() => {
    console.log("Token in Header:", token);
  }, [token]);
  
  const clear = () => {
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <div className="w-full h-16 bg-blue-500 text-white flex">
      {/* Logo Section */}
      <div className="h-full w-[20%] flex items-center justify-center ">
        <img src="/logo-blog.jpg" alt="Logo" className="h-15 w-45" />
      </div>

      {/* Navbar Section */}
      <nav className="flex items-center justify-end w-[80%] h-full pr-15 mr-10">
        <ul className="flex gap-15 italic font-bold text-lg">
          <li className=" flex items-center border-0 ">
            <Link to={"/"} className=" border-0 hover:text-emerald-400">
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
          {token ? (
            <li>
              <button
                onClick={clear}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/blogLogin">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default BlogHeader;
