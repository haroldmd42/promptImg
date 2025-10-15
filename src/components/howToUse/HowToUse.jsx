import { motion } from "framer-motion";
import { FaWandMagicSparkles, FaCopy, FaGoogle, Fa42Group, FaLink, FaLightbulb } from "react-icons/fa6";
import "./HowToUse.css";
import { FaGalacticSenate } from "react-icons/fa";

const HowToUse = () => {
  const steps = [
    {
      title: "1. Elige tu prompt favorito",
      description:
        "Explora la galería y selecciona el prompt que más te inspire. Cada uno está optimizado para generar retratos hiperrealistas o artísticos.",
      icon: <FaWandMagicSparkles className="icon" />,
    },
    {
      title: "2. Cópialo con un solo clic",
      description:
        "Haz clic en el botón de copiar dentro del prompt para guardarlo en tu portapapeles al instante.",
      icon: <FaCopy className="icon" />,
    },
    {
      title: "3. Pégalo en Gemini",
      description: (
        <>
          Abre{" "}
          <a
            href="https://gemini.google.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="gemini-link"
          >
            Gemini <FaGoogle className="inline-icon" />
          </a>{" "}
          y pega el prompt en el chat. Añade tu imagen o indica el estilo que
          deseas… ¡y deja que la IA haga su magia!
        </>
      ),
      icon: <FaGoogle className="icon" />,
    },
  ];

  return (
    <motion.div
      className="howto-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="howto-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Cómo usar <span>VisageAI</span> con Gemini
      </motion.h1>

      <p className="howto-subtitle">
        Genera retratos sorprendentes en segundos. Sigue estos simples pasos:
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

      <motion.div
        className="howto-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>
          <FaLightbulb/> Tip: Usa palabras como <span>hyperrealistic</span>,{" "}
          <span>soft lighting</span> o <span>cinematic portrait</span> para
          lograr resultados aún más impresionantes.
        </p>
        <p>
          <FaLightbulb/> Tip: No todas las imagenes son <span>iguales,</span> puedes obtener varias versiones. 
        </p>
        <p>
          <FaLightbulb/> Tip: Puedes hacer <span>modificaciones,</span> a tu gusto para obtener difenretes resultados. 
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HowToUse;
