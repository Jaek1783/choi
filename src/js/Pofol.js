import React from 'react';
import {Routes, Route} from "react-router-dom";
import Cafe from "./Portfolio_item/Cafe";
import Tetris from "./Portfolio_item/Tetris";
import Salad from './Portfolio_item/salad';
import Bucket from './Portfolio_item/Bucket';
import Quiz from './Portfolio_item/Quiz';
function Portfolio(){
    return(
            <Routes>
                <Route path="1" element={<Cafe/>}/>
                <Route path="2" element={<Tetris/>}/>
                <Route path="3" element={<Salad/>}/>
                <Route path="4" element={<Bucket/>}/>
                <Route path="5" element={<Quiz/>}/>
            </Routes>          
    )
}export default Portfolio;