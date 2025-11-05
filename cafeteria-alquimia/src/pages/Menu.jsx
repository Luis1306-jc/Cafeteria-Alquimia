import React from "react";
import "../styles/Menu.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Menu() {
    const productos = [
        { nombre: "Latte", descripcion: "Café con leche espumosa", precio: "$45", imagen: "/imagen1.jpeg" },
        { nombre: "Cappuccino", descripcion: "Café con espuma cremosa", precio: "$50", imagen: "/imagen2.jpeg" },
        { nombre: "Cold Brew", descripcion: "Café frío de extracción lenta", precio: "$55", imagen: "/imagen3.jpeg" },
        { nombre: "Mocha", descripcion: "Café con chocolate y crema batida", precio: "$60", imagen: "/imagen4.jpeg" },
        { nombre: "Americano", descripcion: "Café espresso con agua caliente", precio: "$40", imagen: "/imagen5.jpeg" },
        { nombre: "Caramel Latte", descripcion: "Café con leche y jarabe de caramelo", precio: "$58", imagen: "/imagen7.jpeg" },
    ];

    return (
        <div className="menu-fondo">
            <div className="menu-container">
                <h1 className="menu-titulo">Menú</h1>
                <div className="menu-grid">
                    {productos.map((p, i) => (
                        <Card key={i} className="menu-card">
                            <CardMedia component="img" image={p.imagen} alt={p.nombre} className="menu-card-img" />
                            <CardContent>
                                <Typography className="menu-nombre" variant="h6">{p.nombre}</Typography>
                                <Typography className="menu-descripcion" variant="body2">{p.descripcion}</Typography>
                                <Typography className="menu-precio" variant="subtitle1">{p.precio}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
