import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
function Tetris(){
    const data = useSelector((state) => state.Pofol.Card);
    return(
        <ContainerStyled>
            <CardStyled>
                <dt>{data[1].title}</dt>
                <dd>
                    {data[1].main}
                </dd>
            </CardStyled>
            <TextStyled>
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
            </TextStyled>          
        </ContainerStyled>
    )
}export default Tetris;
const ContainerStyled = styled.div`
    width:70%;
    padding-top:3rem;
    display:flex;
    justify-content:space-evenly;
`;
const CardStyled = styled.dl`
    width:20rem;
    height:25rem;
    
    dt{ padding-top:3rem;
        padding-bottom:8rem;
        text-align:center;
        border:1px solid #ccc;
        border-radius:15px 15px 0 0;
        font-size:20px;
        font-weight:bold;
        white-space:pre;
    }
    dd{
        background-color:#131361;
        padding:1rem;
        border-radius:0 0 15px 15px;
    }
`;

const TextStyled = styled.div`
position:relative;
border:1px solid #ccc;
height:300px;
border-radius:15px;
padding:3rem;
    li{
        padding:1rem;
    }
    li:last-child{
        text-align:right;
    }
`;
const BtnStyle = styled.button`
width:100px;
height:50px;
background-color:#131361;
color:#fff;
border-radius:15px;
`;