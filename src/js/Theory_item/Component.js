import React from 'react';
import styled from 'styled-components';
const What_is_Javascript = () => {
    return (
        <StyledUl>
            <StyledLi>라이프 사이클 함수는 클래스형 컴포넌트에서만 사용할 수 있다.</StyledLi>
            <StyledLi>
              <p>constructor()</p>
              생성자 함수라고도 부릅니다. 컴포넌트가 생성되면 가장 처음 호출되는 함수다.
            </StyledLi>
            <StyledLi>
                <p>render()</p>
                컴포넌트의 모양을 정의하는 함수다.
                state, props에 접근해서 데이터를 보여줄 수 있다.
            </StyledLi>
            <StyledLi>
                <p>componentDidMount()</p>
                컴포넌트가 화면에 나타나는 것을 마운트(Mount)한다고 표현한다.
                didMount()는 마운트가 완료 되었다는 뜻이다. 
                이 함수는 첫번째 렌더링을 마친 후에만 딱 한 번 실행된다.
            </StyledLi>
            <StyledLi>
                <p>componentDidUpdate(prevProps, prevState, snapshot)</p>
                리렌더링을 완료한 후 실행되는 함수다.
            </StyledLi>
        </StyledUl>
    );
};

export default What_is_Javascript;

const StyledUl = styled.ul`
    margin:0 auto;
    border: 1px solid #131361;
    padding:3rem;
`;
const StyledLi = styled.li`
    list-style-type:square;
    padding-top:1rem;
    line-height:2rem;
`;