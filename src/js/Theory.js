import React from "react";
import {Link, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import What_is_Javascript from "./Theory_item/What_is_Javascript";
import Es6 from "./Theory_item/Es6";
import Const from './Theory_item/Const';
import Variable from './Theory_item/Variable';
import Management from './Theory_item/Management';
import Componenet from './Theory_item/Component';
const Theory = ()=>{
    return(
        <StyledDiv>
            <StyledArticle>
                <ul>
                    <li><Link to ="WhatIsJavascript">자바스크립트란?</Link></li>
                    <li><Link to ="es6">ES5와 ES6버전의 차이</Link></li>
                    <li><Link to ="const">const</Link></li>
                    <li><Link to ="variable">var, let의 차이</Link></li>
                    <li><Link to ="management">라이프사이클이란?</Link></li>
                    <li><Link to ="component">라이프사이클 함수</Link></li>
                </ul>
            </StyledArticle>
            <Routes>
                <Route path="WhatIsJavascript" element={<What_is_Javascript/>}/>
                <Route path="es6" element={<Es6/>}/>
                <Route path="const" element={<Const/>}/>
                <Route path="variable" element={<Variable/>}/>
                <Route path="management" element={<Management/>}/>
                <Route path="component" element={<Componenet/>}/>
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