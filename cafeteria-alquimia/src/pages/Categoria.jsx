import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "../styles/Categoria.css";

export default function Categoria() {
    const { nombre } = useParams();
    const navigate = useNavigate();

    const productosPorCategoria = {
        bebidas: [
            { nombre: "Café Latte", descripcion: "Café espresso con leche vaporizada", precio: "$45", imagen: "/imagen1.jpeg" },
            { nombre: "Té Chai", descripcion: "Infusión de especias y leche cremosa", precio: "$40", imagen: "/imagen2.jpeg" },
            { nombre: "Frappé de Vainilla", descripcion: "Refrescante mezcla de vainilla y hielo", precio: "$55", imagen: "/imagen3.jpeg" },
        ],
        especialidades: [
            { nombre: "Matcha Latte", descripcion: "Energía verde y sabor suave", precio: "$60", imagen: "/imagen9.jpeg" },
            { nombre: "Golden Milk", descripcion: "Cúrcuma, jengibre y leche de almendra", precio: "$65", imagen: "/imagen10.jpeg" },
            { nombre: "Cold Brew", descripcion: "Café frío infusionado lentamente", precio: "$50", imagen: "/imagen13.jpeg" },
        ],
        "comida-postres": [
            { nombre: "Panini de Pavo", descripcion: "Con queso derretido y salsa especial", precio: "$75", imagen: "/comida1.jpeg" },
            { nombre: "Pastel de Chocolate", descripcion: "Suave y húmedo, irresistible", precio: "$70", imagen: "/comida2.jpeg" },
            { nombre: "Cheesecake", descripcion: "Clásico pastel de queso con frambuesa", precio: "$65", imagen: "/comida3.jpeg" },
        ],
    };

    const productos = productosPorCategoria[nombre] || [];

    const tituloCategoria = nombre
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
        <div className="categoria-fondo">
            <div className="categoria-header">
                <h1 className="categoria-titulo">{tituloCategoria}</h1>
                <Button
                    variant="contained"
                    className="btn-regresar"
                    onClick={() => navigate("/menu")}
                >
                    ← Regresar
                </Button>
            </div>

            <div className="productos-grid">
                {productos.map((prod, i) => (
                    <Card key={i} className="producto-card">
                        <CardMedia
                            component="img"
                            image={prod.imagen}
                            alt={prod.nombre}
                            className="producto-imagen"
                        />
                        <CardContent className="producto-contenido">
                            <Typography variant="h6" className="producto-nombre">
                                {prod.nombre}
                            </Typography>
                            <Typography variant="body2" className="producto-descripcion">
                                {prod.descripcion}
                            </Typography>
                            <Typography variant="subtitle1" className="producto-precio">
                                {prod.precio}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
