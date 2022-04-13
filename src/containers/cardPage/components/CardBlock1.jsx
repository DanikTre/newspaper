import styled from "styled-components";

import LikeButton from "../../../components/likeButton/LikeButton";
import PageButton from "./PageButton";

import Img1 from "./assets/PageImg1.png";
import Img2 from "./assets/PageImg2.jpg";
import Img3 from "./assets/PageImg3.jpg";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  padding: 0 0 80px 0;
`;

const RowInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const PageTxt = styled.h1`
  width: 526px;
  height: 128px;
  left: 0px;
  margin: 0 0 15px 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 66px;

  letter-spacing: 0.7px;

  color: #3a4159;
`;

const ButtonsRow = styled.div`
  width: 330px;
  margin: 0 0 72px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsRowTxt = styled.span`
  width: 124px;
  height: 22px;
  /* left: 78px;
top: 343px; */

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
  width: 487px;
  margin: 0 0 72px 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;

const RightSideDiv = styled.div``;

const Image1 = styled.img`
  width: 436px;
  height: 647px;
  border-radius: 10px;
  user-select: none;
`;

const Image2 = styled.img`
  width: 524px;
  border-radius: 10px;
  user-select: none;
`;

function CardBlock1({ handleLike, state, count }) {
  return (
    <InfoWrapper>
      <RowInfoWrapper>
        <LeftSideDiv>
          <PageTxt>Bruce Nauman: new video“le man”</PageTxt>
          <ButtonsRow>
            <ButtonsRowTxt>by Sam Dekker</ButtonsRowTxt>
            <LikeButtonWrapper>
              <LikeButton onClick={handleLike} state={state} count={count} />
            </LikeButtonWrapper>
            <PageButton />
          </ButtonsRow>
          <TextRow>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure.
          </TextRow>
          <TextRow>
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it?
          </TextRow>
        </LeftSideDiv>
        <RightSideDiv>
          <Image1 src={Img1} alt="Image1" />
        </RightSideDiv>
      </RowInfoWrapper>
      <RowInfoWrapper>
        <Image2 src={Img2} alt="Image2" />
        <TextRow>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </TextRow>
      </RowInfoWrapper>
      <RowInfoWrapper>
        <TextRow>
          Testing conducted by Apple in February 2022 using preproduction Mac
          Studio systems with Apple M1 Max with 10-core CPU and 32-core GPU, and
          preproduction Mac Studio systems with Apple M1 Ultra with 20-core CPU
          and 64-core GPU. Performance measured using select industry‑standard
          benchmarks. 10-core PC desktop CPU performance data from testing Core
          i5-12600K with DDR5 memory. 16-core PC desktop CPU performance data
          from testing Core i9-12900K with DDR5 memory. Performance tests are
          conducted using specific computer systems and reflect the approximate
          performance of Mac Studio.
        </TextRow>
        <Image2 src={Img3} alt="Image2" />
      </RowInfoWrapper>
    </InfoWrapper>
  );
}

export default CardBlock1;
