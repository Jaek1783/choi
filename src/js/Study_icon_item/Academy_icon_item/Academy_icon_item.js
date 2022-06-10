import React , {useState,useEffect, useRef} from "react";
import next from '../../../img/icon/next.png';
import prev from '../../../img/icon/prev.png';
const Academy_icon_item = (props) => {
    const [num, setNum] = useState(1);
    const ref = useRef(1);
    const nextBtnClick = ()=>{
            const certificates_items = document.querySelectorAll('.Certificates_item'); 
            const _items = document.querySelectorAll('._item>img');
            console.log(_items[props.item.id-1].offsetWidth);
            if(props.item.id-1 !== 2){
                if(0< num+1 < 4){
                    setNum((ref.current +=1));
                    certificates_items[props.item.id-1].classList.add('transition');
                    certificates_items[props.item.id-1].style.marginLeft=-(num+1)*623.25+'px';
                }
                if(num+1 === 5){
                    setNum((ref.current = 1));
                    setTimeout(()=>{
                        certificates_items[props.item.id-1].classList.remove('transition');
                    certificates_items[props.item.id-1].style.marginLeft=-623.25+'px';
                    },300);
                }
            }
        }                           
    const prevBtnClick = ()=>{
            const certificates_items = document.querySelectorAll('.Certificates_item');
            if(props.item.id-1 !== 2){
                if(0 < num-1 < 4){
                    setNum((ref.current -=1));
                    certificates_items[props.item.id-1].classList.add('transition');
                    certificates_items[props.item.id-1].style.marginLeft=-(num-1)*623.25+'px';
                }
                if(num-1 === 0){
                    setNum((ref.current = 4));
                    setTimeout(()=>{
                        certificates_items[props.item.id-1].classList.remove('transition');
                        certificates_items[props.item.id-1].style.marginLeft=-2493+'px';
                    },300);
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