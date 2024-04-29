import styled from "@emotion/styled";

export const Lesson10Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_1280.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DataBlock = styled.div`
  width: 800px;
  margin-bottom: 50px;
  background-color: #f3efef;
  border-radius: 5px;
  padding: 10px;
  max-height: 700px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  overflow-y: auto;
`;

export const Result = styled.p`
  font-size: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  width: 500px;
  height: 150px;
  padding: 10px;
  margin: 100px 380px;
  border: double;
  border-radius: 5px;
  background-color: #de750b;
  color: #1f1303;
  font-size: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  cursor: pointer;
`;
