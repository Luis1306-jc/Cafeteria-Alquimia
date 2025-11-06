import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";

export default function Menu() {
    const navigate = useNavigate();

    const categorias = [
        {
            titulo: "Bebidas",
            descripcion: "Cafés, tés y bebidas frías",
            imagen: "/imagen1.jpeg",
            ruta: "bebidas", // 🔹 clave para redirigir
        },
        {
            titulo: "Especialidades",
            descripcion: "Sabores únicos de la casa",
            imagen: "/imagen3.jpeg",
            ruta: "especialidades",
        },
        {
            titulo: "Comida y Postres",
            descripcion: "Paninis, pasteles y más delicias",
            imagen: "/imagen5.jpeg",
            ruta: "comida-postres",
        },
    ];

    return (
        <div className="menu-fondo">
            <h1 className="menu-titulo">Menú</h1>
            <div className="categorias-grid">
                {categorias.map((cat, i) => (
                    <div
                        key={i}
                        className="categoria-card"
                        style={{ backgroundImage: `url(${cat.imagen})` }}
                        onClick={() => navigate(`/categoria/${cat.ruta}`)} // 🔹 acción al hacer clic
                    >
                        <div className="categoria-overlay">
                            <h2>{cat.titulo}</h2>
                            <p>{cat.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
