// About Article

const initState = {
    Article : [
        {id:1, title:"자기소개"},
        {id:2, title:"경력"},
        {id:3, title:"지원동기"},
        {id:4, title:"포부와각오"},
    ],
    // Skill : [
    //     {id:1, title:"기본"},
    //     {id:1, title:"디자인"},
    //     {id:1, title:"코딩"},
    // ]
};
const About = [
    {id:1, title:"자기소개"},
    {id:2, title:"경력"},
    {id:3, title:"지원동기"},
    {id:4, title:"포부와각오"},
];
const Skill = [
    {id:1, title:"기본"},
    {id:1, title:"디자인"},
    {id:1, title:"코딩"},
];

// Action
const ABOUT = "article/ABOUT";
const SKILLS = "article/SKILLS";

//CREATE Action
export function CreateAbout(about){
    return{type:ABOUT, about};
}
export function CreateSkills(skills){
    return{type:SKILLS, skills};
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
        default:
            return state;
    }
}