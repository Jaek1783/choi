import styles from '../../css/text.module.css';
import styled from 'styled-components';
const AboutT = ()=>{
    return(
            <StyledWrap id="about" className="wrap">
                <h2 className={styles.subText}>지원동기</h2>
                <dl>
                    <dt>Q. 개발직군에 지원한 동기는?</dt>
                    <dd>2018년 우연한 계기로 국비지원 퍼블리셔 실무자 과정을 배우게 되었습니다.</dd>
                    <dd>코딩은 저에게 새로운 세계를 보여주었습니다.</dd>
                    <dd>재미있었고, 흥미로웠고, 계속해서 공부하고 싶은 마음이 생겼습니다.</dd>
                    <dd>중간에 다른 일들을 해보았지만, 마음은 개발자로 향하고 있었습니다.</dd>
                    <dd>지금은 개발자로 성공하고 싶어 꾸준히 공부하며 역량을 향상시키고 있습니다.</dd>
                    <dd>꼭 당사에서 성공한 개발자가 되고 싶습니다.</dd>
                    <dd> 감사합니다.</dd>
                </dl>
            </StyledWrap>           
    )
};

export default AboutT;

const StyledWrap = styled.div`
width:40%;
border:1px solid #ccc;
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
    }
`;
