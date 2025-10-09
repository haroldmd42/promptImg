import { useState } from "react";

const CreateCard = ({ addCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Convierte imagen a base64 para enviar al backend
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newCard = {
      title,
      description,
      image,
    };

    try {
      // Enviar al backend
      const response = await fetch("https://promptback-2.onrender.com/prompts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el prompt");
      }

      const savedCard = await response.json();

      // Actualizar la UI en el front
      addCard(savedCard);

      // Limpiar el formulario
      setTitle("");
      setDescription("");
      setImage("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container m-2">
        {/* Imagen */}
        <div className="mb-3">
          <label className="form-label">Imagen de referencia</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {image && (
            <img
              src={image}
              alt="preview"
              className="mt-3"
              style={{ maxWidth: "200px", borderRadius: "8px" }}
            />
          )}
        </div>

        {/* Título */}
        <div className="mb-3">
          <label className="form-label">Título del prompt</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Descripción */}
        <div className="mb-3">
          <label className="form-label">Prompt</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Guardando..." : "Crear prompt"}
        </button>
      </form>
    </div>
  );
};

export default CreateCard;
