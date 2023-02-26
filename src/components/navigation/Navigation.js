import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

import NavList from 'components/navList/NavList';

import log from '../../img/log/Logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleShowMenu = () => {
    setIsMenuOpen(isOpen => !isOpen);
  };
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
        <ShowNavListbutton
          type="button"
          onClick={handleShowMenu}
          alt="icon home"
        >
          <Menu />
          <Menu />
          <Menu />
          {/* <IconMenu src={homeSvg} alt="icon home" /> */}
        </ShowNavListbutton>
      </LeftNavContainer>
      {isMenuOpen && (
        <RightNavContainerMobile onClick={handleShowMenu}>
          <NavList />
        </RightNavContainerMobile>
      )}
      <RightNavContainerDesktop>
        <NavList />
      </RightNavContainerDesktop>
    </>
  );
};
export default Navigation;

const LeftNavContainer = styled.div`
  position: relative;
  padding-left: 10px;
  @media screen and (min-width: 1200px) {
    padding-left: 30px;
  }
`;
const Log = styled.img`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 0;
  left: 10px;
  @media screen and (min-width: 1200px) {
    width: 70px;
    height: 70px;
    left: 30px;
  }
`;
const NavTitle = styled.h1`
  font-size: 14px;
  color: rgba(121, 99, 78, 1);
  text-transform: uppercase;
  margin: 0 0 0 40px;
  @media screen and (min-width: 1200px) {
    font-size: 28px;
    margin-left: 90px;
  }
`;
const NavText = styled.p`
  font-size: 8.7px;
  color: rgba(121, 99, 78, 1);
  text-transform: uppercase;
  margin: 5px 0 0 40px;
  @media screen and (min-width: 1200px) {
    margin: 10px 0 0 0;
    font-size: 17.5px;
    margin-left: 90px;
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

const ShowNavListbutton = styled.button`
  display: block;
  position: absolute;
  top: 3px;
  right: 0;
  border: none;
  padding: 0;
  border: none;
  padding: 5px;
  background: rgba(242, 237, 233, 1);

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 20px;
  height: 2px;
  border-radius: 1px;
  background: rgba(179, 154, 132, 1);

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const RightNavContainerDesktop = styled.nav`
  display: none;
  @media screen and (min-width: 1200px) {
    text-transform: uppercase;
    z-index: 2;
    display: flex;
    margin-right: 0;
    background: transparent;
    width: 512px;
    margin-left: auto;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }
`;
const RightNavContainerMobile = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  background: rgba(192, 166, 143, 1);
  text-transform: uppercase;
  width: calc(100% - 8px);
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 4px;
  right: 4px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 2px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
