// import { useState } from "react";
import styled from "styled-components";

const FollowWrapper = styled.button`
  height: 32px;
  width: 86px;

  align-items: center;

  border: 1px solid #27ae60;
  border-radius: 8px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.2px;

  color: ${({ followed }) => (followed ? "white" : "#27AE60")};
  background: ${({ followed }) => (followed ? "#27AE60" : "none")};

  cursor: pointer;
  user-select: none;
`;

const FollowButton = ({ followState, handleFollow }) => {
  // const [followed, setFollowed] = useState(false);
  // const handleClick = () => {
  //   setFollowed((value) => !value);
  // };

  return (
    <FollowWrapper onClick={handleFollow} followed={followState}>
      {followState ? "Followed" : "Follow"}
    </FollowWrapper>
  );
};
export default FollowButton;
