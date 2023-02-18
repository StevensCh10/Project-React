import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import useObj from "../../useObj";

export default function Login() {
  const { obj, setObj } = useObj();

  if (obj) {
    return window.location.href = '/home'
  }

  return (
    <Routes>
      <Route path="/" element={<LoginForm setObj={setObj} />} />
    </Routes>
  );
}
