import { setAccessToken, setUser } from "@/store/slices/userSlice";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  // const responseMessage = (response) => {
  //     console.log(response);
  //     const credentialDecoded = jwtDecode(response.credential);
  //     console.log(credentialDecoded);
  //     dispatch(setUser(credentialDecoded));
  // };
  // const errorMessage = (error) => {
  //     console.log(error);
  // };

  //   const login = useGoogleLogin({
  //     onSuccess: async (res) => {
  //       console.log(res);
  //       dispatch(setAccessToken(res.access_token));
  //       const response = await axios.get(
  //           `https://www.googleapis.com/oauth2/v3/userinfo`,
  //           {
  //               headers: {
  //                   Authorization: `Bearer ${res.access_token}`
  //               }
  //           }
  //       )
  //       console.log(response);
  //       dispatch(setUser(response.data));
  //       // const res2 = await axios.get(
  //       //     `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&part=subscriberSnippet&part=contentDetails&part=id&channelId=UCx450SlonwE7_K4ZtRou6nw&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`, {
  //       //       headers: {
  //       //         Authorization: `Bearer ${res.access_token}`
  //       //       }
  //       //     }
  //       //   )
  //       //   console.log(res2);
  //   },
  //     onError: (error) => console.log('Login Failed:', error)
  // });

  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={googleAuth}>Sign In With Google</button>
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} onClick={() => login()} /> */}
    </div>
  );
};

export default Login;
