import {NavLink, Link} from 'react-router-dom';
import React,{useState, useEffect,useRef} from 'react';
import styles from './css/text.module.css';
import styled from 'styled-components';
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
const Header = () =>{
    const { y } = useScroll();
    const navRef = useRef(null);
    const subRef = useRef(null);
    const headerRef = useRef(null);
    const MouseOver = ()=>{
        subRef.current.style.display="block";
    }
    const MouseLeave = ()=>{
        subRef.current.style.display="none";
    }
    useEffect(()=>{
        navRef.current.addEventListener('mouseover', MouseOver);
        subRef.current.addEventListener('mouseleave', MouseLeave);
    },[]);
    return(
        <header className={y>39? 'black':'transparent'} ref={headerRef}>
            <h1 className={styles.subText}><Link to ="/choi">Choi-portfolio</Link></h1>
            <nav className="nav">
                <NavLink to = "/choi" className={["nav_item ", styles.subText].join('')}>About me</NavLink>
                <NavLink to = "/skills" className={["nav_item ", styles.subText].join('')}>Skills</NavLink>
                <NavLink to = "/study/" className={["nav_item ", styles.subText].join('')} ref={navRef}
                onCick={(e)=>{
                    e.preventDefault();
                }}>Study</NavLink>
                <NavLink to = "/portfolio" className={["nav_item ", styles.subText].join('')}>Portfolio</NavLink>
                <NavLink to = "/blog" className={["nav_item ", styles.subText].join('')}>Blog</NavLink>
            </nav>
            <div ref={subRef} className="subNav_container">
                <StyledUl className={['subNav ', styles.subText].join('') }>
                    <NavLink to = "/study/practice" className="nav_item">Practice</NavLink>
                    <NavLink to = "/study/theory" className="nav_item">Theory</NavLink>
                </StyledUl>
            </div>
      </header>
    )
};
export default Header;

const StyledUl = styled.ul`
    display:flex;
    padding-left:8.5rem;
    padding-top:.5rem;
`;