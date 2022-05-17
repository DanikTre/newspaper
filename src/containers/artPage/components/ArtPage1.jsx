import styled from "styled-components";

import ArtPost from "./ArtPost";
import Creator from "./Creator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 48px;
`;

const PostsCreatorsWrapper = styled.div`
  margin: 88px 0 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const LWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RWrapper = styled(LWrapper)`
  border-left: 2px solid #cbced8;
`;

const CreatorsTxt = styled.h3`
  width: 368px;
  height: 15px;

  margin: 0 0 3vh 3vh;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 0.2px;

  color: #3a4159;
`;

function ArtPage1({ creatorsToFollow, handleFollow, artPosts, handleLike }) {
  const artPostsCopy = [...artPosts];
  const restArtPosts = artPostsCopy.splice(1);
  const firstArtPost = artPostsCopy;

  return (
    <Wrapper>
      {firstArtPost.map((i) => (
        <ArtPost
          key={i.id}
          PostImg={i.src}
          h1Text={i.h1}
          PostTxt={i.text}
          PostDate={i.date}
          PostBred={i.bred}
          handleLike={() => handleLike(i.id)}
          likeState={artPosts.find((post) => post.id === i.id).likeState}
          likeCount={artPosts.find((post) => post.id === i.id).likeCount}
        />
      ))}
      <PostsCreatorsWrapper>
        <LWrapper>
          {restArtPosts.map((i) => (
            <ArtPost
              key={i.id}
              margin="0 0 78px 0"
              PostImg={i.src}
              h1Text={i.h1}
              PostTxt={i.text}
              PostDate={i.date}
              PostBred={i.bred}
              handleLike={() => handleLike(i.id)}
              likeState={artPosts.find((post) => post.id === i.id).likeState}
              likeCount={artPosts.find((post) => post.id === i.id).likeCount}
            />
          ))}
        </LWrapper>
        <RWrapper>
          <CreatorsTxt>Creators to follow</CreatorsTxt>
          {creatorsToFollow.map((i) => (
            <Creator
              key={i.id}
              postImg={i.src}
              name={i.name}
              postTxt={i.text}
              followState={
                creatorsToFollow.find((follow) => follow.id === i.id)
                  .followState
              }
              handleFollow={() => handleFollow(i.id)}
            />
          ))}
        </RWrapper>
      </PostsCreatorsWrapper>
    </Wrapper>
  );
}

export default ArtPage1;
