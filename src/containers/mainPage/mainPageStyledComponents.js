import styled from "styled-components";

export const CenteredWrapper = styled.div`
  width: 87%;
  padding: 45px 85px 100px 77px;

  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: center;
  margin-top: 48px;
`;

export const ColumnCardWrapper = styled.div`
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap || "20px"};
  margin-right: ${(props) => props.margin};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
