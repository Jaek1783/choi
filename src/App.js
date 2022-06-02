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
    console.log("y" , window.scrollY);
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
  const enterBackground = ()=>{
    const header = document.querySelector('header');
    header.style.backgroundColor = '#000';
    header.style.color = "#fff";
  }
  const leaveBackground = ()=>{
    const header = document.querySelector('header');
    header.style.backgroundColor = 'transparent';
    header.style.color = "#000";
  }
  // onMouseEnter={()=>{enterBackground();}} onMouseLeave={()=>{leaveBackground();}}
  return (
    <div className="App">
      <header className={y>40? 'black':'transparent'}>
        <h1 className={styles.subText}><Link to ="/choi">Choi-portfolio</Link></h1>
        <nav className="nav">
            <NavLink to = "/choi" className={["nav_item ", styles.subText].join('')}>About me</NavLink>
            <NavLink to = "/skills" className={["nav_item ", styles.subText].join('')}>Skills</NavLink>
            <NavLink to = "/study" className={["nav_item ", styles.subText].join('')}>Study</NavLink>
            <NavLink to = "/portfolio" className={["nav_item ", styles.subText].join('')}>Portfolio</NavLink>
            <NavLink to = "/blog" className={["nav_item ", styles.subText].join('')}>Blog</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/choi" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/study" element={<Study/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>
  )
};

export default App;
