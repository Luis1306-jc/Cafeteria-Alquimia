import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Sucursales from "./pages/Sucursales.jsx";
import Categoria from "./pages/Categoria.jsx"; // 🔹 Importamos la nueva página
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/categoria/:nombre" element={<Categoria />} /> {/* 🔹 Nueva ruta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
