import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './Header';
import About from './js/About_item/About.js';
import Intro from './js/About_item/Intro';
import Article from './js/Article';
import Portfolio from './js/Pofol';
import Cafe from './js/Portfolio_item/Cafe';
import Blog from './js/Blog.js';
import Skills from './js/Skills';
import Default from './js/Skill_icon_item/Icon_item01';
import Youtube from './js/Study_icon_item/Youtube';

import Practice from './js/Practice';
import Theory from './js/Theory';

const App = ()=> {
  return (
    <div className="App">
      <Header/>
      <div className="contents">
      <Article/>
      <Routes>
        <Route path="/choi" element={<Intro/>}/>
        <Route path="/choi/*" element={<About/>}/>
        <Route path="/skills" element={<Default/>}/>
        <Route path="/skills/*" element={<Skills/>}/>
        <Route path="/study/*" element={<Youtube/>}/>
        <Route path="/study/practice/*" element={<Practice/>}/>
        <Route path="/study/theory/*" element={<Theory/>}/>
        <Route path="/portfolio" element={<Cafe/>}/>
        <Route path="/portfolio/*" element={<Portfolio/>}/>
        <Route path="/blog/*" element={<Blog/>}/>
        {/* <Route path="/choi/1" element={<About/>}/> */}
      </Routes>
      </div>
    </div>
  )
};

export default App;