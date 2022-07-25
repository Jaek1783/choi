import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './js/Header';
import About from './js/About_item/About.js';
import Intro from './js/About_item/Intro';
import Article from './js/Article';
import Portfolio from './js/Pofol';
import Cafe from './js/Portfolio_item/Cafe';
import Skills from './js/Skills';
import Default from './js/Skill_icon_item/Icon_item01';
import Youtube from './js/Study_icon_item/Youtube';
import styled from 'styled-components';
import Practice from './js/Practice';
import Theory from './js/Theory';
import "./css/portfolio.css";
import { useMediaQuery } from 'react-responsive';

const App = ()=> {
  const isPc = useMediaQuery ({
    query : "(min-width : 800px)"
    });
  return (
    <div className="App">
      <Header/>
      <div className={isPc ? "PcContainer" : "MContainer"}>
      <Article/>
      <Contents>
          <Routes>
            <Route path="*" element={<Intro/>}/>
            <Route path="/choi" element={<Intro/>}/>
            <Route path="/choi/*" element={<About/>}/>
            <Route path="/skills" element={<Default/>}/>
            <Route path="/skills/*" element={<Skills/>}/>
            <Route path="/study/*" element={<Youtube/>}/>
            <Route path="/study/practice/*" element={<Practice/>}/>
            <Route path="/study/theory/*" element={<Theory/>}/>
            <Route path="/portfolio" element={<Cafe/>}/>
            <Route path="/portfolio/*" element={<Portfolio/>}/>
          </Routes>
      </Contents>
      </div>
    </div>
  )
};

export default App;

const Contents = styled.div`
width:80%;
margin:3rem auto 0;
`;
