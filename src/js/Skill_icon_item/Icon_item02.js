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
        <div className="skillContainer">
            <div className="skillIcon">
                {design_items.map(design_item=>{
                    return(
                        <dl className="skillItem" key={design_item.id}>
                            <dt>
                                <p><img src={design_item.img} alt={design_item.alt} /></p>
                            </dt>
                            <dd className={styles.text}>
                                <p>{design_item.name}</p>
                            </dd>
                        </dl>
                    )
                })}
            </div>
        {/* <div>
            <p className="text">일러스트레이터를 활용하여 아이콘제작이 가능합니다.</p>
            <p className="text">포토샵을 이용하여 웹디자인 제작이 가능합니다.</p>
            <p className="text">xd를 공부하며, 웹디자인을 좀더 수월하게 작업합니다.</p>
        </div> */}
        </div>    
    )
}; export default Icon_item02;