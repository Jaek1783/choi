import React from 'react';
import styled from 'styled-components';

const Es6= () => {
    return (
            <StyledTable>
                <thead>
                    <tr>
                        <th>버전</th>
                        <th>출시<br/>년도</th>
                        <th>특징</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ES1</td>
                        <td>1997</td>
                        <td>초판</td>
                    </tr>
                    <tr>
                        <td>ES2</td>
                        <td>1998</td>
                        <td>ISO/IEC 16262 국제 표준과 동일한 규격을 적용</td>
                    </tr>
                    <tr>
                        <td>ES3</td>
                        <td>1999</td>
                        <td>정규 표현식, try…catch 예외 처리</td>
                    </tr>
                    <tr>
                        <td>ES5</td>
                        <td>2009</td>
                        <td>HTML5와 함께 출현한 표준안. JSON, strict mode, 접근자 프로퍼티(getter, setter), 향상된 배열 조작 기능(forEach, map, filter, reduce, some, every)</td>
                    </tr>
                    <tr>
                        <td>ES6</td>
                        <td>2015</td>
                        <td>let, const, class, 화살표 함수, 템플릿 리터럴, 디스트럭처링 할당, spread 문법, rest 파라미터, Symbol, Promise, Map/Set, iterator/generator, module import/export</td>
                    </tr>
                </tbody>
            </StyledTable>
    );
};

export default Es6;
const StyledTable = styled.table`
    width:100%;
    margin:0 auto;
    text-align:left;
    border-collapse: collapse;
    th, td{
        border: 1px solid #131361;
        padding:1rem;
    }
    `;