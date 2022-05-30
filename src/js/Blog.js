import styles from '../css/text.module.css';
import {useMediaQuery} from "react-responsive";
import '../css/blog.css';
import back01 from '../img/blog/back01.png';
import back02 from '../img/blog/back02.png';
import back03 from '../img/blog/back03.png';
import back04 from '../img/blog/back04.png';
import back05 from '../img/blog/back05.png';
import back06 from '../img/blog/back06.png';
import back07 from '../img/blog/back07.png';
function Blog(){
    const blog = [
        {date: '2022.03.01 ~ 2022.03 27', text: '0ssaem.com 포트폴리오 제작', img:back01, id:1},
        {date: '2022.03.15 ~ 2022.03.18', text: 'Tetris-Game 포트폴리오 제작', img:back02, id:2},
        {date: '2022.03.25 ~ 2022.03.28', text: '부트스트랩을 이용한 자기소개 포트폴리오 제작', img:back03, id:3},
        {date: '2022.03.30 ~ 2022.04.01', text: '부산여행', img:back04, id:4},
        {date: '2022.04.05 ~ 2022.04.18', text: '리액트로 만드는 Choi-portfolio 포트폴리오 제작', img:back05, id:5},
        {date: '2022.04.24 ~ 2022.04.28', text: '리액트로 만드는 CRUD 프론트엔드 게시판 제작', img:back06, id:6},
        {date: '2022.05.01 ~ 2022.05.25', text: '리액트로 만드는 샐러드 판매 사이트 제작', img:back07, id:7}
    ];
    const isPc = useMediaQuery({
        query:"(min-width:800px)"
        });
        const isMobile = useMediaQuery({
            query:"(max-width:799px)"
            });                
    return(
        <div>         
            <div id="blog" className="wrap">
                <h2>
                </h2>
                <ul className={isPc? "blogBox":"blogMBox"}>
                {blog.map(content=>{
                    return(
                        <li className={styles.text} key={content.id}>
                            <dl className="date date01 odd">
                                <dt>
                                    <p>{content.date}</p>
                                    <p className={styles.textKr}>{content.text}</p>
                                </dt>
                                <dd><img src={content.img} alt="디자인이미지"/></dd>
                            </dl>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}export default Blog;