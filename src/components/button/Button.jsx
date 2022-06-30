import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 14px;

  border: 1px solid #8f93a1;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #3a4159;

  text-align: center;
  letter-spacing: 0.2px;

  white-space: nowrap;

  background: none;

  &:hover {
    /* font-weight: 700; */
    color: #5a75cb;
    border: 2px solid #5a75cb;
  }

  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
