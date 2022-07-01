import {NavLink, Link} from 'react-router-dom';
import React,{useState, useEffect,useRef} from 'react';
import { useSelector } from "react-redux";
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
    const data = useSelector((state) => state.Header.Nav);
    console.log(data);
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
                        >나에 대하여</NavLink>
                    </li>
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/skills"
                            onClick={removeActive}
                        >나의 기술들</NavLink>
                    </li>
                    <li className={["nav_item ", styles.subText].join('')} ref={navRef}>
                        <NavLink to = "/study/:"
                            onClick={(e)=>{
                                e.preventDefault();
                    }}
                    >나의 공부들</NavLink></li>
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/portfolio"
                            onClick={removeActive}
                        >나의 코딩들</NavLink>
                    </li>
                    <li className={["nav_item ", styles.subText].join('')}>
                        <NavLink to = "/blog" >나의 행적들</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='subNav_container' ref={subRef}>
                <StyledUl className={['subNav ', styles.subText].join('')} >
                    <NavLink to = "/study/practice" className="nav_item"
                        onClick={addActive}
                    >수강강의들</NavLink>
                    <NavLink to = "/study/theory/WhatIsJavascript" className="nav_item"
                    onClick={addActive}
                    >이론들</NavLink>
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