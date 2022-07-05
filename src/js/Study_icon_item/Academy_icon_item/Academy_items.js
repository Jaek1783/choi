import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Academy_items = (props) => {
    const data = useSelector((state)=>state.Academy.items);
    return (
        <Container>
            <ul ref={props.slideRef}>
                {data.map(list=>{
                    return(
                        <li key={list.id}>
                            <p>{list.item}</p>
                        </li>
                    )
                })}
            </ul>
        </Container>
    );
};

export default Academy_items;

const Container = styled.div`
background-color:#131361;
border-radius:15px;
width:340px;
overflow:hidden;
padding:1rem 0;
margin:0 auto;
margin-top:3rem;
    ul{
        width:600%;
        display:flex;
    }
    li{
        width:300px;
        padding:0 20px;
        color:#fff;
    }
`;