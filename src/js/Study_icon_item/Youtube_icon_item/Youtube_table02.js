import React from "react";
import '../../../css/study.css';
import {useMediaQuery} from "react-responsive";
import youtube_icon05 from '../../../img/study/youtube/s05.jpg';
import youtube_icon06 from '../../../img/study/youtube/s06.jpg';
import youtube_icon07 from '../../../img/study/youtube/s07.jpg';
import youtube_icon08 from '../../../img/study/youtube/s08.jpg';

const Youtube_table02 = ()=>{
    const youtube_items = [
        {id:5, icon:youtube_icon05, name:'노마드코더', adress:'https://www.youtube.com/c/NomadCoders'},
        {id:6, icon:youtube_icon06, name:'데브리', adress:'https://www.youtube.com/channel/UC1wWTimSew9rYzEZRVYVlbg'},
        {id:7, icon:youtube_icon07, name:'생활코딩', adress:'https://www.youtube.com/c/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A91'},
        {id:8, icon:youtube_icon08, name:'코지코더', adress:'https://www.youtube.com/c/kossiecoder'},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1740px)"
        });
        const isMobile = useMediaQuery({
            query:"(max-width:879px)"
            });
        const mobile_ck = isMobile? 'youtube_container_mobile flex':'youtube_container_tablet flex';    
    return(
        <ul className={isPc? "youtube_container_pc flex":mobile_ck}>
        {youtube_items.map(youtube_item=>{
            return(
                <li key={youtube_item.name} className="content_item">
                    <p className="youtube_item"><img src={youtube_item.icon} alt={youtube_item.name+'아이콘'} onClick={()=>{
                        window.open(youtube_item.adress,'_blank');
                    }}/></p>
                    <p className="youtubeName">{youtube_item.name}</p>
                </li>
            )
        })}
    </ul>
)
}; export default Youtube_table02;