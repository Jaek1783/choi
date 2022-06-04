import React, { useLayoutEffect } from "react";
import close from '../../../img/icon/cancel.png';
const Academy_items = (props)=>{
    return(
    <>
    {props.items.map(item=>{
        return(
            <li key={item.name} className="content_item academy_item"><img src={item.img} alt={item.name+"이미지"} onClick={()=>{
                const modal = document.querySelectorAll('.academy_modal');
                modal[item.id-1].style.display= 'block';
            }}/>
                <div>
                    <div className="academy_modal">
                        <div className="Certificates">
                            <img src={item.Certificates} alt={item.name+'수료증'} />
                        </div>
                        <img src={close} alt="닫기 이미지" className="close" onClick={()=>{
                            const modal = document.querySelectorAll('.academy_modal');
                            modal[item.id-1].style.display= 'none';
                        }}/>
                    </div>
                </div>
            </li>
        )   
    })}
    </>
)}; export default Academy_items;