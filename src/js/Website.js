import React from "react";
import '../css/study.css';
import {useMediaQuery} from "react-responsive";

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
    const isMobile = useMediaQuery({
        query:"(max-width:880px)"
        });
    return(
    <ul className={isPc? "adress_container_pc flex":"adress_container_mobile flex "}>
    {contents.map(adress=>{
        return(
            <li key={adress.name} className={isPc? "adress_item_pc":"adress_item_mobile"}
            onClick={(e)=>{
                window.open(adress.adress,'_blank');
                }}>{adress.name}</li>
        )
    })}
    </ul>
    )
}; export default Website;