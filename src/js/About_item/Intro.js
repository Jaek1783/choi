import styles from '../../css/text.module.css';
import styled from 'styled-components';
import me from './../../img/about/me.jpg';
import {useMediaQuery} from 'react-responsive';
const AboutT = ()=>{
        const isPc = useMediaQuery ({
        query : "(min-width : 1100px)"
        });
    return(
            <StyledWrap id="about" className={isPc? "pcIntro": "mIntro"}>
                <h2 className={styles.subText}>나에 대하여</h2>
                    <div><img src={me} alt="나의 사진" /></div>
                    <dl>
                        <dt>
                            <p className={styles.subText}>About Me</p>
                            <p className={styles.textKr}> 안녕하세요<br/>신입 개발자 최재근입니다.</p>
                            <p className={styles.textKr}> 제 닉네임은 지렁이형입니다.</p>
                        </dt>
                        <dd>
                        <p className={styles.textKr}>다른 사람의 시선보다</p>
                        <p className={styles.textKr}>꿈을 향해 꿈틀대는 개발자로</p>
                        <p className={styles.textKr}>성장하고 싶어</p>
                        <p className={styles.textKr}> 지렁이형이라고 지었습니다.</p>
                            <p className={styles.textKr}>잘 부탁 드립니다.</p>
                        </dd>
                    </dl>
            </StyledWrap>           
    )
};

export default AboutT;

const StyledWrap = styled.div`
    div{
        width:200px;
    }
    dl{ width:300px;
        color:#fff;
        border:1px solid #ccc;
        border-radius:15px;
    }
    dt{
        color:#000;
        background-color:#fff;
        padding:2rem 0 ;
        border-radius:15px 15px 0 0;
    }
    dd{
        padding:.5rem;
        background-color:#131361;
        border-radius:0 0 15px 15px;
    }
`;
