import React from "react";
import '../../css/study.css';
import { useSelector } from "react-redux";
import styled from "styled-components";
const Youtube = ()=>{
    const data = useSelector((state)=>state.Youtube.Items)
return(
    <Container>
        {data.map(youtube_item=>{
            return(
                <ItemStyled key={youtube_item.name}>
                    <dl>
                        <dt> <img src={youtube_item.icon} alt={youtube_item.name+'아이콘'} onClick={()=>{
                        window.open(youtube_item.adress,'_blank');}}/></dt>
                        <dd>{youtube_item.name}</dd>
                    </dl>
                </ItemStyled>
            )
        })}
    </Container>
)
}; export default Youtube;

const Container = styled.ul`
width:50%;
margin:0 auto;
display:flex;
justify-content:center;
flex-wrap: wrap;
`;
const ItemStyled = styled.li`
    padding-right:1rem;
    dl{
        width:10rem;
        text-align:center;
        margin-bottom:3rem;
    }
    img{
        width:100px;
        cursor:pointer;
    }
    dt{
        border:1px solid #ccc;
        border-radius:15px 15px 0 0;
        padding:1rem 0;
    }
    dd{ padding: 1rem 0 2rem;
        background-color:#131361;
        color:#fff;
        border-radius:0 0 15px 15px;
    }
`;