export default function Sucursales() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nuestras Sucursales</h1>

      {/* Grid de dos columnas */}
      <div style={styles.grid}>
        
        {/* Sucursal Centro */}
        <div style={styles.sucursalCard}>
          <h2 style={styles.subtitle}>Sucursal Centro</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.1522490943535!2d-99.31203812580107!3d19.620787734646054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21900701016a9%3A0x10f6e8ff7ee3dea5!2sAlquimia%20D&#39;loto!5e0!3m2!1ses-419!2smx!4v1762380303766!5m2!1ses-419!2smx"
            width="100%"
            height="350"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sucursal Centro"
          ></iframe>
          <div style={styles.info}>
            <p style={styles.infoText}>
              <strong>Horarios:</strong> Lunes a Domingo 8:00 am - 7:00 pm
            </p>
            <p style={styles.infoText}>Centro — Calle Principal #123, Ciudad del Café</p>
          </div>
        </div>

        {/* Sucursal Norte */}
        <div style={styles.sucursalCard}>
          <h2 style={styles.subtitle}>Sucursal Norte</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.663104263595!2d-99.47859472580876!3d19.340419943620248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20a1464000001%3A0x1c254456341588a0!2sUniversidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca!5e0!3m2!1ses-419!2smx!4v1762384365196!5m2!1ses-419!2smx"
            width="100%"
            height="350"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sucursal Norte"
          ></iframe>
          <div style={styles.info}>
            <p style={styles.infoText}>
              <strong>Horarios:</strong> Lunes a Domingo 8:00 am - 7:00 pm
            </p>
            <p style={styles.infoText}>Norte — Av. Aromas #456, Ciudad del Café</p>
          </div>
        </div>

      </div>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/525546647909"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button style={styles.button}>Reserva por WhatsApp</button>
      </a>
    </div>
  );
}

// ESTILOS 100% COMPATIBLES CON JAVASCRIPT
const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#1B2B20",
    borderRadius: "12px",
    maxWidth: "1000px",
    margin: "2rem auto",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  title: {
    fontSize: "2.2rem",
    color: "#f6f8f9ff",
    marginBottom: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "2rem",
    marginBottom: "2.5rem",
  },
  sucursalCard: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column",
  },
  subtitle: {
    fontSize: "1.6rem",
    color: "#2c3e50",
    margin: "1rem 1.5rem 0.5rem",
    fontWeight: "700",
  },
  map: {
    border: "0",
    display: "block",
  },
  info: {
    padding: "1.2rem 1.5rem 1.8rem",
    backgroundColor: "#f8f9fa",
  },
  infoText: {
    fontSize: "1rem",
    color: "#444",
    marginBottom: "0.6rem",
    lineHeight: "1.5",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "16px 0",
    fontSize: "1.2rem",
    color: "#ffffff",
    backgroundColor: "#25D366", // Verde WhatsApp oficial
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)",
  },
};

// Hover para el botón (solo funciona si usas un evento onMouseEnter/onMouseLeave o CSS real)
// Pero como usamos inline styles, aquí te dejo una versión con hover simple:
const button = document.querySelector('button');
if (button) {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#128C7E';
    button.style.transform = 'translateY(-2px)';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#25D366';
    button.style.transform = 'translateY(0)';
  });
}