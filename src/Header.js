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
    const MouseOver = ()=>{
        subRef.current.style.display="block";
    }
    const MouseLeave = ()=>{
        subRef.current.style.display="none";
    }
    const addActive = ()=>{
        navRef.current.classList.add('active');
    }
    const removeActive = ()=>{
        navRef.current.classList.remove('active');
    }
    useEffect(()=>{
        navRef.current.addEventListener('mouseover', MouseOver);
        subRef.current.addEventListener('mouseleave', MouseLeave);
    },[]);
    return(
        <header className={y>39? 'black':'transparent'}>
            <h1 className={styles.subText}><Link to ="/choi"
                onClick={removeActive}
            >Choi-portfolio</Link></h1>
            <nav>
                <ul className="nav">
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/choi"
                            onClick={removeActive}
                        >About me</NavLink>
                    </li>
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/skills"
                            onClick={removeActive}
                        >Skills</NavLink>
                    </li>
                    <li className={["nav_item ", styles.subText].join('')} ref={navRef}>
                        <NavLink to = "/study/:"
                            onClick={(e)=>{
                                e.preventDefault();
                    }}
                    >Study</NavLink></li>
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/portfolio"
                            onClick={removeActive}
                        >Portfolio</NavLink>
                    </li>
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/blog" >Blog</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='subNav_container' ref={subRef}>
                <StyledUl className={['subNav ', styles.subText].join('')} >
                    <NavLink to = "/study/practice" className="nav_item"
                        onClick={addActive}
                    >Practice</NavLink>
                    <NavLink to = "/study/theory/WhatIsJavascript" className="nav_item"
                    onClick={addActive}
                    >Theory</NavLink>
                </StyledUl>
            </div>
      </header>
    )
};
export default Header;

const StyledUl = styled.ul`
    display:flex;
    padding-left:16.5rem;
    margin-top:.5rem;
`;