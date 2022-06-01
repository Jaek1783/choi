import React from "react";
import '../css/study.css';
import {useMediaQuery} from "react-responsive";

import Youtube_table01 from "./Youtube_table01";
import Youtube_table02 from "./Youtube_table02";
const Youtube = ()=>{
    const youtube_items = [
        {name:'table01', content:<Youtube_table01/>},
        {name:'table02', content:<Youtube_table02/>}
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
return(
    <div className={isPc? "flex":"youtube_block"}>
        {youtube_items.map(item=>{
            return(
                <div key={item.name}>
                {item.content}
                </div>
            )
        })}
    </div>
)
}; export default Youtube;