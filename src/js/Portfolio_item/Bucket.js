import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
const Salad = ()=>{
    const data = useSelector((state) => state.Pofol.Card);
    return(
        <ContainerStyled>
            <CardStyled>
                <dt>{data[6].title}</dt>
                <dd>
                    {data[6].main}
                </dd>
            </CardStyled>
            <TextStyled>
            <ul>
            <li>스파르타코딩클럽 리액트기초반을 수강하며, 만든 버킷리스트 프로젝트</li>
                <li>
                    <p>학습기간</p>
                    <p>2022.06.10 ~ 2022.07.10</p>
                </li>
                <li>
                    <p>제작기간</p>
                    <p>최종 배포까지 작업소요시간 4일</p>
                </li>
                <li>
                    <p>사용스킬</p>
                    <p>리액트, 리덕스, 스타일드컴포넌트, 파이어베이스, 아마존 S3, Route53</p>
                </li>
                <li>
                    <BtnStyle onClick={()=>window.open('https://blog.naver.com/jaek1783/222807083800','_blank')}>
                        해설보러가기
                    </BtnStyle>
                    <BtnStyle onClick={()=>window.open(data[6].adress,'_blank')}>
                        사이트 구경가기
                    </BtnStyle>
                </li>
            </ul>
            </TextStyled>          
        </ContainerStyled>
    )
};export default Salad;
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
margin-right:1rem;
`;