import styled from "styled-components";
import Button from "../../../components/button/Button";

import ShowPasswordIcon1 from "./assets/show-password-icon-eye-symbol-vector-vision-hide-from-watch-icon-secret-view-web-design-element_87543-8293 copy2.jpg";
import ShowPasswordIcon2 from "./assets/show-password-icon-eye-symbol-vector-vision-hide-from-watch-icon-secret-view-web-design-element_87543-8293 copy.jpg";

// import stockAvatarImg from "../../../components/SideBar/24-248253_user-profile-default-image-png-clipart-png-download.png";

const LogInBoxWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid #dadce0;
  /* margin-bottom: 80px; */
  /* box-shadow: 0px 3px 2px #828282; */
`;

const LogInBoxCenteredWrapper = styled.div`
  /* width: 368px; */
  /* height: 416px; */

  padding: 50px 50px 46px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;
const LogoAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const H2Text = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 83%;

  letter-spacing: 0.7px;

  color: #3a4159;

  user-select: none;
`;

const AccountImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 32px;
  user-select: none;
  box-shadow: 0px 4px 6px #828282;
`;

const InfoText = styled.span`
  margin-top: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  letter-spacing: 0.7px;

  color: #3a4159;
`;

const NameInputWrapper = styled.div`
  margin-top: 30px;
  width: 350px;

  display: flex;
  align-items: center;

  border: 1px solid #8f93a1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const NameInput = styled.input`
  margin-left: 10px;

  width: 95%;
  height: 50px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;

  letter-spacing: 0.2px;
  border: none;
  border-bottom: ${({ emailTextAreaBorderState }) =>
    emailTextAreaBorderState ? "1px dashed red" : "none"};
  background: none;

  ::placeholder {
    color: #cbced8;
    user-select: none;
  }
  color: #3a415991;
  outline: none;
`;

const ShowPassImage = styled.img`
  margin-right: 8px;
  height: 20px;
  width: 20px;

  border: none;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ForgotEmailText = styled.span`
  margin-top: 8px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  letter-spacing: 0.2px;
  color: #5a75cb;

  &:hover {
    font-weight: 500;
  }
  cursor: pointer;
`;

const ButtonsWrap = styled.div`
  margin-top: 40px;
  height: 34px;
  width: 350px;
  display: flex;
  justify-content: space-between;
`;

const StyledNameInput = styled(NameInput)`
  border-bottom: ${({ passwordTextAreaBorderState }) =>
    passwordTextAreaBorderState ? "1px dashed red" : "none"};
`;

const LogInBox = ({
  logIn,
  preLogInUser,
  updateEmailTextLogIn,
  updatePassTextLogIn,
  nextButtonPressLogIn,
  backButtonPressLogIn,
  showPasswordToggle,
}) => {
  const onEmailTextChange = (e) => {
    let text = e.target.value;
    updateEmailTextLogIn(text);
  };
  const onPassTextChange = (e) => {
    let text = e.target.value;
    updatePassTextLogIn(text);
  };

  const onEnterEmailText = (e) => {
    if (e.key === "Enter") {
      nextButtonPressLogIn();
    }
  };
  const onEnterPassText = (e) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <LogInBoxWrapper>
      <LogInBoxCenteredWrapper>
        <LogoAvatarWrapper>
          <H2Text>Sign In</H2Text>
          {preLogInUser.avatarImg && (
            <AccountImg src={preLogInUser.avatarImg} alt="Account Image" />
          )}
        </LogoAvatarWrapper>
        {logIn.emailState && <InfoText>Hi, {preLogInUser.firstName}</InfoText>}
        <NameInputWrapper>
          <NameInput
            type="text"
            spellcheck="false"
            placeholder="  Name or Email"
            onChange={onEmailTextChange}
            value={logIn.emailText}
            onKeyUp={onEnterEmailText}
            emailTextAreaBorderState={logIn.emailTextAreaBorderState}
          />
        </NameInputWrapper>
        {logIn.emailState && (
          <NameInputWrapper>
            <StyledNameInput
              type={logIn.showPasswordState ? "password" : "text"}
              spellcheck="false"
              placeholder="  Password"
              onChange={onPassTextChange}
              value={logIn.passwordText}
              onKeyUp={onEnterPassText}
              passwordTextAreaBorderState={logIn.passwordTextAreaBorderState}
            />
            <ShowPassImage
              src={
                logIn.showPasswordState ? ShowPasswordIcon1 : ShowPasswordIcon2
              }
              alt="Show Password Image"
              onClick={showPasswordToggle}
            />
          </NameInputWrapper>
        )}
        <ForgotEmailText>Forgot your Email?</ForgotEmailText>
        <ButtonsWrap>
          <Button onClick={backButtonPressLogIn}>
            {logIn.createAccountButtonText}
          </Button>
          <Button onClick={nextButtonPressLogIn}>{logIn.nextButtonText}</Button>
        </ButtonsWrap>
      </LogInBoxCenteredWrapper>
    </LogInBoxWrapper>
  );
};

export default LogInBox;
