import styled from "styled-components";
import LikeImage from "./components/LikeImage";

const LikeWrapper = styled.button`
  padding: 6px 0 0 0;
  display: flex;
  align-items: center;
  border: 0px;
  background: none;

  cursor: pointer;
`;

const LikeButtonTxt = styled.span`
  height: 14px;

  margin: 0 0 0px 8px;
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
      {likeCount && <LikeButtonTxt>{likeCount}</LikeButtonTxt>}
    </LikeWrapper>
  );
};
export default LikeButton;
