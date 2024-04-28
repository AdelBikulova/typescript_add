import styled from "@emotion/styled";

export const Homework09Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  min-height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2017/02/13/21/57/lake-2063957_1280.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Input = styled.input`
  display: flex;
  width: 300px;
  height: 100px;
  border: 6px double #1a6483;
  background-color: #ebf6f6;
  padding: 50px;
  font-size: 24px;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 80px;
  outline: none;
  border: none;
  border: 2px solid black;
  border-radius: 4px;
  padding: 30px;
  background-color: #7ec9e9;
  font-size: 24px;
  cursor: pointer;
`;

export const Result = styled.p`
  font-size: 50px;
  background-color: #f0faff;
`;
