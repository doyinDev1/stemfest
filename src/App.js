import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdultLogin from "./pages/AdultLogin";
import { Toaster } from "react-hot-toast";
import AdultDashboard from "./pages/AdultDashboard";
import Stemfest from "./components/StemLogin/Stemfest";
import Register2 from "./pages/Register2";<<<<<<< main
10
 

import About from "./pages/About";
import Reason from "./pages/Reason";

import ReactGA from 'react-ga'

function App() {
  ReactGA.initialize('UA-104094700-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* <Route exact path="/adult-login" element={<AdultLogin />} /> */}
          <Route exact path="/adult-dashboard" element={<AdultDashboard />} />
          <Route exact path="/login" element={<Stemfest />} />
          <Route path="/register" element={<Register2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/reason" element={<Reason />} />
        </Routes>
      </Router>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
