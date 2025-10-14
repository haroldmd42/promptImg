import { useState } from "react";
import "./CreateCard.css"; // 🔹 Importamos los estilos futuristas

const CreateCard = ({ addCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newCard = { title, description, image };

    try {
      await addCard(newCard);
      setTitle("");
      setDescription("");
      setImage("");
    } catch (err) {
      setError("No se pudo crear el prompt. Intenta nuevamente.");
      console.error("Error al crear prompt:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="futuristic-form">
      
      <h3 className="text-center mb-4 neon-title">Crear nuevo Prompt</h3>

      {/* Imagen */}
      <div className="mb-3">
        <label className="form-label">Imagen de referencia</label>
        <input
          type="file"
          className="form-control neon-input text-light"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {image && (
          <img
            src={image}
            alt="preview"
            className="preview-img mt-3"
          />
        )}
      </div>

      {/* Título */}
      <div className="mb-3">
        <label className="form-label">Título del prompt</label>
        <input
          type="text"
          className="form-control neon-input text-light"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ej. Retrato profesional futurista"
          required
        />
      </div>

      {/* Descripción */}
      <div className="mb-3">
        <label className="form-label">Prompt</label>
        <textarea
          className="form-control neon-input text-light"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe el estilo o detalle del prompt"
          required
        />
      </div>

      {error && <p className="text-danger small">{error}</p>}

      <button
        type="submit"
        className="neon-button w-100"
        disabled={loading}
      >
        {loading ? "Guardando..." : "Crear Prompt ✨"}
      </button>
    </form>
  );
};

export default CreateCard;
