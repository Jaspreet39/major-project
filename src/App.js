import logo from "./logo.svg";
import "./App.css";
import Home from "./home";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import Page from "./page1";
import Form from "./form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./loginpage";
import Aboutus from "./about";
import Login from "./pages/login";
import ProductForm from "./pages/ProductForm";

function App() {
  return (
    <>
      {/* <Home/> */}

      {/* <Loginpage/> */}

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/proform" element={<ProductForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
