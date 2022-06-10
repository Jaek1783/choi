import React , {useState,useEffect, useRef} from "react";
import next from '../../../img/icon/next.png';
import prev from '../../../img/icon/prev.png';
const Academy_icon_item = (props) => {
    const [num, setNum] = useState(0);
    const ref = useRef(0);
    const nextBtnClick = ()=>{
            const certificates_items = document.querySelectorAll('.Certificates_item'); 
            if(props.item.id-1 === 0){
                if(0< num+1 < 4){
                    setNum((ref.current +=1));
                    console.log(num+1);
                    certificates_items[props.item.id-1].classList.add('transition');
                    certificates_items[props.item.id-1].style.marginLeft=-(num+1)*672+'px';
                    const prev = document.querySelector('.prev_btn');
                    prev.style.display='block';
                }
                if(num+1 === 3){    
                    const next = document.querySelector('.next_btn');
                    next.style.display='none';      
                }
            }
            if(props.item.id-1 === 1){
                setNum((ref.current += 1));
                console.log(num+1);
                certificates_items[props.item.id-1].classList.add('transition');
                certificates_items[props.item.id-1].style.marginLeft=-(num+1)*672+'px';
                const prev = document.querySelector('.prev_btn');
                prev.style.display='block';
                console.log(prev.style.display);
                console.log(prev.style);
            }

        }                           
    const prevBtnClick = ()=>{
            const certificates_items = document.querySelectorAll('.Certificates_item');
            if(props.item.id-1 === 0){
                if(0 < num-1 < 4){
                    setNum((ref.current -=1));
                    certificates_items[props.item.id-1].classList.add('transition');
                    certificates_items[props.item.id-1].style.marginLeft=-(num-1)*672+'px';
                    console.log(num-1);
                }
                if(num-1 === 0){    
                    const next = document.querySelector('.next_btn');
                    next.style.display='block';      
                    const prev = document.querySelector('.prev_btn');
                    prev.style.display='none';      
                }
            }
            
        }              
                 
    return(
        <div className="Certificates">
            <div className={'flex Certificates_item'}>{props.item.certificates}</div>
            <button className="prev_btn"><img src={prev} alt="이전" onClick={()=>{
                prevBtnClick();
            }}/></button>
            <button className="next_btn"><img src={next} alt="다음" onClick={(e)=>{   
                nextBtnClick();           
            }}/></button>
        </div>
    )
}; export default Academy_icon_item;