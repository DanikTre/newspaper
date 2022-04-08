import { useState } from "react";
import styled from "styled-components";
// import Stroke from "../components/Stroke.jsx";

const ButtonWrapper = styled.div`
  width: ${({ width }) => width || "114px"};
  position: relative;
  /* padding: 4px 0px 4px 0; */
`;

const SelectWrapper = styled.div`
  position: absolute;
  width: ${({ width }) => width || "114px"};
  top: 0;
  left: 0;

  z-index: 1000;
  white-space: nowrap;

  /* background-color: #fafafc; */
`;

const Select = styled.div`
  width: 100%;
  padding: 8px 36px 8px 16px;
  box-sizing: border-box;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  border: 1px solid #8f93a1;
  border-radius: 8px;

  text-align: start;
  letter-spacing: 0.2px;

  color: #3a4159;

  cursor: pointer;
  user-select: none;

  &:focus {
    outline: none;
  }

  &:after {
    position: absolute;
    content: "";
    top: ${({ active }) => (active ? "14px" : "10px")};
    right: 10px;
    border: solid #3a4159;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 4px;
    transform: ${({ active }) => (active ? "rotate(225deg)" : "rotate(45deg)")};
  }

  /* &:hover {
    background-color: #3a4159;
    color: white;
    border-radius: 7px;

    &:after {
      border: solid white;
      border-width: 0 1px 1px 0;
    }
  } */
`;

const Options = styled.div`
  width: 150px;
  margin: 10px 0 0 0;
  background: #ffffff;
  border-radius: 8px;

  /* position: absolute; */
  display: ${({ active }) => (active ? "block" : "none")};
`;

const Option = styled.div`
  /* width: 150px;
  height: 51px; */
  padding: 4px 16px 4px 16px;

  user-select: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: start;
  letter-spacing: 0.2px;

  color: #3a415991;

  cursor: pointer;
  /* background-color: #fafafc; */

  /* &:hover {
    background-color: #3a4159;
    border-radius: 7px;
    color: white;
  } */
`;

const GradientDiv = styled.div`
  bottom: 0px;
  position: absolute;
  height: 62px;
  width: ${({ width }) => width || "114px"};

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    #ffffff 100%
  );
`;

function TopicButton({ width, options, className }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0].value);
  const handleClick = (value) => {
    setSelected(value);
  };

  const handleSelectClick = () => {
    setOpened((value) => !value);
  };
  // console.log(selected);

  return (
    <ButtonWrapper className={className} width={width}>
      <SelectWrapper width={width}>
        <Select active={opened} onClick={handleSelectClick}>
          {options.find((item) => item.value === selected).name}
        </Select>
        <Options active={opened}>
          {options.map((item) => (
            <Option onClick={() => handleClick(item.value)}>{item.name}</Option>
          ))}
          <GradientDiv width={width} />
        </Options>
      </SelectWrapper>
    </ButtonWrapper>
  );
}

export default TopicButton;
