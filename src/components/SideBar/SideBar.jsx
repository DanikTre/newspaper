import styled from "styled-components";
import NavBar from "./components/NavBar";
import AccountImgName from "./components/AccountImgName";
import LogOutButton from "./components/LogOutButton";
import { Link } from "react-router-dom";

const CenteredWrapper = styled.div`
  height: 100vh;
  width: 188px;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function SideBar({ avatarImg, name, logInState, logOut }) {
  return (
    <CenteredWrapper>
      <StyledLink to={!logInState && "/login"}>
        <AccountImgName avatarImg={avatarImg} name={name} />
      </StyledLink>
      <NavBar />
      <LogOutButton logOut={logOut} />
    </CenteredWrapper>
  );
}

export default SideBar;
