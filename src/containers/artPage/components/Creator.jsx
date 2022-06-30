import styled from "styled-components";

import FollowButton from "../../../components/followButton/FollowButton";

const PostWrapper = styled.div`
  margin-bottom: 12px;
  padding: 12px 24px;
  gap: 14px;

  width: calc(100% - 48px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  box-shadow: 0px 3px 6px #bfbfbf;
  border-radius: 26px;
`;

const Image1 = styled.img`
  min-width: 20px;
  max-width: 50px;
  border-radius: 25px;
`;

const PageTxt = styled.span`
  max-width: 200px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;

const TextRow = styled.div`
  max-width: fit-content;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #8f93a1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const RightSideDiv = styled.div`
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Creator({ postImg, name, postTxt, followState, handleFollow }) {
  return (
    <PostWrapper>
      <Image1 src={postImg} alt="Post Image" />
      <CenterDiv>
        <PageTxt>{name}</PageTxt>
        <TextRow>{postTxt}</TextRow>
      </CenterDiv>
      <RightSideDiv>
        <FollowButton followState={followState} handleFollow={handleFollow} />
      </RightSideDiv>
    </PostWrapper>
  );
}

export default Creator;
