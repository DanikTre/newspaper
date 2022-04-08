import styled from "styled-components";

import LikeButton from "../../../components/likeButton/LikeButton";

const PostWrapper = styled.div`
  width: 100%;
  margin: ${({ margin }) => margin || "0"};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const LeftSideDiv = styled.div`
  width: 50%;
  margin-right: 25px;
`;

const Image1 = styled.img`
  width: 100%;
  border-radius: 11px;
  user-select: none;
`;

const PageTxt = styled.span`
  margin-bottom: 26px;
  width: 197px;
  height: 23px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;

const ButtonsRow = styled.div`
  width: 330px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 100%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #3a4159;
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
  handleClick,
  count,
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
            <LikeButton onClick={handleClick} />
          </LikeButtonWrapper>
        </ButtonsRow>
      </RightSideDiv>
    </PostWrapper>
  );
}

export default ArtPost;
