import React from 'react';
import { useSelector } from 'react-redux';
// import '../css/portfolio.css';
// import styles from '../css/text.module.css';
// import {useMediaQuery} from "react-responsive";
function Portfolio(){
    // const isPc = useMediaQuery({
    //     query:"(min-width:1820px)"
    //     });
    // const isTablet = useMediaQuery({
    //     query:"(max-width:1819px) and (min-width: 1400px)" 
    // });
    // const isMobile = useMediaQuery({
    //     query:"(max-width:1399px)"
    //     });
    // const Tbox_Mbox = isTablet? 'Tbox':'Mbox';
    // const cardT_cardM = isTablet? 'card cardT':'card cardM';
    const data = useSelector((state) => state.Pofol.Card);
    return(
        <div>          
             {/* <div id="portfolio" className="wrap">
                 <h2></h2>
                 <ul className={isPc? 'box':Tbox_Mbox}>
                     {data.map(card=>{
                         return(
                        <li key={card.id}  className={isPc? "card cardPc":cardT_cardM} onClick={()=>window.open(card.adress,'_blank')}>
                            <p className='cardTitle'>{card.title}</p>
                                <dl className={styles.text}>
                                    <dt className={styles.subText}>{card.title}</dt>
                                    <dd>
                                        <p className="spanText">Detail : </p>
                                        <ul>
                                            <li className="detail">{card.detail01}</li>
                                            <li className="detail">{card.detail02}</li>
                                            <li className="detail">{card.detail03}</li>
                                        </ul>
                                        <p className="spanText">adress : </p>
                                        <p className="detail">{card.adress}</p>
                                    </dd>
                                </dl>
                                <p className="img">
                                    {card.main}
                                </p>
                        </li>
                         )
                     })}
                 </ul>
                </div>    */}
        </div>
    )
}export default Portfolio;