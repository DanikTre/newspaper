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
    background-color: #3a4159;
    color: white;
  }

  cursor: pointer;
`;

function ReadMoreButton({ children }) {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}

export default ReadMoreButton;
