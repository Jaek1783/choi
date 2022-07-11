//initState
import Green01 from '../img/study/academy/green_Certificates01.png';
import Green02 from '../img/study/academy/green_Certificates02.png';
import Green03 from '../img/study/academy/green_Certificates03.png';
import Green04 from '../img/study/academy/green_Certificates04.png';
import Inflearn01 from '../img/study/academy/inflearn_Certificates01.png';
import Inflearn02 from '../img/study/academy/inflearn_Certificates02.png';
import Sparta from '../img/study/academy/sparta_Certificates01.jpeg';

const initState = {
    items:[
        {id:1, item: <img src={Green04} alt="그린00" />},
        {id:2, item:<img src={Green01} alt="그린01" />},
        {id:3, item:<img src={Green02} alt="그린02" />},
        {id:4, item:<img src={Green03} alt="그린03" />},
        {id:5, item:<img src={Green04} alt="그린04" />},
        {id:6, item:<img src={Green01} alt="그린05" />},
    ]
}
const green = [
    {id:1, item: <img src={Green04} alt="그린04" />},
    {id:2, item:<img src={Green01} alt="그린01" />},
    {id:3, item:<img src={Green02} alt="그린02" />},
    {id:4, item:<img src={Green03} alt="그린03" />},
    {id:5, item:<img src={Green04} alt="그린04" />},
    {id:6, item:<img src={Green01} alt="그린01" />},
];

const inf = [
    {id:1, item: <img src={Inflearn02} alt="인프런02" />},
    {id:2, item:<img src={Inflearn01} alt="인프런01" />},
    {id:3, item:<img src={Inflearn02} alt="인프런02" />},
    {id:4, item:<img src={Inflearn01} alt="인프런01" />},
];

const sparta = [
    {id:1, item:<img src={Sparta} alt="스파르타코딩클럽01"/>},
    {id:2, item:<img src={Sparta} alt="스파르타코딩클럽01"/>},
    {id:3, item:<img src={Sparta} alt="스파르타코딩클럽01"/>},
    {id:4, item:<img src={Sparta} alt="스파르타코딩클럽01"/>},
];
//Action
const GREEN = "academy/GREEN";
const INFLEARN = "academy/INFLEARN";
const SPARTA = "academy/SPARTA";

export function CreateGreen(green){
    return{type:GREEN, green};
}
export function CreateInflearn(inf){
    return{type:INFLEARN, inf};
}
export function CreateSparta(sparta){
    return{type:SPARTA, sparta};
}
export default function reducer(state=initState, action={}){
    switch(action.type){
        case "academy/GREEN":{
            return{items:green};
        }
        case "academy/INFLEARN":{
            return{items:inf};
        }
        case "academy/SPARTA":{
            return{items:sparta};
        }
        default:
            return state;
    }
}