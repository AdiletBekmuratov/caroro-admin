import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import Companies from "./components/Companies";
import GearBox from "./components/GearBox";
import Layout from "./components/Layout";
import Make from "./components/Make";
import SignIn from "./components/SignIn";
import Users from "./components/Users";
import VehicleType from "./components/VehicleType";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getMe } from "./redux/slices/auth";

function App() {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  // useCheckUser();
  useEffect(() => {
    const getUser = async () => {
      await dispatch(getMe());
    };

    getUser();
  }, []);

  return (
    <BrowserRouter>
     <Layout>
      <Routes>
          <Route path="/companies" element={<Companies />} />
          <Route path="/category" element={<Category />} />
          <Route path="/users" element={<Users />} />
          <Route path="/make" element={<Make />} />
          <Route path="/gearBox" element={<GearBox />} />
          <Route path="/vehicleType" element={<VehicleType />} />  
          <Route path="/signIn" element={<SignIn />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
