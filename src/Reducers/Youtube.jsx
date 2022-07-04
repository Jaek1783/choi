//reducer
import youtube_icon01 from '../img/study/youtube/s01.jpg';
import youtube_icon02 from '../img/study/youtube/s02.jpg';
import youtube_icon03 from '../img/study/youtube/s03.jpg';
import youtube_icon04 from '../img/study/youtube/s04.jpg';
import youtube_icon05 from '../img/study/youtube/s05.jpg';
import youtube_icon06 from '../img/study/youtube/s06.jpg';
import youtube_icon07 from '../img/study/youtube/s07.jpg';
import youtube_icon08 from '../img/study/youtube/s08.jpg';
const initState = {
    Items : [
        {id:1, icon:youtube_icon01, name:'코딩애플', adress:'https://www.youtube.com/channel/UCSLrpBAzr-ROVGHQ5EmxnUg'},
        {id:2, icon:youtube_icon02, name:'이지웹', adress:'https://www.youtube.com/c/EasywebPublishing'},
        {id:3, icon:youtube_icon03, name:'제로초', adress:'https://www.youtube.com/c/ZeroChoTV'},
        {id:4, icon:youtube_icon04, name:'개발바닥', adress:'https://www.youtube.com/channel/UCSEOUzkGNCT_29EU_vnBYjg'},
        {id:5, icon:youtube_icon05, name:'노마드코더', adress:'https://www.youtube.com/c/NomadCoders'},
        {id:6, icon:youtube_icon06, name:'데브리', adress:'https://www.youtube.com/channel/UC1wWTimSew9rYzEZRVYVlbg'},
        {id:7, icon:youtube_icon07, name:'생활코딩', adress:'https://www.youtube.com/c/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A91'},
        {id:8, icon:youtube_icon08, name:'코지코더', adress:'https://www.youtube.com/c/kossiecoder'},
    ]
}

//Action
const YOUTUBE = "video/YOUTUBE";

export function CreateYoutube(youtube){
    return{type:YOUTUBE, youtube};
}
export default function reducer(state=initState, action={}){
    switch(action.type){
        default:
            return state;
    }
}