import React from "react";
import styles from '../css/text.module.css';
import {useMediaQuery} from "react-responsive";
import '../css/practice.css';
import academy from '../img/study/academy/academy.png';
import youtube from '../img/study/youtube/youtube.png';
import website from '../img/study/website/website.png';

import Academy from './Study_icon_item/Academy';
import Youtube from "./Study_icon_item/Youtube";
import Website from "./Study_icon_item/Website";
const Practice =()=>{
    const study_items = [
        {id:1,name:'Academy',icon:academy, contents:<Academy/>, info_front:'수료 완료',info_end:'강의 목록을'},
        {id:2,name:'Youtube',icon:youtube, contents:<Youtube/>, info_front:'구독',info_end:'유튜브 채널을'},
        {id:3,name:'Website',icon:website, contents:<Website/>, info_front:'참고',info_end:'웹사이트 링크를'},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
    const item_pc = ["study_item flex item_pc ", styles.subText].join('');
    const item_mobile = ["study_item flex item_mobile ", styles.subText].join('');
    const item_container_pc = "study_item_container flex";
    const item_container_mobile = "study_item_container ";
    return(
    <div>
        <ul className="study_container">
            {study_items.map(item=>{
                return(
                    <li className={isPc? item_container_pc:item_container_mobile } key={item.name}>
                        <p className={isPc? item_pc:item_mobile}><img src={item.icon} alt={item.name+'아이콘'}/>
                        {item.name}<br/>
                        <span>{item.info_front+' 및 학습 중인 '}<br className={isPc? 'br_block': 'br_none'}/>{item.info_end+' 불러옵니다.'}</span></p>
                        <>{item.contents}</>
                    </li>
                )
            })}
        </ul>
    </div>
)}; export default Practice;