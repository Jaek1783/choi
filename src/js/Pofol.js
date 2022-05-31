import styles from '../css/text.module.css';
import pofol01 from '../img/portfolio/port01.png';
import pofol02 from '../img/portfolio/tetris.gif';
import pofol03 from '../img/portfolio/port03.png';
import pofol04 from '../img/portfolio/post.png';
import pofol05 from '../img/portfolio/salad.png';
import React,{useState} from 'react';
import {useMediaQuery} from "react-responsive";
import '../css/portfolio.css';
function Portfolio(){
    const cards = [
        {main: <img src={pofol01} alt="포트폴리오 사진01"/>,
         title: '[Renewal site Coding] 0ssaem.com',
         detail01: '첫 포트폴리오',
         detail02: '메인페이지를 원페이지 형식으로 제작',
         detail03: '자바스크립트로 만든 퍼블리싱 사이트',
         adress: 'https://jaek1783.github.io/BbangSsaem',
         id:1
        },
        {main: <img src={pofol02} alt="포트폴리오 사진02"/>,
        title: '[Youtube Clone coding] Tetris-Game',
        detail01:'캔버스가 아닌 <ul>태그와 <li>태그로 작성',
        detail02:'유튜브 클론코딩으로 만든 고전게임 테트리스',
        adress: 'https://jaek1783.github.io/Tetris-Game',
        id:2
       },
       {main: <img src={pofol03} alt="포트폴리오 사진03"/>,
       title: '[Bootstrap coding site] introduce My Self',
       detail01:'부트스트랩으로 만든 자기소개 페이지',
       detail02:'부트스트랩 사용 스킬 공부를 위해 제작',
       detail03:'경력, 스킬, 포부 등의 소개',
       adress: 'https://jaek1783.github.io/myself',
       id:3
      },             
       {main: <img src={pofol04} alt="포트폴리오 사진04"/>,
       title: '[React CRUD post site] 프론트엔드 게시판',
       detail01:'리액트 CRUD 게시판 구현',
       detail02:'javascript로 만든 타이핑 효과',
       adress: 'https://jaek1783.github.io/post',
       id:4
      },             
       {main: <img src={pofol05} alt="포트폴리오 사진05"/>,
       title: '[React pull site]',
       detail01:'리액트를 사용한 전체페이지 사이트',
       detail02:'브랜드소개페이지, 메뉴페이지 제작',
       detail03:'페이지 업그레이드 진행 중',
       adress: 'https://jaek1783.github.io/salad',
       id:5
      }             
    ];
    const isPc = useMediaQuery({
        query:"(min-width:1520px)"
        });
    const isTablet = useMediaQuery({
        query:"(max-width:1521px) and (min-width: 1400px)" 
    });
    const isMobile = useMediaQuery({
        query:"(max-width:1399px)"
        });
    const Tbox_Mbox = isTablet? 'Tbox':'Mbox';
    const cardT_cardM = isTablet? 'card cardT':'card cardM';
    return(
        <div>          
             <div id="portfolio" className="wrap">
                 <h2></h2>
                 <ul className={isPc? 'box':Tbox_Mbox}>
                     {cards.map(card=>{
                         return(
                        <li key={card.id}  className={isPc? "card cardPc":cardT_cardM} onClick={()=>window.open(card.adress,'_blank')}>
                            <p className='cardTitle'>{card.title}</p>
                                <dl className={styles.text}>
                                    <dt className={styles.subText}>{cards.title}</dt>
                                    <dd>
                                        <p className="spanText">Detail : </p>
                                        <ul>
                                            <li className="detail">{card.detail01}</li>
                                            <li className="detail">{card.detail02}</li>
                                            <li className="detail">{card.detail03}</li>
                                        </ul>
                                        <p className="spanText">adress : </p>
                                        <p className="detail">{card.adress}</p>
                                    </dd>
                                </dl>
                                <p className="img">
                                    {card.main}
                                </p>
                        </li>
                         )
                     })}
                 </ul>
                </div>   
        </div>
    )
}export default Portfolio;