import React from 'react';
import style from "../css component/Skill_card.module.css";

export default function Skill_card({ cards }) {
  return (
    <div className={style.skill_main}>
      {cards.map((card, index) => (
        <div className={style.card} key={index}>
          <div className={style.flipper}>
            <div className={style.front}>
              <img src={card.img} alt={card.name} />
            </div>
            <div className={style.back}>
              {card.icon}
              <h3>{card.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
