import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const StrokeButtonsWrapper = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;

  height: 100%;
  right: 245px;

  pointer-events: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StrokeButton1 = styled.div`
  &:after {
    content: "";
    border: solid #cbced8;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(225deg);
  }

  &:hover {
    &::after {
      border: solid #5a75cb;
      border-width: 0 1px 1px 0;
    }
  }

  cursor: pointer;
`;

const StrokeButton2 = styled.div`
  margin-top: 16px;

  &:after {
    content: "";
    border: solid #cbced8;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(45deg);
  }

  &:hover {
    &::after {
      border: solid #5a75cb;
      border-width: 0 1px 1px 0;
    }
  }
  pointer-events: visible;
  cursor: pointer;
`;

function StrokeButtons(props) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <StrokeButtonsWrapper>
      {isVisible && <StrokeButton1 onClick={scrollToTop} />}
      <StrokeButton2 />
    </StrokeButtonsWrapper>
  );
}

export default StrokeButtons;
