import styled, { keyframes } from 'styled-components';
import { PageWrapper } from 'components';
import aboutMe1 from '../../img/aboutMe/1.jpg';
// import SocialBtn from 'components/socialBtn';

const About = () => {
  return (
    <>
      <PageWrapper>
        <LeftPage>
          <Span>A</Span>
          <Span>b</Span>
          <Span>o</Span>
          <Span>u</Span>
          <Span>t</Span>
          <Span>&nbsp;</Span>
          <Span>m</Span>
          <Span>e</Span>
          <br />
          <Text>
            Hi, I am Olena Stepanchuk, a full stack web developer & mobile app
            developer.
          </Text>
          <Text>
            My skills are wide: HTML layout and styling, Java Script, React JS,
            Redux, Node.JS, React Native. I love every technology and love to
            build web and mobile apps from start to finish.
          </Text>
          <Text>
            I also have experience working in a team. It is very interesting and
            develops communication skills well.
          </Text>
          <Text>
            I am a hardworking and learnable person who is looking for a job in
            an IT company with the opportunity to develop new abilities and work
            with the latest technologies.
          </Text>
        </LeftPage>
        <RightPage>
          <MyPhoto src={aboutMe1} alt="photo me" />
        </RightPage>
      </PageWrapper>

      {/* <SocialBtn /> */}
    </>
  );
};
export default About;

const LeftPage = styled.div`
  padding: 10px 10px 0 10px;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    width: 512px;
    padding: 50px;
  }
`;

const RightPage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 10px 10px 10px;
  @media screen and (min-width: 1200px) {
    width: 512px;
    padding: 50px;
  }
`;
const animation = keyframes`
  10% {
		opacity: 1;
	}
	100% {
		transform: rotate(0deg) translate(0);
		opacity: 1;
	}
  `;
const Span = styled.span`
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  color: rgba(121, 99, 78, 1);
  opacity: 0;
  transform: rotate(-180deg) translate(150px, 0);
  animation: ${animation} 0.5s forwards;

  :nth-of-type(2) {
    animation-delay: 0.05s;
  }
  :nth-of-type(3) {
    animation-delay: 0.1s;
  }
  :nth-of-type(4) {
    animation-delay: 0.15s;
  }
  :nth-of-type(5) {
    animation-delay: 0.2s;
  }
  :nth-of-type(6) {
    animation-delay: 0.25s;
  }
  :nth-of-type(7) {
    animation-delay: 0.3s;
  }
  :nth-of-type(8) {
    animation-delay: 0.35s;
  }
`;
const Text = styled.p`
  color: rgba(121, 99, 78, 1);
  font-style: italic;
  font-size: 12px;
  font-weight: bold;
  text-align: justify;
  display: inline-block;
  opacity: 0;
  transform: rotate(-5deg) translate(-650px, 0);
  animation: ${animation} 1s forwards;
  animation-delay: 1s;

  :nth-of-type(4) {
    animation-delay: 2.5s;
  }
  :nth-of-type(3) {
    animation-delay: 2s;
  }
  :nth-of-type(2) {
    animation-delay: 1.5s;
  }
`;

const appearance = keyframes`
  0% {
		opacity: 0;
transform: scale(0);
	}
	100% {
				opacity: 1;
  transform: scale(1);
	}
  `;
const MyPhoto = styled.img`
  display: block;
  max-height: 266px;
  object-fit: cover;

  animation-name: ${appearance};
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
`;
