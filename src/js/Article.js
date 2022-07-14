import React,{useEffect, useRef} from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
const Article = () => {
    const data = useSelector((state) => state.Article.Article);
    const numRef = useRef(null);
    useEffect(()=> {
        setTimeout(()=>{
            numRef.current.firstChild.firstChild.classList.add('active');
        },100);
        return () => {
            clearTimeout();
        }
    },[data]);
    const removeActive = ()=>{
        numRef.current.firstChild.firstChild.classList.remove('active');
    }
    const isPc = useMediaQuery ({
        query : "(min-width : 800px)"
        });
    return (
        <>
        {isPc ? 
            <PcArticle>
                <ul ref={numRef}>
                    {data.map(article=>{
                        return(
                            <li key={article.id} >
                                <NavLink to={article.link+article.id} onClick={()=>{
                                    removeActive();
                                }} >{article.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>            
            </PcArticle> :
            <MArticle>
            <ul ref={numRef}>
                {data.map(article=>{
                    return(
                        <li key={article.id} >
                            <NavLink to={article.link+article.id} onClick={()=>{
                                removeActive();
                            }} >{article.title}</NavLink>
                        </li>
                    )
                })}
            </ul>            
        </MArticle>
        }
        </>
        
    );
};

export default Article;

const PcArticle = styled.article`
    margin: 0 2rem;
    width:200px;
    height:85vh;
    border-left :1px solid #ccc;
    border-right :1px solid #ccc;

    li{
        width:180px;
        padding:.6rem 10px;
        margin:0 auto;
        border-bottom:1px solid #ccc;
        text-align:right;
    }
`;
const MArticle = styled.article`
padding-top:1rem;
width:70vh;
margin:0 auto;
overflow-x:scroll;
    ul{ 
        width:90%;
        margin: 0 auto;
        display:flex;
        text-align:center;
    }    
    li{
        padding:0 1.5rem 1rem;
        border-right:1px solid #ccc;
        margin:0auto;
        font-size:.8rem;
    }
`;