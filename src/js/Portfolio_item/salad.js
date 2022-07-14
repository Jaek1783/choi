import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
const Salad = ()=>{
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
            <dt className={isPc ? "title":tabletOrMobile}>{data[4].title}</dt>
                <dd>
                    {data[4].main}
                </dd>
            </dl>
            <div className='desc'>
            <ul>
                <li>
                    <p>제작기간</p>
                    <p>2022.06.22 ~ 2022.06.23</p>
                </li>
                <li>샐러드판매 사이트의 회사소개사이트를 벤치마킹하여 디자인한 웹사이트</li>
                <li>업데이트 진행중</li>
                <li><BtnStyle onClick={()=>window.open(data[4].adress,'_blank')}>사이트 구경가기</BtnStyle></li>
            </ul>
            </div>          
        </div>
    )
};export default Salad;

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