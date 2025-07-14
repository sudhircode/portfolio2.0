import React, { useEffect } from 'react';
import styles from '../css component/Portfolio.module.css';
import sudhircollege from "../assets/sudhircollege.png"

export default function Portfolio() {
  const portfolio = [


    {
      name: "Kaverijal",
      link: "http://kaverijal.com/",
      img: "https://picsum.photos/536/354",
      bgcolor: "#a6daf1"
    },
    {
      name: "Stonepedia Projects",
      link: "https://stonepediaprojects.com/",
      img: "https://picsum.photos/536/354",
      bgcolor: "#ffde59"
    },
    {
      name: "College Website",
      link: "https://sudhircode.github.io/sudhircollege/",
      img: sudhircollege,
      bgcolor: "#95caf4"
    },
    {
      name: "The Scan Centre",
      link: "https://thescancentre.in/",
      img: "https://picsum.photos/536/354",
      bgcolor: "#296de9"
    },
    {
      name: "Anjali Makeover Mantras",
      link: "https://anjalimakeovermantras.com/",
      img: "https://picsum.photos/536/354",
      bgcolor: "#f90e4e"
    },
    {
      name: "Upcoming Project",
      link: "",
      img: "https://picsum.photos/536/354",
      bgcolor: "#ffde59"
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
    <div className={styles.main_portfolio} id='portfolio'>
      <h1 className={styles.name}>Portfolio</h1>
      {portfolio.map((item, index) => (
        <div style={{ backgroundColor: item.bgcolor, }} key={index} className={`${styles.sticky} ${styles[`sticky${index + 1}`]}`}>
          <h2>{item.name}</h2>
          <h4><a href={item.link} target='_blank'>{item.link || 'www'}</a></h4>
          <div className={styles.stWidth} style={{ backgroundImage: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer' }}  >
            {item.img && <img src={item.img} alt={item.name} />}
          </div>
        </div>
      ))}
    </div>
  );
}  