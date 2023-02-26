import styled, { keyframes } from 'styled-components';
import React from 'react';

import SkillsAnimation from 'components/skillsAnimation';
import SkillsAnimationMobile from 'components/skillsAnimationMobile';

import { PageWrapper } from 'components';

const Skills = () => {
  return (
    <>
      <PageWrapper>
        <LeftPage>
          <Span>M</Span>
          <Span>y</Span>
          <Span>&nbsp;</Span>
          <Span>s</Span>
          <Span>k</Span>
          <Span>i</Span>
          <Span>l</Span>
          <Span>l</Span>
          <Span>s</Span>
          <Span>:</Span>
          <SkillsList>
            <ItemList>HTML, HTML5</ItemList>
            <ItemList>CSS, CSS3, SCSS, SASS, Css Modules</ItemList>
            <ItemList>Styled Components</ItemList>
            <ItemList>Flex Box</ItemList>
            <ItemList>ES6, ES6+</ItemList>
            <ItemList>Git</ItemList>
            <ItemList>JSON</ItemList>
            <ItemList>WebPack</ItemList>
            <ItemList>Java Script</ItemList>
            <ItemList>REST API</ItemList>
            <ItemList>AJAX</ItemList>
            <ItemList>React JS, React Hooks, React Router</ItemList>
            <ItemList>React Native</ItemList>
            <ItemList>Redux</ItemList>
            <ItemList>Node.js</ItemList>
            <ItemList>Postman</ItemList>
            <ItemList>MongoDB</ItemList>
            <ItemList>Mongoose</ItemList>
            <ItemList>Adaptive and responsive layout</ItemList>
            <ItemList>Figma</ItemList>
          </SkillsList>
          <LeftAnimationPage>
            <SkillsAnimationMobile />
          </LeftAnimationPage>
        </LeftPage>
        <RightPage>
          <SkillsAnimation />
        </RightPage>
      </PageWrapper>
    </>
  );
};
export default Skills;

const LeftPage = styled.div`
  width: 100%;
  padding: 10px;
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
  font-size: 15px;
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
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
  :nth-of-type(9) {
    animation-delay: 0.4s;
  }
  :nth-of-type(10) {
    animation-delay: 0.45s;
  }
`;

const SkillsList = styled.ul`
  padding: 0 0 0 10px;
  margin: 10px 0 0 0;
`;
const ItemList = styled.li`
  color: rgba(121, 99, 78, 1);
  font-style: italic;
  font-size: 12px;
  font-weight: bold;
  text-align: justify;
  opacity: 0;
  transform: rotate(-5deg) translate(-650px, 0);
  animation: ${animation} 1s forwards;
  animation-delay: 1s;
  :nth-of-type(20) {
    animation-delay: 10.5s;
  }
  :nth-of-type(19) {
    animation-delay: 10s;
  }
  :nth-of-type(18) {
    animation-delay: 9.5s;
  }
  :nth-of-type(17) {
    animation-delay: 9s;
  }
  :nth-of-type(16) {
    animation-delay: 8.5s;
  }
  :nth-of-type(15) {
    animation-delay: 8s;
  }
  :nth-of-type(14) {
    animation-delay: 7.5s;
  }
  :nth-of-type(13) {
    animation-delay: 7s;
  }
  :nth-of-type(12) {
    animation-delay: 6.5s;
  }
  :nth-of-type(11) {
    animation-delay: 6s;
  }
  :nth-of-type(10) {
    animation-delay: 5.5s;
  }
  :nth-of-type(9) {
    animation-delay: 5s;
  }
  :nth-of-type(8) {
    animation-delay: 4.5s;
  }
  :nth-of-type(7) {
    animation-delay: 4s;
  }
  :nth-of-type(6) {
    animation-delay: 3.5s;
  }
  :nth-of-type(5) {
    animation-delay: 3s;
  }

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

const LeftAnimationPage = styled.div`
  display: none;
  @media screen and (max-width: 1199px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    background: #ffffff;
    height: 250px;
  }
`;

const RightPage = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 50px;
    width: 512px;
  }
`;
