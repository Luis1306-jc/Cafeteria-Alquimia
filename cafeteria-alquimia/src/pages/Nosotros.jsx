import React from "react";
import "../styles/Nosotros.css";

export default function Nosotros() {
    return (
        <div className="home-container">
            <div className="home-overlay">
                <h1 className="home-titulo">Cafetería Alquimia D'Loto</h1>

                <section className="home-section">
                    <h2 className="home-subtitulo">Misión</h2>
                    <p className="home-texto">
                        Ofrecer una experiencia sensorial y emocional a través del café, la repostería artesanal y el servicio humano, creando un espacio donde cada visita inspire bienestar, conexión y transformación personal.
                        En Alquimia D’Loto, cada taza es una invitación a detener el tiempo y reconectar con uno mismo.
                    </p>
                </section>

                <section className="home-section">
                    <h2 className="home-subtitulo">Visión</h2>
                    <p className="home-texto">
                        Ser una marca reconocida por convertir el acto cotidiano de tomar café en una experiencia significativa y transformadora.
                        Aspiramos a expandir Alquimia D’Loto como un referente de calidad, calidez y conciencia, donde el arte del café se combine con el propósito de inspirar renacimiento, creatividad y comunidad.
                    </p>
                </section>
            </div>
        </div>
    );
}
