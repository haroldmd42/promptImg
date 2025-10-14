// src/components/CardCollections.jsx
import { motion } from "framer-motion";
import "./CardCollections.css";

const CardCollections = ({ collections }) => {
  return (
    <div className="row g-4 justify-content-center">
      {collections.map((item, index) => (
        <motion.div
          key={index}
          className="col-md-4 col-sm-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <motion.div
            className="futuristic-card"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,255,255,0.3)" }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="image-wrapper">
              <img
                src={item.image || "./logo.png"}
                alt={item.title}
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-cyan">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <motion.button
                className="btn-futuristic mt-auto"
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  navigator.clipboard.writeText(item.description)
                }
              >
                Copiar Prompt
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardCollections;
