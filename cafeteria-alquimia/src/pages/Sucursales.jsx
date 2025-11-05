export default function Sucursales() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Nuestras Sucursales</h1>

            {/* Primer mapa: Sucursal Centro */}
            <div style={styles.sucursal}>
                <h2 style={styles.subtitle}>Sucursal Centro</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.1522490943535!2d-99.31203812580107!3d19.620787734646054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21900701016a9%3A0x10f6e8ff7ee3dea5!2sAlquimia%20D&#39;loto!5e0!3m2!1ses-419!2smx!4v1762380303766!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="450"  
                    style={styles.map}  
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p style={styles.infoText}>Horarios: Lunes a Domingos de 8:00 am a 7:00 pm</p>
                <p style={styles.infoText}>📍 Centro — Calle Principal #123, Ciudad del Café</p>
            </div>

            {/* Segundo mapa: Sucursal Norte */}
            <div style={styles.sucursal}>
                <h2 style={styles.subtitle}>Sucursal Norte</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.663104263595!2d-99.47859472580876!3d19.340419943620248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20a1464000001%3A0x1c254456341588a0!2sUniversidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca!5e0!3m2!1ses-419!2smx!4v1762384365196!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="450"  
                    style={styles.map}  
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p style={styles.infoText}>Horarios: Lunes a Domingos de 8:00 am a 7:00 pm</p>
                <p style={styles.infoText}>📍 Norte — Av. Aromas #456, Ciudad del Café</p>
            </div>

            {/* Botón de reserva */}
            <a href="https://wa.me/525618218562" target="_blank" rel="noopener noreferrer">
                <button style={styles.button}>Reserva</button>
            </a>
        </div>
    );
}

// Estilos
const styles = {
    container: {
        padding: "2rem",
        backgroundColor: "#f4f6f9",  // Fondo suave para toda la página
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "0 auto",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Roboto', sans-serif",
    },
    title: {
        fontSize: "2rem",
        color: "#4A90E2",  // Color llamativo
        marginBottom: "1rem",
        fontWeight: "bold",
        textAlign: "center",
    },
    sucursal: {
        marginBottom: "2rem",
    },
    subtitle: {
        fontSize: "1.5rem",
        color: "#333",  // Color para los subtítulos
        marginBottom: "0.5rem",
        fontWeight: "600",
    },
    map: {
        border: "0",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",  // Sombra sutil para el iframe
    },
    infoText: {
        fontSize: "1rem",
        color: "#555",  // Color gris suave para la información
        marginBottom: "0.5rem",
        textAlign: "center",
    },
    button: {
        display: "block",
        width: "100%",
        padding: "12px 0",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#4CAF50",  // Verde para el botón
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        fontWeight: "600",
        textTransform: "uppercase",
        transition: "background-color 0.3s",
        marginTop: "1.5rem",
        textAlign: "center",
    },
    buttonHover: {
        backgroundColor: "#45a049",  // Hover para el botón
    },
};
