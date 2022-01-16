import styled from "styled-components";
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  &:hover {
    color: #ffd700;

    background-position: right center;
  }
`;
