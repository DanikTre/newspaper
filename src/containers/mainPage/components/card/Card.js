import styled from "styled-components";
import ReadMoreButton from "../../../../components/readMoreButton/ReadMoreButton";
import LikeButton from "../../../../components/likeButton/LikeButton";
import { Link } from "react-router-dom";
import { getPath, injectPathParams, VIEW } from "../../../../routes/paths";

const CardWrapper = styled.div`
  /* width: ${(props) => props.width}; */
  width: 100%;
  margin-bottom: ${(props) => props.margin};
  /* margin: 0 24px 24px 0; */

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

function Card(props) {
  return (
    <CardWrapper
      className={props.className}
      width={props.width}
      margin={props.margin}
    >
      <Link
        to={injectPathParams(getPath(VIEW.CARD), { id: props.value })}
        style={{ textDecoration: "none" }}
      >
        <Card1Img src={props.src} alt="Card Image" />
      </Link>
      <InsideCardWrapper>
        <Card1Txt>{props.name}</Card1Txt>
        <ButtonLikeWrapper>
          <Link
            to={injectPathParams(getPath(VIEW.CARD), { id: props.value })}
            style={{ textDecoration: "none" }}
          >
            <ReadMoreButton>Read this</ReadMoreButton>
          </Link>
          <LikeButton state={props.state} handleLike={props.handleLike} />
        </ButtonLikeWrapper>
      </InsideCardWrapper>
    </CardWrapper>
  );
}

export default Card;
