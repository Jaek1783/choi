import React from "react";
import '../css/study.css';
import {useMediaQuery} from "react-responsive";
import youtube_icon01 from '../img/study/youtube/s01.jpg';
import youtube_icon02 from '../img/study/youtube/s02.jpg';
import youtube_icon03 from '../img/study/youtube/s03.jpg';
import youtube_icon04 from '../img/study/youtube/s04.jpg';

const Youtube_table01 = ()=>{
    const youtube_items = [
        {id:1, icon:youtube_icon01, name:'코딩애플'},
        {id:2, icon:youtube_icon02, name:'이지웹'},
        {id:3, icon:youtube_icon03, name:'조코딩'},
        {id:4, icon:youtube_icon04, name:'개발바닥'},
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
}; export default Youtube_table01;