import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/HomePage/AboutUs';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Dashboard from './Components/DashBoard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
<AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<AboutUs></AboutUs>} />
        <Route path="/register" element={<SignUp></SignUp>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="dashboard" element={<PrivateRoute>
              <Dashboard/>
            </PrivateRoute>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
