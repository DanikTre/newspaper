import { LeftSideCenteredWrapper } from "./artStyledComponents";

import Header from "../../components/header/Header";
import ArtPage1 from "./components/ArtPage1";

function CardPage({
  options1,
  value1,
  onChange1,
  options2,
  value2,
  onChange2,
}) {
  return (
    <LeftSideCenteredWrapper>
      <Header
        headerText="Art"
        txtdisplay="block"
        arrowdisplay="block"
        options1={options1}
        value1={value1}
        onChange1={onChange1}
        options2={options2}
        value2={value2}
        onChange2={onChange2}
      ></Header>
      <ArtPage1 />
    </LeftSideCenteredWrapper>
  );
}

export default CardPage;
