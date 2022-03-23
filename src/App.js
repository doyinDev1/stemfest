import { ThemeProvider } from 'styled-components'

import GlobalStyles from './components/style/Global';
import theme from './data/theme';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={theme} > */}
      <GlobalStyles />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      {/* </ThemeProvider> */}
    </Router >
  );
}

export default App;
