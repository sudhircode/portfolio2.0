import React from 'react';
// import style from "../Style.module.css";

export default function Begin_card() {
    const divs = new Array(10).fill(null).map((_, index) => (
        <img src={bg} alt=''  loading='eager' key={index} style={{width:'30vw', height:'auto', objectFit:"cover",objectPosition:'center'}} />
    ));

    return (
        <div>
            {divs}
        </div>
    );
}
