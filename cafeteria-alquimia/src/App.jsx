import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Categoria from "./pages/Categoria";
import Sucursales from "./pages/Sucursales";
import "./App.css";

function Layout({ children }) {
  const location = useLocation();

  // 🔹 Oculta Navbar y Footer solo en Home ("/")
  const hideNavbarFooter = location.pathname === "/";

  return (
    <div className="App">
      {!hideNavbarFooter && <Navbar />}

      <main>{children}</main>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 🏠 Pantalla principal */}
          <Route path="/" element={<Home />} />

          {/* 🔹 Otras páginas */}
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:nombre" element={<Categoria />} />
          <Route path="/sucursales" element={<Sucursales />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
