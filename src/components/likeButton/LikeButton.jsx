import styled from "styled-components";
import LikeImage from "./components/LikeImage";

const LikeWrapper = styled.button`
  display: flex;
  align-items: center;
  border: 0px;
  background: none;

  cursor: pointer;
`;

const LikeButtonTxt = styled.span`
  width: 49px;
  height: 14px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.2px;

  color: #8f93a1;
`;

const LikeButton = ({ likeState, likeCount, handleLike }) => {
  return (
    <LikeWrapper onClick={handleLike}>
      <LikeImage liked={likeState} />
      <LikeButtonTxt>{likeCount}</LikeButtonTxt>
    </LikeWrapper>
  );
};
export default LikeButton;
