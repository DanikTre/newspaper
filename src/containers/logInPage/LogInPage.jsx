import styled from "styled-components";
import LogInBox from "./components/LogInBox";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0;
`;

const LogInPage = ({
  logIn,
  preLogInUser,
  updateEmailTextLogIn,
  nextButtonPressLogIn,
  backButtonPressLogIn,
  updatePassTextLogIn,
  showPasswordToggle,
}) => {
  return (
    <PageWrapper>
      <LogInBox
        logIn={logIn}
        preLogInUser={preLogInUser}
        updateEmailTextLogIn={updateEmailTextLogIn}
        nextButtonPressLogIn={nextButtonPressLogIn}
        backButtonPressLogIn={backButtonPressLogIn}
        updatePassTextLogIn={updatePassTextLogIn}
        showPasswordToggle={showPasswordToggle}
      />
    </PageWrapper>
  );
};

export default LogInPage;
