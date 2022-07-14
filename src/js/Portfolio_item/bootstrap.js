import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
const Bootstrap = ()=>{
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
            <dt className={isPc ? "title":tabletOrMobile}>{data[2].title}</dt>
                <dd>
                    {data[2].main}
                </dd>
            </dl>
            <div className='desc'>
            <ul>
                <li>부트스트랩으로 만든 간단한 페이지</li>
                <li>
                    <p>제작기간</p>
                    <p>2022.03.25 ~ 2022.03.28</p>
                </li>
                <li></li>
                <li><BtnStyle onClick={()=>window.open(data[2].adress,'_blank')}>사이트 구경가기</BtnStyle></li>
            </ul>
            </div>          
        </div>
    )
};export default Bootstrap;

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