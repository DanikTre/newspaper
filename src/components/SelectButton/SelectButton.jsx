import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { defaultProps } from "react-select/dist/declarations/src/Select";
import styled from "styled-components";
import CloseOnClick from "../../features/clouseOnClick/CloseOnClick";
import { PATH } from "../../App";

const ButtonWrapper = styled.div`
  width: ${({ width }) => width || "150px"};
  height: 32px;
  position: relative;
  /* padding: 4px 0px 4px 0; */

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

  /* padding: 16px 0 0 0; */

  height: 255px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;

  /* position: absolute; */
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

  /* background-e;
  } */
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

function SelectButton({ width, options, className, value, onChange }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0].value);
  // const handleClick = (value) => {
  //   setSelected(value);
  // };

  // const handleSelectClick = () => {
  //   setOpened(!value);
  // };

  const outsideHandler = () => {
    setOpened(false);
  };
  // console.log(selected);

  const onClickItems = (value) => {
    onChange(value);
    setOpened(!opened);
  };

  const selectedItem = options.find((i) => i.value === value);
  const hoveredItem = options.find((i) => i.value === selected);
  useEffect(() => {
    setSelected(value);
  }, [value]);

  const onKeyUp = (e) => {
    console.log(opened);
    for (let i = 0; i < options.length; i++) {
      if (e.key === "ArrowDown") {
        if (options[i].value === hoveredItem?.value) {
          if (options[i + 1]) {
            setSelected(options[i + 1].value);
            return;
          }
        }
      }
      if (e.key === "ArrowUp") {
        if (options[i].value === hoveredItem?.value) {
          if (options[i - 1]) {
            setSelected(options[i - 1].value);
            return;
          }
        }
      }
      if (!selectedItem) {
        onChange(options[0].value);
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
                key={item.value}
                onMouseEnter={() => {
                  setSelected(item.value);
                }}
                onClick={() => onClickItems(item.value)}
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
