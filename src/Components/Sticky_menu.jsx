import React, { useEffect, useRef } from 'react';
import card1 from "../assets/card6.jpg";
import style from "../css component/Sticky_menu.module.css";
import Skill_card from './Skill_card';
import Portfolio from './Portfolio';
import Journey from './Journey';

export default function Sticky_menu() {
    const menuRef = useRef(null);
    let timeout;
    const makeSmall = () => {
        if (menuRef.current) {
            menuRef.current.classList.add(style.small);
        }
    };
    const makeLarge = () => {
        if (menuRef.current) {
            menuRef.current.classList.remove(style.small);
            setTimeout(makeSmall, 4000);
        }
    };
    useEffect(() => {
        const checkVisibility = () => {
            if (menuRef.current) {
                const rect = menuRef.current.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                if (isVisible) {
                    timeout = setTimeout(makeSmall, 3000);
                    return () => clearTimeout(timeout);
                }
            }
        };
        window.addEventListener('scroll', checkVisibility);
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    const cards = [
        {
            img: card1,
            name: "JAVA",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#1565c0" d="M32.1,25.1c1.8-0.4,3.2,0.7,3.2,2c0,2.9-4,5.6-4,5.6s6.2-0.7,6.2-5.5 C37.5,24.1,34.5,23.3,32.1,25.1z M29.1,27.4c0,0,1.9-1.4,2.5-1.9c-4.8,1-15.6,1.1-15.6,0.3c0-0.8,3.5-1.6,3.5-1.6 s-7.8-0.1-7.8,2.2S21.9,28.9,29.1,27.4z"></path><path fill="#1565c0" d="M27.9,29.6c-4.5,1.5-12.8,1-10.4-1c-1.2,0-3,1-3,1.9c0,1.9,9,3.3,15.6,0.6L27.9,29.6z"></path><path fill="#1565c0" d="M18.7,32.7c-1.6,0-2.7,1.1-2.7,1.8c0,2.4,9.8,2.6,13.6,0.2l-2.5-1.6C24.3,34.4,17,34.6,18.7,32.7z"></path><path fill="#1565c0" d="M36.3,36.6c0-0.9-1.1-1.4-1.4-1.6c2.2,5.4-22.3,5-22.3,1.8c0-0.7,1.8-1.4,3.5-1.1l-1.4-0.8 C11.3,34.4,9,35.8,9,37C9,42.5,36.3,42.3,36.3,36.6z"></path><path fill="#1565c0" d="M39,38.6c-4.1,4.1-14.7,5.6-25.2,3.1C24.3,46.2,39,43.6,39,38.6z"></path><g><path fill="#f44336" d="M23.6,24.9c-1-1.6-1.7-2.9-2.7-5.5c-1.7-4.2,10.3-8.1,5.4-15.4c2.1,5.1-7.6,8.2-8.5,12.5 C17.1,20.4,23.6,24.9,23.6,24.9z"></path><path fill="#f44336" d="M24.1,18.7c0.9,2.3,3.9,4,0.7,7c6-2.2,3.5-5.6,2.2-7.8c-1.7-2.6,5.8-6.8,5.8-6.8 C27.4,11.7,22.9,14.3,24.1,18.7z"></path></g>
            </svg>
        },
        {
            img: card1,
            name: "java",
            icon: ""
        },
        {
            img: card1,
            name: "",
            icon: "json"
        },

    ];
    return (
        <div className={style.container}>
            <div className={style.skill}>
                <Portfolio />
                {/* <Journey />
                <Skill_card cards={cards} /> */}
            </div>
            <div
                className={style.menu}
                ref={menuRef} onMouseEnter={makeLarge} onClick={makeLarge}>
                <div className={style.scrollable_div}>
                    <div>PORT FOLIO</div>
                    <div>JOURNEY</div>
                    <div>SKILL</div>
                    <div>SOCIAL MEDIA</div>
                </div>
            </div>
        </div>
    );
}
