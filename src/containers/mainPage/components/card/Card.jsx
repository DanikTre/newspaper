import { Link } from "react-router-dom";
import { getPath, injectPathParams, VIEW } from "../../../../routes/paths";

import styled from "styled-components";
import ReadMoreButton from "../../../../components/readMoreButton/ReadMoreButton";
import LikeButton from "../../../../components/likeButton/LikeButton";

const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ margin }) => margin || "24px"};

  box-shadow: 0px 4px 8px #828282;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Card1Img = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const InsideCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px 24px 19px 23px;
`;

const Card1Txt = styled.span`
  width: 240px;
  height: 23px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 128%;
  letter-spacing: 0.2px;
  white-space: nowrap;

  color: #1c1c28;
`;

const ButtonLikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 13px;
`;

function Card({
  className,
  width,
  margin,
  id,
  src,
  name,
  likeState,
  likeCount,
  handleLike,
}) {
  return (
    <CardWrapper className={className} width={width} margin={margin}>
      <Link
        to={injectPathParams(getPath(VIEW.CARD), { id })}
        style={{ textDecoration: "none" }}
      >
        <Card1Img src={src} alt="Card Image" />
      </Link>
      <InsideCardWrapper>
        <Card1Txt>{name}</Card1Txt>
        <ButtonLikeWrapper>
          <Link
            to={injectPathParams(getPath(VIEW.CARD), { id })}
            style={{ textDecoration: "none" }}
          >
            <ReadMoreButton>Read this</ReadMoreButton>
          </Link>
          <LikeButton
            likeState={likeState}
            likeCount={likeCount}
            handleLike={handleLike}
          />
        </ButtonLikeWrapper>
      </InsideCardWrapper>
    </CardWrapper>
  );
}

export default Card;
