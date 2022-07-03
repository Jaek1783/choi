import styles from '../../css/text.module.css';
import styled from 'styled-components';
import me from './../../img/about/me.jpg';
const AboutT = ()=>{
    return(
            <StyledWrap id="about" className="wrap">
                <h2 className={styles.subText}>나에 대하여</h2>
                    <div><img src={me} alt="나의 사진" /></div>
                    <dl>
                        <dt>
                            <p className={styles.subText}>About Me</p>
                            <p className={styles.textKr}> 안녕하세요<br/>신입 개발자 최재근입니다.</p>
                            <p className={styles.textKr}> 제 닉네임은 지렁이형입니다.</p>
                            <p className={styles.textKr}> 다른 사람의 시선보다<br/>꿈을 향해 나아가는<br/>개발자로 성장하고 싶어<br/>지렁이형이라고 지었습니다.</p>
                        </dt>
                        <dd>
                            <p className={styles.textKr}> 다른 사람의 시선보다<br/>꿈을 향해 나아가는<br/>성공한 개발자로</p>
                            <p className={styles.textKr}> 성장 시켜주실 회사를 찾고 있습니다.</p>
                            <p className={styles.textKr}> 감사합니다.</p>
                        </dd>
                    </dl>
            </StyledWrap>           
    )
};

export default AboutT;

const StyledWrap = styled.div`
width:50%;
margin:5rem auto;
display:flex;
border-radius: 15px;
box-sizing: border-box;
text-align:center;
    div{
        width:200px;
        padding-right:5rem;
    }
    dl{ width:300px;
        height:348px;
        color:#fff;
        border:1px solid #ccc;
        border-radius:15px;
    }
    dt{
        color:#000;
        background-color:#fff;
        padding-bottom:2rem;
        border-radius:15px 15px 0 0;
    }
    dd{
        padding:.5rem;
        background-color:#131361;
        border-radius:0 0 15px 15px;
    }
`;
