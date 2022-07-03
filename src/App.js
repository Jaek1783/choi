import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import { useDispatch } from "react-redux";
import { CreateSkills } from './Reducers/Article';
import Header from './Header';
import About from './js/About.js';
import Article from './js/Article';
import Portfolio from './js/Pofol.js';
import Blog from './js/Blog.js';
import Skills from './js/Skills';

import Practice from './js/Practice';
import Theory from './js/Theory';
import { createSkills } from './Reducers/Article';

const App = ()=> {
  let dispatch = useDispatch();
  return (
    <div className="App">
      <Header/>
      <div className="contents">
      <Article/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/choi" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/study/*" element={"ㄴ"}/>
        <Route path="/study/practice" element={""}/>
        <Route path="/study/theory/*" element={<Theory/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      </div>
    </div>
  )
};

export default App;