import React from "react";
import '../css/website.css';

const Website = ()=>{
    const contents = [
        {name:'코딩팩토리', adress:'https://www.codingfactory.net/'},
        {name:'포이마웹', adress:'https://poiemaweb.com/'},
        {name:'엠디엔', adress:'https://developer.mozilla.org/ko/'},
        {name:'W3S', adress:'https://www.w3schools.com/'}
    ];
    return(
    <ul>
    {contents.map(adress=>{
        return(
            <li key={adress.name} className="adress_item">{adress.name+" : "+adress.adress}</li>
        )
    })}
    </ul>
    )
}; export default Website;