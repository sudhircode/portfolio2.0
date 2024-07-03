import React from 'react'
import style from "../css component/My_skills.module.css";
import Skill_card from './Skill_card';
export default function My_skills() {
    return <>
        <main style={{
            fontSize: 'clamp(1.15rem, 5vw, 3rem)', fontFamily: 'Kdam Thmor Pro", sans-serif'
        }}>
            <Skill_card />
        </main>
    </>
}
