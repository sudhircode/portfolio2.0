import React, { useEffect, useRef } from 'react';
import style from '../css component/Header.module.css';

function Header({ toggleColors }) {
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const handleToggle = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.toggle(style.slide);
      toggleColors();
    }
  };

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle(style.show);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#head');
      if (window.scrollY > 0) {
        header.classList.add(style.scrolled);
      } else {
        header.classList.remove(style.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="head" className={style.head} >
        <h1>&nbsp;*<span><a href="#" title="My Name 😎">Sudhir </a></span></h1>
        <nav>
          <ul>
            <li><a href="#summary" title="about-me" >About</a></li>
            <li><a href="#" title="Resume">Resume</a></li>
            <li><a href="#portfolio" title="Portfolio" >Portfolio</a></li>
            <li><a href="#footer" title="Contact">Contact</a></li>
          </ul>
          <div id={style.slide} title="Click To Change Website Color"
            onClick={handleToggle} >
            <div id={style.slider} ref={buttonRef}></div>
          </div>
          <div id={style.menu}  title="Click For Show Menu" onClick={openMenu}>&#9776;</div>
        </nav>
      </header>
      <div ref={menuRef} className={style.menu_bar}>
        <ul>
          <li><a href="#summary" title="about-me">About</a></li>
          <li><a href="#" title="Resume">Resume</a></li>
          <li><a href="#portfolio" title="Portfolio">Portfolio</a></li>
          <li><a href="#footer" title="Contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
