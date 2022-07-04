import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Green = ()=>{
const data = useSelector((state)=>state.Academy.green);
    return(
        <>
        {data.map(green_item=>{
            return(
                <GreenStyled key={green_item.alt} className="_item">
                    <img src={green_item.Green_item} alt={green_item.alt+'수료증'} />
                </GreenStyled>
            )
        })}
        </>
    )
}; export default Green;

const GreenStyled = styled.div`
    width:20rem;
    padding:1rem;
    margin:0 auto;
    transform:translateX(-623.25px);
`;