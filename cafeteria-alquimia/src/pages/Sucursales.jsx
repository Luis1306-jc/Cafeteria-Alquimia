import React from "react";
import "../styles/Sucursales.css";

export default function Sucursales() {
  return (
    <div className="sucursales-fondo">
      <h1 className="sucursales-titulo">Nuestras Sucursales</h1>

      <div className="sucursales-grid">
        {/* Sucursal Centro */}
        <div className="sucursal-card">
          <h2 className="sucursal-subtitulo">Sucursal Centro</h2>
          <iframe
            title="Mapa Sucursal Centro"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.1522490943535!2d-99.31203812580107!3d19.620787734646054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21900701016a9%3A0x10f6e8ff7ee3dea5!2sAlquimia%20D&#39;loto!5e0!3m2!1ses-419!2smx!4v1762380303766!5m2!1ses-419!2smx"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="sucursal-info">
            🕒 Horarios: Lunes a Domingo de 8:00 am a 7:00 pm
          </p>
          <p className="sucursal-info">
            📍 Centro — Calle Principal #123, Ciudad del Café
          </p>
        </div>

        {/* Sucursal Norte */}
        <div className="sucursal-card">
          <h2 className="sucursal-subtitulo">Sucursal Norte</h2>
          <iframe
            title="Mapa Sucursal Norte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.663104263595!2d-99.47859472580876!3d19.340419943620248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20a1464000001%3A0x1c254456341588a0!2sUniversidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca!5e0!3m2!1ses-419!2smx!4v1762384365196!5m2!1ses-419!2smx"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="sucursal-info">
            🕒 Horarios: Lunes a Domingo de 8:00 am a 7:00 pm
          </p>
          <p className="sucursal-info">
            📍 Norte — Av. Aromas #456, Ciudad del Café
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/525618218562"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="sucursal-boton">Reserva tu cita</button>
      </a>
    </div>
  );
}
