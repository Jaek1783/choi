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
        <div className="skillContainer">
             <div className="skillIcon">
            {default_items.map(default_item=>{
                return(
                    <dl className="skillItem" key={default_item.id}>
                        <dt>
                            <p><img src={default_item.img} alt={default_item.alt} /></p>
                        </dt>
                        <dd className={ styles.text}>
                            <p>{default_item.name}</p>
                        </dd>
                    </dl>
                )
            })}
            </div>
        {/* <div>
            <p className="text">파워포인트를 활용하여 표, 그래프, 프로젝트 발표 등으로 활용 가능합니다.</p>
            <p className="text">컴퓨터활용능력 1급 자격증 보유로 엑셀을 활용하여 표, 그래프, 통계 등에 활용이 가능하며,</p>
            <p className="text">함수를 활용하여 좀 더 쉽고 간편하며, 빠르게 업무를 작업할 수 있습니다.</p>
        </div> */}
        </div>
    )
}; export default Icon_item01;