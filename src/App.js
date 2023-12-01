import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import FoodCart from "./Components/FoodCart/FoodCart";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/indexDescp/home";
import FoodMenu from "./Components/FoodMenu/Foodmenu";
import Add from "./Components/AddItem/AddItem.jsx";

function App() {
  return (
    <>
      <div className="body">
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/add" element={<Add />} />
              <Route exact path="/menu" element={<FoodMenu />} />
              <Route exact path="cart" element={<FoodCart />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
