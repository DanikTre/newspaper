// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import styled from "styled-components";

// import CloseOnClick from "../../features/clouseOnClick/CloseOnClick";

const ButtonWrapper = styled.div`
  display: ${({ display }) => display || "none"};
  width: ${({ width }) => width || "150px"};
  height: 32px;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const SelectWrapper = styled.div`
  position: absolute;
  width: ${({ width }) => width || "150px"};

  top: 0;
  left: 0;

  z-index: 1000;
  white-space: nowrap;
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
`;

const Options = styled.div`
  width: 150px;
  margin: 10px 0 0 0;
  background: #ffffff;
  border-radius: 8px;

  height: 255px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;

  display: ${({ active }) => (active ? "block" : "none")};
`;

const Option = styled.div`
  height: 50px;
  padding: 0px 16px 0px 16px;

  user-select: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #3a4159;

  cursor: pointer;

  &:hover,
  &.selected {
    background: #cbced8;
  }
`;

const GradientDiv = styled.div`
  bottom: 0px;
  position: absolute;
  height: 80px;
  width: ${({ width }) => width || "150px"};
  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    #ffffff 100%
  );
  border-radius: 8px;
`;

function SelectButton({
  display,
  width,
  options,
  className,
  selected,
  ChangeOption,
  opened,
  handleOpen,
}) {
  const onClickItems = (id) => {
    handleOpen();
    ChangeOption(id);
  };

  const selectedItem = options.find((i) => i.id === selected);
  const hoveredItem = options.find((i) => i.id === selected);

  return (
    <ButtonWrapper
      display={display}
      tabIndex={0}
      className={className}
      width={width}
    >
      <SelectWrapper width={width}>
        <Select active={opened} onClick={handleOpen}>
          {selectedItem && selectedItem.name}
          {/* {options.find((item) => item.value === selected).name} */}
        </Select>
        <Options active={opened}>
          {options.map((item) => (
            // <Link to={PATHS[item.id]}>
            <Option
              className={hoveredItem === item ? "selected" : ""}
              key={item.id}
              onClick={() => onClickItems(item.id)}
            >
              {item.name}
            </Option>
            // </Link>
          ))}
          <GradientDiv width={width} />
        </Options>
      </SelectWrapper>
    </ButtonWrapper>
  );
}

export default SelectButton;
