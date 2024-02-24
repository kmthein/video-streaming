import AuthForm from "@/components/auth/AuthForm";
import { setAccessToken, setUser } from "@/store/slices/userSlice";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <AuthForm isLogin={true} />
    </div>
  );
};

export default Login;
