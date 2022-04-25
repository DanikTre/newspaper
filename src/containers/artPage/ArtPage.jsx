import { LeftSideCenteredWrapper } from "./artStyledComponents";

import Header from "../../components/header/Header";
import ArtPage1 from "./components/ArtPage1";
import { useLikeFunctionality } from "../mainPage/useLikeFunctionality";
import { useFollowFunctionality } from "./useFollowFunctionality";

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
  const [likeState, handleLike] = useLikeFunctionality(artPosts);
  const [followState, handleFollow] = useFollowFunctionality(creatorsToFollow);

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
        creatorsToFollow={creatorsToFollow}
        followState={followState}
        handleFollow={handleFollow}
      />
    </LeftSideCenteredWrapper>
  );
}

export default ArtPage;
