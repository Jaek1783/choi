// Pofol
import pofol01 from '../img/portfolio/port01.png';
import pofol02 from '../img/portfolio/tetris.gif';
import pofol03 from '../img/portfolio/salad.png';
import pofol04 from '../img/portfolio/bucket.png';
import pofol05 from '../img/portfolio/quiz.png';

const initState = {
     Card: [
        {main: <img src={pofol01} alt="포트폴리오 사진01"/>,
         title: '[Renewal site Coding]\n0ssaem.com',
         adress: 'https://jaek1783.github.io/BbangSsaem',
         id:1
        },
        {main: <img src={pofol02} alt="포트폴리오 사진02"/>,
        title: '[Youtube Clone coding]\nTetris-Game',
        adress: 'https://jaek1783.github.io/Tetris-Game',
        id:2
       },            
       {main: <img src={pofol03} alt="포트폴리오 사진03"/>,
       title: '[기획부터 배포까지 모두 다!]\nALL in One 사이트',
       adress: 'https://www.saladbrother.ml',
       id:3
      },                         
       {main: <img src={pofol04} alt="포트폴리오 사진04"/>,
       title: '[프로젝트01]\n나의버킷리스트',
       adress: 'https://www.buketlist.me',
       id:4
      },             
       {main: <img src={pofol05} alt="포트폴리오 사진05"/>,
       title: '[프로젝트02]\n나를아시나요?',
       adress: 'https://www.youknowme.tk',
       id:5
      },             
    ]
}

//Action
const CARD = "pofil/CARD";

//CREATE Action
export function CreateCards(card){
    return{type:CARD, card};
}
export default function reducer(state=initState, action={}){
    switch(action.type){
        default:
            return state;
    }
}