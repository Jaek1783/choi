import React from "react";
import '../../css/study.css';
import {useMediaQuery} from "react-responsive";
import Academy_items from "./Academy_icon_item/Academy_items";
import academy01 from '../../img/study/academy/green.jpg';
import academy02 from '../../img/study/academy/inflearn.png';
import academy03 from '../../img/study/academy/sparta.png';
import Inflearn from "./Academy_icon_item/Inflearn";
import Green from "./Academy_icon_item/Green";
const Academy = ()=>{
    const items = [
        {name:'green',img:academy01,certificates:<Green/>, id:1},
        {name:'inf',img:academy02,certificates:<Inflearn/>, id:2},
        {name:'sparta',img:academy03, id:3},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:880px)"
        });
return(
    <>
    <ul className={isPc? "flex container_pc" : "flex container_mobile" }>
        <Academy_items items={items}/>
    </ul>
    </>
)
}; export default Academy;