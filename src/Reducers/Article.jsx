// About Article

const initState = {
    Article : [
        {id:1, title:"자기소개", link:"/choi/"},
        {id:2, title:"지원동기", link:"/choi/"},
    ]
};
const About = [
    {id:1, title:"자기소개", link:"/choi/"},
    {id:2, title:"지원동기", link:"/choi/"},
];
const Skill = [
    {id:1, title:"기본", link:"/skills/"},
    {id:2, title:"디자인", link:"/skills/"},
    {id:3, title:"코딩", link:"/skills/"},
];
const Video = [
    {id:1, title:"내가 본 유튜브", link:"/study/practice/"},
    {id:2, title:"내가 본 강의들", link:"/study/practice/"},
    {id:3, title:"내가 본 사이트들", link:"/study/practice/"},
];
const Theory = [
    {id:1, title:"자바스크립트란?", link:"/study/theory/"},
    {id:2, title:"ES6", link:"/study/theory/"},
    {id:3, title:"const의 등장", link:"/study/theory/"},
    {id:4, title:"var와 let의 차이", link:"/study/theory/"},
    {id:5, title:"라이프사이클이란?", link:"/study/theory/"},
    {id:6, title:"라이프사이클 함수", link:"/study/theory/"},
];
const Card = [
    {id:1, title: '0ssaem.com', link:"/portfolio/"},
    {id:2, title: 'Tetris-Game', link:"/portfolio/"},                               
    {id:3,  title: 'Salad Web site', link:"/portfolio/"},             
    {id:4,  title: 'bucket_list', link:"/portfolio/"},             
    {id:5,  title: 'YouKnowMe? site', link:"/portfolio/"},             
];
// Action
const ABOUT = "article/ABOUT";
const SKILLS = "article/SKILLS";
const VIDEO = "article/VIDEO";
const THEORY = "article/THEORY";
const CARD = "article/CARD";

//CREATE Action
export function CreateAbout(about){
    return{type:ABOUT, about};
};
export function CreateSkills(skills){
    return{type:SKILLS, skills};
};
export function CreateTheory(theory){
    return{type:THEORY, theory};
}
export function CreateVideo(video){
    return{type:VIDEO, video};
}
export function CreateCard(card){
    return{type:CARD, card};
}
//Reducer
export default function reducer(state=initState, action = {}){
    switch (action.type){
        case "article/ABOUT":{

            // const Abouts = [About, action.about];
            return{Article:About};
        }
        case "article/SKILLS":{
            // const Skills = [Skill , action.skills];
            return{Article:Skill};
        }
        case "article/THEORY":{
            return{Article:Theory};
        }
        case "article/VIDEO":{
            return{Article:Video};
        }
        case "article/CARD":{
            return{Article:Card};
        }
        default:
            return state;
    }
}