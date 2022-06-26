import React from "react";
import styled from 'styled-components';

const Theory = ()=>{
    return(
        <>
        <StyledArticle>
            <ul>
                <li>자바스크립트란?</li>
                <li>ES5와 ES6버전의 차이</li>
                <li>const, var, let의 차이</li>
                <li>리액트의<br/>클래스형 컴포넌트와 함수형 컴포넌트</li>
            </ul>
        </StyledArticle>
        </>
    )
}; export default Theory;

const StyledArticle = styled.article`
    margin-left:2rem;
    margin-top:5rem;
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