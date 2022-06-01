import React from "react";

import academy01 from '../img/study/academy/green.jpg';
import academy02 from '../img/study/academy/inflearn.png';
import academy03 from '../img/study/academy/fastcampus.png';
import academy04 from '../img/study/academy/sparta.png';
const Academy_items = ()=>{
    const items = [
        {name:'green',img:academy01},
        {name:'inf',img:academy02},
        {name:'fast',img:academy03},
        {name:'sparta',img:academy04},
    ];
    return(
    <>
    {items.map(item=>{
        return(
            <li key={item.name} className="content_item academy_item"><img src={item.img} alt={item.name+"이미지"} /></li>
        )
    })}
    </>
)}; export default Academy_items;