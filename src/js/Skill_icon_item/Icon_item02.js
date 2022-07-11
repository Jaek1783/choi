import React from "react";
import {useMediaQuery} from "react-responsive";
import styles from '../../css/text.module.css';
import illustrator from '../../img/skills/illustrator.png';
import photoshop from '../../img/skills/photoshop.png';
import xd from '../../img/skills/xd.png';
import styled from 'styled-components';
const Icon_item02 = ()=>{
    const design_items = [
        {id:3, img:illustrator, alt:'일러스트레이터', name:'Illusrtrator'},
        {id:4, img:photoshop, alt:'포토샵', name:'Photoshop'},
        {id:5, img:xd, alt:'엑스디', name:'Xd'},
    ];
    const isPc = useMediaQuery({
        query:"(min-width:800px)"
        });
    return (
        <SkillContainer>
            <div className="skill_icon">
                {design_items.map(design_item=>{
                    return(
                        <SkillStyled key={design_item.id}>
                            <dt>
                                <p><img src={design_item.img} alt={design_item.alt} /></p>
                            </dt>
                            <dd className={styles.text}>
                                <p>{design_item.name}</p>
                            </dd>
                        </SkillStyled>
                    )
                })}
            </div>
        <div>
            <p className="text">일러스트레이터를 활용하여 아이콘제작이 가능합니다.</p>
            <p className="text">포토샵을 이용하여 웹디자인 제작이 가능합니다.</p>
            <p className="text">xd를 공부하며, 웹디자인을 좀더 수월하게 작업합니다.</p>
        </div>
        </SkillContainer>    
    )
}; export default Icon_item02;

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