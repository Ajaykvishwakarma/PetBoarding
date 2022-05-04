import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "../Redux/store";
import { CreateEntityPage } from "./CreateEntity";
import { EntityPage } from "./EntityPage";
import { Home } from "./Home";
import LogIn from "./LogIn";
import   Navbar  from "./Navbar";
import { Link, Navigate, useNavigate} from "react-router-dom";


const PrivateRoute = ({isAuthenticate, children}) => {
  return isAuthenticate ? children : <Navigate to={"/login"}/> 
}

export const AllRoutes = () => {
  const isAuthenticate = useSelector((store) => store.login.isAuthenticate)
  console.log("isauth",isAuthenticate)
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<EntityPage />} />
        <Route path="/listing/create" element={<CreateEntityPage />} /> */}
        <Route path="/login" element={<LogIn />} />


        <Route path='/' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><Home/></PrivateRoute>
        }></Route>

<Route path='/listing/:id' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><EntityPage /></PrivateRoute>
        }></Route>

<Route path='/listing/create' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><CreateEntityPage/></PrivateRoute>
        }></Route>


      </Routes>
    </>
  );
};