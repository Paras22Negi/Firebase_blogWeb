import React, { useState } from "react";
import { FaGoogle, FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function BlogSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center mt-20 bg-white">
      <div className="w-full max-w-sm">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-8">Sign Up</h2>

        {/* Username Input */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Username"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 pr-8 italic"
          />
          <FaUser className="absolute right-2 top-2 text-gray-500" />
        </div>

        {/* Email Input */}
        <div className="mb-6 relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 pr-8 italic"
          />
          <MdEmail  className="absolute right-2 top-2 text-gray-500" />
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

        {/* Confirm Password Input */}
        <div className="mb-6 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 pr-8 italic"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        {/* Signup Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
          SIGN UP
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

        {/* Already have account link */}
        <p className="text-center text-gray-600 mt-6 ">
          Already have an account?{" "}
          <Link to={"/BlogLogin"} className="text-blue-600 hover:underline ">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogSignup;
