import CardCollections from "./cardcollections/CardCollections";
import CreateCard from "./createCard/CreateCard";
import { useState, useEffect } from "react";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // 🔹 Estado para abrir/cerrar modal

  useEffect(() => {
    fetch("https://promptback-2.onrender.com/prompts")
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error("Error al cargar prompts:", err))
      .finally(() => setLoading(false));
  }, []);

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
      {/* Botón flotante para abrir modal */}
      <div className="container my-4 text-center ">
        <button
          className="btn floating-btn"
          onClick={() => setShowModal(true)} // 🔹 Abre modal
        >
          +
        </button>
      </div>

      {/* Modal controlado por React */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content rounded-3 shadow">
              <div className="modal-header">
                <h5 className="modal-title">Crear nuevo Prompt</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)} // 🔹 Cierra modal
                ></button>
              </div>
              <div className="modal-body">
                <CreateCard addCard={addCard} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Galería */}
      <div className="container mt-4 mb-5">
        <h1 className="text-center fw-bold">Galería de colecciones</h1>
        <p>
          Explora nuestra galería de colecciones de prompts diseñados para
          inspirarte y ayudarte a crear imágenes hiperrealistas con tu rostro
          usando IA. Encuentra estilos únicos, creativos y profesionales listos
          para usar.
        </p>
        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <CardCollections collections={collections} />
        )}
      </div>
    </>
  );
};

export default Collections;
