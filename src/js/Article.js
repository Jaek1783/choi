import React,{useEffect, useRef} from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
    return (
        <StyledArticle>
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
        </StyledArticle>
    );
};

export default Article;

const StyledArticle = styled.article`
    margin: 0 2rem;
    width:16.25rem;
    height:700px;
    border-left :1px solid #ccc;
    border-right :1px solid #ccc;

    li{
        width:90%;
        padding:.6rem 0;
        margin:0 auto;
        border-bottom:1px solid #ccc;
        text-align:right;
    }
`;