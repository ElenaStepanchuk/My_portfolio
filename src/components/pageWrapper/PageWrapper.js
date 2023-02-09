import styled from 'styled-components';
import bg from '../../img/bg/bg.jpg';

const PageWrapper = ({ children }) => {
  return <Wrapper>{children} </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (min-width: 1200px) {
    text-align: left;
    background-size: cover;
    background-image: url(${bg});
    width: 1024px;
    max-height: 1200px;
    display: flex;
  }
`;

export default PageWrapper;
