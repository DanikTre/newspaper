import styled from "styled-components";

import ArtPost from "./ArtPost";
import Creator from "./Creator";

import PostImg1 from "./assets/Img1.png";
import PostImg2 from "./assets/Img2.png";
import PostImg3 from "./assets/Img3.jpg";
import AvatarImg2 from "./assets/AvatarImg2.png";
import AvatarImg3 from "./assets/AvatarImg3.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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

function ArtPage1() {
  return (
    <Wrapper>
      <ArtPost
        PostImg={PostImg1}
        h1Text="Explain to you"
        PostTxt="But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. But I
          must explain to you how all this mistaken idea of denouncing pleasure
          and praising pain was born and I will give you a complete account of
          the system, and expound the actual teachings of the great explorer of
          the truth, the master-builder of human happiness."
        PostDate="Sep 15"
        PostBred="11 min read"
      />
      <PostsCreatorsWrapper>
        <LWrapper>
          <ArtPost
            PostImg={PostImg2}
            h1Text="Brat, no ne drug"
            PostTxt="Mac Studio is an entirely new Mac desktop. And it all starts with your choice of the ferociously fast M1 Max or the all-new M1 Ultra — the most powerful chip ever in a personal computer."
            PostDate="Mar 02"
            PostBred="34 min read"
            margin="0 0 78px 0"
          />
          <ArtPost
            PostImg={PostImg3}
            h1Text="Drug, no ne SWAT"
            PostTxt="Simply good people"
            PostDate="Jan 21"
            PostBred="2 min read"
          />
        </LWrapper>
        <RWrapper>
          <Creator
            PostImg={AvatarImg2}
            Name="Harley Spector"
            PostTxt="The master-builder of human happiness... "
          />
          <Creator
            PostImg={AvatarImg2}
            Name="Lashped Volfovich"
            PostTxt="The master-durilder of human society... "
          />
          <Creator
            PostImg={AvatarImg3}
            Name="Harley Devidson"
            PostTxt="The master-chef of motor happiness... "
          />
        </RWrapper>
      </PostsCreatorsWrapper>
    </Wrapper>
  );
}

export default ArtPage1;
