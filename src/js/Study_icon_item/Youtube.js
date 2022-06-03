import React from "react";
import '../../css/study.css';
import {useMediaQuery} from "react-responsive";

import Youtube_table01 from "./Youtube_icon_item/Youtube_table01";
import Youtube_table02 from "./Youtube_icon_item/Youtube_table02";
const Youtube = ()=>{
    const youtube_items = [
        {name:'table01', content:<Youtube_table01/>},
        {name:'table02', content:<Youtube_table02/>}
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
    const isMobile = useMediaQuery({
        query:"(max-width:879px)"
        });
    const tablet_mobile = isMobile? "youtube_flex flex":'youtube_block';
    
return(
    <div className={isPc? "flex":tablet_mobile}>
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