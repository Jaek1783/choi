import React from "react";
import Green01 from '../../../img/study/academy/green_Certificates01.png';
import Green02 from '../../../img/study/academy/green_Certificates02.png';
import Green03 from '../../../img/study/academy/green_Certificates03.png';
import Green04 from '../../../img/study/academy/green_Certificates04.png';
const Green = ()=>{
    const Green_items = [
        {Green_item:Green01, alt:'그린01'},
        {Green_item:Green02, alt:'그린02'},
        {Green_item:Green03, alt:'그린03'},
        {Green_item:Green04, alt:'그린04'},
    ];
    return(
        <>
        {Green_items.map(green_item=>{
            return(
                <div key={green_item.alt} className="green_item">
                    <img src={green_item.Green_item} alt={green_item.alt+'수료증'} />
                </div>
            )
        })}
        </>
    )
}; export default Green;