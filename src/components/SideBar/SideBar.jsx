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

  /* padding: 48px 0 80px 0; */
`;

function SideBar(props) {
  return (
    <CenteredWrapper>
      <AccountImgName src={props.src} name={props.name} />
      <NavBar />
      <LogOutButton />
    </CenteredWrapper>
  );
}

export default SideBar;
