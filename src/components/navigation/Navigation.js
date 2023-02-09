import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
// import css from './navigation.css';

import log from '../../img/log/log3.png';

import homeSvg from '../../img/nav/home.svg';
import personSvg from '../../img/nav/person.svg';
import skillsSvg from '../../img/nav/skills.svg';
import myWorkSvg from '../../img/nav/myWork.svg';
import contactsSvg from '../../img/nav/contacts.svg';
// import SocialBtn from '../socialBtn/SocialBtn';

const Navigation = () => {
  return (
    <>
      <LeftNavContainer>
        <NavTitle>
          <Log src={log} alt="log" />
          <Span>O</Span>
          <Span>l</Span>
          <Span>e</Span>
          <Span>n</Span>
          <Span>a</Span>
          <Span>&nbsp;</Span>
          <Span>S</Span>
          <Span>t</Span>
          <Span>e</Span>
          <Span>p</Span>
          <Span>a</Span>
          <Span>n</Span>
          <Span>c</Span>
          <Span>h</Span>
          <Span>u</Span>
          <Span>k</Span>
        </NavTitle>
        <NavText>
          <Span2>F</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>u</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>l</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>l</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>S</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>t</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>a</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>c</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>k</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>D</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>e</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>v</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>e</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>l</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>o</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>p</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>e</Span2>
          <Span2>&nbsp;</Span2>
          <Span2>r</Span2>
        </NavText>
      </LeftNavContainer>
      <RightNavContainer>
        <NavLinkButton to="home">
          <IconNav src={homeSvg} alt="icon home" />
          <SpanNavText>Home</SpanNavText>
        </NavLinkButton>
        <NavLinkButton to="about">
          <IconNav src={personSvg} alt="icon person" />
          <SpanNavText>About</SpanNavText>
        </NavLinkButton>
        <NavLinkButton to="skills">
          <IconNav src={skillsSvg} alt="icon skills" />
          <SpanNavText>Skills</SpanNavText>
        </NavLinkButton>
        <NavLinkButton to="mywork">
          <IconNav src={myWorkSvg} alt="icon ny work" />
          <SpanNavText>My works</SpanNavText>
        </NavLinkButton>
        <NavLinkButton to="contact">
          <IconNav src={contactsSvg} alt="icon contact" />
          <SpanNavText>Contact</SpanNavText>
        </NavLinkButton>
        {/* <SocialBtn /> */}
      </RightNavContainer>
    </>
  );
};
export default Navigation;

const LeftNavContainer = styled.div`
  padding-left: 30px;
`;
const Log = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -30px;
  /* margin-top: 15px; */
`;
const NavTitle = styled.h1`
  font-size: 14px;
  color: rgba(121, 99, 78, 1);
  text-transform: uppercase;
  margin: 0;
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;
const NavText = styled.p`
  font-size: 8.7px;
  color: rgba(121, 99, 78, 1);
  text-transform: uppercase;
  margin: 5px 0 0 -5px;
  @media screen and (min-width: 1200px) {
    margin: 10px 0 0 0;
    font-size: 17.5px;
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
  display: inline-block;
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
  :nth-of-type(11) {
    animation-delay: 0.5s;
  }
  :nth-of-type(12) {
    animation-delay: 0.55s;
  }
  :nth-of-type(13) {
    animation-delay: 0.6s;
  }
  :nth-of-type(14) {
    animation-delay: 0.65s;
  }
  :nth-of-type(15) {
    animation-delay: 0.7s;
  }
  :nth-of-type(16) {
    animation-delay: 0.75s;
  }
`;

const Span2 = styled.span`
  display: inline-block;
  opacity: 0;
  transform: rotate(-180deg) translate(150px, 0);
  animation: ${animation} 0.5s forwards;
  :nth-of-type(1) {
    animation-delay: 1s;
  }
  :nth-of-type(2) {
    animation-delay: 1.05s;
  }
  :nth-of-type(3) {
    animation-delay: 1.1s;
  }
  :nth-of-type(4) {
    animation-delay: 1.15s;
  }
  :nth-of-type(5) {
    animation-delay: 1.2s;
  }
  :nth-of-type(6) {
    animation-delay: 1.25s;
  }
  :nth-of-type(7) {
    animation-delay: 1.3s;
  }
  :nth-of-type(8) {
    animation-delay: 1.35s;
  }
  :nth-of-type(9) {
    animation-delay: 1.4s;
  }
  :nth-of-type(10) {
    animation-delay: 1.45s;
  }
  :nth-of-type(11) {
    animation-delay: 1.5s;
  }
  :nth-of-type(12) {
    animation-delay: 1.55s;
  }
  :nth-of-type(13) {
    animation-delay: 1.6s;
  }
  :nth-of-type(14) {
    animation-delay: 1.65s;
  }
  :nth-of-type(15) {
    animation-delay: 1.7s;
  }
  :nth-of-type(16) {
    animation-delay: 1.75s;
  }
  :nth-of-type(17) {
    animation-delay: 1.8s;
  }
  :nth-of-type(18) {
    animation-delay: 1.85s;
  }
  :nth-of-type(19) {
    animation-delay: 1.9s;
  }
  :nth-of-type(20) {
    animation-delay: 1.95s;
  }
  :nth-of-type(21) {
    animation-delay: 2s;
  }
  :nth-of-type(22) {
    animation-delay: 2.05s;
  }
  :nth-of-type(23) {
    animation-delay: 2.1s;
  }
  :nth-of-type(24) {
    animation-delay: 2.15s;
  }
  :nth-of-type(25) {
    animation-delay: 2.2s;
  }
  :nth-of-type(26) {
    animation-delay: 2.25s;
  }
  :nth-of-type(27) {
    animation-delay: 2.3s;
  }
  :nth-of-type(28) {
    animation-delay: 2.35s;
  }
  :nth-of-type(29) {
    animation-delay: 2.4s;
  }
  :nth-of-type(30) {
    animation-delay: 2.45s;
  }
  :nth-of-type(31) {
    animation-delay: 2.5s;
  }
  :nth-of-type(32) {
    animation-delay: 2.55s;
  }
  :nth-of-type(33) {
    animation-delay: 2.6s;
  }
  :nth-of-type(34) {
    animation-delay: 2.65s;
  }
  :nth-of-type(35) {
    animation-delay: 2.7s;
  }
  :nth-of-type(36) {
    animation-delay: 2.75s;
  }
  :nth-of-type(37) {
    animation-delay: 2.8s;
  }
  :nth-of-type(38) {
    animation-delay: 2.85s;
  }
  :nth-of-type(39) {
    animation-delay: 2.9s;
  }
`;

const RightNavContainer = styled.nav`
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  background: rgba(192, 166, 143, 0.5);
  text-transform: uppercase;
  width: 60px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 10px;
  padding: 10px;
  border-radius: 10px;
  @media screen and (min-width: 1200px) {
    margin-right: 0;
    border-radius: 0;
    padding: 0;
    background: transparent;
    position: static;
    width: 512px;
    margin-left: auto;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavLinkButton = styled(NavLink)`
  /* padding: 6px;
  width: 65px;
  max-height: 80px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: rgba(121, 99, 78, 1);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  transition: all 500ms ease;
  transition: transform 0.2s;
  outline: none; */
  padding: 3px;
  width: 40px;
  max-height: 40px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: rgba(121, 99, 78, 1);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  transition: all 500ms ease;
  transition: transform 0.2s;
  outline: none;
  @media screen and (min-width: 1200px) {
    padding: 6px;
    width: 65px;
    max-height: 80px;
    /* justify-content: center;
    text-align: center; */
    text-decoration: none;
    color: rgba(121, 99, 78, 1);
    border-radius: 20px;
    /* display: flex;
    flex-wrap: wrap;
    position: relative; */
    /* transition: all 500ms ease;
    transition: transform 0.2s; */
    /* outline: none; */
  }

  :hover {
    transform: scale(1.3);
    @media screen and (min-width: 1200px) {
      /* transform: scale(1.3); */
    }
  }

  :not(:first-child) {
    margin-top: 15px;
    @media screen and (min-width: 1200px) {
      margin-top: 0;
      margin-left: 15px;
    }
  }

  :focus,
  :hover {
    border-radius: 10px;
    background: #ffffff;
    @media screen and (min-width: 1200px) {
      border-radius: 20px;
    }
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    min-width: 40px;
    border-radius: 10px;
    background: rgba(192, 166, 143, 0.5);
    transition: all 1s ease;
    @media screen and (min-width: 1200px) {
      min-width: 65px;
      height: 0;
      border-radius: 20px;
    }
  }

  :hover:before {
    height: 100%;
    color: rgba(192, 166, 143, 0.5);
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    @media screen and (min-width: 1200px) {
      font-size: 12px;
    }
  }
`;
const IconNav = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1200px) {
    width: 32px;
    height: 32px;
  }
`;
const SpanNavText = styled.span`
  font-size: 5px;
  font-weight: bold;
  margin-top: 2px;
  @media screen and (min-width: 1200px) {
    font-size: 8px;
    font-weight: bold;
    margin-top: 5px;
  }
`;
