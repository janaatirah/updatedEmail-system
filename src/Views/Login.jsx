import React, { useState } from "react";
import {LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
const Login= () => {
    const initialValues = {
      email: "",
      password: "",
     
    };

    const [Login, setLogin] = useState(initialValues);
    const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log("value", value, "event", event.target.name, "name", name);
    setLogin({
      ...Login,
      [name]: value,
    });
  };
  const [login] = useMutation(LOGIN);
  return (
    <div style={{display:"flex"}}>
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={Login.email}
        onChange={changeHandler}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={Login.password}
        onChange={changeHandler}
      ></input>
      <button
        type="submit"
        onClick={() => {
          login({
            variables: {
              email: Login.email,
              password: Login.password,
            },
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

   