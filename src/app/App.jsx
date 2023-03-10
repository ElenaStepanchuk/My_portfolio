import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  BackgroundContainer,
  Header,
  Loader,
  Footer,
  DollarsAnimation,
} from '../components';
// import MyWork from '../pages/myWork/MyWork';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Skills = lazy(() => import('../pages/skills/Skills'));
const MyWork = lazy(() => import('../pages/myWork/MyWork'));
const Contact = lazy(() => import('../pages/contact/Contact'));

export const App = () => {
  return (
    <>
      <DollarsAnimation />
      <BackgroundContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="mywork" element={<MyWork />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </BackgroundContainer>
    </>
  );
};
