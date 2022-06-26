import React from "react";
import {useMediaQuery} from "react-responsive";
import '../css/study.css';
import Practice from "./Practice";
import styled from 'styled-components';
const Study =()=>{
    return(
    <StyledDiv>
        <Practice/>
        <Practice/>
    </StyledDiv>
)}; export default Study;

const StyledDiv = styled.div`
        display:flex;
`;