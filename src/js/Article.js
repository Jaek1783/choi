import React from 'react';
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Article = () => {
    const data = useSelector((state) => state.Article.Article);
    console.log(data);
    return (
        <StyledArticle>
            <ul>
                {data.map(about=>{
                    return(
                        <li key={about.title}>
                            {about.title}
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