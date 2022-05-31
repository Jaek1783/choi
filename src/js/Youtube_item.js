import React from "react";
import '../css/study.css';
import youtube_icon01 from '../img/study/youtube/s01.jpg';
import youtube_icon02 from '../img/study/youtube/s02.jpg';
import youtube_icon03 from '../img/study/youtube/s03.jpg';
import youtube_icon04 from '../img/study/youtube/s04.jpg';
import youtube_icon05 from '../img/study/youtube/s05.jpg';
import youtube_icon06 from '../img/study/youtube/s06.jpg';
import youtube_icon07 from '../img/study/youtube/s07.jpg';
import youtube_icon08 from '../img/study/youtube/s08.jpg';

const Youtube_items = ()=>{
    const youtube_items = [
        {id:1, icon:youtube_icon01, name:'코딩애플'},
        {id:1, icon:youtube_icon02, name:'이지웹'},
        {id:1, icon:youtube_icon03, name:'조코딩'},
        {id:1, icon:youtube_icon04, name:'개발바닥'},
        {id:1, icon:youtube_icon05, name:'노마드코더'},
        {id:1, icon:youtube_icon06, name:'데브리'},
        {id:1, icon:youtube_icon07, name:'생활코딩'},
        {id:1, icon:youtube_icon08, name:'코지코더'},
    ];
return(
    <ul className="study_content_container">
        {youtube_items.map(youtube_item=>{
            return(
                <li>
                    <p className="youtube_item"><img src={youtube_item.icon} alt={youtube_item.name+'아이콘'}/></p>
                    <p className="youtubeName">{youtube_item.name}</p>
                </li>
            )
        })}
    </ul>
)
}; export default Youtube_items;