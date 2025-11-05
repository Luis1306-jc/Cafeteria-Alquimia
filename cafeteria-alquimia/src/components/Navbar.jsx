import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.jpeg" alt="Logo Cafetería Alquimia" />
      </div>

      {/* Botón hamburguesa (solo visible en móvil) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
      </div>

      {/* Enlaces del menú */}
      <div className={`navbar-links ${menuAbierto ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuAbierto(false)}>Nosotros</Link>
        <Link to="/menu" onClick={() => setMenuAbierto(false)}>Menú</Link>
        <Link to="/sucursales" onClick={() => setMenuAbierto(false)}>Sucursales</Link>
      </div>
    </nav>
  );
}

export default Navbar;
