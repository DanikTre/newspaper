import styled from "styled-components";
import NavBar from "./components/NavBar";
import AccountImgName from "./components/AccountImgName";
import LogOutButton from "./components/LogOutButton";

const CenteredWrapper = styled.div`
  height: 100vh;
  width: 188px;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function SideBar({ avatarImg, name, logOutUser, logInUser }) {
  return (
    <CenteredWrapper>
      <AccountImgName avatarImg={avatarImg} name={name} />
      <NavBar logInUser={logInUser} />
      <LogOutButton logOutUser={logOutUser} />
    </CenteredWrapper>
  );
}

export default SideBar;
