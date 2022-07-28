import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../../components/searchBar/SearchBar";
import SelectButton from "../../components/SelectButton/SelectButton";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 24px 0px 0;
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

const LogoTxt = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 113px;
  height: 10px;

  margin: 0 0 91px 5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 83%;

  letter-spacing: 0.7px;

  color: #3a4159;

  user-select: none;
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
  topicSelected,
  weekSelected,
  topicOpened,
  weekOpened,
  setOpened,
  handleSelectOption,
  updateSearchBarText,
  searchBarText,
  handleSearchClick,
  handleFilterCardsByTopic,
  handleFilterCardsByWeek,
}) {
  return (
    <HeaderWrapper>
      <LeftSideHeader>
        <Link to="/newspaper/main" style={{ textDecoration: "none" }}>
          <LogoTxt>DIALOGUE. online</LogoTxt>
        </Link>
        {/* <ArrowTxtWrapper>
          <ArrowWrapper arrowdisplay={arrowdisplay}>
            <Link to="/newspaper/main">
              <Arrow />
            </Link>
          </ArrowWrapper>
          <HeaderTxt txtdisplay={txtdisplay}>{headerText}</HeaderTxt>
        </ArrowTxtWrapper> */}
      </LeftSideHeader>
      <RightSideHeader>
        <SearchBar
          handleSearchBarNewText={updateSearchBarText}
          searchBarText={searchBarText}
          handleSearchClick={handleSearchClick}
        />
        <TopicThisWeekButtons>
          <StyledSelectButton
            display={SelectButtonsDisplay}
            options={topicOptions}
            selected={topicSelected}
            ChangeOption={(optionID) => {
              handleSelectOption("topicSelect", optionID);
              handleFilterCardsByTopic(optionID);
            }}
            opened={topicOpened}
            handleOpen={() => setOpened("topicSelect")}
          />
          <SelectButton
            display={SelectButtonsDisplay}
            width={"126px"}
            options={weekOptions}
            selected={weekSelected}
            ChangeOption={(optionID) => {
              handleSelectOption("weekSelect", optionID);
              handleFilterCardsByWeek(optionID);
            }}
            opened={weekOpened}
            handleOpen={() => setOpened("weekSelect")}
          />
        </TopicThisWeekButtons>
      </RightSideHeader>
    </HeaderWrapper>
  );
}

export default Header;
