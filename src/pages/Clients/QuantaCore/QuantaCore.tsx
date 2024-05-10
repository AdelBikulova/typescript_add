import Button from "components/Button/Button";
import { QuantaCoreWrapper, QuantaCoreTitle, StyledP } from "./styles";
import { useNavigate } from "react-router-dom";

function QuantaCore() {
  const navigate = useNavigate();

  return (
    <QuantaCoreWrapper>
      <QuantaCoreTitle>QuantaCore</QuantaCoreTitle>
      <div>
        <StyledP>
          QuantaCore - your gateway to the future of quantum technologies!
          <br />
          <br />
          QuantaCore is a leading company in the field of quantum physics and
          advanced technologies. We specialize in research and development aimed
          at harnessing quantum phenomena in various fields, from computing to
          cryptography.
          <br />
          <br />
          We collaborate with leading scientists and institutions worldwide to
          stay at the forefront of quantum technologies and keep abreast of
          innovations. Our goal is to apply cutting-edge scientific research to
          real technological solutions.
          <br />
          <br />
          We build long-term partnerships with clients based on mutual trust and
          mutually beneficial cooperation. We take pride in our reputation as a
          reliable and innovative partner.
          <br />
        </StyledP>
        <Button name="Go back" onButtonClick={() => navigate(-1)} />
      </div>
    </QuantaCoreWrapper>
  );
}

export default QuantaCore;
