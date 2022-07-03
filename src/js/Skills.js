import React from "react";
import {useMediaQuery} from "react-responsive";
import { Routes, Route} from "react-router-dom";
import '../css/skills.css';
import styles from '../css/text.module.css';
import Default from './Skill_icon_item/Icon_item01';
import Design from './Skill_icon_item/Icon_item02';
import Cording from './Skill_icon_item/Icon_item03';
const Skills = ()=>{
    return(
        <div>
            <Routes>
                <Route path="1" element={<Default/>}/>
                <Route path="2" element={<Design/>}/>
                <Route path="3" element={<Cording/>}/>
            </Routes>
        </div>
    )
}; export default Skills;