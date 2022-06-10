import React from "react";
import Inflearn01 from '../../../img/study/academy/inflearn_Certificates01.png';
import Inflearn02 from '../../../img/study/academy/inflearn_Certificates02.png';
const Inflearn = ()=>{
    const Inflearn_items = [
        {inflearn_item:Inflearn01, alt:'인프런00'},
        {inflearn_item:Inflearn02, alt:'인프런01'},
        {inflearn_item:Inflearn01, alt:'인프런02'},
        {inflearn_item:Inflearn02, alt:'인프런03'},
        {inflearn_item:Inflearn01, alt:'인프런04'},
        {inflearn_item:Inflearn02, alt:'인프런05'},
    ]
    return(
        <>
        {Inflearn_items.map(inf_item=>{
            return(
                <div key={inf_item.alt} className="inf_item _item _item">
                    <img src={inf_item.inflearn_item} alt={inf_item.alt+'수료증'}/>
                </div>
            )
        })}
        </>
    )
}; export default Inflearn;