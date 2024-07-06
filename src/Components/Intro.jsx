import React from 'react'
import Style from "../css component/Intro.module.css"
export default function Intro() {
    return <>
        <main className={Style.main}>
            <div className={Style.intro_main}>
                <div className={Style.box1}>
                    <a href="#" className={Style.span}>LINKDIN</a>
                    <a href="#" className={Style.h2}>INFO</a>
                </div>
                <div className={Style.box1} style={{ textAlign: 'end' }}>
                    <a href="#" className={Style.span}>INSTGRAM</a>
                    <a href="#" className={Style.h2}>WORKS</a>
                </div>
            </div>
            <div className={Style.my_name}>
                <h2>Hi, I'm Sudhir Kumar</h2>
                <span>Full Stack Developer 🚀🌍</span>
            </div>
            <div className={Style.intro_about}>
                <div className={`${Style.box} ${Style.img}`} >
                    <a href="https://sudhircode.github.io/portfolio/" target="" className={`${Style.span} ${Style.hove}`}>Previous Portfolio</a>
                </div>
                <div className={`${Style.box} ${Style.img2}`} style={{ textAlign: 'end' }}>
                    <span className={Style}></span>
                    <a href="#" className={Style.span}>Latest Work</a>
                    <h3 className={Style.span}> </h3>
                </div>
            </div>
        </main >
    </>
}
