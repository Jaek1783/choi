import React from "react";
import '../../css/study.css';
import {useMediaQuery} from "react-responsive";
import Website_icon_item from "./Website_icon_item/Website_icon_item";

const Website = ()=>{
    const contents = [
        {name:'코딩팩토리', adress:'https://www.codingfactory.net/'},
        {name:'포이마웹', adress:'https://poiemaweb.com/'},
        {name:'엠디엔', adress:'https://developer.mozilla.org/ko/'},
        {name:'W3S', adress:'https://www.w3schools.com/'},
        {name:'노마드코더', adress:'https://nomadcoders.co/'},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
    return(
    <ul className={isPc? "adress_container_pc flex":"adress_container_mobile"}>
        <Website_icon_item contents={contents}/>
    </ul>
    )
}; export default Website;