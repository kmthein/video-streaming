import IMAGES from "@/assets/images/Images";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const AuthForm = ({ isLogin }) => {
  const { darkMode, menuOpen } = useSelector((state) => state.ui);

  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };

  return (
    <div className={`${menuOpen ? "ml-[30%]" : "mx-auto"} border w-[25%] mt-[7%] px-8 rounded-md`}>
      <h2 className=" font-semibold text-2xl text-center my-8">
        {isLogin ? "Login" : "Register"}
      </h2>
      {!isLogin && (
      <div className="my-6">
          <input
            type="text"
            placeholder="Name"
            className="border py-2 w-full rounded-md px-2 dark:bg-[#4d4d4d]"
          />
      </div>
        )}
      <div className="my-6">
        <input
          type="text"
          placeholder="Email"
          className="border py-2 w-full rounded-md px-2 dark:bg-[#4d4d4d]"
        />
      </div>
      {
        !isLogin &&
        <div className="my-6">
        <input
          type="text"
          placeholder="Phone Number"
          className="border py-2 w-full rounded-md px-2 dark:bg-[#4d4d4d]"
        />
      </div>
      }
      <div className="my-6">
        <input
          type="password"
          placeholder="Password"
          className="border py-2 w-full rounded-md px-2 dark:bg-[#4d4d4d]"
        />
      </div>
      {
        !isLogin &&
        <div className="my-6">
        <input
          type="password"
          placeholder="Confirm Password"
          className="border py-2 w-full rounded-md px-2 dark:bg-[#4d4d4d]"
        />
      </div>
      }
      {isLogin && (
        <p className="text-[#4777c4] text-center">Forgot Password?</p>
      )}
      <div className="my-6">
        <button className="border py-2 w-full rounded-md px-2 bg-[#0E5DDD] text-white hover:bg-[#4779c9]">
          {isLogin ? "Login" : "Register"}
        </button>
      </div>
      {isLogin ? (
        <p className="text-center mb-8">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-[#4777c4] ml-2">Sign up</span>
          </Link>
        </p>
      ) : (
        <p className="text-center mb-8">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-[#4777c4] ml-2">Log in</span>
          </Link>
        </p>
      )}

      <hr />
      <div className="my-8">
        <button
          className="border py-2 w-full rounded-md px-2 flex gap-20 pl-4"
          onClick={googleAuth}
        >
          <img src={IMAGES.googleLogo} />
          Login with google
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
