import React , {useState, useRef} from "react";
import next from '../../../img/icon/next.png';
import prev from '../../../img/icon/prev.png';
const Academy_icon_item = (props) => {
    const btnClick = ()=>{
            const certificates_items = document.querySelectorAll('.Certificates_item');      
            if(num !== 5){
                setNum((nextNum.current+=1));
                certificates_items[props.item.id-1].classList.add('transition');
                certificates_items[props.item.id-1].style.marginLeft=num*-672+'px';
            }
            if(num == 4){
                setNum((nextNum.current=1));
                setTimeout(()=>{
                    certificates_items[props.item.id-1].classList.remove('transition');
                    certificates_items[props.item.id-1].style.marginLeft=0+'px';
                },300);
            }
        }         
    const [num, setNum] = useState(1);
    const nextNum = useRef(1);
    return(
        <div className="Certificates">
            <div className="flex Certificates_item">{props.item.certificates}</div>
            <button className="next_btn"><img src={next} alt="다음" onClick={()=>{   
                btnClick();
            }}/></button>
        </div>
    )
}; export default Academy_icon_item;