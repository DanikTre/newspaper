import styled from "styled-components";
import SearchBarIcon from "./SearchIcon.svg";

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 12px;
`;

const TxtLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SearchTxt = styled.input`
  width: 207px;
  margin-left: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  letter-spacing: 0.2px;

  border: none;
  background: none;

  ::placeholder {
    color: #cbced8;
    user-select: none;
  }
  color: #3a415991;
  outline: none;
`;

const Line = styled.div`
  width: 218px;
  border-bottom: 1px solid #cbced8;
  cursor: default;
`;

function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchIcon src={SearchBarIcon} alt="Search Icon" />
      <TxtLineWrapper>
        <SearchTxt type="text" placeholder="Search..." />
        <Line />
      </TxtLineWrapper>
    </SearchBarWrapper>
  );
}

export default SearchBar;
