import React from 'react';
import {Routes, Route} from "react-router-dom";
import Cafe from "./Portfolio_item/Cafe";
import Tetris from "./Portfolio_item/Tetris";
import Bootstrap from './Portfolio_item/bootstrap';
import ReactCRUD from './Portfolio_item/ReactCRUD';
import ReduxCRUD from './Portfolio_item/ReduxCRUD';
import Salad from './Portfolio_item/salad';
import Bucket from './Portfolio_item/Bucket';
import Quiz from './Portfolio_item/Quiz';
function Portfolio(){
    return(
            <Routes>
                <Route path="1" element={<Cafe/>}/>
                <Route path="2" element={<Tetris/>}/>
                <Route path="3" element={<Bootstrap/>}/>
                <Route path="4" element={<ReactCRUD/>}/>
                <Route path="5" element={<ReduxCRUD/>}/>
                <Route path="6" element={<Salad/>}/>
                <Route path="7" element={<Bucket/>}/>
                <Route path="8" element={<Quiz/>}/>
            </Routes>          
    )
}export default Portfolio;