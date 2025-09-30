import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center mt-30 bg-white">
      <div className="w-full max-w-sm">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-8">Log In</h2>

        {/* Email Input */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 italic"
          />
          <FaUser className="absolute right-2 top-2 text-gray-500" />
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 pr-8 italic"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
          LOG IN
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-2xl font-medium hover:bg-blue-600">
          <FaGoogle className="mr-2" /> Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6 ">
          No account?{" "}
          <Link to={"/register"} className="text-blue-600 hover:underline ml-2">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogLogin;
