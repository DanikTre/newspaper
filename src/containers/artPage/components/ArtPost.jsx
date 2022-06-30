import styled from "styled-components";

import LikeButton from "../../../components/likeButton/LikeButton";

const PostWrapper = styled.div`
  /* width: 100%; */
  margin: ${({ margin }) => margin || "0"};
  padding: 24px 30px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  box-shadow: 0px 3px 6px #bfbfbf;
  border-radius: 30px;
`;

const LeftSideDiv = styled.div`
  width: 50%;
  margin-right: 25px;
`;

const Image1 = styled.img`
  max-width: 100%;
  min-width: 150px;
  border-radius: 11px;
  user-select: none;

  box-shadow: 0px 3px 6px #bfbfbf;
`;

const PageTxt = styled.span`
  margin-bottom: 26px;
  max-width: 200px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

const ButtonsRowTxt = styled.span`
  height: 22px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #8f93a1;
`;

const LikeButtonWrapper = styled.div``;

const TextRow = styled.div`
  margin: 0 0 38px 0;
  max-width: 100%;
  min-width: 200px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #3a4159;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
`;

const RightSideDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

function ArtPost({
  PostImg,
  h1Text,
  PostTxt,
  PostDate,
  PostBred,
  likeState,
  likeCount,
  handleLike,
  margin,
}) {
  return (
    <PostWrapper margin={margin}>
      <LeftSideDiv>
        <Image1 src={PostImg} alt="Post Image" />
      </LeftSideDiv>
      <RightSideDiv>
        <PageTxt>{h1Text}</PageTxt>
        <TextRow>{PostTxt}</TextRow>
        <ButtonsRow>
          <ButtonsRowTxt>{PostDate}</ButtonsRowTxt>
          <ButtonsRowTxt>{PostBred}</ButtonsRowTxt>
          <LikeButtonWrapper>
            <LikeButton
              likeState={likeState}
              likeCount={likeCount}
              handleLike={handleLike}
            />
          </LikeButtonWrapper>
        </ButtonsRow>
      </RightSideDiv>
    </PostWrapper>
  );
}

export default ArtPost;
