import React from 'react'
import style from "../css component/About_me.module.css";
export default function About_me() {
    return <>
        <div className={style.me}>
            <div><h2> INDIA — BASED </h2></div>
            <div><h2>JAVA FULL <span>STACK</span> </h2></div>
            <div><h2> WEB DEVELOPER  </h2> </div>
            <div><h2> & DESIGNER  </h2></div>
        </div>
        <h4>MAKING MEANINGFUL WEBSITE & APPLICATION THAT NEED TO BE TOLD (BY HUMANS, NOT AI)</h4>
        <h3>MORE ABOUT ME </h3>
        <div className={style.span}></div>
    </>
}
