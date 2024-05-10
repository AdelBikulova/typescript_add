import { AboutWrapper, AboutTitle, StyledP } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("Component users unmounted");
    };
  }, []);

  return (
    <AboutWrapper>
      <AboutTitle>About Technology Park</AboutTitle>
      <div>
        <StyledP>
          Technology Park – your guide to the world of cutting-edge
          technologies!
          <br />
          <br />
          🌐 Innovation leader: Technology Park is a leading company in the
          development and implementation of advanced technological solutions. We
          specialize in creating innovative products and services that change
          the world for the better.
          <br />
          <br />
          💻 Software development: Our team of experts develops custom software
          products for a wide range of industries, from healthcare to finance
          and retail.
          <br />
          <br />
          🔬 Research and development: We continuously conduct research and
          development, striving to find new technological solutions that can
          improve people's lives and increase business efficiency.
          <br />
          <br />
          🤝 Partnership with clients: We value each client and build long-term
          partnerships with them. Our goal is to help every client succeed by
          providing innovative and effective solutions. Join Technology Park and
          let's create a future where technology serves humanity!
        </StyledP>        
      </div>
    </AboutWrapper>
  );
}

export default About;
