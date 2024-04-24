import "./styles.css";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <img src={animalData.image} alt={animalData.name} />
    </div>
  );
}

export default AnimalCard;
