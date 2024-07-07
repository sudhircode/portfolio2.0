import React from 'react'
import Style from "../css component/Intro.module.css"
export default function Intro() {
    return <>
        <main className={Style.main}>
            <div className={Style.intro_main}>
                <div className={Style.box1}>
                    <a href="https://www.linkedin.com/in/kumarsudhir2023/" target='_blank' className={Style.span}>LINKDIN</a>
                    <a href="https://www.linkedin.com/in/kumarsudhir2023/" target='_blank' className={Style.h2}>INFO</a>
                </div>
                <div className={Style.box1} style={{ textAlign: 'end' }}>
                    <a href="https://www.instagram.com/redum01_x_sudhir/" target='_blank' className={Style.span}>INSTGRAM</a>
                    <a href="https://www.instagram.com/redum01_x_sudhir/" target='_blank' className={Style.h2}>WORKS</a>
                </div>
            </div>
            <div className={Style.my_name}>
                <h2>Hi, I'm Sudhir Kumar</h2>
                <span>Full Stack Developer 🚀🌍</span>
            </div>
            <div className={Style.intro_about}>
                <div className={`${Style.box} ${Style.img}`} onClick={() => window.open('https://sudhircode.github.io/portfolio/', '_blank')}>
                    Previous Portfolio
                </div>
                <div className={`${Style.box} ${Style.img2}`} style={{ textAlign: 'end' }} onClick={() => window.open('https://sudhircode.github.io/portfolio/', '_blank')}>
                    Latest Work
                </div>
            </div>
        </main >
    </>
}
