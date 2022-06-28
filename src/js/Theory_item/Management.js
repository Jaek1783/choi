import React from 'react';
import styled from 'styled-components';
import lifecycle from './../../img/study/theory/lifecycle.png';
const What_is_Javascript = () => {
    return (
        <StyledUl>
            <StyledLi>
            먼저, DOM에 대해서 생각해 보자.
            DOM은 html 단위 하나하나를 객체로 생각하는 모델이다.
            예를 들면, 'div'라는 객체는 텍스트 노드, 자식 노드 등등, 하위의 어떤 값을 가지고 있을 것이다.
            이런 구조를 트리 구조라고 한다.
            </StyledLi>
            <StyledLi>
            DOM 트리 중 하나가 수정될 때마다 모든 DOM을 뒤지고, 수정할 걸 찾고, 싹 수정을 한다면?
            필요없는 연산이 너무 많이 일어나게 된다.  그래서 등장한 게 가상돔 이다. 가상돔은 메모리 상에서 돌아가는 가짜 DOM입니다.
            </StyledLi>
            <StyledLi>
            가상돔의 동작 방식: **기존 DOM과 어떤 행동 후 새로 그린 DOM(가상 돔에 올라갔다고 표현합니다)을 비교해서 정말 바뀐 부분만 갈아끼워준다.
            </StyledLi>
            <StyledLi>
                <img src={lifecycle} alt="라이프사이클 이미지" />
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