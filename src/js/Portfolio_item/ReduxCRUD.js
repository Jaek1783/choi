import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
const ReduxCRUD = ()=>{
    const data = useSelector((state) => state.Pofol.Card);
    return(
        <ContainerStyled>
            <CardStyled>
                <dt>{data[5].title}</dt>
                <dd>
                    {data[5].main}
                </dd>
            </CardStyled>
            <TextStyled>
            <ul>
                <li>Redux C , R , U, D [클론코딩]</li>
                <li>Redux를 학습하기 위해 만든</li>
                <li>생활코딩 클론코딩 사이트</li>
                <li>
                    <p>제작기간</p>
                    <p>2022.06.22 ~ 2022.06.23</p>
                </li>
                <li>클론코딩을 통해 CRUD에 대한 내용을 학습하였다.</li>
                <li><BtnStyle onClick={()=>window.open(data[5].adress,'_blank')}>사이트 구경가기</BtnStyle></li>
            </ul>
            </TextStyled>          
        </ContainerStyled>
    )
};export default ReduxCRUD;
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