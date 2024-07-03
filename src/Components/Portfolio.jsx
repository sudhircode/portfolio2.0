import React, { useEffect } from 'react';
import styles from '../css component/Portfolio.module.css';

export default function Portfolio() {
  const portfolio = [
    {
      name: "College Website",
      link: "",
      img: "https://picsum.photos/536/354",
      bgcolor: "rgb(98, 45, 33)"
    },
    {
      name: "College Website",
      link: "",
      img: "https://picsum.photos/536/354",
      bgcolor: "rgb(158, 152, 130)"
    },
    {
      name: "College Website",
      link: "",
      img: "https://picsum.photos/536/354",
      bgcolor: "rgb(107, 144, 101)"
    },
    {
      name: "College Website",
      link: "",
      img: "https://picsum.photos/536/354",
      bgcolor: "rgb(135, 180, 178)"
    },
    {
      name: "College Website",
      link: "",
      img: "https://picsum.photos/536/354",
      bgcolor: "rgb(188, 130, 147)"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      portfolio.forEach((_, index) => {
        const sticky = document.querySelector(`.${styles[`sticky${index + 1}`]}`);
        if (!sticky) return;
        const rect = sticky.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.top > windowHeight / 2) {
          sticky.style.width = `${75 + ((windowHeight / 2 - rect.top) / (windowHeight / 2) * 10)}vw`;
        } else if (rect.top <= windowHeight / 2 && rect.top > 0) {
          sticky.style.width = `${85 + ((windowHeight / 2 - rect.top) / (windowHeight / 2) * 10)}vw`;
        } else if (rect.top > windowHeight) {
          sticky.style.width = '75vw';
        } else {
          sticky.style.width = '95vw';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [portfolio]);

  return (
    <div className={styles.main_portfolio}>
      <h1 className={styles.name}>Portfolio</h1>
      {portfolio.map((item, index) => (
        <div style={{backgroundColor: item.bgcolor,}} key={index} className={`${styles.sticky} ${styles[`sticky${index + 1}`]}`}>
          <h2>{item.name}</h2>
          <h4><a href={item.link}>{item.link || 'www'}</a></h4>
          <div className={styles.stWidth} style={{ backgroundImage: 'url("https://picsum.photos/536/354")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',cursor:'pointer' }}  >
            {item.img && <img src={item.img} alt={item.name}/>}
          </div>
        </div>
      ))}
    </div>
  );
}  