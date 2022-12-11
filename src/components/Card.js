import "../styles/Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.character.img}
        alt={props.character.name}
        className="cardImg"
      />
      <h3 className="cardName">{props.character.name}</h3>
    </div>
  );
};
