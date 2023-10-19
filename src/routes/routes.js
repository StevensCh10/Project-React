import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import User from "../pages/user/User";

function RoutesApp() {
  // SE FOR PRA VERIFICAR SE EXISTE O OBJETO OU NÃO, MELHOR VERIFICAR AQUI
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default RoutesApp;