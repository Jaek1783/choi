import React from "react";
import styles from '../css/text.module.css';
import {useMediaQuery} from "react-responsive";
import '../css/study.css';
import academy from '../img/study/academy/academy.png';
import youtube from '../img/study/youtube/youtube.png';
import website from '../img/study/website/website.png';

import Academy from './Academy';
import Youtube from "./Youtube";
import Website from "./Website";
const Study =()=>{
    const study_items = [
        {id:1,name:'Academy',icon:academy, contents:<Academy/>},
        {id:2,name:'Youtube',icon:youtube, contents:<Youtube/>},
        {id:3,name:'Website',icon:website, contents:<Website/>},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
    const item_pc = ["study_item flex item_pc ", styles.subText].join('');
    const item_mobile = ["study_item flex item_mobile ", styles.subText].join('');
    const item_container_pc = "study_item_container study_pc flex";
    const item_container_mobile = "study_item_container study_mobile";
    return(
    <div>
        <ul className="study_container">
            {study_items.map(item=>{
                return(
                    <li className={isPc? item_container_pc:item_container_mobile } key={item.name}>
                        <p className={isPc? item_pc:item_mobile}><img src={item.icon} alt={item.name+'아이콘'}/>{item.name}<br/><span>{'내용을 클릭하시면'}<br className={isPc? 'br_block': 'br_none'}/>{' 해당 링크로 연결됩니다.'}</span></p>
                        <>{item.contents}</>
                    </li>
                )
            })}
        </ul>
    </div>
)}; export default Study;