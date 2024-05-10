import { UserWrapper, UserTitle, StyledP } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Users() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    return () => {
      console.log("Component users unmounted");
    };
  }, []);

  return (
    <UserWrapper>
      <UserTitle>
        How can we be helpful to our users? <br /> What tasks does Technology
        Park solve?
      </UserTitle>
      <div>
        <StyledP>
          1. Artificial Intelligence (AI): AI Platforms and Solutions:
          Development and implementation of cutting-edge AI platforms and
          solutions to optimize business processes and enhance operational
          efficiency. Machine Learning and Analytics: Creation of innovative
          machine learning systems and analytical tools for data analysis and
          trend forecasting.
          <br />
          <br />
          2. Genetic Engineering and Biotechnology: Genome Editing: Development
          of genetic editing technologies to improve agricultural crops, create
          pharmaceuticals, and treat genetic disorders. Biological Products and
          Services: Innovation in biological products and services aimed at
          improving health and quality of life.
          <br />
          <br />
          3. Innovative Technologies: Software Development: Creation of
          innovative software for business process automation, entertainment
          applications, and mobile apps. Internet of Things (IoT): Integration
          of IoT technologies across various sectors including smart home,
          industry, and healthcare.
          <br />
          <br />
          4. Consulting and Training: IT Consulting and Audit: Consultation and
          audit services to optimize IT infrastructure, enhance security, and
          improve efficiency. Training and Certification: Provision of
          educational courses and programs on technological innovations, AI, and
          genetic engineering for professionals and business users.
          <br />
        </StyledP>      
      </div>
    </UserWrapper>
  );
}

export default Users;
