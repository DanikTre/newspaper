import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../containers/header/Arrow";

const ArrowTxtWrapper = styled.div`
  max-width: 524px;
`;

const HeaderTxt = styled.span`
  display: inline;
  /* white-space: nowrap; */

  width: 634px;
  height: 33px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  font-size: ${({ fontSize }) => fontSize + "px"};
  line-height: 132%;

  letter-spacing: 0.7px;

  color: #3a4159;

  user-select: none;
`;

const ArrowWrapper = styled.div`
  /* margin-right: 20px; */
  width: 36px;
  position: relative;
  height: ${({ height }) => height + "px"};

  display: inline-block;
  cursor: pointer;

  &:hover {
  }
`;
const StyledLink = styled(Link)`
  position: absolute;
  top: 50%;
`;
const H1Text = ({
  children,
  linkTo,
  fontWeight,
  fontSize = 70,
  arrowdisplay,
}) => {
  return (
    <ArrowTxtWrapper>
      {arrowdisplay && (
        <ArrowWrapper width={fontSize} height={fontSize}>
          <StyledLink to={linkTo || "/"}>
            <Arrow />
          </StyledLink>
        </ArrowWrapper>
      )}
      <HeaderTxt fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </HeaderTxt>
    </ArrowTxtWrapper>
  );
};

export default H1Text;
