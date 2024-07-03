import React from 'react'
import Style from '../Style.module.css';
import bg from "../assets/download (1).png";
import Header from './Header';
import Intro from './Intro';
import About_me from './About_me';
import About_my_work from './About_my_work';
import Sticky_menu from './Sticky_menu';
import Footer from './Footer';
export default function Home() {
    return <>
        <main style={{ paddingBottom: '30px' }}>
            <div style={{ paddingBottom: '50px', position: 'relative',zIndex:'1' }}>
                <img src={bg} loading='eager' width="100%" height="100%" alt="background img" className={Style.eager} />
                <Header />
                <Intro />
            </div>
            <About_me />
            <Sticky_menu />
            <About_my_work />
            <Footer />
        </main>
    </>
}
