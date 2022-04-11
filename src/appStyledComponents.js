import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  overflow: hidden;

  background: #fafafc;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LeftSideWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  /* padding-right: 188px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }

  padding-top: 46px;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  border-left: 1px solid #c4c4c4;

  box-sizing: border-box;
  background: #ffffff;
`;
