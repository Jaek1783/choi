import './App.css';
import Header from './Header';
import About from './js/About.js';
import Portfolio from './js/Pofol.js';
import Blog from './js/Blog.js';
import Skills from './js/Skills';
import { Route, Routes} from 'react-router-dom';
import React from 'react';
import Study from './js/Study';
import Practice from './js/Practice';
import Theory from './js/Theory';

const App = ()=> {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/choi" element={<About/>}></Route>
        <Route path="/choi" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/study" element={<Study/>}/>
        <Route path="/study/practice" element={<Practice/>}/>
        <Route path="/study/theory" element={<Theory/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>
  )
};

export default App;
