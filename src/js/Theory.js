import React from "react";
import {Link, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import What_is_Javascript from "./Theory_item/What_is_Javascript";
import Es6 from "./Theory_item/Es6";
import Variable from './Theory_item/Variable';

const Theory = ()=>{
    return(
        <StyledDiv>
            <StyledArticle>
                <ul>
                    <li><Link to ="WhatIsJavascript">자바스크립트란?</Link></li>
                    <li><Link to ="es6">ES5와 ES6버전의 차이</Link></li>
                    <li><Link to ="variable">const, var, let의 차이</Link></li>
                    <li><Link to ="component">리액트의<br/>클래스형 컴포넌트와 함수형 컴포넌트</Link></li>
                    <li><Link to ="management">리액트에서의 상태관리</Link></li>
                    <li><Link to ="reactRedux">리액트에서의 리덕스</Link></li>
                </ul>
            </StyledArticle>
            <Routes>
                <Route path="WhatIsJavascript" element={<What_is_Javascript/>}/>
                <Route path="es6" element={<Es6/>}/>
                <Route path="variable" element={<Variable/>}/>
                <Route path="component" element={''}/>
                <Route path="management" element={''}/>
                <Route path="reactRedux" element={''}/>
            </Routes>
                
        </StyledDiv>
    )
}; export default Theory;

const StyledDiv = styled.div`
    display:flex;
    margin-top:5rem;
`;
const StyledArticle = styled.article`
    position:fixed;
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