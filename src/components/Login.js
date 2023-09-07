import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <div className=" absolute w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute rounded-sm p-5 bg-black w-3/12 my-36 mx-auto right-0 left-0 top-0 bottom-0 text-white bg-opacity-90 ">
        {isSignIn ? (
          ""
        ) : (
          <input
            className="p-3 my-2 w-full text-white bg-slate-600"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-3 my-2 w-full text-white  bg-slate-600"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-3 my-2 w-full text-white bg-slate-600"
          type="password"
          placeholder="Password"
        />
        <button className=" rounded-sm p-3 my-2 bg-red-700 w-full">
          {isSignIn ? "Log In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New here? Sign Up Now!"
            : "Already Have an Account? Log In Now!"}
        </p>
      </form>
    </>
  );
};

export default Login;
