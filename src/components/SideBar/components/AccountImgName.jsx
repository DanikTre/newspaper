import styled from "styled-components";
import stockAvatarImg from "../24-248253_user-profile-default-image-png-clipart-png-download.png";

const AccountImgNameWrapper = styled.div`
  width: 142px;
  height: 67px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 48px 0 0 0;
`;

const AccountImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  user-select: none;

  &:hover {
    box-shadow: 0px 2px 1px #828282;
  }
`;

const AccountName = styled.span`
  width: 142px;
  height: 21px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.2px;

  color: #3a4159;

  border: none;
  &:hover {
    font-weight: 450;
  }
`;

function AccountImgName({ avatarImg, name }) {
  return (
    <AccountImgNameWrapper>
      <AccountImg
        src={avatarImg !== undefined ? avatarImg : stockAvatarImg}
        alt="Account Image"
      />
      <AccountName>
        {name !== "undefined undefined" ? name : "User"}
      </AccountName>
    </AccountImgNameWrapper>
  );
}

export default AccountImgName;
