import './App.css';
import styles from './css/text.module.css';
import About from './js/About.js';
import Portfolio from './js/Pofol.js';
import Blog from './js/Blog.js';
import Skills from './js/Skills';
import Study from './js/Study';
import {NavLink, Route, Routes, Link} from 'react-router-dom';

const App = ()=> {
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
  return (
    <div className="App">
      <header onMouseEnter={()=>{enterBackground();}} onMouseLeave={()=>{leaveBackground();}}>
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
