import styled from "styled-components";
import LogOutImg from "./LogOutImg";

const LogOutWrapper = styled.div`
  padding: 0 0 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;

  stroke: #3a4159;
  color: #3a4159;
  &:hover {
    stroke: #5a75cb;
    color: #5a75cb;
  }
`;

const LogOutTxt = styled.span`
  margin-right: 5px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
`;

function LogOutButton({ logOut }) {
  return (
    <LogOutWrapper onClick={logOut}>
      <LogOutTxt>Log Out</LogOutTxt>
      <LogOutImg />
    </LogOutWrapper>
  );
}

export default LogOutButton;
