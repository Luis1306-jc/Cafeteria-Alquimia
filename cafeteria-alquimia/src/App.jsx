import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";        // 🔹 Nueva pantalla principal
import Home from "./pages/Home";            // 🔹 “Nosotros”
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Categoria from "./pages/Categoria";
import Sucursales from "./pages/Sucursales";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/nosotros" element={<Nosotros />} /> {/* 🏠 Nueva pantalla inicial */}
            <Route path="/" element={<Home />} /> {/* “Nosotros” */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/sucursales" element={<Sucursales />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
