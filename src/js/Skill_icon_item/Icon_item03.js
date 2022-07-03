import React from "react";
import {useMediaQuery} from "react-responsive";
import styles from '../../css/text.module.css';
import bootstrap from '../../img/skills/bootstrap.png';
import github from '../../img/skills/github.png';
import react_icon from '../../img/skills/react.png';
import visualcode from '../../img/skills/visualcode.png';
import styled from 'styled-components';
const Icon_item03 = ()=>{
    const coding_items = [
        {id:6, img:visualcode, alt:'비주얼스튜디오코드', name:'VS Code'},
        {id:7, img:bootstrap, alt:'부트스트랩', name:'Bootstrap'},
        {id:8, img:github, alt:'깃허브', name:'Github'},
        {id:9, img:react_icon, alt:'리액트', name:'React'} 
    ];
    const isPc = useMediaQuery({
        query:"(min-width:800px)"
        });
    return (
        <SkillContainer>  

            <div className={isPc? "skill_container_pc" : 'skill_container_mobile'}>
                {coding_items.map(coding_item=>{
                    return(
                        <SkillStyled key={coding_item.id}>
                            <dt className="design_item icon_container">
                                <p className="icon"><img src={coding_item.img} alt={coding_item.alt} /></p>
                            </dt>
                            <dd className={["skill_name ", styles.text].join('')}>
                                <p>{coding_item.name}</p>
                            </dd>
                        </SkillStyled>
                    )
                })}
            </div>
            <div>
            <p className="text">VsCode를 이용하여, 코딩작업합니다.</p>
            <p className="text">부트스트랩을 이용하여, 가벼운 디자인코딩 가능합니다.</p>
            <p className="text">Github를 이용하여 코드관리 중이며, Git과 Branch를 이용하여, 협업 가능합니다.</p>
            <p className="text">리액트를 활용하여, 웹개발 스터딩 중입니다.</p>
        </div>
        </SkillContainer>
    )
}; export default Icon_item03;

const SkillContainer = styled.div`
display:flex;
flex-direction: column;
p.text{
    padding:1rem;
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
:hover{
    background-color: #2e2e8d;
}
`;