import { Fragment} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup";
import useObj from "../useObj";

function RoutesApp() {
  
  const { obj, setObj } = useObj();
 
  if(!obj) {
   return <Login setObj={setObj} />
  }
  
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Login setObj={setObj}/>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Login setObj={setObj}/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;