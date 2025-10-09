import React, { useState, useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { ref } from "firebase/database";
import { db } from "../firebaseconfig";
import { set } from "firebase/database";
import { loginContext } from "../MainContext";

const provider = new GoogleAuthProvider();

function BlogLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [, setToken] = useContext(loginContext);

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setToken(user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("result", result)
        const token = credential.accessToken;
        console.log("token", token)
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setToken(token);
        set(ref(db, 'users/' + user.uid), {
          username: user.displayName,
          email: user.email,
          profile_picture : user.photoURL
          
        });
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }).catch((error) => {
        // Handle Errors here.
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="absolute right-2 top-2 text-gray-500" />
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 pr-8 italic"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700"
        onClick={handleLogin}
        disabled={loading}
        >
          {loading ? "Logging in..." : "LOG IN"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-2xl font-medium hover:bg-blue-600"
        onClick={handleGoogleLogin}
        disabled={loading}
        >
          <FaGoogle className="mr-2" /> {loading ? "" : "Continue with Google"}
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6 ">
          No account?{" "}
          <Link to="/BlogSignup" className="text-blue-600 hover:underline ml-2">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogLogin;
