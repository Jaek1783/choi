// Pofol
import pofol01 from '../img/portfolio/port01.png';
import pofol02 from '../img/portfolio/tetris.gif';
import pofol03 from '../img/portfolio/bootstrap.png';
import pofol04 from '../img/portfolio/post.png';
import pofol05 from '../img/portfolio/salad.png';
import pofol06 from '../img/portfolio/redux.png';

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
       title: '[Bootstrap coding site] introduce My Self',
       adress: 'https://jaek1783.github.io/Bootstrap',
       id:3
      },             
       {main: <img src={pofol04} alt="포트폴리오 사진04"/>,
       title: '[React CRUD post site] 프론트엔드 게시판',
       adress: 'https://jaek1783.github.io/post',
       id:4
      },             
       {main: <img src={pofol05} alt="포트폴리오 사진05"/>,
       title: '[React pull site]',
       adress: 'https://jaek1783.github.io/salad',
       id:5
      },             
       {main: <img src={pofol06} alt="포트폴리오 사진06"/>,
       title: '[Redux in React]',
       adress: 'https://jaek1783.github.io/reduxStudy',
       id:6
      }             
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