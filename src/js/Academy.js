import React from "react";
import '../css/study.css';
import {useMediaQuery} from "react-responsive";
import Academy_items from "./Academy_items";
const Academy = ()=>{
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
return(
    <ul className={"flex container_pc"}>
        <Academy_items/>
    </ul>
)
}; export default Academy;