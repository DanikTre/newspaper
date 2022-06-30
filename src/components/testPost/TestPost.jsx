import styled from "styled-components";

import LikeButton from "../likeButton/LikeButton";

const PostWrapper = styled.div`
  /* width: 100%; */

  margin: 0 0 0 0;
  padding: 24px 30px;

  display: flex;
  align-items: flex-start;

  box-shadow: 0px 3px 6px #bfbfbf;
  border-radius: 30px;
`;
const LWrapper = styled.div`
  width: 50%;
`;
const PostImage = styled.img`
  width: 100%;
  min-width: 150px;

  user-select: none;

  border-radius: 11px;
  box-shadow: 0px 3px 6px #bfbfbf;
`;

const RWrapper = styled.div`
  height: 100%;
  width: 50%;

  margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PostName = styled.h2`
  margin: 0 0 26px 0;
  max-width: 200px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;
const PostText = styled.span`
  margin: 0 0 38px 0;
  width: 100%;
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
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
`;
const ButtonsRow = styled.div`
  width: 50%;
  /* min-width: 200px; */

  gap: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ButtonsRowTxt = styled.span`
  /* height: 22px; */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #8f93a1;
`;
const LikeButtonWrapper = styled.div``;

function TestPost({
  postImg,
  postName,
  postText,
  postDate,
  postBred,
  likeState,
  likeCount,
  handleLike,
}) {
  return (
    <PostWrapper>
      <LWrapper>
        <PostImage src={postImg} alt="Post Image" />
      </LWrapper>
      <RWrapper>
        <PostName>{postName}</PostName>
        <PostText>{postText}</PostText>
        <ButtonsRow>
          <ButtonsRowTxt>{postDate}</ButtonsRowTxt>
          <ButtonsRowTxt>{postBred}</ButtonsRowTxt>
          <LikeButtonWrapper>
            <LikeButton
              likeState={likeState}
              likeCount={likeCount}
              handleLike={handleLike}
            />
          </LikeButtonWrapper>
        </ButtonsRow>
      </RWrapper>
    </PostWrapper>
  );
}

export default TestPost;
