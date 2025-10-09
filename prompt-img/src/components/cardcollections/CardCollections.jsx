const CardCollections = ({ collections }) => {
  return (
    <div className="row g-4">
      {collections.map((item, index) => (
        <div key={index} className="col-md-4 col-sm-6">
          <div className="card shadow-sm rounded-3 h-100">
            <img
              className="card-img-top"
              src={item.image  || "./logo.png"}
              alt={item.title}
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text flex-grow-1">{item.description}</p>
              <button className="btn btn-primary mt-auto" onClick={() => navigator.clipboard.writeText(item.description)}>
                Copiar Prompt
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCollections;
