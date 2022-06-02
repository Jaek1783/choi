import React from "react";
import '../css/study.css';
import {useMediaQuery} from "react-responsive";
import Academy_items from "./Academy_items";
const Academy = ()=>{
    const isPc = useMediaQuery({
        query:"(min-width:880px)"
        });
return(
    <ul className={isPc? "flex container_pc" : "flex container_mobile" }>
        <Academy_items/>
    </ul>
)
}; export default Academy;