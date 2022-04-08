import { LeftSideCenteredWrapper } from "./cardPageStyledComponents";

import Header from "../../components/header/Header";
import CardBlock1 from "./components/CardBlock1";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";
import { useParams } from "react-router-dom";

function CardPage({
  headerText,
  options1,
  value1,
  onChange1,
  options2,
  value2,
  onChange2,
}) {
  //
  const params = useParams();
  console.log(params);
  //
  //
  //
  return (
    <LeftSideCenteredWrapper>
      <Header
        arrowdisplay="block"
        options1={options1}
        value1={value1}
        onChange1={onChange1}
        options2={options2}
        value2={value2}
        onChange2={onChange2}
      ></Header>
      <CardBlock1 />
      <StrokeButtons />
    </LeftSideCenteredWrapper>
  );
}

export default CardPage;
