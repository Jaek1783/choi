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
const Study = [
    {id:1, title:"영상들", link:"/study/"},
    {id:2, title:"이론들", link:"/study/"},
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
    {id:3, title: 'introduce My Self', link:"/portfolio/"},             
    {id:4, title: 'React CRUD post site', link:"/portfolio/"},             
    {id:5,  title: 'Redux in React', link:"/portfolio/"}             
];
const blog = [
    {id:1, title: '2022.03.01 ~ 2022.03 27'},
    {id:2, title: '2022.03.15 ~ 2022.03.18'},
    {id:3, title: '2022.03.25 ~ 2022.03.28'},
    {id:4, title: '2022.03.30 ~ 2022.04.01'},
    {id:5, title: '2022.04.05 ~ 2022.04.18'},
    {id:6, title: '2022.04.24 ~ 2022.04.28'},
    {id:7, title: '2022.05.01 ~ 2022.05.25'},
    {id:8, title: '2022.05.26 ~ 2022.06.10'},
    {id:9, title: '2022.06.22 ~ 2022.06.23'},
    {id:10, title: '2022.06.24 ~ 2022.07.03'},
];
// Action
const ABOUT = "article/ABOUT";
const SKILLS = "article/SKILLS";
const STUDY = "article/STUDY";
const VIDEO = "article/VIDEO";
const THEORY = "article/THEORY";
const CARD = "article/CARD";
const BLOG = "article/BLOG";

//CREATE Action
export function CreateAbout(about){
    return{type:ABOUT, about};
};
export function CreateSkills(skills){
    return{type:SKILLS, skills};
};
export function CreateStudy(study){
    return{type:STUDY, study};
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
export function CreateBlog(blog){
    return{type:BLOG, blog};
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
        case "article/STUDY":{
            return{Article:Study};
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
        case "article/BLOG":{
            return{Article:blog};
        }
        default:
            return state;
    }
}