import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "../searchBar/SearchBar";
import SelectButton from "../SelectButton/SelectButton";
import Arrow from "./Arrow";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 24px 48px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const LeftSideHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const ArrowTxtWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const LogoTxt = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 113px;
  height: 10px;

  margin-bottom: 91px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 83%;

  letter-spacing: 0.7px;

  color: #3a4159;

  user-select: none;
`;

const HeaderTxt = styled.span`
  display: ${({ txtdisplay }) => txtdisplay || "block"};
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 634px;
  height: 33px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 23%;

  letter-spacing: 0.7px;

  color: #3a4159;

  user-select: none;
`;

const ArrowWrapper = styled.div`
  margin-right: 20px;

  display: ${({ arrowdisplay }) => arrowdisplay || "none"};
  cursor: pointer;

  &:hover {
  }
`;

const RightSideHeader = styled.div`
  height: 100%;

  /* padding-right: 85px; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const TopicThisWeekButtons = styled.div`
  position: relative;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// require className prop to work!!!
const StyledSelectButton = styled(SelectButton)`
  margin: 0 23px 0 0;
`;

function Header({
  headerText,
  arrowdisplay,
  txtdisplay,
  SelectButtonsDisplay,
  topicOptions,
  weekOptions,
  value1,
  value2,
  handleTopicSelect,
  handleWeekSelect,
}) {
  console.log(value1);
  return (
    <HeaderWrapper>
      <LeftSideHeader>
        <Link to="/main" style={{ textDecoration: "none" }}>
          <LogoTxt>DIALOGUE. online</LogoTxt>
        </Link>
        <ArrowTxtWrapper>
          <ArrowWrapper arrowdisplay={arrowdisplay}>
            <Link to="/main">
              <Arrow />
            </Link>
          </ArrowWrapper>
          <HeaderTxt txtdisplay={txtdisplay}>{headerText}</HeaderTxt>
        </ArrowTxtWrapper>
      </LeftSideHeader>
      <RightSideHeader>
        <SearchBar />
        <TopicThisWeekButtons>
          <StyledSelectButton
            display={SelectButtonsDisplay}
            options={topicOptions}
            value={value1}
            onChange={handleTopicSelect}
          />
          <SelectButton
            display={SelectButtonsDisplay}
            width={"126px"}
            options={weekOptions}
            value={value2}
            onChange={handleWeekSelect}
          />
        </TopicThisWeekButtons>
      </RightSideHeader>
    </HeaderWrapper>
  );
}

export default Header;
