import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Animal {
  name: string;
  species: string;
  image: string;
}

export interface AnimalCardProps {
  animalData: Animal;
  backgroundColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
}

const mainCardStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AnimalCardWrapper = styled.div`
  ${mainCardStyles}
`;

export const AnimalImage = styled.img`
  width: 100px;
`;
