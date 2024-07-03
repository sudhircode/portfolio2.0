import React from 'react'
import Style from './Style.module.css';
import Begin_anim from './Components/Begin_anim'
import { useState, useEffect } from 'react';
import Home from './Components/Home';

export default function App() {

  // const [showFirstComponent, setShowFirstComponent] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowFirstComponent(false);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return <>
    <main style={{ backgroundColor: '#192928' }}>
      <Begin_anim />
      {/* {showFirstComponent && <Begin_anim />} */}
      {/* {!showFirstComponent && <Home />} */}
    </main>
  </>
}
