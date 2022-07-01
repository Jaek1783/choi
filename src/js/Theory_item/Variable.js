import React from 'react';
import styled from 'styled-components';

const What_is_Javascript = () => {
    return (
        <StyledUl>
            <StyledLi>
            ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다.
            var 키워드로 선언된 변수는 아래와 같은 특징이 있다. 이는 다른 언어와는 다른 특징으로 주의를 기울이지 않으면 심각한 문제를 일으킨다.
            </StyledLi>
            <StyledLi>
            대부분의 문제는 전역 변수로 인해 발생한다. 전역 변수는 간단한 애플리케이션의 경우, 사용이 편리하다는 장점이 있지만 불가피한 상황을 제외하고 사용을 억제해야 한다. 전역 변수는 유효 범위(scope)가
            넓어서 어디에서 어떻게 사용될 것인지 파악하기 힘들며, 비순수 함수(Impure function)에 의해 의도하지 않게 변경될 수도 있어서 복잡성을 증가시키는 원인이 된다. 따라서 변수의 스코프는 좁을수록 좋다.
            </StyledLi>
            <StyledLi>
            ES6는 이러한 var 키워드의 단점을 보완하기 위해 let과 const 키워드를 도입하였다.
            </StyledLi>
            <StyledLi>
            ES6는 블록 레벨 스코프를 따르는 변수를 선언하기 위해 let 키워드를 제공한다.
            </StyledLi>
            <StyledLi>
            let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다.
            var 키워드로는 동일한 이름을 갖는 변수를 중복해서 선언할 수 있었다.
            하지만, let 키워드로는 동일한 이름을 갖는 변수를 중복해서 선언할 수 없다.
            변수를 중복 선언하면 문법 에러(SyntaxError)가 발생한다.
            </StyledLi>
            <StyledLi>
            자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다.
            호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.
            하지만 var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
            이는 let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다.
            </StyledLi>
        </StyledUl>
    );
};

export default What_is_Javascript;

const StyledUl = styled.ul`
    margin: 0 auto 1rem;
    border: 1px solid #131361;
    padding:0 3rem 1rem;
`;
const StyledLi = styled.li`
    list-style-type:square;
    padding-top:1rem;
    line-height:1.5rem;
`;