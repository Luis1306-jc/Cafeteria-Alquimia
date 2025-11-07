import "../styles/Home.css";

function Home() {
    return (
        <section className="inicio">
            <div className="inicio-content">
                <h1>Bienvenido a Cafetería Alquimia ☕</h1>
                <p>Disfruta del aroma, sabor y magia del café artesanal.</p>
                <button
                    className="inicio-btn"
                    onClick={() => (window.location.href = "/menu")}
                >
                    Ver nuestro menú
                </button>
            </div>
        </section>
    );
}

export default Home;
