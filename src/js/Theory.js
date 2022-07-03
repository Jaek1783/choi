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
                <Routes>
                    <Route path="1" element={<What_is_Javascript/>}/>
                    <Route path="2" element={<Es6/>}/>
                    <Route path="3" element={<Const/>}/>
                    <Route path="4" element={<Variable/>}/>
                    <Route path="5" element={<Management/>}/>
                    <Route path="6" element={<Componenet/>}/>
                </Routes>
        </StyledDiv>
    )
}; export default Theory;

const StyledDiv = styled.div`
    width:70%;
    margin:0 auto;
`;
