import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import styled from "styled-components";
import CloseOnClick from "../../features/clouseOnClick/CloseOnClick";

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

function SelectButton({ display, width, options, className, value, onChange }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0].id);
  // const handleClick = (value) => {
  //   setSelected(value);
  // };

  // const handleSelectClick = () => {
  //   setOpened(!value);
  // };

  const outsideHandler = () => {
    setOpened(false);
  };

  const onClickItems = (id) => {
    onChange(id);
    setOpened(!opened);
  };

  const selectedItem = options.find((i) => i.id === value);
  const hoveredItem = options.find((i) => i.id === selected);
  useEffect(() => {
    setSelected(value);
  }, [value]);

  const onKeyUp = (e) => {
    for (let i = 0; i < options.length; i++) {
      if (e.key === "ArrowDown") {
        if (options[i].id === hoveredItem?.value) {
          if (options[i + 1]) {
            setSelected(options[i + 1].id);
            return;
          }
        }
      }
      if (e.key === "ArrowUp") {
        if (options[i].id === hoveredItem?.value) {
          if (options[i - 1]) {
            setSelected(options[i - 1].id);
            return;
          }
        }
      }
      if (!selectedItem) {
        onChange(options[0].id);
      }
    }
    if (e.key === "Enter") {
      setOpened(false);
      onChange(selected);
    }
    if (e.key === "Escape") {
      setOpened(false);
    }
  };

  return (
    <CloseOnClick outsideHandler={outsideHandler}>
      <ButtonWrapper
        display={display}
        tabIndex={0}
        onKeyUp={onKeyUp}
        className={className}
        width={width}
      >
        <SelectWrapper width={width}>
          <Select active={opened} onClick={() => setOpened(!opened)}>
            {selectedItem && selectedItem.name}
            {/* {options.find((item) => item.value === selected).name} */}
          </Select>
          <Options active={opened}>
            {options.map((item) => (
              // <Link to={PATH.item.value}>
              <Option
                className={hoveredItem === item ? "selected" : ""}
                key={item.id}
                onMouseEnter={() => {
                  setSelected(item.id);
                }}
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
    </CloseOnClick>
  );
}

export default SelectButton;
