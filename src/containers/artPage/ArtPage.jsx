import HeaderContainer from "../header/HeaderContainer";
import { LeftSideCenteredWrapper } from "./artStyledComponents";

import ArtPage1 from "./components/ArtPage1";

function ArtPage({ creatorsToFollow, artPosts, handleLike, handleFollow }) {
  return (
    <LeftSideCenteredWrapper>
      <HeaderContainer
        SelectButtonsDisplay="block"
        headerText="Art"
        txtdisplay="block"
        arrowdisplay="block"
      ></HeaderContainer>
      <ArtPage1
        artPosts={artPosts}
        handleLike={handleLike}
        creatorsToFollow={creatorsToFollow}
        handleFollow={handleFollow}
      />
    </LeftSideCenteredWrapper>
  );
}

export default ArtPage;
