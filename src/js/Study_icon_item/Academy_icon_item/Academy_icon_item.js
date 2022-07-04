import React , {useState,useEffect, useRef} from "react";
import styled from "styled-components";
import next from '../../../img/icon/next.png';
import prev from '../../../img/icon/prev.png';
const Academy_icon_item = (props) => {
    const [num, setNum] = useState(0);
    const numRef = useRef(0);
    const slideRef = useRef(null);
    const slideCount = 4;
    const nextBtnClick = ()=>{
        if(props.item.id-1 !== 2){
            if(numRef.current < slideCount){
                setNum(numRef.current += 1);
                console.log(numRef.current, "입니다.");
                slideRef.current.classList.add('transition');
                slideRef.current.style.marginLeft=-(numRef.current)*623.25+'px';
            }
            if(numRef.current === slideCount){
                setTimeout(()=>{
                    setNum(numRef.current = 0);
                    slideRef.current.classList.remove('transition');
                    slideRef.current.style.marginLeft=0+'px';
                },200);
                
            }
        }
    }                        
    const prevBtnClick = ()=>{
            if(props.item.id-1 !== 2){
                if(numRef.current === 0){
                    setTimeout(()=>{
                        setNum(numRef.current = 3);
                        slideRef.current.classList.remove('transition');
                        slideRef.current.style.marginLeft=-1869.75+'px';
                    },200);
                }
                if(numRef.current < slideCount){
                    setNum(numRef.current -= 1);
                    console.log(numRef.current, "입니다.");
                    slideRef.current.classList.add('transition');
                    slideRef.current.style.marginLeft=-(numRef.current)*623.25+'px';
                }
               
            }
            
        }              
                 
    return(
        <div className="Certificates">
            <div className={'flex Certificates_item'} ref={slideRef}>{props.item.certificates}</div>
            <BtnStyled className="prev_btn"><img src={prev} alt="이전" onClick={()=>{
                prevBtnClick();
            }}/>
            </BtnStyled>
            <BtnStyled className="next_btn"><img src={next} alt="다음" onClick={(e)=>{   
                nextBtnClick();           
            }}/></BtnStyled>
        </div>
    )
}; export default Academy_icon_item;

const BtnStyled = styled.button`
    width:50px;
    height:50px;
`;