import React from "react";
import styles from '../css/text.module.css';
import '../css/study.css';
import academy from '../img/study/academy/academy.png';
import youtube from '../img/study/youtube/youtube.png';
import website from '../img/study/website/website.png';

import Academy_item from './Academy_item';
import Youtube_item from "./Youtube_item";
const Study =()=>{
    const study_items = [
        {id:1,name:'Academy',icon:academy, contents:<Academy_item/>},
        {id:2,name:'Youtube',icon:youtube, contents:<Youtube_item/>},
        {id:3,name:'Website',icon:website},
    ];
    return(
    <div>
        <ul className="study_container">
            {study_items.map(item=>{
                return(
                    <li className="study_item_container" key={item.id}>
                        <p className={["study_item ", styles.subText].join('')}><img src={item.icon} alt={item.name+'아이콘'}/>{item.name}</p>
                        <div>{item.contents}</div>
                    </li>
                )
            })}
        </ul>
    </div>
)}; export default Study;