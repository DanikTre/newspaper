import styled from "styled-components";
import defaultAvatarImg from "../user copy.png";

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
  height: 33px;
  width: 33px;
  border-radius: 32px;
  user-select: none;

  &:hover {
    box-shadow: 1px 1px 10px #a19d9d;
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

  color: ${({ name }) => (name ? "#3a4159" : "#a19d9d")};

  border: none;
  &:hover {
    font-weight: ${({ name }) => (name ? "400" : "450")};
    text-shadow: ${({ name }) => (name ? "none" : "2px 8px 2px #e0e0e0")};
  }
`;

function AccountImgName({ avatarImg, name }) {
  return (
    <AccountImgNameWrapper>
      <AccountImg
        src={avatarImg !== undefined ? avatarImg : defaultAvatarImg}
        alt="Account Image"
      />
      <AccountName name={name}>
        {name !== "undefined undefined" ? name : "User"}
      </AccountName>
    </AccountImgNameWrapper>
  );
}

export default AccountImgName;
