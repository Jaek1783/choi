import React , {useState, useRef, useEffect} from "react";
import '../../css/study.css';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CreateGreen, CreateInflearn, CreateSparta } from "../../Reducers/Academy";
import academy01 from './../../img/study/academy/green.jpg';
import academy02 from './../../img/study/academy/inflearn.png';
import academy03 from './../../img/study/academy/sparta.png';
import next from './../../img/icon/next.png';
import prev from './../../img/icon/prev.png';

import Academy_items from "./Academy_icon_item/Academy_items";

const Academy = ()=>{
    const items = [
        {id:0, title:academy01, alt : "그린컴퓨터",dispatch:CreateGreen()},
        {id:1, title:academy02, alt : "인프런",dispatch:CreateInflearn()},
        {id:2, title:academy03, alt : "스파르타코딩클럽",dispatch:CreateSparta()},
    ];
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const numRef = useRef(0);
    const slideRef = useRef(null);
    const containerRef = useRef(null);
    const itemsRef = useRef(null);
    const slideCount = 4;
    const nextBtnClick = ()=>{
            if(numRef.current < slideCount){
                setNum(numRef.current += 1);
                slideRef.current.classList.add('transition');
                slideRef.current.style.marginLeft=-(numRef.current)*340+'px';
            }
            if(numRef.current === slideCount){
                setTimeout(()=>{
                    setNum(numRef.current = 0);
                    slideRef.current.classList.remove('transition');
                    slideRef.current.style.marginLeft=0+'px';
                },200);
            }
    }                        
    const prevBtnClick = ()=>{
                if(numRef.current === 0){
                    setTimeout(()=>{
                        setNum(numRef.current = 3);
                        slideRef.current.classList.remove('transition');
                        slideRef.current.style.marginLeft=-1020+'px';
                    },200);
                }
                if(numRef.current < slideCount){
                    setNum(numRef.current -= 1);
                    slideRef.current.classList.add('transition');
                    slideRef.current.style.marginLeft=-(numRef.current)*340+'px';
                } 
        }              
    useEffect(()=>{
       setTimeout(()=>{
        console.log(containerRef);
        containerRef.current.childNodes[0].classList.add('active');
       },100); 
    },[containerRef]);
return(
    <Container>
        <ModalItems ref={containerRef}>
            {items.map(list=>{
                return(
                    <li key={list.id} ref={itemsRef} onClick={()=>{
                        dispatch(list.dispatch);
                        const containerLangth = containerRef.current.childElementCount;
                        for(let i= 0; i<containerLangth; i++){
                            if(i === list.id){
                                containerRef.current.childNodes[i].classList.add('active');
                            }
                            else{
                                containerRef.current.childNodes[i].classList.remove('active');
                            }
                            
                        } 
                    }}>
                        <img src={list.title} alt={list.alt} />
                    </li>
                )
            })}
        </ModalItems>
        <Academy_items slideRef={slideRef}/>
        <BtnStyled className="prev_btn"><img src={prev} alt="이전" onClick={()=>{
            prevBtnClick();
        }}/>
        </BtnStyled>
        <BtnStyled className="next_btn"><img src={next} alt="다음" onClick={(e)=>{   
            nextBtnClick();           
        }}/>
        </BtnStyled>
    </Container>
)
}; export default Academy;

const Container = styled.div`
position:relative;
margin:0 auto;
`;
const ModalItems = styled.ul`
width:70%;
margin:0 auto;
display:flex;
li{
    width:300px;
    border:1px solid #ccc;
    padding:1rem;
    border-radius:15px;
    cursor:pointer;
}
li:not(:last-child){
    margin-right:1rem;
}

`;
const BtnStyled = styled.button`
z-index:1001;
position:absolute;
top:50%;
    width:30px;
    height:30px;
`;
const StyledDiv = styled.div`
width:90%;
color:#fff;
position:relative;
overflow: hidden;
margin:0 auto
    div{
        width:600%;
    }
`;