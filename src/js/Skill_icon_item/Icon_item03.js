import React from "react";
import {useMediaQuery} from "react-responsive";
import styles from '../../css/text.module.css';
import bootstrap from '../../img/skills/bootstrap.png';
import github from '../../img/skills/github.png';
import react_icon from '../../img/skills/react.png';
import visualcode from '../../img/skills/visualcode.png';
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
            <div className={isPc? "skill_container" : ''}>
                {coding_items.map(coding_item=>{
                    return(
                        <dl className="skill_item" key={coding_item.id}>
                            <dt className="design_item icon_container">
                                <p className="icon"><img src={coding_item.img} alt={coding_item.alt} /></p>
                            </dt>
                            <dd className={["skill_name ", styles.text].join('')}>
                                <p>{coding_item.name}</p>
                            </dd>
                        </dl>
                    )
                })}
            </div>
    )
}; export default Icon_item03;