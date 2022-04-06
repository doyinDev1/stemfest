import "./Card.css";
function Card({ name, age, image }) {
  return (
    <div className="card">
      <div className="card__Image">
        <img src={image} alt="kidImage" />
      </div>
      <div className="card__About">
        <h4 className="card__Name">{name}</h4>
        <p className="card__Age"> Age: {age}</p>
        <button> Download Pass</button>
      </div>
    </div>
  );
}

export default Card;
