import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./components/Companies";
import NavSide from "./components/NavSide";
import Users from "./components/Users";
import Products from "./components/Products";
import Blog from "./components/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex w-full">
        <NavSide />
        <div className="w-full p-5">
          <Routes>
            <Route path="/Companies" element={<Companies />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
