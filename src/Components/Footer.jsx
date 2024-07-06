import React from 'react'
import style from "../css component/footer.module.css";
import gif from "../assets/tree.jpg"
export default function Footer() {
  return (
    <>
      <div className={style.footer} id='footer'>
        <div className={style.right}>
          <h3 className={style.wait} >WHAT ARE YOU WAITING FOR? LET'S DO THIS.</h3>
          <input type="text" placeholder="WHAT'S YOUR NAME " />
          <input type="text" placeholder="AND YOUR EMAIL I'D" />
          <textarea name="" id="" placeholder='HOW CAN I HELP !' />
          <button>SEND IT 📩 </button>
        </div>
        <div className={style.left}>
          <div className={style.upper}>
            <img src={gif} alt="animated gif" className={style.gif} />
            <span>
              <h2> Made By</h2>
              <h2 className={style.madeby}> Sudhir Kumar</h2>
            </span>
          </div>
          <div className={style.lower}>
            <div>IF YOU HAVE GOT A IDEA THAT NEEDS TO BE TOLD, PLEASE GET IN TOUCH!</div>
            <div className={style.address}>
              <span> COPY ADDRESS</span>
              <span> COPY EMAIL</span>
            </div>
            <p>I CAN'T WAIT TO HEAR FROM YOU</p>
          </div>
        </div>

      </div>
    </>
  )
}
