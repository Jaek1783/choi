import React from "react";
import {useMediaQuery} from "react-responsive";
import styles from '../../css/text.module.css';
import ppt from '../../img/skills/ppt.png';
import excel from '../../img/skills/excel.png';
const Icon_item01 = ()=>{
    const default_items = [
        {id:1, img:ppt, alt:'파워포인트', name:'Power Point'},
        {id:2, img:excel, alt:'엑셀', name:'Excel'}
    ];
    const isPc = useMediaQuery({
        query:"(min-width:800px)"
        });
    return (
            <div className={isPc? "skill_container" : ''}>
            {default_items.map(default_item=>{
                return(
                    <dl className="skill_item" key={default_item.id}>
                        <dt className="design_item icon_container">
                            <p className="icon"><img src={default_item.img} alt={default_item.alt} /></p>
                        </dt>
                        <dd className={["skill_name ", styles.text].join('')}>
                            <p>{default_item.name}</p>
                        </dd>
                    </dl>
                )
            })}
            </div>
    )
}; export default Icon_item01;