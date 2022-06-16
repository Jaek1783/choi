import './App.css';
import styles from './css/text.module.css';
import About from './js/About.js';
import Portfolio from './js/Pofol.js';
import Blog from './js/Blog.js';
import Skills from './js/Skills';
import Study from './js/Study';
import {NavLink, Route, Routes, Link} from 'react-router-dom';
import React,{useState, useEffect, useRef} from 'react';

const useScroll = ()=>{
  const [state, setState] = useState({
    x:0,
    y:0
  });
  const onScroll = (event)=>{
    setState({y:window.scrollY});
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return()=>window.removeEventListener('scroll',onScroll);
  },[])
  return state;
}

const App = ()=> {
  const { y } = useScroll();
  return (
    <div className="App">
      <header className={y>39? 'black':'transparent'}>
        <h1 className={styles.subText}><Link to ="/choi/">Choi-portfolio</Link></h1>
        <nav className="nav">
            <NavLink to = "/choi/" className={["nav_item ", styles.subText].join('')}>About me</NavLink>
            <NavLink to = "/choi/skills" className={["nav_item ", styles.subText].join('')}>Skills</NavLink>
            <NavLink to = "/choi/study" className={["nav_item ", styles.subText].join('')}>Study</NavLink>
            <NavLink to = "/choi/portfolio" className={["nav_item ", styles.subText].join('')}>Portfolio</NavLink>
            <NavLink to = "/choi/blog" className={["nav_item ", styles.subText].join('')}>Blog</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/choi/" element={<About/>}/>
        <Route path="/choi/skills" element={<Skills/>}/>
        <Route path="/choi/study" element={<Study/>}/>
        <Route path="/choi/portfolio" element={<Portfolio/>}/>
        <Route path="/choi/blog" element={<Blog/>}/>
      </Routes>
    </div>
  )
};

export default App;
