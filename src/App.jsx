import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Nav from "./components/molecules/Nav";
import Footer from "./components/organisms/Footer";
import Home from "./Pages/Home";
import Showroom from "./Pages/Showroom";

function App() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#fff" : "#fff",
    textDecoration: isActive ? "none" : "",
    fontWeight: isActive ? "bold" : "normal",
    padding: "5px 10px",
  });
  return (
    <BrowserRouter>
      <Nav>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/showroom">Showcase</NavLink>
        <NavLink style={navLinkStyles} to="/projects">Project</NavLink>
        <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showroom" element={<Showroom />} />
      </Routes>
      <Footer padding="small" height="smaller">
        <a href="">Github</a>
        <a href="">LinkedIn</a>
        <a href="">Medium</a>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
