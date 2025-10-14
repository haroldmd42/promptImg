import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import CardCollections from "./cardcollections/CardCollections";
import CreateCard from "./createCard/CreateCard";
import "./Collections.css";

/* 🔹 Botón flotante fijo */
const FloatingButtonPortal = ({ onClick, children }) => {
  return createPortal(
    <button
      className="floating-btn-futuristic"
      onClick={onClick}
      aria-label="Abrir modal crear prompt"
    >
      {children}
    </button>,
    document.body
  );
};

/* 🔹 Modal centrado en pantalla */
const ModalPortal = ({ children, onClose }) => {
  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-futuristic"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  /* 🔹 Bloquea el scroll del fondo cuando el modal está abierto */
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  /* 🔹 Carga de colecciones */
  useEffect(() => {
    fetch("https://promptback-2.onrender.com/prompts")
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error("Error al cargar prompts:", err))
      .finally(() => setLoading(false));
  }, []);

  /* 🔹 Agregar nueva tarjeta */
  const addCard = async (newCard) => {
    try {
      const res = await fetch("https://promptback-2.onrender.com/prompts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard),
      });

      if (res.ok) {
        const createdCard = await res.json();
        setCollections((prev) => [...prev, createdCard]);
        setShowModal(false);
      } else {
        console.error("Error al guardar el prompt");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  return (
    <>
      {/* Contenedor principal */}
      <motion.div
        className="collections-container container my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-5">
          <motion.h1
            className="fw-bold text-cyan"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Galería de Colecciones
          </motion.h1>
          <motion.p
            className="lead text-light mx-auto"
            style={{ maxWidth: "700px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explora prompts diseñados para inspirarte y ayudarte a crear retratos
            hiperrealistas con el poder de la inteligencia artificial.
          </motion.p>
        </div>

        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="loader-futuristic"></div>
          </div>
        ) : (
          <CardCollections collections={collections} />
        )}
      </motion.div>

      {/* 🔹 Modal fijo y centrado */}
      {showModal && (
        <ModalPortal onClose={() => setShowModal(false)}>
          <div className="modal-body">
            <CreateCard addCard={addCard} />
          </div>
        </ModalPortal>
      )}

      {/* 🔹 Botón flotante fijo */}
      <FloatingButtonPortal onClick={() => setShowModal(true)}>+</FloatingButtonPortal>
    </>
  );
};

export default Collections;
