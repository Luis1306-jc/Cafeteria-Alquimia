import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Bloquear scroll del fondo cuando el menú está abierto
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <header className="navbar" role="navigation" aria-label="Navegación principal">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={() => setOpen(false)}>
          <img src="/logo.jpeg" alt="Alquimia D'Loto" className="logo-img" />
        </Link>

        {/* Enlaces escritorio */}
        <nav className="links-desktop">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/menu" className="nav-link">Menú</Link>
          <Link to="/sucursales" className="nav-link">Sucursales</Link>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="h-bar"></span>
          <span className="h-bar"></span>
          <span className="h-bar"></span>
        </button>
      </div>

      {/* Overlay menú móvil */}
      <div className={`overlay ${open ? "open" : ""}`}>
        <button className="overlay-close" onClick={() => setOpen(false)}>✕</button>
        <nav className="overlay-nav">
          <Link to="/" className="overlay-link" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/nosotros" className="overlay-link" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/menu" className="overlay-link" onClick={() => setOpen(false)}>Menú</Link>
          <Link to="/sucursales" className="overlay-link" onClick={() => setOpen(false)}>Sucursales</Link>
        </nav>
      </div>
    </header>
  );
}
