import { useState } from "react";

import { LeftSideCenteredWrapper } from "./artStyledComponents";

import Header from "../../components/header/Header";
import ArtPage1 from "./components/ArtPage1";

function CardPage({ cardList, creatorsToFollow }) {
  const defaultFollowState = cardList.map((follow) => ({
    id: follow.value,
    state: follow.state,
  }));
  const [followState, setFollowState] = useState(defaultFollowState);
  const handleFollow = (id) => {
    // debugger;
    setFollowState((currentFollowState) => {
      const index = currentFollowState.findIndex((el) => el.id === id);
      const copy = [...currentFollowState];
      copy[index].state = !copy[index].state;
      return copy;
    });
  };

  return (
    <LeftSideCenteredWrapper>
      <Header headerText="Art" txtdisplay="block" arrowdisplay="block"></Header>
      <ArtPage1
        creatorsToFollow={creatorsToFollow}
        followState={followState}
        handleFollow={handleFollow}
      />
    </LeftSideCenteredWrapper>
  );
}

export default CardPage;
