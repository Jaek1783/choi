import Intro from "./Intro";
import Why from "./Why";
import {Routes, Route} from "react-router-dom";
const AboutT = ()=>{
    return(
            <Routes>
                <Route path="1" element={<Intro/>}/>
                <Route path="2" element={<Why/>}/>
            </Routes>          
    )
};

export default AboutT;
