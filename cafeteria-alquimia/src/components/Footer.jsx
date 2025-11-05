import "../styles/Footer.css";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Cafetería Alquimia ☕</p>
            <div className="footer-socials">
                <a
                    href="https://www.tiktok.com/@alquimia_de_loto?_t=ZS-90m1lP8d3yB&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaTiktok />
                </a>
                <a
                    href="https://www.facebook.com/share/1CDJCMVk28/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.instagram.com/alquimia_d_loto?igsh=c2Q2MXBtMDVhMjZl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
