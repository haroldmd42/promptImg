import "./Landing.css";
const Landing = () => {
  return (
    <section className="container mt-2">
      <div className="row align-items-center">
        {/* Texto a la izquierda */}
        <div className="col-md-6  p-4">
          <h1 className="display-4 fw-bold text-dark">VisageAI</h1>
          <p className=" text-dark">
            VisageAI es un sitio web donde encontrarás una
            <strong> colección de prompts</strong> creados especialmente para
            ayudarte a generar imágenes{" "}
            <strong>hiperrealistas de tu rostro</strong> con el poder de la
            Inteligencia Artificial. Esta herramienta funciona como una{" "}
            <strong>biblioteca de inspiración</strong>, pensada para que
            explores diferentes estilos y obtengas retratos únicos y
            sorprendentes.
          </p>
          <ul className="list-unstyled fw-semibold">
            <li>Accede a una colección de prompts listos para usar</li>
            <li>Genera retratos hiperrealistas con tu rostro</li>
            <li>Experimenta con estilos artísticos y creativos</li>
          </ul>
          <button className="btn btn-lg mt-3"><a className= "nav-link" href="/collections">Probar ahora</a></button>
        </div>

        {/* Imagen a la derecha */}
        <div className="col-md-6 text-center">
          <img
            src="../landing.png"
            alt="Ejemplo VisageAI"
            className="img-fluid rounded-3 shadow w-100 h-50 vh-90 object-fit-cover mb-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
