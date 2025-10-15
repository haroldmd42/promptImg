import "./Landing.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="landing-container container mt-4">
      <div className="row align-items-center">
        {/* Texto a la izquierda */}
        <div className="col-md-6 p-4 text-section">
          <motion.h1
            className="display-3 fw-bold text-glow"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Visage<span className="ai-highlight">AI</span>
          </motion.h1>

          <motion.p
            className="lead text-light mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforma tu rostro en arte con el poder de la{" "}
            <strong>Inteligencia Artificial</strong>.  
            Explora una <strong>colección exclusiva de prompts</strong> para
            generar imágenes <strong>hiperrealistas</strong> de ti mismo.
          </motion.p>

          <motion.ul
            className="list-unstyled mt-4 fw-semibold features-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <li>Prompts listos para usar y optimizados</li>
            <li>Estilos artísticos y fotográficos únicos</li>
            <li>Resultados realistas en segundos</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <NavLink to="/collections" className="btn-futuristic mt-4">
              Probar ahora
            </NavLink>
          </motion.div>

          {/* 🔹 Iconos de redes sociales */}
          <motion.div
            className="social-icons mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/yan-harold-mu%C3%B1oz-dominguez-44a2a6b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/haroldmd42"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <p className="social-link-by">® By HDEVS</p>
          </motion.div>
        </div>

        {/* Imagen a la derecha */}
        <div className="col-md-6 text-center">
          <motion.img
            src={`${import.meta.env.BASE_URL}landing.png`}
            alt="Ejemplo VisageAI"
            className="img-fluid futuristic-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          
        </div>
        
      </div>
      
    </section>
  );
};

export default Landing;
