import { AnimalCardWrapper, AnimalImage, AnimalCardProps } from "./styles";

function AnimalCard({
  animalData,
  backgroundColor,
  borderRadius,
  width,
  height,
  padding,
}: AnimalCardProps) {
  const styleObject = {
    backgroundColor: backgroundColor || "rgb(217, 180, 224)",
    borderRadius: borderRadius || "4px",
    width: width || "300px",
    height: height || "300px",
    padding: padding || "20px",
  };

  return (
    <AnimalCardWrapper style={styleObject}>
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
