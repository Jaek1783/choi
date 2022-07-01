import styles from '../css/text.module.css';
import styled from 'styled-components';
import '../css/about.css';
const AboutT = ()=>{
    return(
            <StyledWrap id="about" className="wrap">
            <h2 className={styles.subText}>card about me
            </h2>
                <dl className="boxPc">
                    <dt className="title">
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
width:30rem;
margin:10rem auto 0;
// position:absolute;
// top:25%;
// left:33.3%;
background-color: #131361;
border-radius: 15px;
box-sizing: border-box;
transition: 0.2s ease-in-out;
animation-duration: 1s;
animation-name: slideIn;
animation-direction: alternate;
animation-iteration-count: infinite;
text-align:center;
`;