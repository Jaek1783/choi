import React from 'react';
import styled from 'styled-components';

const What_is_Javascript = () => {
    return (
        <StyledUl>
            <StyledLi>1995년 당시 약 90%의 시장 점유율로 웹 브라우저 시장을 지배하고 있던 넷스케이프 커뮤니케이션즈(Netscape comunications)는
                 정적인 HTML을 동적으로 표현하기 위해 경량의 프로그래밍 언어를 도입하기로 결정했다.
                그래서 탄생한 것이 브렌던 아이크(Brendan Eich)가 개발한 자바스크립트이다.</StyledLi>
            <StyledLi>
            자바스크립트는 1996년 3월 넷스케이프 커뮤니케이션즈의 웹 브라우저인 Netscape Navigator 2에 탑재되었고 “Mocha”로 명명되었다.
            그해 9월 “LiveScript”로 이름이 변경되었고, 12월 “JavaScript”로 최종 명명되었다.
            </StyledLi>
            <StyledLi>
            이렇게 탄생한 자바스크립트는 현재 모든 브라우저의 표준 프로그래밍 언어가 되었다. 그러나 자바스크립트가 순탄하게 성장했던 것은 아니다.
            자바스크립트가 탄생한 뒤 얼마 지나지 않아 자바스크립트의 파생 버전인 JScript가 출시되어 자바스크립트는 위기를 맞게 된다.
            </StyledLi>
            <StyledLi>
            1996년 8월, 마이크로소프트는 자바스크립트의 파생 버전인 “JScript”를 Internet Explorer 3.0에 탑재하였다
            그런데 문제는 JScript와 자바스크립트가 표준화되지 못하고 적당히 호환되었다는 것이다.
            즉, 자사 브라우저의 시장 점유율을 점유하기 위해 자사 브라우저에서만 동작하는 기능을 경쟁적으로 추가하기 시작했다는 것이다.
            이로 인해 브라우저에 따라 웹 페이지가 정상 동작하지 않는 크로스 브라우징 이슈가 발생하기 시작했고 모든 브라우저에서 동작하는 웹 페이지를 개발하는 것은 무척 어려워졌다.
            </StyledLi>
        </StyledUl>
    );
};

export default What_is_Javascript;

const StyledUl = styled.ul`
    width:35%;
    margin:0 auto;
    border: 1px solid #131361;
    padding:3rem;
`;
const StyledLi = styled.li`
    list-style-type:square;
    padding-top:1rem;
    line-height:2rem;
`;