import React from "react";
import styled from "styled-components";
const Website_icon_item = (props)=>{
    return(
        <>
            {props.contents.map(web=>{
                return(
                    <Container key={web.name}>
                        <dl>
                            <dt><img src={web.img} alt={web.name+"이미지"} /></dt>
                            <dd>{web.name}</dd>
                            <button onClick={(e)=>{
                        window.open(web.adress,'_blank');
                        }}>함께 공부하기</button>
                        </dl>    
                    </Container>
                )
    })}
        </>
    )
}; export default Website_icon_item;

const Container = styled.li`
width:45%;
padding:.5rem;
margin:0 auto;
text-align:center;
    dl{
        padding:1rem;
        margin:0 auto;
        border-radius:15px;
        background-color:#131361;
        color:#fff;
    }
    dt{
        padding:1rem;
    }
    dd{
        padding-bottom:1rem;
    }
    button{
        border:1px solid #ccc;
        border-radius:15px;
        background-color:#fff;
        padding:.5rem;
    }
`;