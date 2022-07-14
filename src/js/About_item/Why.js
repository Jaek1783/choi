import styles from '../../css/text.module.css';
import styled from 'styled-components';
const AboutT = ()=>{
    return(
            <StyledWrap id="about" className="wrap">
                <h2 className={styles.subText}>지원동기</h2>
                <dl>
                    <dt>Q. 개발직군에 지원한 동기는 무엇인가요?</dt>
                    <dd><span>열심히</span> 살았습니다. <span>재밌게</span> 살았습니다.</dd>
                    <dd>이제는 <span>결과를 남기며</span> 살고 싶습니다.</dd>
                    <dd>이제는 <span>개발자로</span> 성공하고 싶습니다.</dd>
                    <dd>신입이지만, 신입이기에</dd>
                    <dd>배움의 열정과 바짝든 군기,</dd>
                    <dd>성실함이 준비되어 있습니다.</dd>
                    <dd>회사의 성장과 함께 <span>성장</span>하고</dd>
                    <dd>회사의 성공과 함께 <span>성공하</span>는</dd>
                    <dd>개발자가 되<span>고싶습니다.</span></dd>
                    <dd>감사합니다.</dd>
                </dl>
            </StyledWrap>           
    )
};

export default AboutT;

const StyledWrap = styled.div`
width:80%;
border:5px solid #131361;
margin:5rem auto;
border-radius: 15px;
box-sizing: border-box;
text-align:center;

    dl{
        padding:2rem;
    }
    dt{
        padding-bottom:2rem;
        font-size:20px;
        font-weight:bold;
    }
    dd{
        padding:.5rem;
        span{
            font-weight:bold;
            font-size:1.5rem;
        }
    }
`;
