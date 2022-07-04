import React from "react";
import { Routes,Route } from "react-router-dom";
import '../css/study.css';
import Academy from './Study_icon_item/Academy';
import Youtube from "./Study_icon_item/Youtube";
import Website from "./Study_icon_item/Website";
const Practice =()=>{
    return(
        <Routes>
             <Route path="1" element={<Youtube/>}/>
             <Route path="2" element={<Academy/>}/>
             <Route path="3" element={<Website/>}/>
        </Routes>
    )
}; export default Practice;