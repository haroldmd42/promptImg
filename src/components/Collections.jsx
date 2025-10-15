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
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  /* 🔹 Bloquea el scroll del fondo cuando el modal está abierto */
  useEffect(() => {
    document.body.classList.toggle("modal-open", showModal);
  }, [showModal]);

  /* 🔹 Carga inicial de colecciones */
  useEffect(() => {
    fetch("https://promptback-2.onrender.com/prompts")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setFilteredCollections(data);
      })
      .catch((err) => console.error("Error al cargar prompts:", err))
      .finally(() => setLoading(false));
  }, []);

  /* 🔹 Filtrar por título */
  useEffect(() => {
    const filtered = collections.filter((item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCollections(filtered);
  }, [searchTerm, collections]);

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
        {/* 🔹 Encabezado y buscador */}
        <div className="collections-header d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
          <div className="text-center text-md-start">
            <motion.h1
              className="fw-bold text-cyan"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Galería de Colecciones
            </motion.h1>
            <motion.p
              className="lead text-light mx-auto mb-0"
              style={{ maxWidth: "700px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explora prompts diseñados para inspirarte y ayudarte a crear retratos
              hiperrealistas con el poder de la inteligencia artificial.
            </motion.p>
          </div>

          {/* 🔹 Campo de búsqueda con ícono */}
          <motion.div
            className="search-container mt-4 mt-md-0 position-relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <input
              type="text"
              className="form-control search-input ps-5"
              placeholder="Buscar colección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="bi bi-search search-icon"></i>
          </motion.div>
        </div>

        {/* 🔹 Listado o mensaje sin resultados */}
        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="loader-futuristic"></div>
          </div>
        ) : filteredCollections.length > 0 ? (
          <CardCollections collections={filteredCollections} />
        ) : searchTerm.trim() !== "" ? (
          <div className="text-center text-light my-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="fs-5"
            >
              No se encontraron colecciones para "
              <span className="text-cyan">{searchTerm}</span>".
            </motion.p>
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
