import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./CardCollections.css";

/* ------------------------------
   Portal simple para el modal
   ------------------------------ */
const ModalPortal = ({ children, onClose }) => {
  // crea el nodo en body donde inyectaremos el modal
  const el = document.getElementById("modal-root") || document.body;
  return createPortal(children, el);
};

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
          <ExpandableCard item={item} collections={collections} />
        </motion.div>
      ))}
    </div>
  );
};

const ExpandableCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Añade/quita clase al body para bloquear scroll (igual que tu ejemplo)
  useEffect(() => {
    if (showPreview) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showPreview]);

  return (
    <>
      <motion.div
        className="futuristic-card"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(0,255,255,0.3)",
        }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <div className="image-wrapper" onClick={() => setShowPreview(true)}>
          <img
            src={item.image || "./logo.png"}
            alt={item.title}
            className="card-img-top clickable-image"
          />
          <div className="overlay">
            <span>Ver imagen</span>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title text-cyan">{item.title}</h5>

          <p className={`card-text ${expanded ? "expanded" : "collapsed"}`}>
            {item.description}
          </p>

          <motion.button
            className="btn-toggle mt-2"
            whileTap={{ scale: 0.9 }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Ver menos" : "Ver más"}
          </motion.button>

          <motion.button
            className="btn-futuristic mt-3"
            whileTap={{ scale: 0.9 }}
            onClick={() => navigator.clipboard.writeText(item.description)}
          >
            Copiar Prompt
          </motion.button>
        </div>
      </motion.div>

      {/* ---------- Modal renderizado via Portal (fijo y centrado) ---------- */}
      <AnimatePresence>
        {showPreview && (
          <ModalPortal onClose={() => setShowPreview(false)}>
            <motion.div
              className="modal-overlay image-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowPreview(false)}
            >
              <motion.div
                className="modal-futuristic image-modal-futuristic"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Contenido de la vista previa: ocupa toda la caja del modal */}
                <div className="image-preview-wrapper">
                  <img
                    src={item.image || "./logo.png"}
                    alt={item.title}
                    className="image-preview-full"
                  />
                </div>

                <button
                  className="btn-close-modal"
                  onClick={() => setShowPreview(false)}
                  aria-label="Cerrar vista previa"
                >
                  ✖
                </button>
              </motion.div>
            </motion.div>
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardCollections;
