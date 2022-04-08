import styled from "styled-components";

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
`;

function AccountImgName(props) {
  return (
    <AccountImgNameWrapper>
      <AccountImg src={props.src} alt="Account Image" />
      <AccountName>{props.name}</AccountName>
    </AccountImgNameWrapper>
  );
}

export default AccountImgName;
