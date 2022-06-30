import H1Text from "../../components/h1/H1Text";
import {
  LRWrapper,
  OneSideColumnWrapper,
  PageCenteredWrapper,
} from "../../components/Wrappers/Wrappers";
import HeaderContainer from "../header/HeaderContainer";
import TestPost from "../../components/testPost/TestPost";
import { deepCopy } from "../../utils/deepCopy";
import styled from "styled-components";
import TestCreator from "../../components/testCreator/TestCreator";

const StyledLRWrapper = styled(LRWrapper)`
  margin-top: 30px;
`;

const StyledLWrapper = styled(OneSideColumnWrapper)`
  width: calc(60% - 30px);
  margin: 0 30px 0 0;

  gap: 30px;
`;
const StyledRWrapper = styled(OneSideColumnWrapper)`
  width: 40%;
  border-left: 2px solid #cbced8;
`;

const TestCreators = styled.div`
  width: calc(100% - 30px);
  margin-left: 30px;
`;

const CreatorsH3 = styled.h3`
  max-width: 300px;
  min-width: 180px;

  height: 30px;

  margin: 0 0 30px 0;
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

const TestPage = ({ artPosts, creatorsToFollow, handleLike, handleFollow }) => {
  const artPostsCopy = deepCopy(artPosts);
  const restArtPosts = artPostsCopy.splice(1);
  const firstArtPost = artPostsCopy;
  return (
    <>
      <PageCenteredWrapper>
        <HeaderContainer
          SelectButtonsDisplay="block"
          headerText="Art"
          txtdisplay="block"
          arrowdisplay="block"
        ></HeaderContainer>
        <H1Text arrowdisplay="block">Art</H1Text>
        {firstArtPost.map((p) => (
          <TestPost
            key={p.id}
            postImg={p.src}
            postName={p.h1}
            postText={p.text}
            postDate={p.date}
            postBred={p.bred}
            handleLike={() => handleLike(p.id)}
            likeState={artPosts.find((post) => post.id === p.id).likeState}
            likeCount={artPosts.find((post) => post.id === p.id).likeCount}
          />
        ))}
        <StyledLRWrapper>
          <StyledLWrapper>
            {restArtPosts.map((p) => (
              <TestPost
                key={p.id}
                postImg={p.src}
                postName={p.h1}
                postText={p.text}
                postDate={p.date}
                postBred={p.bred}
                handleLike={() => handleLike(p.id)}
                likeState={artPosts.find((post) => post.id === p.id).likeState}
                likeCount={artPosts.find((post) => post.id === p.id).likeCount}
              />
            ))}
          </StyledLWrapper>
          <StyledRWrapper>
            <TestCreators>
              <CreatorsH3>Creators to follow</CreatorsH3>
              {creatorsToFollow.map((c) => (
                <TestCreator
                  key={c.id}
                  creatorImg={c.src}
                  creatorName={c.name}
                  creatorText={c.text}
                  followState={
                    creatorsToFollow.find((post) => post.id === c.id)
                      .followState
                  }
                  handleFollow={() => handleFollow(c.id)}
                />
              ))}
            </TestCreators>
          </StyledRWrapper>
        </StyledLRWrapper>
      </PageCenteredWrapper>
    </>
  );
};

export default TestPage;
