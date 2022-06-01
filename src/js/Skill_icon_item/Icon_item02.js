import React from "react";
import {useMediaQuery} from "react-responsive";
import styles from '../../css/text.module.css';
import illustrator from '../../img/skills/illustrator.png';
import photoshop from '../../img/skills/photoshop.png';
import xd from '../../img/skills/xd.png';
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
            <div className={isPc? "skill_container" : ''}>
                {design_items.map(design_item=>{
                    return(
                        <dl className="skill_item" key={design_item.id}>
                            <dt className="design_item icon_container">
                                <p className="icon"><img src={design_item.img} alt={design_item.alt} /></p>
                            </dt>
                            <dd className={["skill_name ", styles.text].join('')}>
                                <p>{design_item.name}</p>
                            </dd>
                        </dl>
                    )
                })}
            </div>
    )
}; export default Icon_item02;