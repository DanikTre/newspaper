import { useState } from "react";

import { LeftSideCenteredWrapper } from "./artStyledComponents";

import Header from "../../components/header/Header";
import ArtPage1 from "./components/ArtPage1";

function ArtPage({
  creatorsToFollow,
  value1,
  setValue1,
  value2,
  setValue2,
  topicOptions,
  weekOptions,
  artPosts,
}) {
  const defaultLikeState = artPosts.map((artPost) => ({
    id: artPost.value,
    state: artPost.state,
    count: artPost.count,
  }));

  const [likeState, setLikeState] = useState(defaultLikeState);
  const [likeCount, setLikeCount] = useState(defaultLikeState);
  debugger;
  const handleLike = (id) => {
    setLikeState((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      const copy = [...currentState];
      copy[index].state = !copy[index].state;
      return copy;
    });
    setLikeCount((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      const copy = [...currentState];
      if (!copy[index].state) {
        copy[index].count = copy[index].count++;
      } else {
        copy[index].count = copy[index].count--;
      }
      return copy;
    });
  };

  const defaultFollowState = creatorsToFollow.map((follow) => ({
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
      <Header
        headerText="Art"
        txtdisplay="block"
        arrowdisplay="block"
        topicOptions={topicOptions}
        weekOptions={weekOptions}
        options1=""
        value1={value1}
        onChange1={setValue1}
        options2=""
        value2={value2}
        onChange2={setValue2}
      ></Header>
      <ArtPage1
        artPosts={artPosts}
        handleLike={handleLike}
        likeState={likeState}
        likeCount={likeCount}
        creatorsToFollow={creatorsToFollow}
        followState={followState}
        handleFollow={handleFollow}
      />
    </LeftSideCenteredWrapper>
  );
}

export default ArtPage;
