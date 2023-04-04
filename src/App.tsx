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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex w-full">
        <NavSide />
        <div className="w-full p-5">
          <Routes>
            <Route path="/Companies" element={<Companies />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Make" element={<Make />} />
            <Route path="/GearBox" element={<GearBox />} />
            <Route path="/VehicleType" element={<VehicleType />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
