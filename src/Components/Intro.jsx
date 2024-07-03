import React from 'react'
import Style from "../css component/Intro.module.css"
import img from "../assets/download (1).png";
export default function Intro() {
    return <>
        <main className={Style.main}>
            <div className={Style.intro_main}>
                <div className={Style.box}>
                    <span className={Style.span}>LINKDIN</span>
                    <h2 className={Style.h2}> INFO</h2>
                </div>
                <div className={Style.box} style={{textAlign:'end'}}>
                    <span className={Style.span} >INSTGRAM</span>
                    <h2 className={Style.h2}>WORKS </h2>
                </div>
            </div>
            <div className={Style.my_name}>
                <h2>Hi, I'm Sudhir Kumar</h2>
                <span>Full Stack Developer 🚀🌍</span>
            </div>
            <div className={Style.intro_about}>
                <div className={`${Style.box} ${Style.img}`} >
                    <h3 className={Style.span}>Prevoius Portfolio </h3>
                </div>
                <div className={`${Style.box} ${Style.img}`} style={{textAlign:'end'}}>
                    <span className={Style}></span>
                    <h3 className={Style.span}> Latest Work</h3>
                </div>
            </div>
        </main >
    </>
}
