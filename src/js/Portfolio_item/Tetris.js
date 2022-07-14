import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
const Tetris = ()=>{
    const data = useSelector((state) => state.Pofol.Card);
    const isPc = useMediaQuery ({
        query : "(min-width : 1330px)"
        });
    const isTablet = useMediaQuery ({
        query : "(min-width : 800px) and (max-width : 1329px)"
        });
    const tabletOrMobile = isTablet ? "Ttitle":"Mtitle";
    return(
        <div className={isPc ? 'Container':'MContainer'}>
            <dl className='card'>
                <dt className={isPc ? "title":tabletOrMobile}>{data[1].title}</dt>
                <dd>
                    {data[1].main}
                </dd>
            </dl>
            <div className='desc'>
                <ul>
                    <li>2022년 3월, 처음 유튜브를 보고 만든 테트리스게임</li>
                    <li>ul,li태그로 만든 테트리스게임</li>
                    <li>
                        <p>제작기간</p>
                        <p>2022.03.15 ~ 2022.03.18</p>
                    </li>
                    <li>첫 클론코딩 사이트 유튜브 보며 따라하는데 눈빠지는 줄 알았다.</li>
                    <li><BtnStyle onClick={()=>window.open(data[1].adress,'_blank')}>사이트 구경가기</BtnStyle></li>
                </ul>
            </div>          
        </div>
    )
};export default Tetris;
const BtnStyle = styled.button`
width:100px;
height:50px;
background-color:#131361;
color:#fff;
border-radius:15px;
`;