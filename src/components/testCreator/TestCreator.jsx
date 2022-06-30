import styled from "styled-components";

import FollowButton from "../followButton/FollowButton";

const CreatorWrapper = styled.div`
  /* width: 100%; */

  margin: 30px 0 0 0;
  padding: 24px 30px;

  display: flex;
  align-items: flex-start;

  box-shadow: 0px 3px 6px #bfbfbf;
  border-radius: 30px;
`;
const LWrapper = styled.div`
  width: 50%;
`;
const CreatorImage = styled.img`
  margin: 0;
  width: 100%;
  min-width: 30px;

  user-select: none;

  border-radius: 100px;
  box-shadow: 0px 3px 6px #bfbfbf;
`;

const CWrapper = styled.div`
  height: 100%;
  /* width: 30%; */

  margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreatorName = styled.h2`
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
const CreatorText = styled.span`
  margin: 0 0 38px 0;
  width: 100%;
  min-width: 100px;

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
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const RWrapper = styled.div`
  height: 100%;
  width: 30%;

  margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TestCreator = ({
  creatorImg,
  creatorName,
  creatorText,
  followState,
  followCount,
  handleFollow,
}) => {
  return (
    <CreatorWrapper>
      <LWrapper>
        <CreatorImage src={creatorImg} alt="Creator Image" />
      </LWrapper>
      <CWrapper>
        <CreatorName>{creatorName}</CreatorName>
        <CreatorText>{creatorText}</CreatorText>{" "}
      </CWrapper>
      <RWrapper>
        <FollowButton
          followState={followState}
          followCount={followCount}
          handleFollow={handleFollow}
        />
      </RWrapper>
    </CreatorWrapper>
  );
};

export default TestCreator;
