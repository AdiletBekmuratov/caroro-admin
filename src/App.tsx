import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./components/Companies";
import NavSide from "./components/NavSide";
import Users from "./components/Users";
import Make from "./components/Make";
import Category from "./components/Category";
import GearBox from "./components/GearBox";
import VehicleType from "./components/VehicleType";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
     <Layout>
      <Routes>
          <Route path="/Companies" element={<Companies />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Make" element={<Make />} />
          <Route path="/GearBox" element={<GearBox />} />
          <Route path="/VehicleType" element={<VehicleType />} />  
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
