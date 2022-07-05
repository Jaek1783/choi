import React from "react";
import '../../css/study.css';
import styled from "styled-components";
import Website_icon_item from "./Website_icon_item/Website_icon_item";
import coding from "./../../img/study/website/coding.png";
import poiema from "./../../img/study/website/poiema.png";
import mdn from "./../../img/study/website/mdn.png";
import w3s from "./../../img/study/website/w3s.png";

const Website = ()=>{
    const contents = [
        {name:'코딩팩토리', img:coding, adress:'https://www.codingfactory.net/'},
        {name:'포이마웹', img:poiema, adress:'https://poiemaweb.com/'},
        {name:'MDN', img:mdn, adress:'https://developer.mozilla.org/ko/'},
        {name:'W3S', img:w3s, adress:'https://www.w3schools.com/'},
    ];
    return(
    <Container>
        <Website_icon_item contents={contents}/>
    </Container>
    )
}; export default Website;

const Container = styled.ul`
width:70%;
margin:0 auto;
display:flex;
justify-content: center;
flex-wrap: wrap;
`;