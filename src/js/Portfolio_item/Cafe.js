import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
function Cafe(){
    const data = useSelector((state) => state.Pofol.Card);
    return(
        <ContainerStyled>
            <CardStyled>
                <dt>{data[0].title}</dt>
                <dd>
                    {data[0].main}
                </dd>
            </CardStyled>
            <TextStyled>
            <ul>
                <li>2022년 3월, 처음 시작으로 만든 퍼블리싱 사이트</li>
                <li>자주가는 카페 [마포구청역 카페] 빵쌤 사이트 하드코딩</li>
                <li>
                    <p>제작기간</p>
                    <p>2022.03.01 ~ 2022.03.27</p>
                </li>
                <li>첫 포트폴리오라 그런가 단순한 것 같지만 만들기 오래걸린 사이트 </li>
                <li><BtnStyle onClick={()=>window.open(data[0].adress,'_blank')}>사이트 구경가기</BtnStyle></li>
            </ul>
            </TextStyled>          
        </ContainerStyled>
    )
}export default Cafe;
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