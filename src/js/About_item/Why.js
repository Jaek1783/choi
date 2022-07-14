import styles from '../../css/text.module.css';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
const AboutT = ()=>{
    const isPc = useMediaQuery({
        query:"(min-width:1155px)"
    })
    const isTablet = useMediaQuery({
        query:"(max-width:1154px) and (min-width:960px)"
    });
    const TabletOrMobile = isTablet ? "TWrap" : "MWrap";
    return(
            <div id="why" className={isPc? "pcWrap" : TabletOrMobile}>
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
            </div>           
    )
};

export default AboutT;

