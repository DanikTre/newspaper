import styled from "styled-components";

const Wrapper = styled.div`
  height: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SettingsButton = styled.button`
  width: 102px;
  height: 52px;

  text-align: start;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;

  letter-spacing: 0.2px;

  color: #8f93a1;

  background: none;
  border: none;

  flex: none;
  order: 0;
  flex-grow: 0;
  /* margin: 12px 0 0 0; */

  cursor: pointer;
`;

const SavedPostsButton = styled.button`
  width: 102px;
  height: 52px;

  text-align: start;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;

  letter-spacing: 0.2px;

  color: #8f93a1;

  background: none;
  border: none;

  flex: none;
  order: 1;
  flex-grow: 0;
  /* margin: 12px 0 0 0; */

  cursor: pointer;
`;

const NewsButton = styled.button`
  width: 102px;
  height: 52px;

  text-align: start;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;

  letter-spacing: 0.2px;

  color: #8f93a1;

  background: none;
  border: none;

  flex: none;
  order: 1;
  flex-grow: 0;
  /* margin: 12px 0 0 0; */

  cursor: pointer;
`;

function NavBar({ logInUser }) {
  return (
    <Wrapper>
      <SettingsButton onClick={() => logInUser(0)}>Settings</SettingsButton>
      <SavedPostsButton onClick={() => logInUser(1)}>
        Saved Posts
      </SavedPostsButton>
      <NewsButton onClick={() => logInUser(2)}>News</NewsButton>
    </Wrapper>
  );
}

export default NavBar;
