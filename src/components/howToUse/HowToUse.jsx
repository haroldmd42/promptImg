import { motion } from "framer-motion";
import "./HowToUse.css";

const HowToUse = () => {
  const steps = [
    {
      title: "1. Explora la galería de prompts",
      description:
        "Ingresa a la sección ‘Colecciones’. Allí encontrarás una galería de prompts diseñados para distintos estilos: retratos futuristas, artísticos, realistas y más.",
      
    },
    {
      title: "2. Selecciona el prompt que más te guste",
      description:
        "Haz clic en el prompt de tu preferencia. Podrás ver su descripción, la idea general y un ejemplo de salida.",
      
    },
    {
      title: "3. Añade una imagen de referencia",
      description:
        "Cuando crees o edites un prompt, puedes subir una imagen del rostro de la persona o elemento que quieres usar como base. Esto ayudará a las IA como Gemini, DALL·E o Leonardo a generar resultados más precisos.",
      
    },
    {
      title: "4. Personaliza las características",
      description:
        "Agrega detalles como iluminación, expresión facial, estilo artístico o tipo de fondo. Cuanta más precisión, mejor será el resultado.",
      
    },
    {
      title: "5. Copia y usa el prompt en tu herramienta favorita",
      description:
        "Una vez listo, copia el prompt y pégalo en Gemini, Midjourney, Leonardo AI o cualquier generador de imágenes compatible. Ajusta los parámetros de resolución o estilo según la plataforma.",
      
    },
    {
      title: "6. Experimenta y ajusta",
      description:
        "Cada IA interpreta los prompts de forma diferente. Prueba distintas combinaciones, estilos y tonos para obtener el resultado ideal.",
      
    },
  ];

  return (
    <motion.div
      className="howto-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="howto-title"> Cómo usar Visage<span>AI</span></h1>
      <p className="howto-subtitle">
        Sigue estos pasos para generar imágenes increíbles a partir de tus
        prompts y fotos de referencia.
      </p>

      <div className="howto-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="howto-card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="howto-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="howto-footer">
        <p>
          💡 Tip: Combina tus prompts con palabras clave descriptivas como
          <span> ultra-realistic</span>, <span> cinematic lighting</span> o
          <span> portrait 8k</span> para resultados más potentes.
        </p>
      </div>
    </motion.div>
  );
};

export default HowToUse;
