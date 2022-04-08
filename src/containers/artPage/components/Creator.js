import styled from "styled-components";

import FollowButton from "../../../components/followButton/FollowButton";

const PostWrapper = styled.div`
  width: 400px;
  margin: 0 0 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image1 = styled.img`
  width: 50px;
  margin-right: 18px;
  border-radius: 25px;
`;

const PageTxt = styled.span`
  margin: 16px 0 2px 0;
  width: 200px;
  height: 23px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;

const TextRow = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #8f93a1;
`;

const CenterDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const RightSideDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Creator({
  PostImg,
  Name,
  PostTxt,
  PostDate,
  PostBred,
  handleClick,
  count,
}) {
  return (
    <PostWrapper>
      <Image1 src={PostImg} alt="Post Image" />
      <CenterDiv>
        <PageTxt>{Name}</PageTxt>
        <TextRow>{PostTxt}</TextRow>
      </CenterDiv>
      <RightSideDiv>
        <FollowButton />
      </RightSideDiv>
    </PostWrapper>
  );
}

export default Creator;
