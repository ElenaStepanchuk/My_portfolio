import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import cssPng from '../../img/skills/css.png';
import gitPng from '../../img/skills/git.png';
import htmlPng from '../../img/skills/html.png';
import jsPng from '../../img/skills/js.png';
import jsonPng from '../../img/skills/json.png';
import mongodbPng from '../../img/skills/mongodb.png';
import nodePng from '../../img/skills/node.png';
import postmanPng from '../../img/skills/postman.png';
import reactPng from '../../img/skills/react.png';
import reduxPng from '../../img/skills/redux.png';
import styledComponentPng from '../../img/skills/styledComponent.png';
import webpackPng from '../../img/skills/webpack.png';

import { gsap } from 'gsap';

const SkillsAnimationMobile = () => {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  const el6 = useRef();
  const el7 = useRef();
  const el8 = useRef();
  const el9 = useRef();
  const el10 = useRef();
  const el11 = useRef();
  const el12 = useRef();
  const el13 = useRef();

  useEffect(() => {
    const intervalBlock = 120;
    const intervalImg = 120;

    gsap.to(el1.current, {
      repeat: -1,
      duration: intervalBlock,
      rotation: '+=360',
      yoyo: true,
    });
    gsap.to(el2.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el3.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el4.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el5.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el6.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el7.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el8.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el9.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el10.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el11.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el12.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el13.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
  });

  return (
    <>
      <ContainerPng ref={el1}>
        <ContainerPng1
          style={{ width: 30, height: 30, background: 'rgba(121,99,78,1)' }}
        ></ContainerPng1>
        <ContainerPng1
          style={{
            width: 60,
            height: 60,
            marginTop: -15,
            marginLeft: -15,
          }}
        >
          <SkillsIcon src={cssPng} alt="css icon" ref={el2} />
          <SkillsIcon
            src={gitPng}
            alt="git icon"
            ref={el3}
            style={{ marginLeft: 48 }}
          />
        </ContainerPng1>
        <ContainerPng1
          style={{
            width: 105,
            height: 105,
            marginTop: -37.5,
            marginLeft: -37.5,
          }}
        >
          <SkillsIcon
            src={htmlPng}
            alt="htm icon"
            ref={el4}
            style={{ marginTop: 70, marginLeft: 0 }}
          />
          <SkillsIcon
            src={jsPng}
            alt="js icon"
            ref={el5}
            style={{ marginTop: -88, marginLeft: 75 }}
          />
        </ContainerPng1>
        <ContainerPng1
          style={{
            width: 160,
            height: 160,
            marginTop: -65,
            marginLeft: -65,
          }}
        >
          <SkillsIcon
            src={jsonPng}
            alt="json icon"
            style={{ marginTop: 30 }}
            ref={el6}
          />
          <SkillsIcon
            src={mongodbPng}
            alt="mongodb icon"
            style={{ marginTop: 0, marginLeft: 145 }}
            ref={el7}
          />
          <SkillsIcon
            src={nodePng}
            alt="node icon"
            style={{ marginTop: 75, marginLeft: 90 }}
            ref={el8}
          />
        </ContainerPng1>
        <ContainerPng1
          style={{
            width: 225,
            height: 225,
            marginTop: -97.5,
            marginLeft: -97.5,
          }}
        >
          <SkillsIcon
            src={postmanPng}
            alt="postman icon"
            style={{ marginTop: -10, marginLeft: 100 }}
            ref={el9}
          />
          <SkillsIcon
            src={reactPng}
            alt="react icon"
            style={{ marginTop: 30, marginLeft: 195 }}
            ref={el10}
          />
          <SkillsIcon
            src={reduxPng}
            alt="redux icon"
            style={{ marginTop: 110, marginLeft: 190 }}
            ref={el11}
          />
          <SkillsIcon
            src={styledComponentPng}
            alt="styled component icon"
            style={{ marginTop: 25, marginLeft: 90 }}
            ref={el12}
          />
          <SkillsIcon
            src={webpackPng}
            alt="webpack icon"
            style={{ marginTop: -110, marginLeft: -5 }}
            ref={el13}
          />
        </ContainerPng1>
      </ContainerPng>
    </>
  );
};
export default SkillsAnimationMobile;

const ContainerPng = styled.div`
  display: block;
  margin: auto;
  position: relative;
  width: 100%;
  height: 100%;
`;
const ContainerPng1 = styled.div`
  position: absolute;
  top: calc(42%);
  left: calc(44%);
  border: 1px solid rgba(121, 99, 78, 1);
  border-radius: 50%;
`;

const SkillsIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
`;
