import React from 'react';
import styled from 'styled-components';

const What_is_Javascript = () => {
    return (
        <StyledUl>
            <StyledLi>
            const는 상수(변하지 않는 값)를 위해 사용한다. 하지만 반드시 상수만을 위해 사용하지는 않는다.
            </StyledLi>
            <StyledLi>
            let은 재할당이 자유로우나 const는 재할당이 금지된다. 주의할 점은 const는 반드시 선언과 동시에 할당이 이루어져야 한다는 것이다. 그렇지 않으면 다음처럼 문법 에러(SyntaxError)가 발생한다.
            </StyledLi>
            <StyledLi>
            변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다.
            </StyledLi>
            <StyledLi>
            객체를 재할당하는 경우는 생각보다 흔하지 않다.
            const 키워드를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
            </StyledLi>
            <StyledLi>
            var와 let, 그리고 const는 다음처럼 사용하는 것을 추천한다.
            </StyledLi>
            <StyledLi>
            ES6를 사용한다면 var 키워드는 사용하지 않는다.
            </StyledLi>
            <StyledLi>
            재할당이 필요한 경우에 한정해 let 키워드를 사용한다.
            변경이 발생하지 않는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 보다 안전하다.
            </StyledLi>
        </StyledUl>
    );
};

export default What_is_Javascript;

const StyledUl = styled.ul`
    width:35%;
    margin: 0 auto 1rem;
    border: 1px solid #131361;
    padding:0 3rem 1rem;
`;
const StyledLi = styled.li`
    list-style-type:square;
    padding-top:1rem;
    line-height:1.5rem;
`;