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
  margin: 74px 0 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const LWrapper = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-right: 30px;
`;

const RWrapper = styled(LWrapper)`
  width: calc(40% - 60px);
  padding-right: 0;

  border-left: 2px solid #cbced8;
  flex: 1;
`;
const RInsideWrapper = styled(LWrapper)`
  width: calc(100% - 30px);
  min-width: 170px;

  padding-left: 30px;
  padding-right: 0;

  flex: 1;
`;

const CreatorsTxt = styled.h3`
  width: calc(100% - 32px);
  max-width: 300px;
  min-width: 180px;

  height: 30px;

  margin-bottom: 30px;
  padding: 4px 16px;

  text-align: center;

  box-shadow: 0px 3px 6px #bfbfbf;
  border-radius: 26px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

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
              margin="0 0 70px 0"
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
          <RInsideWrapper>
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
          </RInsideWrapper>
        </RWrapper>
      </PostsCreatorsWrapper>
    </Wrapper>
  );
}

export default ArtPage1;
