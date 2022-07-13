import React from "react";
import styles from '../../css/text.module.css';
import bootstrap from '../../img/skills/bootstrap.png';
import github from '../../img/skills/github.png';
import react_icon from '../../img/skills/react.png';
import visualcode from '../../img/skills/visualcode.png';
import aws from '../../img/skills/aws.png';
import firebase from '../../img/skills/firebase.png';
import redux from '../../img/skills/redux.png';
import styledComponent from '../../img/skills/styled.png';
import styled from 'styled-components';
const Icon_item03 = ()=>{
    const coding_items = [
        {id:1, img:visualcode, alt:'비주얼스튜디오코드', name:'VS Code'},
        {id:2, img:bootstrap, alt:'부트스트랩', name:'Bootstrap'},
        {id:3, img:github, alt:'깃허브', name:'Github'},
        {id:4, img:react_icon, alt:'리액트', name:'React'},
        {id:5, img:redux, alt:'리덕스', name:'Redux'},
        {id:6, img:styledComponent, alt:'스타일드컴포넌트', name:'Styled-Component'},
        {id:7, img:aws, alt:'aws', name:'Amazone S3'},
        {id:8, img:firebase, alt:'파이어베이스', name:'Firebase'},
    ];
    return (
        <div className="skillContainer">  
            <div className="skillIcon">
                {coding_items.map(coding_item=>{
                    return(
                        <dl className="skillItem" key={coding_item.id}>
                            <dt>
                                <p><img src={coding_item.img} alt={coding_item.alt} /></p>
                            </dt>
                            <dd className={styles.text}>
                                <p>{coding_item.name}</p>
                            </dd>
                        </dl>
                    )
                })}
            </div>
            {/* <div>
            <p className="text">VsCode를 이용하여, 코딩작업합니다.</p>
            <p className="text">부트스트랩을 이용하여, 가벼운 디자인코딩 가능합니다.</p>
            <p className="text">Github를 이용하여 코드관리 중이며, Git과 Branch를 이용하여, 협업 가능합니다.</p>
            <p className="text">React 프레임워크를 통해 웹페이지 제작 및 배포 가능합니다.</p>
            <p className="text">React-Redux의 useSelector, useDispatch를 이용하여, 리듀서, 액션전달을 통해 전역 스토어에 있는 props를 전달합니다. </p>
            <p className="text">React-Router-Dom의 Routes, Route,  NavLink, Link, Navigate를 이용하여 SPA(Single Page Applcation)을 제작합니다. </p>
            <p className="text">Styled-Components를 이용하여, 좀 더 빠르고 깔끔하며, 복잡한 클래스네이밍에서 벗어납니다.</p>
            <p className="text">프론트엔드의 서버리스를 보안하기 위해 firebase와 연동하여 서버를 구축합니다. </p>
        </div> */}
        </div>
    )
}; export default Icon_item03;
