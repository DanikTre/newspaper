import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../containers/header/Arrow";

const ArrowTxtWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const HeaderTxt = styled.span`
  display: ${({ txtdisplay }) => txtdisplay || "block"};
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 634px;
  height: 33px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 23%;

  letter-spacing: 0.7px;

  color: #3a4159;

  user-select: none;
`;

const ArrowWrapper = styled.div`
  margin-right: 20px;

  display: ${({ arrowdisplay }) => arrowdisplay || "none"};
  cursor: pointer;

  &:hover {
  }
`;
const H1Text = ({ children, LinkTo, txtdisplay, arrowdisplay }) => {
  return (
    <ArrowTxtWrapper>
      <ArrowWrapper arrowdisplay={arrowdisplay}>
        <Link to={LinkTo || "/"}>
          <Arrow />
        </Link>
      </ArrowWrapper>
      <HeaderTxt txtdisplay={txtdisplay}>{children}</HeaderTxt>
    </ArrowTxtWrapper>
  );
};

export default H1Text;
