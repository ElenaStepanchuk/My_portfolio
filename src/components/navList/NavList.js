import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import css from './navList.css';

import homeSvg from '../../img/nav/home.svg';
import personSvg from '../../img/nav/person.svg';
import skillsSvg from '../../img/nav/skills.svg';
import myWorkSvg from '../../img/nav/myWork.svg';
import contactsSvg from '../../img/nav/contacts.svg';

const NavList = () => {
  return (
    <>
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
    </>
  );
};
export default NavList;

const NavLinkButton = styled(NavLink)`
  padding: 2px;
  width: 28px;
  max-height: 40px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: rgba(121, 99, 78, 1);
  border-radius: 2px;
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
    text-decoration: none;
    color: rgba(121, 99, 78, 1);
    border-radius: 20px;
  }

  :hover {
    transform: scale(1.3);
    @media screen and (min-width: 1200px) {
      /* transform: scale(1.3); */
    }
  }

  :not(:first-child) {
    @media screen and (min-width: 1200px) {
      margin-top: 0;
      margin-left: 15px;
    }
  }

  :focus,
  :hover {
    border-radius: 2px;
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
    min-width: 28px;
    border-radius: 2px;
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
  width: 16px;
  height: 12px;
  @media screen and (min-width: 1200px) {
    width: 32px;
    height: 32px;
  }
`;
const SpanNavText = styled.span`
  font-size: 4px;
  font-weight: bold;
  margin-top: 2px;
  @media screen and (min-width: 1200px) {
    font-size: 8px;
    font-weight: bold;
    margin-top: 5px;
  }
`;
