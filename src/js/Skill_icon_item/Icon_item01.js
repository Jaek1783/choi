import React from "react";
import styles from '../../css/text.module.css';
import ppt from '../../img/skills/ppt.png';
import excel from '../../img/skills/excel.png';
import styled from 'styled-components';
const Icon_item01 = ()=>{
    const default_items = [
        {id:1, img:ppt, alt:'파워포인트', name:'Power Point'},
        {id:2, img:excel, alt:'엑셀', name:'Excel'}
    ];
    return (
        <SkillContainer>
             <div className="skill_icon">
            {default_items.map(default_item=>{
                return(
                    <SkillStyled key={default_item.id}>
                        <dt>
                            <p><img src={default_item.img} alt={default_item.alt} /></p>
                        </dt>
                        <dd className={ styles.text}>
                            <p>{default_item.name}</p>
                        </dd>
                    </SkillStyled>
                )
            })}
            </div>
        <div>
            <p className="text">파워포인트를 활용하여 표, 그래프, 프로젝트 발표 등으로 활용 가능합니다.</p>
            <p className="text">컴퓨터활용능력 1급 자격증 보유로 엑셀을 활용하여 표, 그래프, 통계 등에 활용이 가능하며,</p>
            <p className="text">함수를 활용하여 좀 더 쉽고 간편하며, 빠르게 업무를 작업할 수 있습니다.</p>
        </div>
        </SkillContainer>
    )
}; export default Icon_item01;

const SkillContainer = styled.div`
display:flex;
flex-direction: column;
p.text{
    padding:1rem;
}
.skill_icon{
    display:flex;
}
`;
const SkillStyled = styled.dl`
border-radius: 15px;
background-color: #131361;
box-sizing: border-box;
padding:2rem;
margin-right:1rem;
position: relative;
margin-bottom:1rem;
transition: 0.2s ease-in-out;
animation-duration: 1s;
animation-name: rotateY;
animation-direction: alternate;
box-shadow: 5px 11px 30px rgba(0,0,0,0.3);
color:#fff;
font-size:20px;
:hover{
    background-color: #2e2e8d;
}
dt{
    width:5rem;
}
`;