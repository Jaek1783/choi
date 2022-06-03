import React from "react";
import styles from '../../css/text.module.css';
const Blog_icon_item = (props)=>{
    return(
        <>
        {props.blog.map(content=>{
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
        </>
    )
}; export default Blog_icon_item;