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
            <dt className={isPc ? "title":tabletOrMobile}>{data[7].title}</dt>
                <dd>
                    {data[7].main}
                </dd>
            </dl>
            <div className='desc'>
            <ul>
            <li>스파르타코딩클럽 리액트기초반을 수강하며, 만든 나를 아시나요? 프로젝트</li>
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
                    <BtnStyle onClick={()=>window.open('https://blog.naver.com/jaek1783/','_blank')}>
                        해설보러가기
                    </BtnStyle>
                    <BtnStyle onClick={()=>window.open(data[7].adress,'_blank')}>
                        사이트 구경가기
                    </BtnStyle>
                </li>
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
margin-right:1rem;
`;