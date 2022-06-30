import styled from "styled-components";

// Page Centered Wrapper
const PageCenteredWrap = styled.div`
  width: calc(100% - 162px);
  padding: 45px 85px 100px 77px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: none;
`;
export const PageCenteredWrapper = ({ children, className }) => {
  return <PageCenteredWrap className={className}>{children}</PageCenteredWrap>;
};

// LR Wrapper
const LRWrapp = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
`;
export const LRWrapper = ({ children, className }) => {
  return <LRWrapp className={className}>{children}</LRWrapp>;
};

// OneSide (L/R) Column Wrapper
const OneSideColumnWrapp = styled.div`
  /* width: 50%; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const OneSideColumnWrapper = ({ children, className }) => {
  return (
    <OneSideColumnWrapp className={className}>{children}</OneSideColumnWrapp>
  );
};
