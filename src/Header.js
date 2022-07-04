import {NavLink, Link} from 'react-router-dom';
import React,{useState, useEffect,useRef} from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from './css/text.module.css';
import styled from 'styled-components';
import { CreateAbout,CreateSkills, CreateTheory, CreateVideo, CreateCard,CreateBlog } from './Reducers/Article';
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
        // console.log("들어왔어");
    }
    const MouseLeave = ()=>{
        subRef.current.style.display="none";
        // console.log("나갔어");
    }
    useEffect(()=>{
        navRef.current.addEventListener('mouseover', MouseOver);
        subRef.current.addEventListener('mouseleave', MouseLeave);
    },[]);
    const data = useSelector((state) => state.Header.Nav);
    const dispatch = useDispatch();
    const numRef = useRef(null);
    useEffect(()=> {
        setTimeout(()=>{
            numRef.current.classList.add('active');
        },100);
        return () => {
            clearTimeout();
        }
    },[data]);
    const removeActive = ()=>{
        numRef.current.classList.remove('active');
    }
    return(
        <HeaderStyle className={y>39? 'black':'transparent'}>
            <h1 className={styles.subText}><Link to ="/choi" onClick={()=>{
                            dispatch(CreateAbout());
                        }}>Choi-portfolio</Link></h1>
            <NavStyled>
                <ul>
                    <li className={styles.subText}>
                        <NavLink to = "/choi" onClick={()=>{
                            dispatch(CreateAbout());
                        }}>나에 대하여</NavLink>
                    </li>
                    <li className={styles.subText}>
                        <NavLink to = "/skills" onClick={()=>{
                            dispatch(CreateSkills());
                        }}>나의 기술들</NavLink>
                    </li>
                    <li className={styles.subText}>
                        <NavLink to = "/study" onClick={()=>{
                            dispatch(CreateVideo());
                        }}  ref={navRef}>나의 공부들</NavLink></li>
                    <li className={styles.subText}>
                        <NavLink to = "/portfolio" onClick={()=>{
                            dispatch(CreateCard());
                        }} >나의 코딩들</NavLink>
                    </li>
                </ul>
            </NavStyled>
            <SubNavStyled ref={subRef}>
                <ul className={['subNav ', styles.subText].join('')} >
                    <li><NavLink to = "/study/practice/1"  onClick={()=>{
                            dispatch(CreateVideo());
                        }} ref={numRef}>영상들</NavLink></li>
                    <li><NavLink to = "/study/theory/1" onClick={()=>{
                            dispatch(CreateTheory());
                            removeActive();
                        }}>이론들</NavLink></li>
                </ul>
            </SubNavStyled>
      </HeaderStyle>
    )
};
export default Header;

const HeaderStyle = styled.header`
width:100%;
position:fixed;
top:0;
left:0;
z-index: 1000;
padding: 0.5rem;
transition:.2s ease-in-out;
    h1{
        font-size:1.5rem;
        float:left;
        cursor: pointer;
    }
`;
const NavStyled = styled.nav`
    ul{
        display: flex;
        padding-left:2rem;
    }
    li{
        padding:.3rem;
        text-align: center;
        border-radius: 10px;
        font-size:1rem;
    }
    a.active{
        padding:.5rem;
    }
    li:not(:last-child){
        margin-right:1rem;
    }
`;
const SubNavStyled = styled.div`
display:none;
padding:.5rem 0;
    ul{ 
        display:flex;
        padding-left:18rem;
        margin-top:.2rem;
    }
    li{
        padding-left:2rem;
    }
`;

