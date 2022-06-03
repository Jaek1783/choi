import React from "react";
import {useMediaQuery} from "react-responsive";
const Website_icon_item = (props)=>{
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
    return(
        <>
            {props.contents.map(adress=>{
        return(
            <li key={adress.name} className={isPc? "adress_item_pc":"adress_item_mobile"}
            onClick={(e)=>{
                window.open(adress.adress,'_blank');
                }}>{adress.name}</li>
        )
    })}
        </>
    )
}; export default Website_icon_item;