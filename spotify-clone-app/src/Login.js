import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://imgur.com/g0jGzoF.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN TO IMPERIAL PREMIUM SOUND</a>
    </div>
  );
}

export default Login;
