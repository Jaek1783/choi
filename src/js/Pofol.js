import React from 'react';
import {Routes, Route} from "react-router-dom";
import Cafe from "./Portfolio_item/Cafe";
import Tetris from "./Portfolio_item/Tetris";
function Portfolio(){
    return(
            <Routes>
                <Route path="1" element={<Cafe/>}/>
                <Route path="2" element={<Tetris/>}/>
            </Routes>          
    )
}export default Portfolio;