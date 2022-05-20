import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdultLogin from "./pages/AdultLogin";
import { Toaster } from "react-hot-toast";
import AdultDashboard from "./pages/AdultDashboard";
import Stemfest from "./components/StemLogin/Stemfest";
import Register2 from "./pages/Register2";
import ChatwootWidget from './components/ChatwootWidget/ChatwootWidget'
import About from "./pages/About";
import Reason from "./pages/Reason";
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel';

function App() {
  // Google Analytics goes here
  
  ReactGA.initialize('UA-104094700-1');
  // test  ReactGA.initialize('UA-191374128-1');

  ReactGA.pageview(window.location.pathname + window.location.search);

  // Pixel implementation 


const advancedMatching = { em: 'adedoyin27@gmail.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init('575457772929479', advancedMatching, options);

ReactPixel.pageView();
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
      <ChatwootWidget />
    </>
  );
}

export default App;
