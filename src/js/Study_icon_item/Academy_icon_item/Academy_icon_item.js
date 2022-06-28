import React , {useState,useEffect, useRef} from "react";
import next from '../../../img/icon/next.png';
import prev from '../../../img/icon/prev.png';
const Academy_icon_item = (props) => {
    const [num, setNum] = useState(1);
    const numRef = useRef(1);
    const slideRef = useRef(null);
    const nextBtnClick = ()=>{
            if(props.item.id-1 !== 2){
                if(0< num+1 < 4){
                    setNum((numRef.current +=1));
                    slideRef.current.classList.add('transition');
                    slideRef.current.style.marginLeft=-(num+1)*623.25+'px';
                }
                if(num+1 === 5){
                    setNum((numRef.current = 1));
                    setTimeout(()=>{
                        slideRef.current.classList.remove('transition');
                        slideRef.current.style.marginLeft=-623.25+'px';
                    },300);
                }
            }
        }                           
    const prevBtnClick = ()=>{
            if(props.item.id-1 !== 2){
                if(0 < num-1 < 4){
                    setNum((numRef.current -=1));
                    slideRef.current.classList.add('transition');
                    slideRef.current.style.marginLeft=-(num-1)*623.25+'px';
                }
                if(num-1 === 0){
                    setNum((numRef.current = 4));
                    setTimeout(()=>{
                        slideRef.current.classList.remove('transition');
                        slideRef.current.style.marginLeft=-2493+'px';
                    },300);
                }
            }
            
        }              
                 
    return(
        <div className="Certificates">
            <div className={'flex Certificates_item'} ref={slideRef}>{props.item.certificates}</div>
            <button className="prev_btn"><img src={prev} alt="이전" onClick={()=>{
                prevBtnClick();
            }}/></button>
            <button className="next_btn"><img src={next} alt="다음" onClick={(e)=>{   
                nextBtnClick();           
            }}/></button>
        </div>
    )
}; export default Academy_icon_item;