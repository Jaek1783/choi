import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
const Website_icon_item = (props)=>{
    const isPc = useMediaQuery({
        query: "(min-width:1240px)"
    });
    return(
        <>
            {props.contents.map(web=>{
                return(
                    <>
                    {isPc ? 
                    <li className="websiteStyle" key={web.name}>
                        <Container>
                            <dt><img src={web.img} alt={web.name+"이미지"} /></dt>
                            <dd>{web.name}</dd>
                            <button onClick={(e)=>{
                        window.open(web.adress,'_blank');
                        }}>함께 공부하기</button>
                        </Container>    
                    </li> : 
                        <li className="MwebsiteStyle" key={web.name}>
                        <Container>
                            <dt><img src={web.img} alt={web.name+"이미지"} /></dt>
                            <dd>{web.name}</dd>
                            <button onClick={(e)=>{
                        window.open(web.adress,'_blank');
                        }}>함께 공부하기</button>
                        </Container>    
                    </li>
                    }
                    
                    </>
                )
    })}
        </>
    )
}; export default Website_icon_item;

const Container = styled.dl`
padding:1rem;
margin:0 auto;
border-radius:15px;
background-color:#131361;
color:#fff;
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