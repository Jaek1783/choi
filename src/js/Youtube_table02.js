import React from "react";
import '../css/study.css';
import {useMediaQuery} from "react-responsive";
import youtube_icon05 from '../img/study/youtube/s05.jpg';
import youtube_icon06 from '../img/study/youtube/s06.jpg';
import youtube_icon07 from '../img/study/youtube/s07.jpg';
import youtube_icon08 from '../img/study/youtube/s08.jpg';

const Youtube_table02 = ()=>{
    const youtube_items = [
        {id:5, icon:youtube_icon05, name:'노마드코더'},
        {id:6, icon:youtube_icon06, name:'데브리'},
        {id:7, icon:youtube_icon07, name:'생활코딩'},
        {id:8, icon:youtube_icon08, name:'코지코더'},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
return(
    <ul className={isPc? "flex container_pc":"flex container_mobile"}>
        {youtube_items.map(youtube_item=>{
            return(
                <li key={youtube_item.name} className="content_item">
                    <p className="youtube_item"><img src={youtube_item.icon} alt={youtube_item.name+'아이콘'}/></p>
                    <p className="youtubeName">{youtube_item.name}</p>
                </li>
            )
        })}
    </ul>
)
}; export default Youtube_table02;