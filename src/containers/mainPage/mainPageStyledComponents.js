import styled from "styled-components";

export const CenteredWrapper = styled.div`
  width: 87%;
  padding: 0 85px 100px 77px;

  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 48px;
`;

export const ColumnCardWrapper = styled.div`
  width: ${({ width }) => width};
  margin-right: ${(props) => props.margin};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
