import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdultLogin from "./pages/AdultLogin";
import { Toaster } from "react-hot-toast";
import AdultDashboard from "./pages/AdultDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route exact path="/adult-login" element={<AdultLogin />} />
          <Route exact path="/adult-dashboard" element={<AdultDashboard />} />
        </Routes>
      </Router>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
