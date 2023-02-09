import styled from 'styled-components';

import { FooterAnimations } from 'components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterAnimations />
    </FooterContainer>
  );
};
export default Footer;
const FooterContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    height: auto;
    text-align: right;
    justify-content: left;
    width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 20px 0;
  }
`;
