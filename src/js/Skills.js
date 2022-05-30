import React from "react";
import {useMediaQuery} from "react-responsive";
import '../css/skills.css';
import styles from '../css/text.module.css';
import Icon01 from './Icon_item01';
import Icon02 from './Icon_item02';
import Icon03 from './Icon_item03';
const Skills = ()=>{
    const items = [
        {title:'Default', content:<Icon01/>},
        {title:'Design', content:<Icon02/>},
        {title:'Coding', content:<Icon03/>}
    ];
    const isPc = useMediaQuery({
        query:"(min-width:800px)"
        });
    const renderItems = items.map(item=>{
        return(
            <div className={isPc?
            "skills_container":"skills_mobile"} key={item.title}>
            <h3 className={["skills_title ", styles.subText].join('')}>{item.title} Skills</h3>
                {item.content}
            </div>
        )
    });
    return(
        <div className="skills_container_box">
            {renderItems}
        </div>
    )
}; export default Skills;