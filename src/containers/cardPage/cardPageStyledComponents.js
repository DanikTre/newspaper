import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  position: absolute;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: scroll;

  background: #fafafc;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LeftSideWrapper = styled.div`
  width: 100%;
  margin-right: 188px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-top: 46px;
`;

export const LeftSideCenteredWrapper = styled.div`
  position: relative;
  width: calc(100% - 188px);
  padding: 45px 85px 0 77px;
  /* width: 90%; */

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RowInfoWrapper = styled.div`
  width: ${({ width }) => width};
  margin-right: ${(props) => props.margin};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 2000;
  top: 0;
  width: 188px;
  height: 100%;
  right: 0px;

  border-left: 1px solid #c4c4c4;

  box-sizing: border-box;
  background: #ffffff;
`;
