import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
const Cafe= ()=>{
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
            <dt className={isPc ? "title":tabletOrMobile}>{data[0].title}</dt>
                <dd>
                    {data[0].main}
                </dd>
            </dl>
            <div className='desc'>
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
            </div>          
        </div>
    )
};export default Cafe;

const TextStyled = styled.div`

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